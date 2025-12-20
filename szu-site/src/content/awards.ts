import type { AwardItem } from "@/types";

export const awards: AwardItem[] = [
  {
    id: "a1",
    title: "Подяка за допомогу підрозділу",
    date: "2025-11-22T00:00:00.000Z",
    kind: "photo",
    url: "https://images.unsplash.com/photo-1520975958221-1f3cf148b0d6?auto=format&fit=crop&w=1400&q=70",
    description: "Офіційна подяка (фото)."
  },
  {
    id: "a2",
    title: "Відеоподяка від хлопців",
    date: "2025-11-05T00:00:00.000Z",
    kind: "video",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];
