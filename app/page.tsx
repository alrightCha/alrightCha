"use client";

import { useState } from "react";
import { List } from "./components/ui/custom-list";
import ProfileHeader from "./components/profile/header";
import PapersList from "./components/blog/papers-list";
import ToggleButton from "./components/ui/toggle-button";
import { blogs, websites, neoseiki } from "./data/content";

export default function AccountFeatureDetail() {
  const [activeTab, setActiveTab] = useState<"papers" | "blog">("blog");

  const filteredPosts = blogs.filter((blog) =>
    activeTab === "papers" ? !blog.isBlog : blog.isBlog
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-2 sm:px-0">
      <div className="w-full max-w-3xl flex flex-col items-center justify-between border-dashed border-black/[.08] dark:border-white/[.145] border-1 min-h-screen bg-white/80 dark:bg-black/80 shadow-md">
        <ProfileHeader user={neoseiki} />
        <div className="flex flex-col items-start gap-2 w-full">
          <ToggleButton activeTab={activeTab} onToggle={setActiveTab} />
          <PapersList blogs={filteredPosts} />
        </div>
        <List websites={websites} />
      </div>
    </div>
  );
}
