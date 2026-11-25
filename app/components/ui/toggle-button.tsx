"use client";

interface ToggleButtonProps {
  activeTab: "papers" | "blog";
  onToggle: (tab: "papers" | "blog") => void;
}

const ToggleButton = ({ activeTab, onToggle }: ToggleButtonProps) => {
  return (
    <div className="flex items-center gap-6">
      {(["blog", "papers"] as const).map((tab) => (
        <button
          key={tab}
          onClick={() => onToggle(tab)}
          className={`
            pb-2 font-mono text-xs uppercase tracking-widest transition-colors duration-200
            ${activeTab === tab
              ? "border-b border-black dark:border-white text-black dark:text-white"
              : "text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60"
            }
          `}
        >
          {tab === "blog" ? "Articles" : "Papers"}
        </button>
      ))}
    </div>
  );
};

export default ToggleButton;
