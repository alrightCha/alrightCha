"use client";

import { subjects } from "../ascii/ascii";
import Link from "next/link";

interface BlogViewerProps {
  title: string;
  topic: number;
  htmlContent: string;
  createdAt: string;
}

const BlogViewer = ({ title, topic, htmlContent, createdAt }: BlogViewerProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-8 py-8">
      <div className="w-full max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-6 text-sm font-mono text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <span>←</span>
          <span>Back to home</span>
        </Link>

        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 bg-black/5 dark:bg-white/10 text-xs font-mono uppercase tracking-wide">
              {subjects.find((s) => s.subject === topic)?.ascii || subjects[0].ascii}
            </span>
            <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
              {createdAt}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-black dark:text-white">
            {title}
          </h1>
        </div>

        <article
          className="prose prose-lg dark:prose-invert prose-headings:font-mono prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:bg-black/5 dark:prose-code:bg-white/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-black/5 dark:prose-pre:bg-white/10 prose-pre:border prose-pre:border-black/10 dark:prose-pre:border-white/10 max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
};

export default BlogViewer;
