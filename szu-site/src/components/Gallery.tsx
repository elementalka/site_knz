"use client";

import { useMemo, useState } from "react";
import type { GalleryItem } from "@/types";

export default function Gallery(props: { items: GalleryItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = useMemo(() => props.items.find(item => item.id === activeId) ?? null, [activeId, props.items]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {props.items.map(it => {
          const preview = it.previewUrl ?? it.url;
          return (
            <div
              key={it.id}
              className="card-wow group rounded-[1.6rem] backdrop-blur-sm overflow-hidden cursor-pointer"
              onClick={() => setActiveId(it.id)}
            >
              <div className="relative aspect-[4/3] bg-white/5">
                <img src={preview} alt={it.title} className="h-full w-full object-cover" loading="lazy" />
                {it.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-bg/70 px-3 py-1 text-xs font-semibold">▶ Відео</div>
                  </div>
                )}
              </div>
              <div className="p-4 text-sm font-semibold">{it.title}</div>
            </div>
          );
        })}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/80 px-4 py-10 backdrop-blur"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveId(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={event => event.stopPropagation()}>
            <button
              type="button"
              className="absolute -top-10 right-0 text-sm font-semibold text-white/80 hover:text-white transition"
              onClick={() => setActiveId(null)}
            >
              Закрити ✕
            </button>
            <div className="media-frame overflow-hidden">
              {active.type === "video" ? (
                <video className="h-full w-full" controls playsInline src={active.url} />
              ) : (
                <img src={active.url} alt={active.title} className="h-full w-full object-cover" />
              )}
            </div>
            <div className="mt-3 text-sm text-muted">{active.title}</div>
          </div>
        </div>
      )}
    </>
  );
}
