import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Progress from "@/components/Progress";
import EmptyState from "@/components/EmptyState";
import { fundraisers } from "@/content/fundraisers";
import { site } from "@/content/site";
import { formatMoneyUAH, formatUA } from "@/lib/format";

const preview = fundraisers.find(f => f.imageUrl)?.imageUrl;

export const metadata: Metadata = {
  title: `Збори — ${site.name}`,
  description: "Актуальні волонтерські збори, прогрес і банківські реквізити.",
  openGraph: {
    title: `Збори — ${site.name}`,
    description: "Актуальні волонтерські збори, прогрес і банківські реквізити.",
    images: preview ? [{ url: preview }] : undefined
  }
};

export default function FundraisersPage() {
  if (!fundraisers.length) return <Section title="Збори"><EmptyState title="Немає активних зборів" /></Section>;

  const main = fundraisers.filter(f => f.type === "main");
  const side = fundraisers.filter(f => f.type === "side");

  const render = (id: string, title: string) => (
    <div key={id}>
      <div className="mb-4 text-sm font-semibold">{title}</div>
      <div className="grid gap-4 lg:grid-cols-2">
        {(title.includes("Основні") ? main : side).map(f => {
          const p = Math.round((f.raisedAmount / f.goalAmount) * 100);
          return (
            <Card key={f.id} className="p-6">
              {f.imageUrl && (
                <div className="media-frame mb-4 aspect-[16/9]">
                  <img src={f.imageUrl} alt={f.title} className="media-image" loading="lazy" />
                </div>
              )}
              <div className="flex items-start justify-between gap-3">
                <div className="text-base font-semibold leading-snug">{f.title}</div>
                <Badge tone={f.type === "main" ? "accent" : "blue"}>{f.type === "main" ? "Основний" : "Суміжний"}</Badge>
              </div>

              <div className="mt-2 text-sm text-muted">{f.description}</div>

              <div className="mt-4 grid gap-2">
                <Progress value={p} />
                <div className="flex justify-between text-xs text-muted">
                  <span>Зібрано: {formatMoneyUAH(f.raisedAmount)}</span>
                  <span>Ціль: {formatMoneyUAH(f.goalAmount)} • {p}%</span>
                </div>
                <div className="text-xs text-muted">Оновлено: {formatUA(f.updatedAt)}</div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {f.jarUrl ? (
                  <a
                    href={f.jarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-accent text-bg px-4 py-2.5 text-sm font-semibold hover:opacity-95 transition"
                  >
                    Підтримати через банку →
                  </a>
                ) : (
                  <span className="text-xs text-muted">Банка буде додана</span>
                )}
              </div>

              <div className="mt-4 text-xs text-muted">
                * Відстеження “інформації з банки” можливе лише через офіційний API/інтеграцію сервісу. Зараз — посилання + звітність на сайті.
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      <Section title="Збори" subtitle="1 основний збір (150к) + 2 суміжні (до 100к).">
        {render("main", "Основні")}
        <div className="h-10" />
        {render("side", "Суміжні")}
      </Section>
    </>
  );
}
