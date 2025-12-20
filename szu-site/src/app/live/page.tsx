import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import EmptyState from "@/components/EmptyState";
import Badge from "@/components/Badge";
import { liveAnnouncements } from "@/content/live";
import { site } from "@/content/site";
import { formatUA } from "@/lib/format";

const preview = liveAnnouncements.find(l => l.imageUrl)?.imageUrl;

export const metadata: Metadata = {
  title: `Ефіри — ${site.name}`,
  description: "Розклад прямих ефірів та посилання на трансляції.",
  openGraph: {
    title: `Ефіри — ${site.name}`,
    description: "Розклад прямих ефірів та посилання на трансляції.",
    images: preview ? [{ url: preview }] : undefined
  }
};

export default function LivePage() {
  const items = [...liveAnnouncements].sort((a, b) => +new Date(a.startsAt) - +new Date(b.startsAt));
  if (!items.length) return <Section title="Прямі ефіри"><EmptyState title="Немає запланованих ефірів" /></Section>;
  const now = new Date();

  const isLive = (startsAt: string, endsAt?: string) => {
    const start = new Date(startsAt);
    const end = endsAt ? new Date(endsAt) : new Date(start.getTime() + 90 * 60_000);
    return now >= start && now <= end;
  };

  return (
    <Section title="Прямі ефіри" subtitle="Оповіщення про ефіри в усіх соцмережах (ретрансляція).">
      <div className="grid gap-3">
        {items.map(l => (
          <Card key={l.id} className="p-5">
            {l.imageUrl && (
              <div className="media-frame mb-4 aspect-[16/9]">
                <img src={l.imageUrl} alt={l.title} className="media-image" loading="lazy" />
              </div>
            )}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-sm font-semibold">{l.title}</div>
                {l.note && <div className="mt-1 text-xs text-muted">{l.note}</div>}
              </div>
              <div className="flex items-center gap-2">
                {isLive(l.startsAt, l.endsAt) && <Badge tone="accent">🔴 В ефірі</Badge>}
                <Badge tone="accent">{l.platform.toUpperCase()}</Badge>
                <div className="text-xs text-muted">{formatUA(l.startsAt)}</div>
              </div>
            </div>
            <div className="mt-3">
              <a className="text-sm font-semibold text-accent hover:opacity-90 transition" href={l.url} target="_blank" rel="noreferrer">
                Перейти до ефіру →
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
