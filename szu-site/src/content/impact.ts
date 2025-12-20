import type { GalleryItem, StoryCard, TransparencyStep } from "@/types";

export const transparencyTimeline: TransparencyStep[] = [
  {
    id: "t1",
    title: "Збір оголошено",
    date: "2024-08-06T10:00:00.000Z",
    meta: "Старт збору на зв’язок і тепловізію для підрозділу.",
    imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "t2",
    title: "Передача обладнання",
    date: "2024-08-14T14:30:00.000Z",
    meta: "Команда передала 2 тепловізори та комплект Starlink.",
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "t3",
    title: "Звіт та документи",
    date: "2024-08-18T09:20:00.000Z",
    meta: "Додаємо фото, відео та підтвердження від підрозділу."
  },
  {
    id: "t4",
    title: "Подяка від військових",
    date: "2024-08-20T17:00:00.000Z",
    meta: "Отримали офіційний лист та відеоподяку."
  }
];

export const storyCards: StoryCard[] = [
  {
    id: "s1",
    title: "Тепловізор для 79-ї бригади",
    person: "Старший сержант Андрій",
    excerpt: "Закрили термінову потребу для нічного спостереження. Передача — у день запиту.",
    imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "s2",
    title: "Медичні набори для евакуації",
    person: "Медик Марина",
    excerpt: "Пакети з турнікетами та аптечками вирушили на передову вже наступного тижня.",
    imageUrl: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "s3",
    title: "Starlink для командного пункту",
    person: "Волонтерська група",
    excerpt: "Підключили стабільний зв’язок для координації на позиціях.",
    imageUrl: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Передача спорядження",
    type: "photo",
    url: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g2",
    title: "Кадри з евакуації",
    type: "photo",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g3",
    title: "Відеоподяка бригади",
    type: "video",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    previewUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
  }
];

export const donorsCount = 3200;
