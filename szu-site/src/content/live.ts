import type { LiveAnnouncement } from "@/types";

export const liveAnnouncements: LiveAnnouncement[] = [
  {
    id: "l1",
    title: "Прямий ефір: розіграш лотів + звіт по зборах",
    startsAt: "2025-12-21T18:00:00.000Z",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    note: "Підключайтесь, буде розіграш і відповіді на питання."
  },
  {
    id: "l2",
    title: "Ефір на Facebook: включення з дороги",
    startsAt: "2025-12-22T17:30:00.000Z",
    platform: "facebook",
    url: "https://facebook.com/",
    note: "Ретрансляція в соцмережах."
  }
];
