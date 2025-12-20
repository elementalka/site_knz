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
    <header className="sticky top-0 z-50 border-b border-border bg-bg/60 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-accent/20 border border-accent/25" />
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
              className="rounded-xl px-3 py-2 text-xs font-semibold text-muted hover:text-text hover:bg-white/5 transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/fundraisers" variant="primary">Підтримати</Button>
          <Button href="/live" variant="secondary" className="hidden sm:inline-flex">Ефіри</Button>
        </div>
      </Container>

      <div className="border-t border-border bg-bg/50 lg:hidden">
        <Container className="py-2 overflow-x-auto">
          <div className="flex gap-2">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="whitespace-nowrap rounded-xl border border-border bg-soft px-3 py-2 text-xs font-semibold text-muted hover:text-text hover:bg-white/10 transition"
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
