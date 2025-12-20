import type { TeamMember } from "@/types";

export const team: TeamMember[] = [
  {
    id: "t1",
    name: "Максим Б.",
    role: "Координація зборів / логістика",
    photoUrl: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=70",
    bio: "Організовує збори, закупівлі, координацію з підрозділами, доставку та звітність.",
    helped: ["Дрони та комплектуючі", "Тепловізійні приціли", "Ремкомплекти авто"],
    thanks: [
      { title: "Подяка від підрозділу", type: "photo", url: "https://images.unsplash.com/photo-1520975693411-b64bfe33a6f6?auto=format&fit=crop&w=1200&q=70" }
    ],
    videoAppeal: { title: "Звернення команди", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    socials: [
      { type: "telegram", url: "https://t.me/" },
      { type: "instagram", url: "https://instagram.com/" }
    ]
  },
  {
    id: "t2",
    name: "Олена С.",
    role: "Комунікації / медіа",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=70",
    bio: "Веде комунікацію, фото/відеозвіти, публікації та медіаархів.",
    helped: ["Звіти по закритих зборах", "Контент з передач"],
    socials: [{ type: "facebook", url: "https://facebook.com/" }, { type: "youtube", url: "https://youtube.com/" }]
  },
  {
    id: "t3",
    name: "Ігор К.",
    role: "Закупівлі / технічна перевірка",
    photoUrl: "https://images.unsplash.com/photo-1520975958221-1f3cf148b0d6?auto=format&fit=crop&w=800&q=70",
    bio: "Підбирає моделі, перевіряє техніку, веде список потреб.",
    helped: ["Starlink", "Павербанки", "Рації"],
    socials: [{ type: "telegram", url: "https://t.me/" }]
  },
  {
    id: "t4",
    name: "Андрій М.",
    role: "Водій / доставка",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=70",
    bio: "Доставка по напрямках, координація точок передачі.",
    helped: ["Доставка гуманітарки", "Доставка техніки"],
    socials: [{ type: "instagram", url: "https://instagram.com/" }]
  },
  {
    id: "t5",
    name: "Наталія Р.",
    role: "Документообіг / звіти",
    photoUrl: "https://images.unsplash.com/photo-1524503033411-f6b9d6f3c3b1?auto=format&fit=crop&w=800&q=70",
    bio: "Веде документи, шаблони звернень, структурує звітність.",
    helped: ["Шаблони", "Поради по ВЛК/ВВК"],
    socials: [{ type: "website", url: "https://example.com" }]
  },
  {
    id: "t6",
    name: "Дмитро Л.",
    role: "Партнерства",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=70",
    bio: "Працює з партнерами та спонсорами, узгоджує співпрацю.",
    helped: ["Партнерські поставки", "Комунікація з бізнесом"],
    socials: [{ type: "facebook", url: "https://facebook.com/" }]
  },
  {
    id: "t7",
    name: "Юлія П.",
    role: "Підтримка ветеранів / супровід",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=70",
    bio: "Інформаційна допомога ветеранам та супровід кейсів.",
    helped: ["Супровід ветеранів", "Контакти юристів"],
    socials: [{ type: "telegram", url: "https://t.me/" }]
  }
];
