import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://ylcheung.com",
  author: "Abraham Cheung",
  desc: "My homepage.",
  title: "Abraham Cheung",
  lightAndDarkMode: true,
  papersPerPage: 5,
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/cathaypacific8747",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abraham-c-6666bb10a/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:abrahamcheung8747@gmail.com",
    linkTitle: `${SITE.title} on Mail`,
    active: true,
  },
];
