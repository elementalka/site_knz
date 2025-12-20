import Container from "./Container";
import { site } from "@/content/site";
import { socialLinks } from "@/content/social";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-bg/70">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <Container className="py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-gradient">{site.name}</div>
            <div className="mt-2 text-sm text-muted">{site.short}</div>
            <div className="mt-4 text-xs text-muted">Разом — сильніші. Разом — швидші.</div>
          </div>

          <div>
            <div className="text-sm font-semibold">Соцмережі</div>
            <div className="mt-3">
              <SocialLinks links={socialLinks} />
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Контакти</div>
            <div className="mt-2 text-sm text-muted">
              Для співпраці/партнерств — пишіть у Telegram/Instagram.
            </div>
            <div className="mt-4 text-xs text-muted">Відповідаємо оперативно та з турботою.</div>
          </div>
        </div>

        <div className="mt-8 text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Всі права захищено.
        </div>
      </Container>
    </footer>
  );
}
