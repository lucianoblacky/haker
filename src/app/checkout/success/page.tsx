import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order Confirmed",
};

export default function CheckoutSuccessPage() {
  return (
    <section className="pm-section bg-pm-white text-center">
      <div className="pm-container max-w-lg">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
          Thank you for your order!
        </h1>
        <p className="text-pm-gray-text mb-8">
          Your payment was successful. A confirmation email is on its way.
        </p>
        <Link href="/" className="pm-btn pm-btn-gold">
          BACK TO HOME
        </Link>
      </div>
    </section>
  );
}
