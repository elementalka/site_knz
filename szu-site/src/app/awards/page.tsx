import Section from "@/components/Section";
import Card from "@/components/Card";
import EmptyState from "@/components/EmptyState";
import Badge from "@/components/Badge";
import { awards } from "@/content/awards";
import { formatUA } from "@/lib/format";

export default function AwardsPage() {
  const items = [...awards].sort((a, b) => +new Date(b.date ?? 0) - +new Date(a.date ?? 0));
  if (!items.length) return <Section title="Наші відзнаки"><EmptyState title="Немає відзнак" /></Section>;

  return (
    <Section title="Наші відзнаки" subtitle="Фото/відео/подяки та документи.">
      <div className="grid gap-4 lg:grid-cols-3">
        {items.map(a => (
          <Card key={a.id} className="overflow-hidden">
            {a.kind === "photo" ? (
              <div className="aspect-[4/3] bg-white/5">
                <img src={a.url} alt={a.title} className="h-full w-full object-cover" />
              </div>
            ) : (
              <div className="aspect-[4/3] bg-white/5 flex items-center justify-center">
                <div className="text-xs text-muted">{a.kind.toUpperCase()}</div>
              </div>
            )}
            <div className="p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm font-semibold">{a.title}</div>
                <Badge tone="blue">{a.kind}</Badge>
              </div>
              {a.date && <div className="mt-2 text-xs text-muted">{formatUA(a.date)}</div>}
              {a.description && <div className="mt-2 text-sm text-muted">{a.description}</div>}
              <a href={a.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-semibold text-accent hover:opacity-90 transition">
                Відкрити →
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
