import Section from "@/components/Section";
import Card from "@/components/Card";
import SocialLinks from "@/components/SocialLinks";
import VideoEmbed from "@/components/VideoEmbed";
import Badge from "@/components/Badge";
import { team } from "@/content/team";

export default function TeamPage() {
  return (
    <Section title="Наша команда" subtitle="Дані людей, соцмережі, кому допомагали, подяки та відеозвернення.">
      <div className="grid gap-4 lg:grid-cols-2">
        {team.map(m => (
          <Card key={m.id} className="p-6">
            <div className="flex gap-4">
              <div className="h-20 w-20 overflow-hidden rounded-xl border border-border bg-white/5">
                {m.photoUrl ? <img src={m.photoUrl} alt={m.name} className="h-full w-full object-cover" /> : null}
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-base font-semibold">{m.name}</div>
                  <Badge tone="blue">{m.role}</Badge>
                </div>
                <div className="mt-2 text-sm text-muted">{m.bio}</div>

                <div className="mt-3">
                  <SocialLinks links={m.socials} />
                </div>
              </div>
            </div>

            {m.helped?.length ? (
              <div className="mt-5">
                <div className="text-sm font-semibold">Кому/чому допомагали</div>
                <ul className="mt-2 grid gap-1 text-sm text-muted list-disc pl-5">
                  {m.helped.map(x => <li key={x}>{x}</li>)}
                </ul>
              </div>
            ) : null}

            {m.thanks?.length ? (
              <div className="mt-5">
                <div className="text-sm font-semibold">Подяки</div>
                <div className="mt-2 grid gap-2">
                  {m.thanks.map(t => (
                    <a
                      key={t.title + t.url}
                      className="text-sm text-accent hover:opacity-90 transition"
                      href={t.url ?? "#"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t.title} ({t.type}) →
                    </a>
                  ))}
                </div>
              </div>
            ) : null}

            {m.videoAppeal ? (
              <div className="mt-5">
                <VideoEmbed title={m.videoAppeal.title} url={m.videoAppeal.url} />
              </div>
            ) : null}
          </Card>
        ))}
      </div>
    </Section>
  );
}
