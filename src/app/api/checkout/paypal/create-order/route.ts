import { NextRequest, NextResponse } from "next/server";

const PAYPAL_API_BASE =
  process.env.PAYPAL_ENV === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

async function getAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error(
      "PayPal is not configured. Set PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET."
    );
  }

  const res = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) {
    throw new Error("Failed to authenticate with PayPal");
  }

  const data = await res.json();
  return data.access_token as string;
}

export async function POST(req: NextRequest) {
  try {
    const { totalEur } = await req.json();

    if (!totalEur || typeof totalEur !== "number") {
      return NextResponse.json({ error: "Invalid totalEur" }, { status: 400 });
    }

    const accessToken = await getAccessToken();

    const res = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "EUR",
              value: totalEur.toFixed(2),
            },
          },
        ],
      }),
    });

    const order = await res.json();
    if (!res.ok) {
      console.error("[paypal] create order error", order);
      return NextResponse.json({ error: "Unable to create PayPal order" }, { status: 500 });
    }

    return NextResponse.json({ id: order.id });
  } catch (err) {
    console.error("[paypal] create order error", err);
    return NextResponse.json(
      { error: "Unable to create PayPal order" },
      { status: 500 }
    );
  }
}
