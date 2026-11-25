"use client";

import { BlogPost } from "@/app/lib/types";
import { subjects } from "../ascii/ascii";
import { useRouter } from "next/navigation";
import { cn } from "@/app/lib/utils";

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  const router = useRouter();

  const handleClick = () => {
    if (post.isBlog) {
      router.push(`/blog/${post.content}`);
    } else {
      const fullLink = `/paper/${post.content}`;
      const pdfWindow = window.open();
      if (pdfWindow) {
        pdfWindow.location.href = fullLink;
      }
    }
  };

  const topic =
    subjects.find((s) => s.subject === post.topic)?.ascii || subjects[0].ascii;

  return (
    <button
      onClick={handleClick}
      className={cn(
        "group w-full text-start py-5",
        "transition-opacity duration-200"
      )}
    >
      <div className="flex items-center justify-between gap-4 mb-3">
        <span className="text-xs font-mono text-black/35 dark:text-white/35">
          {post.createdAt}
        </span>
        <span className="text-xs font-mono text-black/25 dark:text-white/25 uppercase tracking-widest">
          {topic}
        </span>
      </div>
      <h2 className="text-base font-semibold text-black dark:text-white group-hover:underline underline-offset-4 decoration-black/30 dark:decoration-white/30">
        {post.title}
      </h2>
    </button>
  );
};

export default BlogPostCard;
