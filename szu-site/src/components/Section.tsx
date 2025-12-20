import { cn } from "@/lib/cn";
import Container from "./Container";

export default function Section(props: React.PropsWithChildren<{ title?: string; subtitle?: string; className?: string }>) {
  return (
    <section className={cn("py-10 sm:py-14", props.className)}>
      <Container>
        {(props.title || props.subtitle) && (
          <div className="mb-6 sm:mb-8">
            {props.title && <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">{props.title}</h2>}
            {props.subtitle && <p className="mt-2 text-sm sm:text-base text-muted">{props.subtitle}</p>}
          </div>
        )}
        {props.children}
      </Container>
    </section>
  );
}
