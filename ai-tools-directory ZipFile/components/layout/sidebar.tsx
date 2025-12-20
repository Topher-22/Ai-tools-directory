"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  children: React.ReactNode;
  sticky?: boolean;
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      title,
      children,
      sticky = true,
      mobileOpen = false,
      onMobileClose,
      className,
      ...props
    },
    ref
  ) => {
    React.useEffect(() => {
      if (mobileOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
      return () => {
        document.body.style.overflow = "unset";
      };
    }, [mobileOpen]);

    return (
      <>
        {/* Mobile Backdrop */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden animate-in fade-in duration-200"
            onClick={onMobileClose}
          />
        )}

        {/* Sidebar */}
        <aside
          ref={ref}
          className={cn(
            "w-full lg:w-64 xl:w-80",
            // Desktop styles
            "hidden lg:block",
            sticky && "lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto",
            // Mobile styles
            mobileOpen &&
              "fixed inset-y-0 left-0 z-50 flex w-full max-w-sm bg-white dark:bg-gray-950 shadow-2xl animate-in slide-in-from-left duration-300 lg:hidden",
            className
          )}
          {...props}
        >
          <div className="h-full p-6 space-y-6">
            {/* Mobile Header */}
            {mobileOpen && (
              <div className="flex items-center justify-between lg:hidden">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {title || "Filters"}
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onMobileClose}
                  className="lg:hidden"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            )}

            {/* Desktop Header */}
            {title && (
              <div className="hidden lg:block">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {title}
                </h2>
                <Separator className="mt-4" />
              </div>
            )}

            {/* Sidebar Content */}
            {children}
          </div>
        </aside>
      </>
    );
  }
);

Sidebar.displayName = "Sidebar";

// Sidebar Section Component
interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

const SidebarSection = React.forwardRef<HTMLDivElement, SidebarSectionProps>(
  ({ title, children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-3", className)} {...props}>
        {title && (
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            {title}
          </h3>
        )}
        {children}
      </div>
    );
  }
);

SidebarSection.displayName = "SidebarSection";

export { Sidebar, SidebarSection };
