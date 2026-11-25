"use client";

import { useState } from "react";
import ProfileHeader from "./components/profile/header";
import PapersList from "./components/blog/papers-list";
import ToggleButton from "./components/ui/toggle-button";
import { blogs, neoseiki } from "./data/content";

export default function AccountFeatureDetail() {
  const [activeTab, setActiveTab] = useState<"papers" | "blog">("blog");

  const filteredPosts = blogs.filter((blog) =>
    activeTab === "papers" ? !blog.isBlog : blog.isBlog
  );

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-2xl flex flex-col gap-10">
        <ProfileHeader user={neoseiki} />
        <div className="flex flex-col gap-1">
          <ToggleButton activeTab={activeTab} onToggle={setActiveTab} />
          <PapersList blogs={filteredPosts} />
        </div>
      </div>
    </div>
  );
}
