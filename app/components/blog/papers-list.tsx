"use client";

import BlogPostCard from "./blog-post";
import { BlogPost } from "@/app/lib/types";

const PapersList = ({ blogs }: { blogs: BlogPost[] }) => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-start justify-start gap-2 w-full">
      {blogs.map((blog: BlogPost, index: number) => (
        <BlogPostCard key={index} post={blog} />
      ))}
    </div>
  );
};

export default PapersList;
