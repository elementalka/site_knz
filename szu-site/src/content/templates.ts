import type { GuidanceDoc } from "@/types";

export const guidanceDocs: GuidanceDoc[] = [
  {
    id: "g1",
    title: "Як проходити ВЛК/ВВК: покроково",
    category: "ВЛК/ВВК",
    description: "Стисла інструкція для підготовки та проходження.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    steps: [
      "Зберіть базовий пакет документів (паспорт/ІПН/виписки).",
      "Підготуйте медичні довідки та результати обстежень.",
      "Сформуйте список питань до лікарів.",
      "Зафіксуйте результати та копії документів після проходження."
    ],
    files: [
      { title: "Шаблон заяви (приклад)", url: "https://example.com/template.docx" },
      { title: "Чекліст документів (PDF)", url: "https://example.com/checklist.pdf" }
    ]
  }
];
