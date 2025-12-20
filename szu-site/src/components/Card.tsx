import { cn } from "@/lib/cn";

export default function Card(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("card-wow group rounded-[1.6rem] backdrop-blur-sm", props.className)}>
      {props.children}
    </div>
  );
}
