import Section from "@/components/Section";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Progress from "@/components/Progress";
import SocialLinks from "@/components/SocialLinks";
import EmptyState from "@/components/EmptyState";
import VideoEmbed from "@/components/VideoEmbed";
import { site } from "@/content/site";
import { socialLinks } from "@/content/social";
import { fundraisers } from "@/content/fundraisers";
import { news } from "@/content/news";
import { liveAnnouncements } from "@/content/live";
import { team } from "@/content/team";
import { awards } from "@/content/awards";
import { mediaAssets } from "@/content/media";
import { partners } from "@/content/partners";
import { closedFundraisers } from "@/content/closed";
import { raffles } from "@/content/raffles";
import { guidanceDocs } from "@/content/templates";
import { supportPeople } from "@/content/support";
import { formatMoneyUAH, formatUA } from "@/lib/format";

export default function HomePage() {
  const main = fundraisers.find(f => f.type === "main") ?? fundraisers[0];
  const side = fundraisers.filter(f => f.type === "side").slice(0, 2);
  const topNews = [...news].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, 3);
  const nextLives = [...liveAnnouncements].sort((a, b) => +new Date(a.startsAt) - +new Date(b.startsAt)).slice(0, 3);
  const teamPreview = team.slice(0, 3);
  const awardsPreview = [...awards].sort((a, b) => +new Date(b.date ?? 0) - +new Date(a.date ?? 0)).slice(0, 3);
  const mediaPreview = mediaAssets.slice(0, 3);
  const partnersPreview = partners.slice(0, 4);
  const closedPreview = [...closedFundraisers].sort((a, b) => +new Date(b.closedAt) - +new Date(a.closedAt)).slice(0, 2);
  const rafflePreview = [...raffles].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, 2);
  const guidancePreview = guidanceDocs.slice(0, 2);
  const supportPreview = supportPeople.slice(0, 2);
  const videoAppeals = team
    .filter(member => member.videoAppeal)
    .map(member => ({
      id: `${member.id}-video`,
      title: member.videoAppeal?.title ?? member.name,
      url: member.videoAppeal?.url ?? "",
      person: member.name
    }))
    .filter(item => item.url)
    .slice(0, 2);
  const primarySocials = socialLinks.filter(link => link.type === "youtube" || link.type === "facebook");

  const percent = main ? Math.round((main.raisedAmount / main.goalAmount) * 100) : 0;
  const heroStats = [
    { label: "Партнерських ініціатив", value: "50+" },
    { label: "Прозорі звіти по зборах", value: "100%" },
    { label: "Готовність допомоги", value: "24/7" }
  ];

  return (
    <>
      <section className="relative py-14 sm:py-20 overflow-hidden">
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <div className="hero-orb orb-3" />
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge>Офіційний сайт</Badge>
              <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-gradient">
                {site.hero.title}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-muted max-w-xl">
                {site.hero.subtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button as="link" href={site.hero.ctaPrimary.href}>{site.hero.ctaPrimary.label}</Button>
                <Button as="link" href={site.hero.ctaSecondary.href} variant="secondary">
                  {site.hero.ctaSecondary.label}
                </Button>
                <Button as="link" href="/team" variant="ghost">Наша команда →</Button>
              </div>

              <div className="mt-6">
                <SocialLinks links={socialLinks} />
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroStats.map(stat => (
                  <Card key={stat.label} className="p-4 text-center">
                    <div className="text-xl font-semibold text-gradient">{stat.value}</div>
                    <div className="mt-1 text-xs text-muted">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>

            {main && (
              <Card className="p-6">
                <div className="flex flex-col gap-2">
                  {main.imageUrl && (
                    <div className="media-frame mb-4 aspect-[16/9]">
                      <img src={main.imageUrl} alt={main.title} className="media-image" loading="lazy" />
                    </div>
                  )}
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
                    <Button as="link" href="/fundraisers" variant="secondary">Усі збори</Button>
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
                {f.imageUrl && (
                  <div className="media-frame mb-4 aspect-[16/9]">
                    <img src={f.imageUrl} alt={f.title} className="media-image" loading="lazy" />
                  </div>
                )}
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
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  {l.imageUrl && (
                    <div className="media-frame h-16 w-full sm:h-14 sm:w-24">
                      <img src={l.imageUrl} alt={l.title} className="media-image" loading="lazy" />
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-semibold">{l.title}</div>
                    {l.note && <div className="mt-1 text-xs text-muted">{l.note}</div>}
                  </div>
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
              {n.imageUrl && (
                <div className="media-frame mb-4 aspect-[16/9]">
                  <img src={n.imageUrl} alt={n.title} className="media-image" loading="lazy" />
                </div>
              )}
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

      <Section title="Наша команда" subtitle="7 учасників команди, соцмережі, напрямки допомоги та подяки.">
        {teamPreview.length ? (
          <>
            <div className="grid gap-4 lg:grid-cols-3">
              {teamPreview.map(member => (
                <Card key={member.id} className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="media-frame h-16 w-16 shrink-0">
                      {member.photoUrl ? (
                        <img src={member.photoUrl} alt={member.name} className="media-image" loading="lazy" />
                      ) : null}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{member.name}</div>
                      <div className="text-xs text-muted">{member.role}</div>
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-muted">{member.bio}</div>
                  {member.helped?.length ? (
                    <div className="mt-3">
                      <div className="text-xs font-semibold text-muted">Кому допомагали</div>
                      <ul className="mt-2 list-disc pl-4 text-xs text-muted">
                        {member.helped.slice(0, 2).map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <div className="mt-4">
                    <SocialLinks links={member.socials} />
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button as="link" href="/team" variant="secondary">Вся команда</Button>
              <Button as="link" href="/support" variant="ghost">Допомога юристів →</Button>
            </div>
          </>
        ) : (
          <EmptyState title="Команда в процесі оновлення" />
        )}
      </Section>

      <Section title="Відеозвернення" subtitle="Звернення команди, звіти та відео з передач.">
        {videoAppeals.length ? (
          <div className="grid gap-4 lg:grid-cols-2">
            {videoAppeals.map(video => (
              <VideoEmbed key={video.id} title={`${video.title} • ${video.person}`} url={video.url} />
            ))}
          </div>
        ) : (
          <EmptyState title="Поки що немає відеозвернень" />
        )}
        <div className="mt-6">
          <Button as="link" href="/team" variant="secondary">Усі звернення</Button>
        </div>
      </Section>

      <Section title="Наші відзнаки" subtitle="Фото, відео та подяки від підрозділів і партнерів.">
        {awardsPreview.length ? (
          <>
            <div className="grid gap-4 lg:grid-cols-3">
              {awardsPreview.map(award => (
                <Card key={award.id} className="overflow-hidden">
                  {award.kind === "photo" ? (
                    <div className="aspect-[4/3] bg-white/5">
                      <img src={award.url} alt={award.title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] bg-white/5 flex items-center justify-center">
                      <div className="text-xs text-muted">{award.kind.toUpperCase()}</div>
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-sm font-semibold">{award.title}</div>
                      <Badge tone="blue">{award.kind}</Badge>
                    </div>
                    {award.description && <div className="mt-2 text-sm text-muted">{award.description}</div>}
                    <a
                      href={award.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex text-sm font-semibold text-accent hover:opacity-90 transition"
                    >
                      Відкрити →
                    </a>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button as="link" href="/awards" variant="secondary">Усі відзнаки</Button>
            </div>
          </>
        ) : (
          <EmptyState title="Поки що немає відзнак" />
        )}
      </Section>

      <Section title="Фото, відео та документи" subtitle="Архів матеріалів і доказової бази по кожній допомозі.">
        {mediaPreview.length ? (
          <>
            <div className="grid gap-4 lg:grid-cols-3">
              {mediaPreview.map(asset => (
                <Card key={asset.id} className="p-5">
                  {asset.category === "photo" ? (
                    <div className="media-frame mb-4 aspect-[4/3]">
                      <img src={asset.url} alt={asset.title} className="media-image" loading="lazy" />
                    </div>
                  ) : (
                    <div className="media-frame mb-4 flex aspect-[4/3] items-center justify-center">
                      <div className="text-xs text-muted">{asset.category.toUpperCase()}</div>
                    </div>
                  )}
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-sm font-semibold">{asset.title}</div>
                    <Badge tone="accent">{asset.category}</Badge>
                  </div>
                  {asset.description && <div className="mt-2 text-sm text-muted">{asset.description}</div>}
                  <a
                    href={asset.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex text-sm font-semibold text-accent hover:opacity-90 transition"
                  >
                    Відкрити →
                  </a>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button as="link" href="/media" variant="secondary">Уся медіатека</Button>
            </div>
          </>
        ) : (
          <EmptyState title="Поки що немає матеріалів" />
        )}
      </Section>

      <Section title="Партнери" subtitle="Організації та бізнеси, з якими ми співпрацюємо.">
        {partnersPreview.length ? (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {partnersPreview.map(partner => (
                <Card key={partner.id} className="p-4 text-center">
                  {partner.logoUrl ? (
                    <div className="media-frame mb-3 aspect-[3/2]">
                      <img src={partner.logoUrl} alt={partner.name} className="media-image" loading="lazy" />
                    </div>
                  ) : null}
                  <div className="text-sm font-semibold">{partner.name}</div>
                  {partner.note && <div className="mt-1 text-xs text-muted">{partner.note}</div>}
                  {partner.url && (
                    <a className="mt-2 inline-flex text-xs text-accent hover:opacity-90 transition" href={partner.url} target="_blank" rel="noreferrer">
                      Відкрити сайт →
                    </a>
                  )}
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button as="link" href="/partners" variant="secondary">Усі партнери</Button>
            </div>
          </>
        ) : (
          <EmptyState title="Партнери додаються" />
        )}
      </Section>

      <Section title="Закриті збори" subtitle="Список закритих зборів та час закриття.">
        {closedPreview.length ? (
          <>
            <div className="grid gap-4 lg:grid-cols-2">
              {closedPreview.map(item => (
                <Card key={item.id} className="p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    {item.imageUrl ? (
                      <div className="media-frame h-20 w-full sm:h-16 sm:w-28">
                        <img src={item.imageUrl} alt={item.title} className="media-image" loading="lazy" />
                      </div>
                    ) : null}
                    <div className="flex-1">
                      <div className="text-sm font-semibold">{item.title}</div>
                      <div className="mt-1 text-xs text-muted">Закрито: {formatUA(item.closedAt)}</div>
                      <div className="mt-1 text-xs text-muted">Зібрано: {formatMoneyUAH(item.totalRaised)}</div>
                    </div>
                  </div>
                  {item.reportUrl && (
                    <a href={item.reportUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-xs text-accent hover:opacity-90 transition">
                      Звіт →
                    </a>
                  )}
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button as="link" href="/closed" variant="secondary">Всі закриті збори</Button>
            </div>
          </>
        ) : (
          <EmptyState title="Немає закритих зборів" />
        )}
      </Section>

      <Section title="Розіграші лотів і звіти" subtitle="Відеозвіти з ефірів, результати розіграшів та отримання лотів.">
        {rafflePreview.length ? (
          <>
            <div className="grid gap-4 lg:grid-cols-2">
              {rafflePreview.map(raffle => (
                <Card key={raffle.id} className="p-5">
                  {raffle.imageUrl ? (
                    <div className="media-frame mb-4 aspect-[16/9]">
                      <img src={raffle.imageUrl} alt={raffle.title} className="media-image" loading="lazy" />
                    </div>
                  ) : null}
                  <div className="text-sm font-semibold">{raffle.title}</div>
                  <div className="mt-1 text-xs text-muted">{formatUA(raffle.date)}</div>
                  {raffle.winners?.length ? (
                    <ul className="mt-3 text-xs text-muted list-disc pl-4">
                      {raffle.winners.slice(0, 2).map(winner => (
                        <li key={`${winner.name}-${winner.prize}`}>{winner.name} — {winner.prize}</li>
                      ))}
                    </ul>
                  ) : null}
                  {raffle.videoUrl && (
                    <a href={raffle.videoUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-xs text-accent hover:opacity-90 transition">
                      Дивитися відео →
                    </a>
                  )}
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button as="link" href="/raffles" variant="secondary">Усі розіграші</Button>
            </div>
          </>
        ) : (
          <EmptyState title="Немає розіграшів" />
        )}
      </Section>

      <Section title="Допомога юристів і супровід ветеранів" subtitle="Контакти, ліцензії/ЄДРПОУ та перелік послуг.">
        {supportPreview.length ? (
          <>
            <div className="grid gap-4 lg:grid-cols-2">
              {supportPreview.map(person => (
                <Card key={person.id} className="p-5">
                  <div className="flex items-start gap-3">
                    {person.photoUrl ? (
                      <div className="media-frame h-16 w-16 shrink-0">
                        <img src={person.photoUrl} alt={person.name} className="media-image" loading="lazy" />
                      </div>
                    ) : null}
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <div className="text-sm font-semibold">{person.name}</div>
                          {person.licenseOrEdpou && <div className="mt-1 text-xs text-muted">{person.licenseOrEdpou}</div>}
                        </div>
                        <Badge tone="accent">{person.service}</Badge>
                      </div>
                      <div className="mt-3">
                        <SocialLinks links={person.contacts} />
                      </div>
                      <ul className="mt-3 text-xs text-muted list-disc pl-4">
                        {person.info.slice(0, 2).map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button as="link" href="/support" variant="secondary">Усі контакти підтримки</Button>
            </div>
          </>
        ) : (
          <EmptyState title="Блок підтримки наповнюється" />
        )}
      </Section>

      <Section title="Документи для звернення" subtitle="Шаблони, інструкції та поради для ВЛК/ВВК та інших звернень.">
        {guidancePreview.length ? (
          <>
            <div className="grid gap-4 lg:grid-cols-2">
              {guidancePreview.map(doc => (
                <Card key={doc.id} className="p-5">
                  {doc.imageUrl ? (
                    <div className="media-frame mb-4 aspect-[16/9]">
                      <img src={doc.imageUrl} alt={doc.title} className="media-image" loading="lazy" />
                    </div>
                  ) : null}
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-sm font-semibold">{doc.title}</div>
                    <Badge tone="blue">{doc.category}</Badge>
                  </div>
                  {doc.description && <div className="mt-2 text-sm text-muted">{doc.description}</div>}
                  {doc.steps?.length ? (
                    <ul className="mt-3 text-xs text-muted list-disc pl-4">
                      {doc.steps.slice(0, 2).map(step => (
                        <li key={step}>{step}</li>
                      ))}
                    </ul>
                  ) : null}
                  {doc.files?.[0] && (
                    <a href={doc.files[0].url} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-xs text-accent hover:opacity-90 transition">
                      {doc.files[0].title} →
                    </a>
                  )}
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button as="link" href="/templates" variant="secondary">Усі шаблони</Button>
            </div>
          </>
        ) : (
          <EmptyState title="Немає доступних шаблонів" />
        )}
      </Section>

      <Section title="Наші соцмережі" subtitle="Головні канали в YouTube та Facebook, а також інші соцмережі.">
        <Card className="p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-sm font-semibold">Підписуйтесь та слідкуйте за ефірами</div>
              <div className="mt-2 text-sm text-muted">
                Ми анонсуємо прямі ефіри, публікуємо звіти та новини у всіх офіційних каналах.
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {primarySocials.map(link => (
                <a
                  key={`${link.type}-${link.url}`}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-soft px-4 py-2 text-sm font-semibold hover:bg-white/10 transition"
                >
                  {link.label ?? link.type.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <SocialLinks links={socialLinks} />
          </div>
        </Card>
      </Section>

      <Section title="Про нас" subtitle="Інформація про створення команди та її членів.">
        <Card className="p-6">
          <div className="text-sm font-semibold">{site.about.title}</div>
          <div className="mt-2 text-sm text-muted leading-relaxed">{site.about.text}</div>
          <div className="mt-4">
            <Button as="link" href="/team" variant="secondary">Детальніше про команду</Button>
          </div>
        </Card>
      </Section>
    </>
  );
}
