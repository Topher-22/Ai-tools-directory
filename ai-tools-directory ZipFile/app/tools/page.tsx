"use client";

import * as React from "react";
import {
  PageLayout,
  Container,
  Breadcrumb,
  Sidebar,
  BackToTop,
} from "@/components/layout";
import {
  ToolCard,
  PriceRangeFilter,
  PricingModelFilter,
  CategoryFilter,
  FeaturesFilter,
  RatingFilter,
  ActiveFilters,
  SortDropdown,
} from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { EmptyState } from "@/components/ui/empty-state";
import { ToolCardSkeleton } from "@/components/ui/tool-card-skeleton";
import { SlidersHorizontal, Search } from "lucide-react";

export default function ToolsPage() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  
  // Filter States
  const [priceRange, setPriceRange] = React.useState([200]);
  const [selectedPricingModels, setSelectedPricingModels] = React.useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = React.useState<string[]>([]);
  const [minRating, setMinRating] = React.useState(0);
  
  // Sort State
  const [sortBy, setSortBy] = React.useState("relevance");

  // Mock tools data
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
      isFeatured: true,
      verificationBadge: "gold" as const,
    },
    {
      id: "3",
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
    {
      id: "5",
      name: "ElevenLabs",
      slug: "elevenlabs",
      tagline: "AI voice generation and speech synthesis",
      logoUrl: "https://via.placeholder.com/80?text=ElevenLabs",
      rating: 4.7,
      reviewCount: 3421,
      category: "AI Audio",
      pricingModel: "Freemium",
      startingPrice: 0,
      features: ["Voice Cloning", "Text to Speech", "Multiple Languages"],
      isPopular: true,
      verificationBadge: "gold" as const,
    },
    {
      id: "6",
      name: "Notion AI",
      slug: "notion-ai",
      tagline: "AI-powered workspace for notes and docs",
      logoUrl: "https://via.placeholder.com/80?text=Notion",
      rating: 4.4,
      reviewCount: 5234,
      category: "Productivity",
      pricingModel: "Subscription",
      startingPrice: 10,
      features: ["Note Taking", "AI Writing", "Collaboration"],
      verificationBadge: "silver" as const,
    },
  ];

  const breadcrumbItems = [{ label: "Browse Tools" }];

  const handleRemoveFilter = (type: string, value?: string) => {
    switch (type) {
      case "priceRange":
        setPriceRange([200]);
        break;
      case "pricingModels":
        setSelectedPricingModels((prev) =>
          prev.filter((m) => m !== value)
        );
        break;
      case "categories":
        setSelectedCategories((prev) => prev.filter((c) => c !== value));
        break;
      case "features":
        setSelectedFeatures((prev) => prev.filter((f) => f !== value));
        break;
      case "minRating":
        setMinRating(0);
        break;
    }
  };

  const handleClearAllFilters = () => {
    setPriceRange([200]);
    setSelectedPricingModels([]);
    setSelectedCategories([]);
    setSelectedFeatures([]);
    setMinRating(0);
  };

  const hasActiveFilters =
    priceRange[0] < 200 ||
    selectedPricingModels.length > 0 ||
    selectedCategories.length > 0 ||
    selectedFeatures.length > 0 ||
    minRating > 0;

  return (
    <PageLayout>
      <Container className="py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Browse AI Tools
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover and compare 500+ AI tools for every use case
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setSidebarOpen(true)}
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
            {hasActiveFilters && (
              <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-xs text-white">
                {[
                  priceRange[0] < 200 ? 1 : 0,
                  selectedPricingModels.length,
                  selectedCategories.length,
                  selectedFeatures.length,
                  minRating > 0 ? 1 : 0,
                ].reduce((a, b) => a + b, 0)}
              </span>
            )}
          </Button>
        </div>

        {/* Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <Sidebar
            title="Filters"
            sticky
            mobileOpen={sidebarOpen}
            onMobileClose={() => setSidebarOpen(false)}
          >
            {/* Price Range */}
            <PriceRangeFilter value={priceRange} onChange={setPriceRange} />

            <Separator />

            {/* Pricing Model */}
            <PricingModelFilter
              selected={selectedPricingModels}
              onChange={setSelectedPricingModels}
            />

            <Separator />

            {/* Categories */}
            <CategoryFilter
              selected={selectedCategories}
              onChange={setSelectedCategories}
            />

            <Separator />

            {/* Features */}
            <FeaturesFilter
              selected={selectedFeatures}
              onChange={setSelectedFeatures}
            />

            <Separator />

            {/* Rating */}
            <RatingFilter value={minRating} onChange={setMinRating} />

            <Separator />

            {/* Reset Button */}
            <div className="pt-4">
              <Button
                variant="outline"
                className="w-full"
                onClick={handleClearAllFilters}
              >
                Reset All Filters
              </Button>
            </div>
          </Sidebar>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Active Filters */}
            <ActiveFilters
              filters={{
                priceRange,
                pricingModels: selectedPricingModels,
                categories: selectedCategories,
                features: selectedFeatures,
                minRating,
              }}
              onRemove={handleRemoveFilter}
              onClearAll={handleClearAllFilters}
            />

            {/* Toolbar: Results Count & Sort */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Showing <span className="font-medium text-gray-900 dark:text-gray-100">{tools.length}</span> tools
              </div>
              <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>

            {/* Tools Grid */}
            {loading ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                <ToolCardSkeleton count={6} />
              </div>
            ) : tools.length > 0 ? (
              <>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                  {tools.map((tool) => (
                    <ToolCard key={tool.id} {...tool} />
                  ))}
                </div>

                {/* Load More Button */}
                <div className="mt-12 text-center">
                  <Button variant="outline" size="lg">
                    Load More Tools
                  </Button>
                </div>
              </>
            ) : (
              <EmptyState
                icon={Search}
                title="No tools found"
                description="Try adjusting your filters or search criteria to find what you're looking for."
                action={{
                  label: "Clear All Filters",
                  onClick: handleClearAllFilters,
                }}
              />
            )}
          </div>
        </div>
      </Container>

      <BackToTop />
    </PageLayout>
  );
}
