"use client";

import { BlogPost } from "@/app/lib/types";
import { subjects } from "../ascii/ascii";
import { useRouter } from "next/navigation";
import { cn } from "@/app/lib/utils";

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  const router = useRouter();

  const handleClick = () => {
    if (post.isBlog) {
      // Navigate to blog viewer page
      router.push(`/blog/${post.content}`);
    } else {
      // Open PDF in new window
      const fullLink = `/paper/${post.content}`;
      const pdfWindow = window.open();
      if (pdfWindow) {
        pdfWindow.location.href = fullLink;
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "w-full text-start bg-white dark:bg-black shadow-sm p-2 transition-all duration-200 border-l-4 border-l-black/10 dark:border-l-white/10 cursor-pointer",
        "hover:bg-black/5 hover:dark:bg-white/10 hover:border-l-yellow-400"
      )}
    >
      <div className="flex flex-col gap-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-1 sm:gap-0">
          <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
            {post.createdAt}
          </span>
          <span className="px-2 py-1 bg-black/5 dark:bg-white/10 text-xs font-mono uppercase tracking-wide">
            {subjects.find((s) => s.subject === post.topic)?.ascii ||
              subjects[0].ascii}
          </span>
        </div>
        <h2 className="text-lg sm:text-xl mb-1 text-black dark:text-white">
          {post.title}
        </h2>
        <p className="text-sm sm:text-md mb-1 text-gray-500">
          {post.description}
        </p>
      </div>
    </button>
  );
};

export default BlogPostCard;
