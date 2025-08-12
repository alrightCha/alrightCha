import { UserProfile } from "./components/profile/header";
import { art } from "./components/ascii/ascii-ui";
import { BlogContext } from "./contexts/blog-viewer";
import { Website } from "./components/ui/custom-list";

export const neoseiki: UserProfile = {
  username: "i go by Neoseiki",
  description:
    "Passionate about problem-solving & decentralization, I have developed over 20 projects in the past 3 years. Successfully finished my studies in 2024 with a perfect 1.0 in my thesis. Always looking for new challenges. Currently learning about cryptography & ZKPs.",
  pic: art,
  tag: "SWE",
  github: "https://github.com/alrightCha",
  linkedin: "https://www.linkedin.com/in/youssefchammam/",
  mail: "neoseiki@proton.me",
  location: "Berlin, DE",
  origin: "Tunisia",
};

export const blogs: BlogContext[] = [
  {
    title: "A practical Discv5 exploration",
    description:
      "A deep coverage of how discv5 operates & its implementation within a purely peer-to-peer network",
    createdAt: "October 2024",
    topic: 0,
    content: "/thesis.pdf",
  },
];

export const websites: Website[] = [
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
    active: true,
    description:
      "An AI IOS App for Mental Health Coaching providing AI CBT Therapy, Mental Health Quizzes, Mood Tracking, Journaling & More.",
    launchDate: "July 2023",
    name: "Lunai",
    url: "https://lunai.app",
  },
];
