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
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
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
];
