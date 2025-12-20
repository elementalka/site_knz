import { cn } from "@/lib/cn";

export default function Progress(props: { value: number; className?: string }) {
  const v = Math.min(100, Math.max(0, props.value));
  return (
    <div className={cn("progress-track h-2 w-full rounded-full", props.className)}>
      <div className="progress-bar h-full rounded-full" style={{ width: `${v}%` }} />
    </div>
  );
}
