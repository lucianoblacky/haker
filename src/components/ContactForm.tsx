"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="text-center font-semibold py-10">
        Thank you! Your message has been sent — we&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full border border-pm-border rounded px-4 py-3 text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-pm-border rounded px-4 py-3 text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-pm-border rounded px-4 py-3 text-sm"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="pm-btn pm-btn-gold w-full disabled:opacity-60"
      >
        {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
