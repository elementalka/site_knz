export type Social =
  | "facebook"
  | "instagram"
  | "telegram"
  | "tiktok"
  | "youtube"
  | "x"
  | "website";

export type SocialLink = { type: Social; url: string; label?: string };

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photoUrl?: string;
  bio: string;
  helped?: string[];
  thanks?: { title: string; url?: string; type: "photo" | "video" | "doc" }[];
  videoAppeal?: { title: string; url: string };
  socials: SocialLink[];
};

export type Fundraiser = {
  id: string;
  title: string;
  goalAmount: number;
  raisedAmount: number;
  type: "main" | "side";
  description: string;
  imageUrl?: string;
  jarUrl?: string;
  updatedAt: string;
};

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
};

export type LiveAnnouncement = {
  id: string;
  title: string;
  startsAt: string;
  platform: "youtube" | "facebook" | "instagram" | "tiktok";
  url: string;
  note?: string;
  imageUrl?: string;
};

export type AwardItem = {
  id: string;
  title: string;
  date?: string;
  kind: "photo" | "video" | "doc";
  url: string;
  description?: string;
};

export type MediaAsset = {
  id: string;
  title: string;
  category: "photo" | "video" | "doc";
  url: string;
  description?: string;
  related?: string[];
};

export type Partner = {
  id: string;
  name: string;
  logoUrl?: string;
  url?: string;
  note?: string;
};

export type ClosedFundraiser = {
  id: string;
  title: string;
  closedAt: string;
  totalRaised?: number;
  reportUrl?: string;
  imageUrl?: string;
};

export type RaffleReport = {
  id: string;
  title: string;
  date: string;
  videoUrl: string;
  winners?: { name: string; prize: string }[];
  imageUrl?: string;
};

export type SupportPerson = {
  id: string;
  name: string;
  service: "Юрист" | "Супровід ветеранів" | "Психолог" | "Інше";
  licenseOrEdpou?: string;
  photoUrl?: string;
  contacts: SocialLink[];
  info: string[];
};

export type GuidanceDoc = {
  id: string;
  title: string;
  category: "ВЛК/ВВК" | "Документи" | "Шаблони" | "Поради";
  description: string;
  steps: string[];
  files?: { title: string; url: string }[];
  imageUrl?: string;
};
