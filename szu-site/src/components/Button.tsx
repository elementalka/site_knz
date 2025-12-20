import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type LinkButtonProps = BaseProps & {
  as: "link";
  href: LinkProps["href"];
};

type NativeButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type Props = LinkButtonProps | NativeButtonProps;

export default function Button(props: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-accent/40";

  const variantClass =
    props.variant === "secondary"
      ? "bg-soft hover:bg-white/10 border border-border"
      : props.variant === "ghost"
        ? "bg-transparent hover:bg-white/6"
        : "bg-accent text-bg hover:opacity-95";

  const cls = cn(base, variantClass, props.className);


  if (props.as === "link") {
    return (
      <Link href={props.href} className={cls}>
        {props.children}
      </Link>
    );
  }

  const { children, ...buttonProps } = props;

  return (
    <button className={cls} {...buttonProps}>
      {children}
    </button>
  );
}
