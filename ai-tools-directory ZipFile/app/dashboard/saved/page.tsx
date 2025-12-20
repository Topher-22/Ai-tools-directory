"use client";

import * as React from "react";
import Link from "next/link";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { ToolCard } from "@/components/shared/tool-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/empty-state";
import { Search, Heart, SlidersHorizontal, X } from "lucide-react";

export default function SavedToolsPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [sortBy, setSortBy] = React.useState("recent");
  const [filterCategory, setFilterCategory] = React.useState("all");

  // Mock data
  const savedTools = [
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
      verificationBadge: "gold" as const,
      isPopular: true,
    },
    {
      id: "2",
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
      id: "3",
      name: "Midjourney",
      slug: "midjourney",
      tagline: "AI art generation from text descriptions",
      logoUrl: "https://via.placeholder.com/80?text=Midjourney",
      rating: 4.7,
      reviewCount: 8934,
      category: "AI Image",
      pricingModel: "Subscription",
      startingPrice: 10,
      features: ["Image Generation", "Art Styles", "High Resolution"],
      verificationBadge: "gold" as const,
      isFeatured: true,
    },
    {
      id: "4",
      name: "Descript",
      slug: "descript",
      tagline: "Video and podcast editing as easy as editing a doc",
      logoUrl: "https://via.placeholder.com/80?text=Descript",
      rating: 4.6,
      reviewCount: 2156,
      category: "AI Video",
      pricingModel: "Freemium",
      startingPrice: 0,
      features: ["Video Editing", "Transcription", "AI Voices"],
      verificationBadge: "silver" as const,
    },
  ];

  const categories = ["All", "AI Writing", "AI Image", "AI Video", "AI Audio"];

  const filteredTools = savedTools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === "all" ||
      tool.category.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Saved Tools
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Your favorite AI tools in one place
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search saved tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3">
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-[160px]">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat.toLowerCase()}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[160px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Recently Added</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Active Filters */}
        {(searchQuery || filterCategory !== "all") && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Active filters:
            </span>
            {searchQuery && (
              <Badge variant="secondary" className="gap-1">
                Search: {searchQuery}
                <button onClick={() => setSearchQuery("")}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filterCategory !== "all" && (
              <Badge variant="secondary" className="gap-1 capitalize">
                {filterCategory}
                <button onClick={() => setFilterCategory("all")}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setFilterCategory("all");
              }}
            >
              Clear all
            </Button>
          </div>
        )}

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Heart}
            title="No saved tools found"
            description={
              searchQuery || filterCategory !== "all"
                ? "Try adjusting your filters"
                : "Start saving tools to see them here"
            }
            action={{
              label: "Browse Tools",
              onClick: () => (window.location.href = "/tools"),
            }}
          />
        )}

        {/* Stats */}
        {filteredTools.length > 0 && (
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-900">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {filteredTools.length} of {savedTools.length} saved tools
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
