import Section from "@/components/Section";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import EmptyState from "@/components/EmptyState";
import { guidanceDocs } from "@/content/templates";

export default function TemplatesPage() {
  if (!guidanceDocs.length) return <Section title="Шаблони і поради"><EmptyState title="Немає матеріалів" /></Section>;

  return (
    <Section
      title="Блок документів для звернення, шаблони і поради"
      subtitle="Покрокові інструкції (ВЛК/ВВК тощо) + прикріплені файли."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {guidanceDocs.map(g => (
          <Card key={g.id} className="p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="text-base font-semibold">{g.title}</div>
              <Badge tone="blue">{g.category}</Badge>
            </div>
            <div className="mt-2 text-sm text-muted">{g.description}</div>

            <div className="mt-4">
              <div className="text-sm font-semibold">Кроки</div>
              <ol className="mt-2 list-decimal pl-5 text-sm text-muted grid gap-1">
                {g.steps.map(s => <li key={s}>{s}</li>)}
              </ol>
            </div>

            {g.files?.length ? (
              <div className="mt-4">
                <div className="text-sm font-semibold">Файли</div>
                <div className="mt-2 grid gap-2">
                  {g.files.map(f => (
                    <a key={f.url} href={f.url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-accent hover:opacity-90 transition">
                      {f.title} →
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </Card>
        ))}
      </div>
    </Section>
  );
}
