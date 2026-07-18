import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  tag,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 space-y-4",
        align === "center" && "text-center",
      )}
    >
      <span className="inline-block rounded-full border border-silver/25 bg-silver/5 px-4 py-1.5 font-mono text-xs tracking-widest text-silver uppercase">
        {tag}
      </span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base text-white/60 sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
