import Container from "./Container";
import { site } from "@/content/site";
import { socialLinks } from "@/content/social";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg/40">
      <Container className="py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div>
            <div className="text-sm font-semibold">{site.name}</div>
            <div className="mt-2 text-sm text-muted">{site.short}</div>
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
          </div>
        </div>

        <div className="mt-8 text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Всі права захищено.
        </div>
      </Container>
    </footer>
  );
}
