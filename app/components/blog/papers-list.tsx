"use client";

import BlogPostCard from "./blog-post";
import { BlogPost } from "@/app/lib/types";

const PapersList = ({ blogs }: { blogs: BlogPost[] }) => {
  return (
    <div className="flex flex-col w-full">
      {blogs.map((blog: BlogPost, index: number) => (
        <BlogPostCard key={index} post={blog} />
      ))}
    </div>
  );
};

export default PapersList;
