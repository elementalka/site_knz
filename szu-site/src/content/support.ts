import type { SupportPerson } from "@/types";

export const supportPeople: SupportPerson[] = [
  {
    id: "s1",
    name: "Петро Іваненко",
    service: "Юрист",
    licenseOrEdpou: "Свідоцтво/ліцензія №12345",
    contacts: [{ type: "telegram", url: "https://t.me/" }, { type: "website", url: "https://example.com" }],
    info: ["Консультації щодо ВЛК/ВВК", "Супровід звернень", "Підготовка документів"]
  },
  {
    id: "s2",
    name: "Ольга Коваль",
    service: "Супровід ветеранів",
    contacts: [{ type: "telegram", url: "https://t.me/" }],
    info: ["Супровід кейсів", "Навігація по процедурах", "Комунікація з установами"]
  }
];
