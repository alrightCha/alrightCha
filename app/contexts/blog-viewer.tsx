"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface BlogContext {
  topic: number;
  title: string;
  content: string;
  createdAt: string;
  description: string; 
}

interface BlogViewerContextType {
  isOpen: boolean;
  blogContent: string | null;
  blogData: BlogContext | null;
  openBlog: (content: string, data: BlogContext) => void;
  closeBlog: () => void;
}

const BlogViewerContext = createContext<BlogViewerContextType | undefined>(
  undefined
);

export function BlogViewerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [blogContent, setBlogContent] = useState<string | null>(null);
  const [blogData, setBlogData] = useState<BlogContext | null>(null);

  const openBlog = (content: string, data: BlogContext) => {
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
