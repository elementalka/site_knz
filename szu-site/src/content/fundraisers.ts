import type { Fundraiser } from "@/types";

export const fundraisers: Fundraiser[] = [
  {
    id: "f-main-150",
    title: "Основний збір: 150 000 грн на дрони та комплектуючі",
    goalAmount: 150000,
    raisedAmount: 62000,
    type: "main",
    description:
      "Закриваємо потребу підрозділу: дрони + комплектуючі/ремнабір. Всі надходження і витрати — у звіті після закриття.",
    jarUrl: "https://send.monobank.ua/jar/xxxxxxxxx",
    updatedAt: "2025-12-20T12:00:00.000Z"
  },
  {
    id: "f-side-1",
    title: "Суміжний збір: 100 000 грн на Starlink та зв’язок",
    goalAmount: 100000,
    raisedAmount: 41000,
    type: "side",
    description: "Зв’язок = життя. Потрібні Starlink/роутери/кабелі/живлення.",
    jarUrl: "https://send.monobank.ua/jar/yyyyyyyyy",
    updatedAt: "2025-12-20T12:00:00.000Z"
  },
  {
    id: "f-side-2",
    title: "Суміжний збір: 100 000 грн на авто-ремонт та шини",
    goalAmount: 100000,
    raisedAmount: 27500,
    type: "side",
    description: "Ремонт підвісок/гуми/розхідників для евакуаційних та робочих авто.",
    jarUrl: "https://send.monobank.ua/jar/zzzzzzzzz",
    updatedAt: "2025-12-20T12:00:00.000Z"
  }
];
