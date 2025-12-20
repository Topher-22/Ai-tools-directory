"use client";

import * as React from "react";
import { PageLayout, Container, Breadcrumb, BackToTop } from "@/components/layout";
import { ToolCard } from "@/components/shared/tool-card";
import { SortDropdown } from "@/components/shared/sort-dropdown";
import { Badge } from "@/components/ui/badge";
import { PenTool } from "lucide-react";

export default function CategoryDetailPage() {
  const [sortBy, setSortBy] = React.useState("popular");

  // Mock data - in real app, fetch based on slug
  const category = {
    name: "AI Writing",
    slug: "ai-writing",
    description: "Discover the best AI writing tools for content creation, copywriting, and text generation. From blog posts to marketing copy, these tools help you write faster and better.",
    icon: PenTool,
    color: "from-purple-500 to-purple-600",
    toolCount: 87,
  };

  const tools = [
    {
      id: "1",
      name: "ChatGPT",
      slug: "chatgpt",
      tagline: "AI assistant for writing, coding, and problem-solving",
      logoUrl: "https://via.placeholder.com/80?text=ChatGPT",
      rating: 4.8,
      reviewCount: 12453,
      category: "AI Writing",
      pricingModel: "Freemium",
      startingPrice: 0,
      features: ["Text Generation", "Code Assistance", "Conversations"],
      isPopular: true,
      verificationBadge: "gold" as const,
    },
    {
      id: "2",
      name: "Jasper",
      slug: "jasper-ai",
      tagline: "AI copilot for marketing and content teams",
      logoUrl: "https://via.placeholder.com/80?text=Jasper",
      rating: 4.5,
      reviewCount: 3241,
      category: "AI Writing",
      pricingModel: "Subscription",
      startingPrice: 49,
      features: ["Marketing Copy", "SEO Content", "Templates"],
      verificationBadge: "gold" as const,
    },
    {
      id: "3",
      name: "Copy.ai",
      slug: "copy-ai",
      tagline: "AI-powered copywriting for marketing teams",
      logoUrl: "https://via.placeholder.com/80?text=Copy.ai",
      rating: 4.3,
      reviewCount: 2341,
      category: "AI Writing",
      pricingModel: "Freemium",
      startingPrice: 0,
      features: ["Templates", "Brand Voice", "SEO"],
      verificationBadge: "silver" as const,
    },
    {
      id: "4",
      name: "Writesonic",
      slug: "writesonic",
      tagline: "AI writer for articles, blogs, and ads",
      logoUrl: "https://via.placeholder.com/80?text=Writesonic",
      rating: 4.4,
      reviewCount: 1876,
      category: "AI Writing",
      pricingModel: "Freemium",
      startingPrice: 0,
      features: ["Article Writer", "AI Images", "Sonic Editor"],
      verificationBadge: "silver" as const,
    },
    {
      id: "5",
      name: "Rytr",
      slug: "rytr",
      tagline: "AI writing assistant for fast, affordable content",
      logoUrl: "https://via.placeholder.com/80?text=Rytr",
      rating: 4.2,
      reviewCount: 1543,
      category: "AI Writing",
      pricingModel: "Freemium",
      startingPrice: 0,
      features: ["40+ Use Cases", "30+ Languages", "Plagiarism Check"],
      verificationBadge: "bronze" as const,
    },
    {
      id: "6",
      name: "Wordtune",
      slug: "wordtune",
      tagline: "AI writing companion that understands what you're trying to say",
      logoUrl: "https://via.placeholder.com/80?text=Wordtune",
      rating: 4.6,
      reviewCount: 2104,
      category: "AI Writing",
      pricingModel: "Freemium",
      startingPrice: 0,
      features: ["Rewrite", "Tone Adjustment", "Shorten/Expand"],
      verificationBadge: "silver" as const,
    },
  ];

  const breadcrumbItems = [
    { label: "Categories", href: "/categories" },
    { label: category.name },
  ];

  const Icon = category.icon;

  return (
    <PageLayout>
      <Container className="py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        {/* Category Header */}
        <div className="mb-8">
          <div className="flex items-start gap-6 mb-6">
            <div
              className={cn(
                "flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg",
                category.color
              )}
            >
              <Icon className="h-10 w-10 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                  {category.name}
                </h1>
                <Badge variant="secondary">
                  {category.toolCount} tools
                </Badge>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                {category.description}
              </p>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing <span className="font-medium text-gray-900 dark:text-gray-100">{tools.length}</span> tools
          </p>
          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>

        {/* Tools Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="rounded-lg border-2 border-gray-200 dark:border-gray-800 px-8 py-3 font-medium text-gray-900 dark:text-gray-100 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950 transition-colors">
            Load More Tools
          </button>
        </div>
      </Container>

      <BackToTop />
    </PageLayout>
  );
}
