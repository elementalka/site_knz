import type { SocialLink } from "@/types";
import { cn } from "@/lib/cn";

const map: Record<string, string> = {
  youtube: "YouTube",
  facebook: "Facebook",
  instagram: "Instagram",
  telegram: "Telegram",
  tiktok: "TikTok",
  x: "X",
  website: "Website"
};

export default function SocialLinks(props: { links: SocialLink[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2", props.className)}>
      {props.links.map(l => (
        <a
          key={`${l.type}-${l.url}`}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          className="glass-link inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-muted hover:text-text hover:bg-white/10 transition"
        >
          {l.label ?? map[l.type] ?? l.type}
        </a>
      ))}
    </div>
  );
}
