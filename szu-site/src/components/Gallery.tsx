import Card from "./Card";

export default function Gallery(props: { items: { title: string; url: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {props.items.map(it => (
        <Card key={it.url} className="overflow-hidden">
          <div className="aspect-[4/3] bg-white/5">
            <img src={it.url} alt={it.title} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="p-4 text-sm font-semibold">{it.title}</div>
        </Card>
      ))}
    </div>
  );
}
