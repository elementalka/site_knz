import type { NewsItem } from "@/types";

export const news: NewsItem[] = [
  {
    id: "n1",
    title: "Передали комплект зв’язку та паверстанції",
    date: "2025-12-18T16:30:00.000Z",
    excerpt: "Дякуємо всім, хто долучився. Фото/відео — у медіаархіві.",
    imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    tags: ["звіт", "передача"]
  },
  {
    id: "n2",
    title: "Починаємо новий збір на дрони",
    date: "2025-12-15T10:00:00.000Z",
    excerpt: "Ціль 150 000 грн. Деталі та банку — у розділі «Збори».",
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    tags: ["збір"]
  },
  {
    id: "n3",
    title: "Звіт по закупівлі Starlink та рацій",
    date: "2025-12-11T09:20:00.000Z",
    excerpt: "Опублікували фото доставки та накладні — усе у розділі медіа.",
    imageUrl: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    tags: ["звіт", "техніка"]
  }
];
