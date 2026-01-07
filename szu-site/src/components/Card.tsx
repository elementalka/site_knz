import { cn } from "@/lib/cn";

type CardBaseProps = React.PropsWithChildren<{
  className?: string;
}>;

type CardAnchorProps = CardBaseProps &
  React.ComponentPropsWithoutRef<"a"> & {
    href: string;
  };

type CardDivProps = CardBaseProps &
  React.ComponentPropsWithoutRef<"div"> & {
    href?: undefined;
  };

type CardProps = CardAnchorProps | CardDivProps;

export default function Card(props: CardProps) {
  const { className, children, href, ...rest } = props;
  const sharedClassName = cn(
    "card-wow group rounded-[1.6rem] backdrop-blur-sm",
    href && "block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
    className
  );

  if (href) {
    const { target, rel, ...anchorRest } = rest as React.ComponentPropsWithoutRef<"a">;
    return (
      <a
        className={sharedClassName}
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noreferrer" : undefined)}
        {...anchorRest}
      >
        {children}
      </a>
    );
  }

  return (
    <div className={sharedClassName} {...(rest as React.ComponentPropsWithoutRef<"div">)}>
      {children}
    </div>
  );
}
