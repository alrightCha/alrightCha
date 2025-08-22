"use client";
import Ascii from "../ascii/ascii-ui";
import { TextScramble } from "../ui/text-scramble";
import Link from "next/link";
import Description from "./description";
import { cn } from "@/app/lib/utils";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaMapPin } from "react-icons/fa";

type UserProfile = {
  username: string;
  description: string;
  pic?: string;
  mail?: string;
  github: string;
  joined?: number;
  tag?: string;
  location: string;
  origin: string;
};

type ProfileHeaderProps = {
  user: UserProfile;
  className?: string;
};

const ProfileHeader = ({ user, className }: ProfileHeaderProps) => {
  return (
    <div className={cn("flex flex-col items-center md:items-start mt-1 w-full px-2 sm:px-0 my-2", className)}>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-1 w-full">
        <Ascii artHolder={user.pic} />
        <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-4 max-w-full md:max-w-[550px] w-full">
          <div className="flex flex-col md:gap-0 gap-2 md:flex-row p-2 md:p-0 items-start md:justify-between w-full">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex flex-col md:flex-row items-center justify-start md:gap-2 gap-1 w-full">
                <TextScramble
                  className="font-mono uppercase text-lg sm:text-xl p-1"
                  as="span"
                  speed={0.05}
                >
                  {user.username}
                </TextScramble>
                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10 text-xs font-mono uppercase tracking-wide border border-black/10 dark:border-white/10">
                  {user.tag}
                </span>
              </div>

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
            <span className="flex items-center gap-2 p-1 font-bold">
              {/* You can use a location icon if desired, e.g. FaMapMarkerAlt */}
              {user.location}
              <FaMapPin />
            </span>
          </div>
          <Description description={user.description} className="w-full" />
          {/* Social and location row */}
        </div>
      </div>
    </div>
  );
};

export type { UserProfile };
export default ProfileHeader;
