import Link from "next/link";
import { cn } from "@/lib/cn";

type Props =
  | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: never } & React.ButtonHTMLAttributes<HTMLButtonElement>);

export default function Button(props: Props & { variant?: "primary" | "secondary" | "ghost"; className?: string }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-accent/40";

  const variant =
    props.variant === "secondary"
      ? "bg-soft hover:bg-white/10 border border-border"
      : props.variant === "ghost"
        ? "bg-transparent hover:bg-white/6"
        : "bg-accent text-bg hover:opacity-95";

  const cls = cn(base, variant, props.className);

  if ("href" in props && props.href) {
    const { href, className, variant, ...rest } = props;
    return (
      <Link href={href} className={cls} {...rest}>
        {props.children}
      </Link>
    );
  }

  const { className, variant: v, ...rest } = props;
  return (
    <button className={cls} {...rest}>
      {props.children}
    </button>
  );
}
