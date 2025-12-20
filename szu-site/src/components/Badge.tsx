import { cn } from "@/lib/cn";

export default function Badge(props: React.PropsWithChildren<{ tone?: "accent" | "blue" | "warn"; className?: string }>) {
  const tone =
    props.tone === "warn"
      ? "bg-warn/15 text-warn border-warn/25"
      : props.tone === "blue"
        ? "bg-accent2/15 text-accent2 border-accent2/25"
        : "bg-accent/15 text-accent border-accent/25";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]",
        tone,
        props.className
      )}
    >
      {props.children}
    </span>
  );
}
