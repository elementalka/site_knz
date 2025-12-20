import type { RaffleReport } from "@/types";

export const raffles: RaffleReport[] = [
  {
    id: "r1",
    title: "Розіграш лотів: ефір #12",
    date: "2025-12-05T18:00:00.000Z",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    imageUrl: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    winners: [
      { name: "Іван", prize: "Патч" },
      { name: "Оксана", prize: "Футболка" }
    ]
  }
];
