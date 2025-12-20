"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import {
  LayoutGrid,
  BookOpen,
  GitCompare,
  Sparkles,
  User,
  Settings,
  LogOut,
  Moon,
  Sun,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = React.forwardRef<HTMLDivElement, MobileMenuProps>(
  ({ isOpen, onClose }, ref) => {
    const pathname = usePathname();
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const navigation = [
      { name: "Browse Tools", href: "/tools", icon: LayoutGrid },
      { name: "Categories", href: "/categories", icon: BookOpen },
      { name: "Compare", href: "/compare", icon: GitCompare },
      { name: "Blog", href: "/blog", icon: Sparkles },
    ];

    const userMenu = [
      { name: "Dashboard", href: "/dashboard", icon: User },
      { name: "Settings", href: "/settings", icon: Settings },
    ];

    const isActive = (href: string) => pathname === href;

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      document.documentElement.classList.toggle("dark");
    };

    React.useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
      return () => {
        document.body.style.overflow = "unset";
      };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden animate-in fade-in duration-200"
          onClick={onClose}
        />

        {/* Menu Panel */}
        <div
          ref={ref}
          className={cn(
            "fixed right-0 top-16 bottom-0 z-50 w-full max-w-sm bg-white dark:bg-gray-950 shadow-2xl md:hidden",
            "animate-in slide-in-from-right duration-300"
          )}
        >
          <div className="flex h-full flex-col">
            {/* User Profile Section */}
            <div className="border-b border-gray-200 dark:border-gray-800 p-6">
              <div className="flex items-center gap-4">
                <Avatar size="lg" fallback="JD" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    John Doe
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    john@example.com
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              <div className="space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                        "hover:bg-gray-100 dark:hover:bg-gray-800",
                        isActive(item.href)
                          ? "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300"
                          : "text-gray-700 dark:text-gray-300"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <Separator className="my-4" />

              <div className="space-y-1">
                {userMenu.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                        "hover:bg-gray-100 dark:hover:bg-gray-800",
                        "text-gray-700 dark:text-gray-300"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Bottom Actions */}
            <div className="border-t border-gray-200 dark:border-gray-800 p-4 space-y-2">
              {/* Dark Mode Toggle */}
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? (
                  <>
                    <Sun className="mr-2 h-4 w-4" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="mr-2 h-4 w-4" />
                    Dark Mode
                  </>
                )}
              </Button>

              {/* Logout */}
              <Button
                variant="ghost"
                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
);

MobileMenu.displayName = "MobileMenu";

export { MobileMenu };
