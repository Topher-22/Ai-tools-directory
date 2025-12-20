"use client";

import * as React from "react";
import { PageLayout, Container, Breadcrumb, BackToTop } from "@/components/layout";
import { ToolCard } from "@/components/shared/tool-card";
import { SortDropdown } from "@/components/shared/sort-dropdown";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { Search, X, SlidersHorizontal } from "lucide-react";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = React.useState("AI writing");
  const [sortBy, setSortBy] = React.useState("relevance");
  const [filterCategory, setFilterCategory] = React.useState<string[]>([]);

  // Mock search results
  const searchResults = [
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
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual search
    console.log("Searching for:", searchQuery);
  };

  const breadcrumbItems = [
    { label: "Search Results" },
  ];

  return (
    <PageLayout>
      <Container className="py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Search Results
          </h1>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search AI tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 pl-12 pr-4 text-base shadow-lg"
              />
            </div>
          </form>
        </div>

        {/* Search Info */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Found <span className="font-semibold text-gray-900 dark:text-gray-100">{searchResults.length} results</span> for{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-100">"{searchQuery}"</span>
          </p>
        </div>

        {/* Toolbar */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
            {filterCategory.length > 0 && (
              <Badge variant="secondary" className="gap-1">
                {filterCategory.length} active
                <button onClick={() => setFilterCategory([])}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </div>
          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>

        {/* Results Grid */}
        {searchResults.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {searchResults.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Search}
            title="No results found"
            description={`We couldn't find any tools matching "${searchQuery}". Try different keywords.`}
            action={{
              label: "Clear Search",
              onClick: () => setSearchQuery(""),
            }}
          />
        )}

        {/* Load More */}
        {searchResults.length > 0 && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Results
            </Button>
          </div>
        )}

        {/* Search Tips */}
        <div className="mt-12 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Search Tips
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-0.5">•</span>
              <span>Use specific keywords like "video editor" or "content writing"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-0.5">•</span>
              <span>Try searching by use case like "marketing automation"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-0.5">•</span>
              <span>Browse by category for more organized results</span>
            </li>
          </ul>
        </div>
      </Container>

      <BackToTop />
    </PageLayout>
  );
}
