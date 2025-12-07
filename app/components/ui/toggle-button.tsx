"use client";

interface ToggleButtonProps {
  activeTab: "papers" | "blog";
  onToggle: (tab: "papers" | "blog") => void;
}

const ToggleButton = ({ activeTab, onToggle }: ToggleButtonProps) => {
  return (
    <div className="relative inline-flex items-center border-dashed border-black/[.08] dark:border-white/[.145] border-4 p-1 m-4">
      <div className="relative flex bg-black/5 dark:bg-white/5">
        <button
          onClick={() => onToggle("papers")}
          className={`
            px-6 py-2 font-mono uppercase text-sm font-bold transition-all duration-300
            ${
              activeTab === "papers"
                ? "bg-black dark:bg-white text-white dark:text-black"
                : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
            }
          `}
        >
          Papers
        </button>
        <button
          onClick={() => onToggle("blog")}
          className={`
            px-6 py-2 font-mono uppercase text-sm font-bold transition-all duration-300
            ${
              activeTab === "blog"
                ? "bg-black dark:bg-white text-white dark:text-black"
                : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
            }
          `}
        >
          Blogs
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
