import { cn } from "@/lib/cn";

export default function Progress(props: { value: number; className?: string }) {
  const v = Math.min(100, Math.max(0, props.value));
  return (
    <div className={cn("h-2 w-full rounded-full bg-white/10 overflow-hidden", props.className)}>
      <div className="h-full rounded-full bg-accent" style={{ width: `${v}%` }} />
    </div>
  );
}
