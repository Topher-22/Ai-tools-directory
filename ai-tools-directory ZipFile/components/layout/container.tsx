import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: "full" | "7xl" | "6xl" | "5xl" | "4xl" | "3xl";
  padding?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ maxWidth = "7xl", padding = true, className, children, ...props }, ref) => {
    const maxWidthClasses = {
      full: "max-w-full",
      "7xl": "max-w-7xl",
      "6xl": "max-w-6xl",
      "5xl": "max-w-5xl",
      "4xl": "max-w-4xl",
      "3xl": "max-w-3xl",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full",
          maxWidthClasses[maxWidth],
          padding && "px-4 sm:px-6 lg:px-8",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export { Container };
