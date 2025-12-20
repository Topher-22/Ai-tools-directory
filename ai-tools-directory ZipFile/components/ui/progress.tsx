import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  variant?: "default" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
}

const variantColors = {
  default: "bg-primary-600",
  success: "bg-green-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
};

const sizeMap = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
};

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value = 0,
      max = 100,
      variant = "default",
      size = "md",
      showValue = false,
      className,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min((value / max) * 100, 100);

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div
          className={cn(
            "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800",
            sizeMap[size]
          )}
        >
          <div
            className={cn(
              "h-full transition-all duration-500 ease-out",
              variantColors[variant]
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showValue && (
          <div className="mt-1 text-right text-xs text-gray-600 dark:text-gray-400">
            {Math.round(percentage)}%
          </div>
        )}
      </div>
    );
  }
);

Progress.displayName = "Progress";

export { Progress };
