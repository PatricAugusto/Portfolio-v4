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
        "mb-12 space-y-3",
        align === "center" && "text-center",
      )}
    >
      <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-[0.18em] text-silver/75 uppercase">
        <span aria-hidden="true" className="h-px w-5 bg-warm/70" />
        {tag}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-sm leading-7 text-white/55 sm:text-base",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
