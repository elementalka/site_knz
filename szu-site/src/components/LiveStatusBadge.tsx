"use client";

import { useEffect, useMemo, useState } from "react";
import { liveAnnouncements } from "@/content/live";

const FALLBACK_DURATION_MINUTES = 90;

const isLiveNow = (now: Date) => {
  return liveAnnouncements.some(item => {
    const startsAt = new Date(item.startsAt);
    const endsAt = item.endsAt ? new Date(item.endsAt) : new Date(startsAt.getTime() + FALLBACK_DURATION_MINUTES * 60_000);
    return now >= startsAt && now <= endsAt;
  });
};

export default function LiveStatusBadge() {
  const [live, setLive] = useState(() => isLiveNow(new Date()));

  useEffect(() => {
    const update = () => setLive(isLiveNow(new Date()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const label = useMemo(() => (live ? "🔴 В ефірі" : "Ефіри"), [live]);

  return (
    <span
      className={
        live
          ? "inline-flex items-center gap-2 rounded-full border border-rose-400/40 bg-rose-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-200"
          : "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted"
      }
    >
      <span className={live ? "h-2 w-2 animate-pulse rounded-full bg-rose-400" : "h-2 w-2 rounded-full bg-white/40"} />
      {label}
    </span>
  );
}
