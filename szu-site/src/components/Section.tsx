import { cn } from "@/lib/cn";
import Container from "./Container";

export default function Section(props: React.PropsWithChildren<{ title?: string; subtitle?: string; className?: string }>) {
  return (
    <section className={cn("relative py-12 sm:py-16", props.className)}>
      <Container>
        <div className="section-shell">
          {(props.title || props.subtitle) && (
            <div className="mb-6 sm:mb-8">
              {props.title && <h2 className="section-title text-xl sm:text-2xl font-semibold tracking-tight text-gradient">{props.title}</h2>}
              {props.subtitle && <p className="mt-3 text-sm sm:text-base text-muted">{props.subtitle}</p>}
            </div>
          )}
          {props.children}
        </div>
      </Container>
    </section>
  );
}
