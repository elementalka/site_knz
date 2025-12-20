import Link from "next/link";
import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type LinkProps = BaseProps & {
  href: string;
};

type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type Props = LinkProps | ButtonProps;

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

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={cls}>
        {props.children}
      </Link>
    );
  }

  const { children, ...rest } = props;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
