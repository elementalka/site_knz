import Section from "@/components/Section";
import Card from "@/components/Card";
import EmptyState from "@/components/EmptyState";
import Badge from "@/components/Badge";
import SocialLinks from "@/components/SocialLinks";
import { supportPeople } from "@/content/support";

export default function SupportPage() {
  if (!supportPeople.length) return <Section title="Допомога юристів / супровід ветеранів"><EmptyState title="Немає даних" /></Section>;

  return (
    <Section
      title="Допомога юристів, супровід ветеранів"
      subtitle="Інформаційний блок про осіб: ПІБ, ліцензія/ЄДРПОУ (за потреби), контакти, перелік послуг."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {supportPeople.map(p => (
          <Card key={p.id} className="p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              {p.photoUrl ? (
                <div className="media-frame h-20 w-20 shrink-0">
                  <img src={p.photoUrl} alt={p.name} className="media-image" loading="lazy" />
                </div>
              ) : null}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-base font-semibold">{p.name}</div>
                    {p.licenseOrEdpou && <div className="mt-1 text-xs text-muted">{p.licenseOrEdpou}</div>}
                  </div>
                  <Badge tone="accent">{p.service}</Badge>
                </div>

                <div className="mt-3">
                  <SocialLinks links={p.contacts} />
                </div>

                <div className="mt-4">
                  <div className="text-sm font-semibold">Послуги/інформація</div>
                  <ul className="mt-2 text-sm text-muted list-disc pl-5">
                    {p.info.map(x => <li key={x}>{x}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
