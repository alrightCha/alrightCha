"use client";
import { TextScramble } from "../ui/text-scramble";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { UserProfile } from "@/app/lib/types";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

type ProfileHeaderProps = {
  user: UserProfile;
  className?: string;
};

const ProfileHeader = ({ user, className }: ProfileHeaderProps) => {
  return (
    <div className={cn("w-full pb-8 border-b border-black/10 dark:border-white/10", className)}>
      <div className="flex flex-col gap-3">
        <TextScramble
          className="font-mono uppercase text-xl tracking-wider"
          as="span"
          speed={0.05}
        >
          {user.username}
        </TextScramble>
        <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-1 text-xs text-black/40 dark:text-white/40 font-mono">
          {user.github && (
            <Link
              className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"
              href={user.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub
            </Link>
          )}
          {user.mail && (
            <Link
              className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"
              href={`mailto:${user.mail}`}
              target="_blank"
            >
              <IoIosMail />
              {user.mail}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
