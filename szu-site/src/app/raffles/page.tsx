import Section from "@/components/Section";
import Card from "@/components/Card";
import EmptyState from "@/components/EmptyState";
import VideoEmbed from "@/components/VideoEmbed";
import { raffles } from "@/content/raffles";
import { formatUA } from "@/lib/format";

export default function RafflesPage() {
  if (!raffles.length) return <Section title="Розіграші"><EmptyState title="Поки немає розіграшів" /></Section>;

  return (
    <Section title="Розіграши лотів і звіти" subtitle="Розіграші проходять на ефірах — тут відео та хто отримав.">
      <div className="grid gap-4 lg:grid-cols-2">
        {raffles.map(r => (
          <Card key={r.id} className="p-4">
            <div className="mb-3">
              <div className="text-sm font-semibold">{r.title}</div>
              <div className="text-xs text-muted">{formatUA(r.date)}</div>
            </div>
            <VideoEmbed title={r.title} url={r.videoUrl} />
            {r.winners?.length ? (
              <div className="mt-4">
                <div className="text-sm font-semibold">Переможці</div>
                <ul className="mt-2 text-sm text-muted list-disc pl-5">
                  {r.winners.map(w => (
                    <li key={w.name + w.prize}>
                      {w.name} — {w.prize}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Card>
        ))}
      </div>
    </Section>
  );
}
