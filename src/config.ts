import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://ylcheung.com",
  author: "Abraham Cheung",
  desc: "My homepage.",
  title: "Abraham Cheung",
  lightAndDarkMode: true,
};

export const PROJECTS: {
  date: string;
  title: string;
  description: string;
  href?: string;
}[] = [
  {
    date: "2023",
    title: "fr24",
    description:
      "Download and parse data from flightradar24.com with gRPC/JSON.",
    href: "https://github.com/cathaypacific8747/fr24",
  },
  {
    date: "2021",
    title: "am4",
    description:
      "Discord bot and various utilities for the game Airline Manager 4.",
    href: "https://github.com/cathaypacific8747/am4",
  },
];

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
    linkTitle: `${SITE.title} via Mail`,
    active: true,
  },
];
