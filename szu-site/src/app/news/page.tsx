import Section from "@/components/Section";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import EmptyState from "@/components/EmptyState";
import { news } from "@/content/news";
import { formatUA } from "@/lib/format";

export default function NewsPage() {
  const items = [...news].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  if (!items.length) return <Section title="Новини"><EmptyState title="Новин поки немає" /></Section>;

  return (
    <Section title="Новини" subtitle="Оновлення про допомогу, передачі, звіти та збори.">
      <div className="grid gap-4 lg:grid-cols-2">
        {items.map(n => (
          <Card key={n.id} className="p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs text-muted">{formatUA(n.date)}</div>
              <div className="flex flex-wrap gap-2">
                {(n.tags ?? []).map(t => <Badge key={t} tone="blue">{t}</Badge>)}
              </div>
            </div>
            <div className="mt-2 text-base font-semibold">{n.title}</div>
            <div className="mt-2 text-sm text-muted">{n.excerpt}</div>
            {n.link ? (
              <a className="mt-4 inline-flex text-sm font-semibold text-accent hover:opacity-90 transition" href={n.link} target="_blank" rel="noreferrer">
                Детальніше →
              </a>
            ) : null}
          </Card>
        ))}
      </div>
    </Section>
  );
}
