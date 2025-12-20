import Card from "./Card";

function toEmbed(url: string) {
  try {
    const u = new URL(url);

    if (u.hostname.includes("youtube.com") && u.searchParams.get("v")) {
      return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
    }
    if (u.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${u.pathname.replace("/", "")}`;
    }
    return url;
  } catch {
    return url;
  }
}

export default function VideoEmbed(props: { title: string; url: string }) {
  const src = toEmbed(props.url);
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video bg-black/20">
        <iframe
          title={props.title}
          src={src}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <div className="text-sm font-semibold">{props.title}</div>
        <a className="mt-2 inline-flex text-xs text-muted hover:text-text transition" href={props.url} target="_blank" rel="noreferrer">
          Відкрити посилання →
        </a>
      </div>
    </Card>
  );
}
