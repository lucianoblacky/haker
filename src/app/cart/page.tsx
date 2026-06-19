"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import CheckoutButtons from "@/components/CheckoutButtons";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalEur } = useCart();

  return (
    <section className="pm-section bg-pm-white">
      <div className="pm-container max-w-3xl">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-10">Your Cart</h1>

        {items.length === 0 ? (
          <p className="text-pm-gray-text">Your cart is currently empty.</p>
        ) : (
          <div className="space-y-4 mb-10">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border border-pm-fog rounded-lg p-4"
              >
                <div className="relative w-16 h-16 rounded bg-pm-fog overflow-hidden shrink-0">
                  {item.image && (
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-sm text-pm-gray-text">
                    {item.priceEur.toFixed(2)}€
                  </p>
                </div>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value || "1", 10))
                  }
                  className="w-16 border border-pm-border rounded px-2 py-1 text-sm text-center"
                />
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-xs text-pm-gray-text underline"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center pt-4 border-t border-pm-fog">
              <span className="font-bold text-lg">Total</span>
              <span className="font-extrabold text-lg">{totalEur.toFixed(2)}€</span>
            </div>
          </div>
        )}

        <CheckoutButtons />
      </div>
    </section>
  );
}
