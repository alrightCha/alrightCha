"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { BlogPost } from "@/app/lib/types";

interface BlogViewerContextType {
  isOpen: boolean;
  blogContent: string | null;
  blogData: BlogPost | null;
  openBlog: (content: string, data: BlogPost) => void;
  closeBlog: () => void;
}

const BlogViewerContext = createContext<BlogViewerContextType | undefined>(
  undefined
);

export function BlogViewerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [blogContent, setBlogContent] = useState<string | null>(null);
  const [blogData, setBlogData] = useState<BlogPost | null>(null);

  const openBlog = (content: string, data: BlogPost) => {
    setBlogContent(content);
    setBlogData(data);
    setIsOpen(true);
  };

  const closeBlog = () => {
    setIsOpen(false);
    setBlogContent(null);
    setBlogData(null);
  };

  return (
    <BlogViewerContext.Provider
      value={{
        isOpen,
        blogContent,
        blogData,
        openBlog,
        closeBlog,
      }}
    >
      {children}
    </BlogViewerContext.Provider>
  );
}

export function useBlogViewer() {
  const context = useContext(BlogViewerContext);
  if (context === undefined) {
    throw new Error("useBlogViewer must be used within a BlogViewerProvider");
  }
  return context;
}
