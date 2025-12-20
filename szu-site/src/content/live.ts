import type { LiveAnnouncement } from "@/types";

export const liveAnnouncements: LiveAnnouncement[] = [
  {
    id: "l1",
    title: "Прямий ефір: розіграш лотів + звіт по зборах",
    startsAt: "2025-12-21T18:00:00.000Z",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    note: "Підключайтесь, буде розіграш і відповіді на питання.",
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "l2",
    title: "Ефір на Facebook: включення з дороги",
    startsAt: "2025-12-22T17:30:00.000Z",
    platform: "facebook",
    url: "https://facebook.com/",
    note: "Ретрансляція в соцмережах.",
    imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80"
  }
];
