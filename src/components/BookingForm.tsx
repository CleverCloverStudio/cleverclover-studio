"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const PROJECT_TYPES = [
  "Video Production",
  "Audio Production",
  "Custom Song",
  "Music Licensing",
  "Website Design",
  "Package",
  "Not sure yet",
];

const BUDGETS = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000+",
  "Not sure yet",
];

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");

  function set(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/xjgplrbk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || "Not provided",
          project_type: form.projectType,
          budget_range: form.budget,
          project_description: form.message,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-5 rounded-2xl border border-gold/20 bg-dark-200 px-8 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-dark-300 text-gold">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2 className="font-display text-2xl font-bold text-cream">
          Message received.
        </h2>
        <p className="max-w-sm text-muted-light">
          We'll review your project and get back to you within 24 hours. Keep an eye on your inbox.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-gold hover:text-gold-light"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" required>
          <Input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(v) => set("name", v)}
            required
          />
        </Field>
        <Field label="Email" required>
          <Input
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={(v) => set("email", v)}
            required
          />
        </Field>
      </div>

      {/* Phone */}
      <Field label="Phone" hint="Optional">
        <Input
          type="tel"
          placeholder="(555) 000-0000"
          value={form.phone}
          onChange={(v) => set("phone", v)}
        />
      </Field>

      {/* Project type + Budget row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Project type" required>
          <Select
            value={form.projectType}
            onChange={(v) => set("projectType", v)}
            options={PROJECT_TYPES}
            placeholder="Select a service"
            required
          />
        </Field>
        <Field label="Budget range" required>
          <Select
            value={form.budget}
            onChange={(v) => set("budget", v)}
            options={BUDGETS}
            placeholder="Select a range"
            required
          />
        </Field>
      </div>

      {/* Message */}
      <Field label="Tell us about your project" required>
        <textarea
          placeholder="What are you trying to create? Who is it for? Any timeline or specific needs?"
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-white/10 bg-dark-200 px-4 py-3 text-sm text-cream placeholder-muted/60 outline-none transition-colors focus:border-gold/40 focus:bg-dark-300"
        />
      </Field>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-gold py-4 font-semibold text-dark transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_28px_rgba(201,168,76,0.35)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send project inquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-baseline gap-2">
        <label className="text-sm font-medium text-cream">{label}</label>
        {hint && <span className="text-xs text-muted">{hint}</span>}
        {required && <span className="ml-auto text-xs text-muted">Required</span>}
      </div>
      {children}
    </div>
  );
}

function Input({
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="w-full rounded-xl border border-white/10 bg-dark-200 px-4 py-3 text-sm text-cream placeholder-muted/60 outline-none transition-colors focus:border-gold/40 focus:bg-dark-300"
    />
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder,
  required,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="w-full rounded-xl border border-white/10 bg-dark-200 px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-gold/40 focus:bg-dark-300 [&>option]:bg-dark-200"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
