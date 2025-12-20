"use client";

import * as React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { MobileMenu } from "./mobile-menu";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  maxWidth?: "full" | "7xl" | "6xl" | "5xl";
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  showHeader = true,
  showFooter = true,
  maxWidth = "7xl",
  className,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const maxWidthClasses = {
    full: "",
    "7xl": "max-w-7xl",
    "6xl": "max-w-6xl",
    "5xl": "max-w-5xl",
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      {showHeader && (
        <Header
          onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      )}

      {/* Mobile Menu */}
      {showHeader && (
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className={cn("flex-1", className)}>
        <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", maxWidthClasses[maxWidth])}>
          {children}
        </div>
      </main>

      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  );
};

PageLayout.displayName = "PageLayout";

export { PageLayout };
