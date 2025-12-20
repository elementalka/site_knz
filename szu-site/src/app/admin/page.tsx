"use client";

import { useEffect, useMemo, useState } from "react";
import { transparencyTimeline, storyCards, galleryItems, donorsCount } from "@/content/impact";

const STORAGE_KEY = "szu-admin-content";

export default function AdminPage() {
  const baseData = useMemo(
    () => ({
      transparencyTimeline,
      storyCards,
      galleryItems,
      donorsCount
    }),
    []
  );
  const [value, setValue] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    setValue(JSON.stringify(raw ? JSON.parse(raw) : baseData, null, 2));
  }, [baseData]);

  const handleSave = () => {
    try {
      const parsed = JSON.parse(value);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      setStatus("Зміни збережено в браузері. Оновіть сторінку для перевірки.");
    } catch {
      setStatus("Помилка JSON. Перевірте формат і повторіть спробу.");
    }
  };

  const handleReset = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setValue(JSON.stringify(baseData, null, 2));
    setStatus("Скинули до дефолтних даних.");
  };

  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-shell flex flex-col gap-6 sm:gap-8">
          <div>
            <h1 className="section-title text-xl sm:text-2xl font-semibold tracking-tight text-gradient">
              Легка адмінка (локальна)
            </h1>
            <p className="mt-3 text-sm sm:text-base text-muted">
              Редагуйте контент без редеплою — зміни зберігаються в LocalStorage.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="card-wow group rounded-[1.6rem] backdrop-blur-sm p-5">
              <div className="text-sm text-muted">
                Редагуйте JSON для блоків «Прозорість», «Історії», «Галерея» та кількості донаторів.
                Дані застосовуються на всіх сторінках для цієї сесії браузера.
              </div>
            </div>

            <div className="card-wow group rounded-[1.6rem] backdrop-blur-sm p-5">
              <textarea
                className="h-[420px] w-full rounded-xl border border-white/10 bg-bg/70 p-4 text-xs text-muted focus:outline-none focus:ring-2 focus:ring-accent/40"
                value={value}
                onChange={event => setValue(event.target.value)}
              />
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold tracking-wide transition active:scale-[0.99] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent/40 btn-primary text-bg"
                  onClick={handleSave}
                >
                  Зберегти
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold tracking-wide transition active:scale-[0.99] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent/40 btn-secondary text-text"
                  onClick={handleReset}
                >
                  Скинути
                </button>
              </div>
              {status && <div className="mt-3 text-xs text-muted">{status}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
