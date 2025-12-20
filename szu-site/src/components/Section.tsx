import { cn } from "@/lib/cn";
import Container from "./Container";

type SectionProps = React.PropsWithChildren<{
  title?: string;
  subtitle?: string;
  className?: string;
  action?: React.ReactNode;
}>;

export default function Section({ title, subtitle, className, action, children }: SectionProps) {
  return (
    <section className={cn("relative py-12 sm:py-16", className)}>
      <Container>
        <div className="section-shell flex flex-col gap-6 sm:gap-8">
          {(title || subtitle || action) && (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                {title && <h2 className="section-title text-xl sm:text-2xl font-semibold tracking-tight text-gradient">{title}</h2>}
                {subtitle && <p className="mt-3 text-sm sm:text-base text-muted">{subtitle}</p>}
              </div>
              {action ? <div className="shrink-0">{action}</div> : null}
            </div>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
