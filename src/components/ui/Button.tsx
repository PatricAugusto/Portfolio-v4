import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver/40 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-gradient-to-r from-slate to-silver text-void glow-blue hover:from-silver hover:to-warm hover:text-white hover:shadow-[0_0_30px_rgba(210,166,142,0.25)]",
    ghost:
      "glass glass-hover text-white/80 hover:text-white",
    outline:
      "border border-silver/30 bg-transparent text-silver hover:border-warm/40 hover:bg-warm/10 hover:text-warm",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
