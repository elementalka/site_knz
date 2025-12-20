import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type LinkButtonProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children"> & {
    href: LinkProps["href"];
  };

type NativeButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

type Props = LinkButtonProps | NativeButtonProps;

export default function Button(props: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-accent/40";

  if ("href" in props) {
    const { href, children, className, variant, ...linkProps } = props;
    const variantClass =
      variant === "secondary"
        ? "bg-soft hover:bg-white/10 border border-border"
        : variant === "ghost"
          ? "bg-transparent hover:bg-white/6"
          : "bg-accent text-bg hover:opacity-95";
    const cls = cn(base, variantClass, className);
    return (
      <Link href={href} className={cls} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { children, variant, className, ...buttonProps } = props;
  const variantClass =
    variant === "secondary"
      ? "bg-soft hover:bg-white/10 border border-border"
      : variant === "ghost"
        ? "bg-transparent hover:bg-white/6"
        : "bg-accent text-bg hover:opacity-95";
  const cls = cn(base, variantClass, className);

  return (
    <button className={cls} {...buttonProps}>
      {children}
    </button>
  );
}
