import Card from "./Card";

export default function EmptyState(props: { title: string; text?: string }) {
  return (
    <Card className="p-6 text-center">
      <div className="text-sm font-semibold text-gradient">{props.title}</div>
      {props.text && <div className="mt-2 text-sm text-muted">{props.text}</div>}
    </Card>
  );
}
