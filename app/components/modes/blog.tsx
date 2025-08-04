"use client";

import { TextScramble } from "../ui/text-scramble";
import BlogPost from "../blogpost";
import { BlogContext } from "@/app/contexts/blog-viewer";

const BlogPage = ({
  blogs,
}: {
  blogs: BlogContext[];
}) => {
  return (
    <div className="h-full flex flex-col items-start flex-wrap w-full px-2 sm:px-0">
      <TextScramble
        className="font-mono uppercase text-base sm:text-lg font-bold text-center border-dashed border-black/[.08] dark:border-white/[.145] border-b-4 p-1 m-4"
        as="span"
        speed={0.05}
      >
        papers
      </TextScramble>
      <div className="flex flex-col sm:flex-row flex-wrap items-start justify-start gap-2 w-full">
        {blogs.map((blog: BlogContext, index: number) => (
          <BlogPost key={index} post={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
