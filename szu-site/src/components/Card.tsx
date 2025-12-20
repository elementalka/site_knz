import { cn } from "@/lib/cn";

type CardProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

export default function Card({ className, children, ...rest }: CardProps) {
  return (
    <div className={cn("card-wow group rounded-[1.6rem] backdrop-blur-sm", className)} {...rest}>
      {children}
    </div>
  );
}
