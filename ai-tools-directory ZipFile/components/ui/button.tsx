import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary-700 text-primary-foreground hover:bg-primary-800 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg",
        destructive:
          "bg-error text-white hover:bg-red-600 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg",
        outline:
          "border-2 border-primary-700 text-primary-700 bg-transparent hover:bg-primary-50 hover:scale-105 active:scale-95",
        secondary:
          "bg-secondary-700 text-secondary-foreground hover:bg-secondary-800 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg",
        accent:
          "bg-accent-500 text-accent-foreground hover:bg-accent-600 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg",
        ghost: "hover:bg-accent-100 hover:text-accent-900 hover:scale-105 active:scale-95",
        link: "text-primary-700 underline-offset-4 hover:underline hover:text-primary-800",
        gradient:
          "bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-500 text-white hover:from-primary-700 hover:via-secondary-700 hover:to-accent-600 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
