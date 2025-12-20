import Section from "@/components/Section";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Progress from "@/components/Progress";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/content/site";
import { socialLinks } from "@/content/social";
import { fundraisers } from "@/content/fundraisers";
import { news } from "@/content/news";
import { liveAnnouncements } from "@/content/live";
import { formatMoneyUAH, formatUA } from "@/lib/format";

export default function HomePage() {
  const main = fundraisers.find(f => f.type === "main") ?? fundraisers[0];
  const side = fundraisers.filter(f => f.type === "side").slice(0, 2);
  const topNews = [...news].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, 3);
  const nextLives = [...liveAnnouncements].sort((a, b) => +new Date(a.startsAt) - +new Date(b.startsAt)).slice(0, 3);

  const percent = main ? Math.round((main.raisedAmount / main.goalAmount) * 100) : 0;

  return (
    <>
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge>Офіційний сайт</Badge>
              <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
                {site.hero.title}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-muted max-w-xl">
                {site.hero.subtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={site.hero.ctaPrimary.href}>{site.hero.ctaPrimary.label}</Button>
                <Button href={site.hero.ctaSecondary.href} variant="secondary">
                  {site.hero.ctaSecondary.label}
                </Button>
                <Button href="/team" variant="ghost">Наша команда →</Button>
              </div>

              <div className="mt-6">
                <SocialLinks links={socialLinks} />
              </div>
            </div>

            {main && (
              <Card className="p-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold">Актуальний збір</div>
                    <Badge tone="blue">{main.type === "main" ? "Основний" : "Суміжний"}</Badge>
                  </div>
                  <div className="text-lg font-semibold leading-snug">{main.title}</div>
                  <div className="text-sm text-muted">{main.description}</div>

                  <div className="mt-4 grid gap-2">
                    <Progress value={percent} />
                    <div className="flex justify-between text-xs text-muted">
                      <span>Зібрано: {formatMoneyUAH(main.raisedAmount)}</span>
                      <span>Ціль: {formatMoneyUAH(main.goalAmount)} • {percent}%</span>
                    </div>
                    <div className="text-xs text-muted">Оновлено: {formatUA(main.updatedAt)}</div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {main.jarUrl && (
                      <a
                        href={main.jarUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border border-border bg-soft px-4 py-2.5 text-sm font-semibold hover:bg-white/10 transition"
                      >
                        Відкрити банку →
                      </a>
                    )}
                    <Button href="/fundraisers" variant="secondary">Усі збори</Button>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </Container>
      </section>

      <Section title="Суміжні збори" subtitle="Два паралельні збори до 100 000 грн.">
        <div className="grid gap-4 lg:grid-cols-2">
          {side.map(f => {
            const p = Math.round((f.raisedAmount / f.goalAmount) * 100);
            return (
              <Card key={f.id} className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-sm font-semibold">{f.title}</div>
                  <Badge tone="accent">Суміжний</Badge>
                </div>
                <div className="mt-2 text-sm text-muted">{f.description}</div>
                <div className="mt-4">
                  <Progress value={p} />
                  <div className="mt-2 flex justify-between text-xs text-muted">
                    <span>{formatMoneyUAH(f.raisedAmount)}</span>
                    <span>{formatMoneyUAH(f.goalAmount)} • {p}%</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {f.jarUrl && (
                    <a className="text-xs text-muted hover:text-text transition" href={f.jarUrl} target="_blank" rel="noreferrer">
                      Банка →
                    </a>
                  )}
                  <a className="text-xs text-muted hover:text-text transition" href="/fundraisers">
                    Детальніше →
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section title="Анонси прямих ефірів" subtitle="Оповіщення про заплановані ефіри з переходом у соцмережі.">
        <div className="grid gap-3">
          {nextLives.map(l => (
            <Card key={l.id} className="p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-semibold">{l.title}</div>
                  {l.note && <div className="mt-1 text-xs text-muted">{l.note}</div>}
                </div>
                <div className="text-xs text-muted">{formatUA(l.startsAt)} • {l.platform.toUpperCase()}</div>
              </div>
              <div className="mt-3">
                <a href={l.url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-accent hover:opacity-90 transition">
                  Перейти до ефіру →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Новини" subtitle="Оновлення щодо допомоги, передач, зборів і звітів.">
        <div className="grid gap-4 lg:grid-cols-3">
          {topNews.map(n => (
            <Card key={n.id} className="p-5">
              <div className="text-xs text-muted">{formatUA(n.date)}</div>
              <div className="mt-2 text-sm font-semibold">{n.title}</div>
              <div className="mt-2 text-sm text-muted">{n.excerpt}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {(n.tags ?? []).map(t => (
                  <Badge key={t} tone="blue" className="text-[11px]">{t}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Про нас" subtitle="Інформація про створення команди та її членів.">
        <Card className="p-6">
          <div className="text-sm font-semibold">{site.about.title}</div>
          <div className="mt-2 text-sm text-muted leading-relaxed">{site.about.text}</div>
          <div className="mt-4">
            <Button href="/team" variant="secondary">Детальніше про команду</Button>
          </div>
        </Card>
      </Section>
    </>
  );
}
