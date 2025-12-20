import { cn } from "@/lib/cn";

type CardProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<"div"> & {
    href?: string;
    target?: React.HTMLAttributeAnchorTarget;
    rel?: string;
  }
>;

export default function Card({ className, children, href, target, rel, ...rest }: CardProps) {
  const Component = href ? "a" : "div";
  const linkProps = href
    ? { href, target, rel: rel ?? (target === "_blank" ? "noreferrer" : undefined) }
    : {};

  return (
    <Component
      className={cn(
        "card-wow group rounded-[1.6rem] backdrop-blur-sm",
        href && "block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
        className
      )}
      {...linkProps}
      {...rest}
    >
      {children}
    </Component>
  );
}
