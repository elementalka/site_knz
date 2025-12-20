import type { SupportPerson } from "@/types";

export const supportPeople: SupportPerson[] = [
  {
    id: "s1",
    name: "Петро Іваненко",
    service: "Юрист",
    licenseOrEdpou: "Свідоцтво/ліцензія №12345",
    photoUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
    contacts: [{ type: "telegram", url: "https://t.me/" }, { type: "website", url: "https://example.com" }],
    info: ["Консультації щодо ВЛК/ВВК", "Супровід звернень", "Підготовка документів"]
  },
  {
    id: "s2",
    name: "Ольга Коваль",
    service: "Супровід ветеранів",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    contacts: [{ type: "telegram", url: "https://t.me/" }],
    info: ["Супровід кейсів", "Навігація по процедурах", "Комунікація з установами"]
  }
];
