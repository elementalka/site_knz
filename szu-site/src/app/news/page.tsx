import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import EmptyState from "@/components/EmptyState";
import { news } from "@/content/news";
import { site } from "@/content/site";
import { formatUA } from "@/lib/format";

const preview = news.find(n => n.imageUrl)?.imageUrl;

export const metadata: Metadata = {
  title: `Новини — ${site.name}`,
  description: "Оновлення по волонтерських ініціативах, звіти та нові збори.",
  openGraph: {
    title: `Новини — ${site.name}`,
    description: "Оновлення по волонтерських ініціативах, звіти та нові збори.",
    images: preview ? [{ url: preview }] : undefined
  }
};

export default function NewsPage() {
  const items = [...news].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  if (!items.length) return <Section title="Новини"><EmptyState title="Новин поки немає" /></Section>;

  return (
    <Section title="Новини" subtitle="Оновлення про допомогу, передачі, звіти та збори.">
      <div className="grid gap-4 lg:grid-cols-2">
        {items.map(n => (
          <Card
            key={n.id}
            href={n.link}
            target={n.link ? "_blank" : undefined}
            rel={n.link ? "noreferrer" : undefined}
            className="p-6"
          >
            {n.imageUrl && (
              <div className="media-frame mb-4 aspect-[16/9]">
                <img src={n.imageUrl} alt={n.title} className="media-image" loading="lazy" />
              </div>
            )}
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs text-muted">{formatUA(n.date)}</div>
              <div className="flex flex-wrap gap-2">
                {(n.tags ?? []).map(t => <Badge key={t} tone="blue">{t}</Badge>)}
              </div>
            </div>
            <div className="mt-2 text-base font-semibold">{n.title}</div>
            <div className="mt-2 text-sm text-muted">{n.excerpt}</div>
            {n.link ? <span className="mt-4 inline-flex text-sm font-semibold text-accent">Детальніше →</span> : null}
          </Card>
        ))}
      </div>
    </Section>
  );
}
