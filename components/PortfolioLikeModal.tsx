"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  open: boolean;
  notified: boolean;
  onClose: () => void;
};

export function PortfolioLikeModal({ open, notified, onClose }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (!open) {
      setAnimateIn(false);
      return;
    }
    const id = requestAnimationFrame(() => setAnimateIn(true));
    return () => cancelAnimationFrame(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    closeBtnRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="like-modal-title"
        className={`relative w-[90%] max-w-md transform rounded-xl bg-surface p-8 shadow-2xl transition-all duration-300 md:p-12 ${
          animateIn ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <span
              className="material-symbols-outlined text-4xl text-primary"
              style={{
                fontVariationSettings:
                  "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              }}
            >
              favorite
            </span>
          </div>
          <div className="space-y-2">
            <h2
              id="like-modal-title"
              className="font-headline text-2xl font-bold text-on-surface"
            >
              Thank you!
            </h2>
            <p className="text-base leading-relaxed text-on-surface-variant">
              {notified ? (
                <>Danny has been notified that you liked his portfolio.</>
              ) : (
                <>
                  Your appreciation means a lot. If you&apos;d like to connect,
                  you can{" "}
                  <a
                    href="mailto:hello@example.com"
                    className="font-semibold text-primary underline underline-offset-2"
                  >
                    email Danny
                  </a>
                  .
                </>
              )}
            </p>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="w-full rounded-full bg-primary py-3 font-headline font-bold text-on-primary transition-all hover:opacity-90 active:scale-95"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
