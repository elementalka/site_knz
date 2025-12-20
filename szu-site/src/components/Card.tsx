import { cn } from "@/lib/cn";

export default function Card(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("rounded-xl2 border border-border bg-card shadow-glow backdrop-blur", props.className)}>
      {props.children}
    </div>
  );
}
