"use client";

import Link from "next/link";
import { site } from "@/content/site";

export default function FloatingDonateButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={site.donate.href}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-5 py-3 text-sm font-semibold text-bg shadow-[0_18px_40px_rgba(45,212,191,0.35)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(45,212,191,0.45)]"
      >
        {site.donate.label}
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
