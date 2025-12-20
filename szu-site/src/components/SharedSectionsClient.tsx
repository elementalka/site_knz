"use client";

import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import type { GalleryItem, StoryCard, TransparencyStep } from "@/types";

type SharedOverrides = Partial<{
  transparencyTimeline: TransparencyStep[];
  storyCards: StoryCard[];
  galleryItems: GalleryItem[];
  donorsCount: number;
}>;

type BaseData = {
  transparencyTimeline: TransparencyStep[];
  storyCards: StoryCard[];
  galleryItems: GalleryItem[];
  donorsCount: number;
  totalRaised: string;
  closedCount: number;
};

const STORAGE_KEY = "szu-admin-content";

function SectionShell({
  title,
  subtitle,
  action,
  children
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-shell flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="section-title text-xl sm:text-2xl font-semibold tracking-tight text-gradient">{title}</h2>
              {subtitle && <p className="mt-3 text-sm sm:text-base text-muted">{subtitle}</p>}
            </div>
            {action ? <div className="shrink-0">{action}</div> : null}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

export default function SharedSectionsClient({ baseData }: { baseData: BaseData }) {
  const [overrides, setOverrides] = useState<SharedOverrides>({});

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as SharedOverrides;
      setOverrides(parsed);
    } catch {
      setOverrides({});
    }
  }, []);

  const timelineItems = overrides.transparencyTimeline ?? baseData.transparencyTimeline;
  const stories = overrides.storyCards ?? baseData.storyCards;
  const gallery = overrides.galleryItems ?? baseData.galleryItems;
  const donors = overrides.donorsCount ?? baseData.donorsCount;

  const proofStats = [
    { label: "Зібрано всього", value: baseData.totalRaised },
    { label: "Закрито зборів", value: baseData.closedCount.toString() },
    { label: "Донаторів", value: `${donors}+` }
  ];

  return (
    <>
      <SectionShell title="Соц-докази" subtitle="Динаміка зборів та спільний результат волонтерів.">
        <div className="grid gap-4 sm:grid-cols-3">
          {proofStats.map(stat => (
            <div key={stat.label} className="card-wow group rounded-[1.6rem] backdrop-blur-sm p-5 text-center animate-fade-up">
              <div className="text-2xl font-semibold text-gradient">{stat.value}</div>
              <div className="mt-2 text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        title="Прозорість зборів"
        subtitle="Від запуску збору до звіту і подяки — весь шлях прозорий."
        action={
          <a
            href="/awards"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold tracking-wide transition active:scale-[0.99] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent/40 btn-ghost text-text"
          >
            Переглянути відзнаки →
          </a>
        }
      >
        <div className="grid gap-3">
          {timelineItems.map(item => (
            <div key={item.id} className="card-wow group rounded-[1.6rem] backdrop-blur-sm p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {item.imageUrl ? (
                  <div className="media-frame h-20 w-full shrink-0 sm:h-16 sm:w-24">
                    <img src={item.imageUrl} alt={item.title} className="media-image" loading="lazy" />
                  </div>
                ) : null}
                <div className="flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="text-xs text-muted">{new Date(item.date).toLocaleDateString("uk-UA")}</div>
                  </div>
                  {item.meta && <div className="mt-2 text-xs text-muted">{item.meta}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell title="Кому допомогли" subtitle="Короткі історії про передані ініціативи.">
        <div className="grid gap-4 lg:grid-cols-3">
          {stories.map(story => (
            <div key={story.id} className="card-wow group rounded-[1.6rem] backdrop-blur-sm p-5 animate-fade-up">
              {story.imageUrl && (
                <div className="media-frame mb-4 aspect-[4/3]">
                  <img src={story.imageUrl} alt={story.title} className="media-image" loading="lazy" />
                </div>
              )}
              <div className="flex items-center gap-2 text-xs text-muted">
                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] bg-accent/15 text-accent border-accent/25">
                  Історія
                </span>
                <span>{story.person}</span>
              </div>
              <div className="mt-3 text-sm font-semibold">{story.title}</div>
              <div className="mt-2 text-sm text-muted">{story.excerpt}</div>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell title="Галерея" subtitle="Фото та відео передач — з переглядом на весь екран.">
        <Gallery items={gallery} />
      </SectionShell>
    </>
  );
}
