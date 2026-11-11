import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground border-border",
        success:
          "border-emerald-500/20 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
        warning:
          "border-amber-500/20 bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
        sky:
          "border-sky-300/40 bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-800",
        lavender:
          "border-violet-300/40 bg-violet-50 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300 dark:border-violet-800",
        purple:
          "border-violet-300/40 bg-violet-50 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300 dark:border-violet-800",
        sinta:
          "border-sky-400/30 bg-sky-100/70 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200 font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
