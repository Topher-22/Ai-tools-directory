"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  PenTool,
  Video,
  Image as ImageIcon,
  Music,
  Zap,
  Bot,
  Code,
  BarChart3,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Category {
  name: string;
  slug: string;
  icon: LucideIcon;
  color: string;
  toolCount: number;
}

interface QuickCategoriesProps {
  className?: string;
}

const QuickCategories: React.FC<QuickCategoriesProps> = ({ className }) => {
  const categories: Category[] = [
    {
      name: "AI Writing",
      slug: "ai-writing",
      icon: PenTool,
      color: "from-purple-500 to-purple-600",
      toolCount: 87,
    },
    {
      name: "AI Video",
      slug: "ai-video",
      icon: Video,
      color: "from-red-500 to-red-600",
      toolCount: 52,
    },
    {
      name: "AI Image",
      slug: "ai-image",
      icon: ImageIcon,
      color: "from-green-500 to-green-600",
      toolCount: 64,
    },
    {
      name: "AI Audio",
      slug: "ai-audio",
      icon: Music,
      color: "from-amber-500 to-amber-600",
      toolCount: 38,
    },
    {
      name: "Productivity",
      slug: "ai-productivity",
      icon: Zap,
      color: "from-cyan-500 to-cyan-600",
      toolCount: 95,
    },
    {
      name: "Chatbots",
      slug: "chatbots",
      icon: Bot,
      color: "from-blue-500 to-blue-600",
      toolCount: 43,
    },
    {
      name: "Code",
      slug: "code",
      icon: Code,
      color: "from-indigo-500 to-indigo-600",
      toolCount: 56,
    },
    {
      name: "Analytics",
      slug: "analytics",
      icon: BarChart3,
      color: "from-pink-500 to-pink-600",
      toolCount: 41,
    },
  ];

  return (
    <section className={cn("py-16", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
            Browse by Category
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Explore AI tools organized by use case
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 lg:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group"
              >
                <Card
                  className="card-hover border-2 border-gray-100 dark:border-gray-800 overflow-hidden"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  <CardContent className="p-6 text-center">
                    {/* Icon */}
                    <div
                      className={cn(
                        "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br",
                        category.color,
                        "shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      )}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Category Name */}
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {category.name}
                    </h3>

                    {/* Tool Count */}
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {category.toolCount} tools
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
          >
            View All Categories
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { QuickCategories };
