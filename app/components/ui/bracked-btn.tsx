"use client";
import { cn } from "../../lib/utils";

const BrackedBtn = ({
  title,
  className,
  onClick,
}: {
  title: string;
  className: string | undefined;
  onClick: () => void;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 p-2 text-sm",
        className || ""
      )}
    >
      [
      <button type="button" onClick={onClick}>
        <p className="mx-2 cursor-pointer hover:underline"> {title}</p>
      </button>
      ]
    </div>
  );
};

export default BrackedBtn;
