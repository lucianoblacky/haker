"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

export default function CheckoutButtons() {
  const { items, totalEur } = useCart();
  const [loading, setLoading] = useState<"stripe" | "paypal" | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleStripeCheckout() {
    setError(null);
    setLoading("stripe");
    try {
      const res = await fetch("/api/checkout/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            name: i.name,
            priceCents: Math.round(i.priceEur * 100),
            quantity: i.quantity,
            image: i.image,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error ?? "Checkout failed");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed");
    } finally {
      setLoading(null);
    }
  }

  if (items.length === 0) {
    return (
      <p className="text-center text-pm-gray-text py-10">Your cart is empty.</p>
    );
  }

  return (
    <div className="space-y-3 max-w-md mx-auto">
      {/* Stripe — card payments, plus Apple Pay / Google Pay automatically
          surface inside Stripe Checkout on supported devices/browsers. */}
      <button
        onClick={handleStripeCheckout}
        disabled={loading !== null}
        className="pm-btn pm-btn-primary w-full disabled:opacity-60"
      >
        {loading === "stripe"
          ? "REDIRECTING..."
          : `PAY ${totalEur.toFixed(2)}€ WITH CARD / APPLE PAY / GOOGLE PAY`}
      </button>

      {/* PayPal */}
      {PAYPAL_CLIENT_ID ? (
        <PayPalButton />
      ) : (
        <button
          disabled
          title="Set NEXT_PUBLIC_PAYPAL_CLIENT_ID to enable PayPal"
          className="pm-btn w-full bg-[#ffc439] text-pm-near-black opacity-60"
        >
          PAY WITH PAYPAL
        </button>
      )}

      {error && <p className="text-sm text-red-600 text-center">{error}</p>}

      <p className="text-xs text-pm-gray-text text-center pt-2">
        Apple Pay and Google Pay appear automatically inside the card
        checkout on supported devices.
      </p>
    </div>
  );
}

function PayPalButton() {
  const { items, totalEur, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handlePayPal() {
    setError(null);
    setLoading(true);
    try {
      const createRes = await fetch("/api/checkout/paypal/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ totalEur }),
      });
      const order = await createRes.json();
      if (!createRes.ok || !order.id) throw new Error(order.error ?? "PayPal order failed");

      // In production, render the PayPal Buttons SDK (@paypal/react-paypal-js)
      // around this order id to collect approval, then call capture-order.
      // This stub demonstrates the server-side order lifecycle.
      console.log("PayPal order created", order.id, items);
      alert(
        "PayPal order created (sandbox demo). Wire up @paypal/react-paypal-js's PayPalButtons to complete approval + capture."
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "PayPal checkout failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={handlePayPal}
        disabled={loading}
        className="pm-btn w-full bg-[#ffc439] text-pm-near-black disabled:opacity-60"
      >
        {loading ? "PROCESSING..." : "PAY WITH PAYPAL"}
      </button>
      {error && <p className="text-sm text-red-600 text-center">{error}</p>}
    </>
  );
}
