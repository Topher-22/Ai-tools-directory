import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-100",
        secondary:
          "border-transparent bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-100",
        accent:
          "border-transparent bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-100",
        success:
          "border-transparent bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
        warning:
          "border-transparent bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100",
        error:
          "border-transparent bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
        outline: "text-foreground border-gray-300 dark:border-gray-700",
        gold: "border-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-md",
        silver: "border-transparent bg-gradient-to-r from-gray-300 to-gray-500 text-white shadow-md",
        bronze: "border-transparent bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-md",
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
