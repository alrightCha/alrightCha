"use client";
import Ascii from "../ascii/ascii-ui";
import { TextScramble } from "../ui/text-scramble";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { UserProfile } from "@/app/lib/types";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaMapPin } from "react-icons/fa";

type ProfileHeaderProps = {
  user: UserProfile;
  className?: string;
};

const ProfileHeader = ({ user, className }: ProfileHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center md:items-start mt-1 w-full px-2 sm:px-0 my-2 gap-4",
        className
      )}
    >
      <div className="flex flex-row items-start gap-2 md:gap-1 w-full">
        <Ascii artHolder={user.pic} />
        <div className="flex flex-col gap-2 p-2 items-start w-full">
          <div className="flex md:flex-row flex-col items-start md:items-center justify-between w-full">
            <TextScramble
              className="font-mono uppercase text-lg sm:text-xl"
              as="span"
              speed={0.05}
            >
              {user.username}
            </TextScramble>
            <div className="flex flex-row items-center justify-start md:gap-2 gap-1">
              <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10 text-xs font-mono uppercase tracking-wide border border-black/10 dark:border-white/10">
                {user.tag}
              </span>
              <span className="md:self-start flex items-center gap-2 p-1 text-sm md:text-baseline md:font-bold">
                {user.location}
                <FaMapPin />
              </span>
            </div>
          </div>
          <p
            className={cn(
              "w-full hidden md:flex",
              "text-sm md:text-md px-4 md:px-0 tracking-widest"
            )}
            dangerouslySetInnerHTML={{ __html: user.description }}
          />
          <div className="flex flex-row items-center gap-4 mt-2 opacity-80 text-sm">
            {user.github && (
              <Link
                className="flex items-center gap-1 hover:underline"
                href={user.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-black dark:text-white" />
                GitHub
              </Link>
            )}
            {user.mail && (
              <Link
                className="flex items-center gap-1 hover:underline"
                href={`mailto::${user.mail}`}
                target="_blank"
              >
                <IoIosMail />
                {user.mail}
              </Link>
            )}
          </div>
        </div>
      </div>
      <p
        className={cn(
          "w-full md:hidden",
          "text-sm md:text-md px-4 md:px-0 tracking-widest"
        )}
        dangerouslySetInnerHTML={{ __html: user.description }}
      />
    </div>
  );
};

export default ProfileHeader;
