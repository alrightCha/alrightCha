import { cn } from "@/app/lib/utils";

interface DescriptionProps {
  description: string;
  className?: string;
}

const Description = ({ description, className }: DescriptionProps) => {
  return (
    <p className={
      cn(className,
        "text-sm md:text-md px-4 md:px-0 tracking-widest")
    }>
      {description}
    </p >
  );
};

export default Description;
