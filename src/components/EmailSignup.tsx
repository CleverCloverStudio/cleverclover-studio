"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await fetch("https://formspree.io/f/xjgplrbk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: "New product waitlist signup",
          source: "Products page — template waitlist",
        }),
      });
      if (!res.ok) throw new Error("Failed");
    } catch {
      // Show success regardless — don't block the user on a network error
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-sm font-semibold text-gold">
        ✦ You're on the list. We'll reach out when it drops.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 rounded-full border border-white/10 bg-dark-300 px-4 py-2.5 text-sm text-cream placeholder-muted/60 outline-none transition-colors focus:border-gold/40"
      />
      <button
        type="submit"
        className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-dark transition-all hover:bg-gold-light"
      >
        Notify me
      </button>
    </form>
  );
}
