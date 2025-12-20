import type { MediaAsset } from "@/types";

export const mediaAssets: MediaAsset[] = [
  {
    id: "m1",
    title: "Фото з передачі техніки (напрямок X)",
    category: "photo",
    url: "https://images.unsplash.com/photo-1520975693411-b64bfe33a6f6?auto=format&fit=crop&w=1400&q=70",
    description: "Передача техніки. Публікуємо з дозволу."
  },
  {
    id: "m2",
    title: "Відео-огляд закупівлі",
    category: "video",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Огляд, що саме купили."
  },
  {
    id: "m3",
    title: "Документ: акт передачі (приклад)",
    category: "doc",
    url: "https://example.com/document.pdf",
    description: "Посилання на документ/Google Drive/сайт."
  }
];
