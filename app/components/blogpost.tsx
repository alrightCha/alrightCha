import React from "react";
import { BlogContext } from "../contexts/blog-viewer";
import { subjects } from "./ascii/ascii";

const SkeletonLoader = () => (
  <div className="w-[400px] max-w-3xl mx-auto bg-white dark:bg-black border border-black/10 dark:border-white/10 shadow-sm p-6 mb-6">
    <div className="flex flex-col gap-2 animate-pulse">
      <div className="flex items-center justify-between mb-2">
        <span className="h-4 w-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 block" />
        <span className="h-4 w-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 block" />
      </div>
      <div className="h-8 w-1/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 mb-1" />
      <div className="flex items-center gap-2 mb-2">
        <span className="h-4 w-20 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 block" />
      </div>
      <div className="space-y-2 mt-2">
        <div className="h-3 w-1/2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800" />
        <div className="h-3 w-1/3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800" />
        <div className="h-3 w-1/3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800" />
        <div className="h-3 w-1/2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800" />
      </div>
    </div>
  </div>
);

const BlogPost = ({ post }: { post: BlogContext }) => {

  const openPDF = (pdfLink: string) => {
    const fullLink = `/paper/${pdfLink}`
    const pdfWindow = window.open();
    if (pdfWindow) {
      pdfWindow.location.href = fullLink;
    }
  }

  return (
    <button onClick={() => openPDF(post.content)} className="w-full text-start max-w-md mx-auto bg-white dark:bg-black border border-black/10 dark:border-white/10 shadow-sm p-4 sm:p-6 mb-4 sm:mb-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
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

export default BlogPost;
