"use client";

import { BlogPost } from "@/app/lib/types";
import { subjects } from "../ascii/ascii";
import { useRouter } from "next/navigation";

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
      className="w-full text-start max-w-md mx-auto bg-white dark:bg-black border border-black/10 dark:border-white/10 shadow-sm p-4 sm:p-6 mb-4 sm:mb-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer"
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-1 sm:gap-0">
          <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
            {post.createdAt}
          </span>
          <span className="px-2 py-1 bg-black/5 dark:bg-white/10 text-xs font-mono uppercase tracking-wide">
            {subjects.find((s) => s.subject === post.topic)?.ascii ||
              subjects[0].ascii}
          </span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold font-mono mb-1 text-black dark:text-white">
          {post.title}
        </h2>
        <p className="text-sm sm:text-md font-bold font-mono mb-1 text-gray-500">
          {post.description}
        </p>
      </div>
    </button>
  );
};

export default BlogPostCard;
