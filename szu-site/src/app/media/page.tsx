import Section from "@/components/Section";
import Card from "@/components/Card";
import EmptyState from "@/components/EmptyState";
import Badge from "@/components/Badge";
import VideoEmbed from "@/components/VideoEmbed";
import { mediaAssets } from "@/content/media";

export default function MediaPage() {
  if (!mediaAssets.length) return <Section title="Медіа"><EmptyState title="Немає медіа" /></Section>;

  const photos = mediaAssets.filter(x => x.category === "photo");
  const videos = mediaAssets.filter(x => x.category === "video");
  const docs = mediaAssets.filter(x => x.category === "doc");

  return (
    <>
      <Section title="Фото" subtitle="Фото допомоги — під конкретними назвами/подіями.">
        {photos.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map(p => (
              <Card
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="overflow-hidden"
              >
                <div className="aspect-[4/3] bg-white/5">
                  <img src={p.url} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <div className="text-sm font-semibold">{p.title}</div>
                  {p.description && <div className="mt-2 text-sm text-muted">{p.description}</div>}
                  <span className="mt-3 inline-flex text-sm font-semibold text-accent">Відкрити →</span>
                </div>
              </Card>
            ))}
          </div>
        ) : <EmptyState title="Фото поки немає" />}
      </Section>

      <Section title="Відео" subtitle="Відео звіти, передачі, звернення.">
        {videos.length ? (
          <div className="grid gap-4 lg:grid-cols-2">
            {videos.map(v => <VideoEmbed key={v.id} title={v.title} url={v.url} />)}
          </div>
        ) : <EmptyState title="Відео поки немає" />}
      </Section>

      <Section title="Документи" subtitle="Документи / акти / файли (посилання).">
        {docs.length ? (
          <div className="grid gap-3">
            {docs.map(d => (
              <Card
                key={d.id}
                href={d.url}
                target="_blank"
                rel="noreferrer"
                className="p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">{d.title}</div>
                    {d.description && <div className="mt-1 text-xs text-muted">{d.description}</div>}
                  </div>
                  <Badge tone="warn">DOC</Badge>
                </div>
                <span className="mt-3 inline-flex text-sm font-semibold text-accent">Відкрити документ →</span>
              </Card>
            ))}
          </div>
        ) : <EmptyState title="Документів поки немає" />}
      </Section>
    </>
  );
}
