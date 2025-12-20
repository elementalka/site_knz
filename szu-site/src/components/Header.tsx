import Link from "next/link";
import Container from "./Container";
import { site } from "@/content/site";
import Button from "./Button";

const links = [
  { href: "/fundraisers", label: "Збори" },
  { href: "/live", label: "Ефіри" },
  { href: "/news", label: "Новини" },
  { href: "/team", label: "Команда" },
  { href: "/awards", label: "Відзнаки" },
  { href: "/media", label: "Медіа" },
  { href: "/partners", label: "Партнери" },
  { href: "/closed", label: "Закриті" },
  { href: "/raffles", label: "Розіграші" },
  { href: "/support", label: "Підтримка" },
  { href: "/templates", label: "Шаблони" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/75 backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-accent/30 bg-accent/20">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/80 via-accent2/70 to-warn/60" />
            <div className="absolute inset-1 rounded-lg bg-bg/70" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">{site.name}</div>
            <div className="text-xs text-muted">Офіційний сайт спільноти</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.slice(0, 6).map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted hover:text-text hover:bg-white/10 transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button as="link" href="/fundraisers" variant="primary">Підтримати</Button>
          <Button as="link" href="/live" variant="secondary" className="hidden sm:inline-flex">Ефіри</Button>
        </div>
      </Container>

      <div className="border-t border-border bg-bg/50 lg:hidden">
        <Container className="py-2 overflow-x-auto">
          <div className="flex gap-2">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="whitespace-nowrap rounded-full border border-border bg-soft px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted hover:text-text hover:bg-white/10 transition"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}
