import { UserProfile, BlogPost, Website } from "@/app/lib/types";
import { art } from "@/app/components/ascii/ascii-ui";

export const neoseiki: UserProfile = {
  username: "Neoseiki",
  description:
    "Passionate about problem-solving & decentralization. <br /> Currently learning more on the maths behind it all.",
  pic: art,
  tag: "SWE",
  github: "https://github.com/alrightCha",
  mail: "neoseiki@proton.me",
  location: "Düsseldorf, DE",
  origin: "Tunisia",
};

export const blogs: BlogPost[] = [
  {
    title: "A practical Discv5 exploration",
    description:
      "A deep coverage of how discv5 operates & its implementation within a purely peer-to-peer network",
    createdAt: "October 2024",
    topic: 0,
    content: "/thesis.pdf",
    isBlog: false,
  },
  {
    title: "Decentralizing information",
    description:
      "Decentralizing money with bitcoin was only the first milestone. Decentralizing information is next. The final step being agriculture.",
    createdAt: "7 December 2025",
    topic: 0,
    content: "decentralizing-information",
    isBlog: true,
  },
  {
    title: "Proof of influence",
    description:
      "Moving towards AI and the bot era, all of our social construct in the digital era falls to ashes. A new internet needs to be placed if we wish to keep our online society.",
    createdAt: "10 December 2025",
    topic: 0,
    content: "proof-of-influence",
    isBlog: true,
  },
];

export const websites: Website[] = [
  {
    active: false,
    description:
      "Copytrade & make solana by following the biggest trenchers instead of losing all your money gambling",
    launchDate: "REFUSED FROM APP STORE",
    name: "Glue",
    url: "https://theglue.app",
  },
  {
    active: false,
    description: "A Youtube Thumbnail Maker combining AI & Paint-like features",
    launchDate: "15 July 2025",
    name: "Thumbnailsuite",
    url: "https://thumbnailsuite.com",
  },
  {
    active: false,
    description: "An Analytics Dashboard for Solana Dapps",
    launchDate: "2025",
    name: "Hypio",
    url: "https://hypio.app",
  },
  {
    active: false,
    description:
      "A bundle-first, pay later service for solana token launches through pumpfun using several self-made SDKs for the fastest operations",
    launchDate: "2025",
    name: "Pundle",
    url: "https://github.com/alrightCha/pundle_bundler",
  },
  {
    active: false,
    description:
      "A Telegram Sniper Bot for tokens launched through the Believe App on Solana",
    launchDate: "May 2025",
    name: "Disbelief",
    url: "https://github.com/alrightCha/disbelief",
  },
  {
    active: false,
    description: "A pure P2P Decentralized Social Media using Discv5 & DHTs",
    launchDate: "2024",
    name: "Sophet",
    url: "https://github.com/alrightCha/sophet",
  },
  {
    active: false,
    description:
      "A solana-based agar.io alternative with NFTs as skins & bets in solana",
    launchDate: "2024",
    name: "Wome",
    url: "https://github.com/alrightCha/crustyballz",
  },
  {
    active: true,
    description: "A Swift / SwiftUI boilerplate for making IOS apps",
    launchDate: "August 2023",
    name: "Shipswiftly",
    url: "https://shipswiftly.app",
  },
  {
    active: false,
    description:
      "An AI IOS App for Mental Health Coaching providing AI CBT Therapy, Mental Health Quizzes, Mood Tracking, Journaling & More.",
    launchDate: "July 2023",
    name: "Lunai",
    url: "https://lunai.app",
  },
];
