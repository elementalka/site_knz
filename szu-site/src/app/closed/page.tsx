import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import EmptyState from "@/components/EmptyState";
import { closedFundraisers } from "@/content/closed";

export default function ClosedPage() {
  if (!closedFundraisers.length) return <Section title="Закриті збори"><EmptyState title="Поки немає закритих зборів" /></Section>;

  return (
    <Section title="Закриті збори" subtitle="Список закритих зборів і час закриття.">
      <Timeline
        items={closedFundraisers.map(c => ({
          title: c.title,
          date: c.closedAt,
          meta: c.totalRaised ? `Сума: ${c.totalRaised} грн` : undefined
        }))}
      />
    </Section>
  );
}
