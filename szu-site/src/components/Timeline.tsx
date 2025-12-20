import Card from "./Card";
import { formatUA } from "@/lib/format";

export default function Timeline(props: { items: { title: string; date: string; meta?: string }[] }) {
  const sorted = [...props.items].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return (
    <div className="grid gap-3">
      {sorted.map(i => (
        <Card key={i.title + i.date} className="p-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm font-semibold">{i.title}</div>
            <div className="text-xs text-muted">{formatUA(i.date)}</div>
          </div>
          {i.meta && <div className="mt-2 text-xs text-muted">{i.meta}</div>}
        </Card>
      ))}
    </div>
  );
}
s