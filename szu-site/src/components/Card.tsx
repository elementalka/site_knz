import { cn } from "@/lib/cn";

export default function Card(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("card-wow rounded-xl2 backdrop-blur", props.className)}>
      {props.children}
    </div>
  );
}
