import Section from "@/components/Section";
import Card from "@/components/Card";
import EmptyState from "@/components/EmptyState";
import Badge from "@/components/Badge";
import { liveAnnouncements } from "@/content/live";
import { formatUA } from "@/lib/format";

export default function LivePage() {
  const items = [...liveAnnouncements].sort((a, b) => +new Date(a.startsAt) - +new Date(b.startsAt));
  if (!items.length) return <Section title="Прямі ефіри"><EmptyState title="Немає запланованих ефірів" /></Section>;

  return (
    <Section title="Прямі ефіри" subtitle="Оповіщення про ефіри в усіх соцмережах (ретрансляція).">
      <div className="grid gap-3">
        {items.map(l => (
          <Card key={l.id} className="p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-sm font-semibold">{l.title}</div>
                {l.note && <div className="mt-1 text-xs text-muted">{l.note}</div>}
              </div>
              <div className="flex items-center gap-2">
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
