"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { MaterialSymbol } from "@/components/MaterialSymbol";

const inputClass =
  "w-full rounded-lg border-0 bg-surface-container-low px-4 py-4 text-on-surface placeholder:text-outline-variant transition-all focus:outline-none focus:ring-2 focus:ring-primary-fixed";

const labelClass =
  "font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json: { error?: string } = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(
          typeof json.error === "string" ? json.error : "Something went wrong.",
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      {status === "success" ? (
        <div
          className="rounded-lg border border-secondary-container/40 bg-secondary-container/15 px-4 py-3 text-sm text-on-secondary-container"
          role="status"
        >
          Thanks — your message is on its way. I&apos;ll get back to you soon.
        </div>
      ) : null}
      {status === "error" && errorMessage ? (
        <div
          className="rounded-lg border border-error/30 bg-error-container/15 px-4 py-3 text-sm text-on-error-container"
          role="alert"
        >
          {errorMessage}
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <label className={labelClass} htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="How shall we call you?"
            className={inputClass}
            onChange={() => {
              if (status === "success") setStatus("idle");
            }}
          />
        </div>
        <div className="space-y-2">
          <label className={labelClass} htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Where can we reach you?"
            className={inputClass}
            onChange={() => {
              if (status === "success") setStatus("idle");
            }}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className={labelClass} htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          placeholder="Tell us about your project or just say hello..."
          className={inputClass}
          onChange={() => {
            if (status === "success") setStatus("idle");
          }}
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-3 rounded-md bg-primary px-10 py-4 text-lg font-bold text-on-primary shadow-lg shadow-primary/20 transition-all hover:bg-primary-dim disabled:pointer-events-none disabled:opacity-70"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
          <MaterialSymbol name="send" className="text-xl" />
        </button>
      </div>
    </form>
  );
}
