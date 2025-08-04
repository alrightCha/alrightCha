"use client";

import { useState } from "react";
import { ExternalLink, Flame } from "lucide-react";
import { TextScramble } from "./text-scramble";

export interface Website {
  name: string;
  url: string;
  description: string;
  active: boolean;
  launchDate: string;
}

export const List = ({
  websites,
}: {
  websites: Website[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | undefined>(
    undefined
  );

  return (
    <div className="flex flex-col items-start justify-start gap-2 text-start">
      <TextScramble
        className="font-mono uppercase text-base sm:text-lg font-bold text-center border-dashed border-black/[.08] dark:border-white/[.145] border-b-4 p-1 m-4"
        as="span"
        speed={0.05}
      >
        latest projects
      </TextScramble>
      {websites.map((website: Website, index: number) => {
        return (
          <a
            href={website.url}
            target="_blank"
            key={website.name}
            className={`w-full transition-all duration-200 border-l-4 pl-4 py-2 cursor-pointer ${hoveredIndex === index
              ? "bg-black/5 dark:bg-white/10 border-l-yellow-400"
              : "bg-transparent border-l-black/10 dark:border-l-white/10"
              }`}
            onMouseOver={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <p
              className="block text-md w-full tracking-wide font-mono uppercase opacity-90 whitespace-normal"
            >
              <span className="flex items-center gap-2">
                <span>{website.name}</span>
                <span
                  className={`ml-2 px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide border transition-colors
                    ${website.active
                      ? 'bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200 dark:border-green-700'
                      : 'bg-gray-200 text-gray-700 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700'}
                  `}
                >
                  {website.active ? 'Active' : 'Archived'}
                </span>
                {['Sophet', 'Wome', 'Pundle'].includes(website.name) && (
                  <span className="flex items-center gap-1 ml-3 px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-semibold text-xs animate-pulse">
                    <Flame size={16} className="text-purple-500" />
                    Personal Achievement
                  </span>
                )}
                <ExternalLink className={`${hoveredIndex == index ? "opacity-100" : "opacity-0"}`} />
              </span>
            </p>
            <div className="text-sm text-black/70 dark:text-white/70 font-sans mt-1 mb-1">
              {website.description}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-black/50 dark:text-white/50 font-mono">
              <span className="underline hover:text-yellow-500 transition-colors">
                {website.url}
              </span>
              <span>Launched: {website.launchDate}</span>
            </div>
          </a>
        );
      })}
    </div >
  );
};
