import Section from "@/components/Section";
import Card from "@/components/Card";
import EmptyState from "@/components/EmptyState";
import { partners } from "@/content/partners";

export default function PartnersPage() {
  if (!partners.length) return <Section title="Партнери"><EmptyState title="Партнерів поки немає" /></Section>;

  return (
    <Section title="Партнери" subtitle="З ким співпрацюємо.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map(p => (
          <Card key={p.id} className="p-5">
            <div className="text-sm font-semibold">{p.name}</div>
            {p.note && <div className="mt-2 text-sm text-muted">{p.note}</div>}
            {p.url && (
              <a href={p.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-semibold text-accent hover:opacity-90 transition">
                Відкрити →
              </a>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
