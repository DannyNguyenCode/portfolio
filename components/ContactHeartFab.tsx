"use client";

import { useState } from "react";

import { MaterialSymbol } from "@/components/MaterialSymbol";
import { PortfolioLikeModal } from "@/components/PortfolioLikeModal";
import { PORTFOLIO_LIKES_UPDATED_EVENT } from "@/lib/portfolio-likes-events";

export function ContactHeartFab() {
  const [filled, setFilled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [notified, setNotified] = useState(false);

  async function handleClick() {
    setFilled(true);
    let ok = false;
    try {
      const res = await fetch("/api/portfolio-like", { method: "POST" });
      const data = (await res.json()) as { notified?: boolean; count?: number };
      ok = data.notified === true;
      if (typeof data.count === "number") {
        window.dispatchEvent(
          new CustomEvent(PORTFOLIO_LIKES_UPDATED_EVENT, {
            detail: { count: data.count },
          }),
        );
      }
    } catch {
      ok = false;
    }
    setNotified(ok);
    setModalOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="fixed bottom-8 right-8 z-40 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-primary text-on-primary shadow-[0_20px_40px_rgba(55,45,36,0.06)] transition-transform hover:scale-110 active:scale-95"
        aria-label="Show appreciation for this portfolio"
      >
        <MaterialSymbol
          name="favorite"
          className={`transition-colors duration-200 ${
            filled ? "text-red-500" : ""
          }`}
          style={{
            fontVariationSettings: filled
              ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
              : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
          }}
        />
      </button>
      <PortfolioLikeModal
        open={modalOpen}
        notified={notified}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
