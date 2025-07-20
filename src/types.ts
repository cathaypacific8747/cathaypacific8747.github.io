export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  lightAndDarkMode: boolean;
  papersPerPage: number;
};

export type SocialObjects = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type SocialIcons = {
  [social in SocialMedia]: string;
};

export type SocialMedia = "Github" | "LinkedIn" | "Mail";
