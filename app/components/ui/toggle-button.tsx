"use client";

interface ToggleButtonProps {
  activeTab: "papers" | "blog";
  onToggle: (tab: "papers" | "blog") => void;
}

const ToggleButton = ({ activeTab, onToggle }: ToggleButtonProps) => {
  return (
    <div className="relative inline-flex m-4 items-center p-1 bg-black/[.03] dark:bg-white/[.03] border-black/[.06] dark:border-white/[.08]">
      <div className="relative flex">
        {/* Sliding background indicator */}
        <div
          className={`absolute inset-y-0 w-1/2 transition-transform duration-300 ease-out ${
            activeTab === "blog" ? "translate-x-full" : "translate-x-0"
          }`}
        />

        <button
          onClick={() => onToggle("papers")}
          className={`
            relative z-10 px-5 py-1.5 font-mono uppercase text-xs font-semibold transition-colors duration-300
            ${
              activeTab === "papers"
                ? "text-white border-b-2 border-dashed"
                : "text-black/50 dark:text-white/50 hover:text-black/70 dark:hover:text-white/70"
            }
          `}
        >
          Papers
        </button>
        <button
          onClick={() => onToggle("blog")}
          className={`
            relative z-10 px-5 py-1.5 font-mono uppercase text-xs font-semibold transition-colors duration-300
            ${
              activeTab === "blog"
                ? "text-white border-b-2 border-dashed"
                : "text-black/50 dark:text-white/50 hover:text-black/70 dark:hover:text-white/70"
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
