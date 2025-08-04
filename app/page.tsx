import { List } from "./components/ui/custom-list";
import ProfileHeader from "./components/profile/header";

import BlogPage from "./components/modes/blog";
import { blogs, websites } from "./state";
import { neoseiki } from "./state";


export default function AccountFeatureDetail() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-2 sm:px-0">
      <div className="w-full max-w-3xl flex flex-col items-center justify-between border-dashed border-black/[.08] dark:border-white/[.145] border-1 min-h-screen bg-white/80 dark:bg-black/80 shadow-md">
        <ProfileHeader
          user={neoseiki}
        />
        <BlogPage
          blogs={blogs}
        />
        <List
          websites={websites}
        />
      </div>
    </div>
  );
}
