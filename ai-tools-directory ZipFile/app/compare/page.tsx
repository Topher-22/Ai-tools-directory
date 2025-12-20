"use client";

import * as React from "react";
import {
  PageLayout,
  Container,
  Breadcrumb,
  BackToTop,
} from "@/components/layout";
import {
  ComparisonToolCard,
  ComparisonTable,
  ComparisonCards,
  ToolSelector,
  type Tool,
  type ComparisonRow,
} from "@/components/features";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Download,
  Share2,
  RefreshCw,
  Info,
  Monitor,
  Smartphone,
} from "lucide-react";

export default function ComparePage() {
  const [selectedTools, setSelectedTools] = React.useState<Tool[]>([]);
  const [selectorOpen, setSelectorOpen] = React.useState(false);
  const [viewMode, setViewMode] = React.useState<"table" | "cards">("table");
  const [addingSlot, setAddingSlot] = React.useState<number | null>(null);

  // Mock available tools
  const availableTools: Tool[] = [
    {
      id: "1",
      name: "ChatGPT",
      slug: "chatgpt",
      logoUrl: "https://via.placeholder.com/80?text=ChatGPT",
      rating: 4.8,
      category: "AI Writing",
      pricingModel: "Freemium",
      startingPrice: 0,
    },
    {
      id: "2",
      name: "Jasper",
      slug: "jasper-ai",
      logoUrl: "https://via.placeholder.com/80?text=Jasper",
      rating: 4.5,
      category: "AI Writing",
      pricingModel: "Subscription",
      startingPrice: 49,
    },
    {
      id: "3",
      name: "Copy.ai",
      slug: "copy-ai",
      logoUrl: "https://via.placeholder.com/80?text=Copy.ai",
      rating: 4.3,
      category: "AI Writing",
      pricingModel: "Freemium",
      startingPrice: 0,
    },
    {
      id: "4",
      name: "Midjourney",
      slug: "midjourney",
      logoUrl: "https://via.placeholder.com/80?text=Midjourney",
      rating: 4.7,
      category: "AI Image",
      pricingModel: "Subscription",
      startingPrice: 10,
    },
  ];

  // Mock comparison data
  const comparisonRows: ComparisonRow[] = [
    // Pricing
    {
      category: "Pricing",
      feature: "Free Version",
      values: [
        { toolId: "1", value: true },
        { toolId: "2", value: false },
        { toolId: "3", value: true },
      ],
    },
    {
      category: "Pricing",
      feature: "Starting Price",
      values: [
        { toolId: "1", value: "Free", label: "Free" },
        { toolId: "2", value: "$49/mo", label: "$49/mo" },
        { toolId: "3", value: "Free", label: "Free" },
      ],
    },
    {
      category: "Pricing",
      feature: "Free Trial",
      values: [
        { toolId: "1", value: false },
        { toolId: "2", value: true, label: "7 days" },
        { toolId: "3", value: true, label: "5 days" },
      ],
    },
    // Features
    {
      category: "Features",
      feature: "AI Model",
      values: [
        { toolId: "1", value: "GPT-4", label: "GPT-4" },
        { toolId: "2", value: "Multiple", label: "Multiple" },
        { toolId: "3", value: "GPT-3.5", label: "GPT-3.5" },
      ],
    },
    {
      category: "Features",
      feature: "Templates",
      values: [
        { toolId: "1", value: false },
        { toolId: "2", value: true, label: "50+" },
        { toolId: "3", value: true, label: "90+" },
      ],
    },
    {
      category: "Features",
      feature: "Chrome Extension",
      values: [
        { toolId: "1", value: false },
        { toolId: "2", value: true },
        { toolId: "3", value: true },
      ],
    },
    {
      category: "Features",
      feature: "API Access",
      values: [
        { toolId: "1", value: true },
        { toolId: "2", value: true },
        { toolId: "3", value: true },
      ],
    },
    // Integrations
    {
      category: "Integrations",
      feature: "Slack",
      values: [
        { toolId: "1", value: true },
        { toolId: "2", value: true },
        { toolId: "3", value: false },
      ],
    },
    {
      category: "Integrations",
      feature: "Zapier",
      values: [
        { toolId: "1", value: true },
        { toolId: "2", value: true },
        { toolId: "3", value: true },
      ],
    },
    {
      category: "Integrations",
      feature: "WordPress",
      values: [
        { toolId: "1", value: false },
        { toolId: "2", value: true },
        { toolId: "3", value: true },
      ],
    },
    // Support
    {
      category: "Support",
      feature: "Email Support",
      values: [
        { toolId: "1", value: true },
        { toolId: "2", value: true },
        { toolId: "3", value: true },
      ],
    },
    {
      category: "Support",
      feature: "Live Chat",
      values: [
        { toolId: "1", value: false },
        { toolId: "2", value: true },
        { toolId: "3", value: true },
      ],
    },
    {
      category: "Support",
      feature: "Phone Support",
      values: [
        { toolId: "1", value: false },
        { toolId: "2", value: true, label: "Enterprise" },
        { toolId: "3", value: false },
      ],
    },
  ];

  const handleAddTool = (slot: number) => {
    setAddingSlot(slot);
    setSelectorOpen(true);
  };

  const handleSelectTool = (tool: Tool) => {
    if (addingSlot !== null) {
      const newTools = [...selectedTools];
      newTools[addingSlot] = tool;
      setSelectedTools(newTools);
      setAddingSlot(null);
    }
  };

  const handleRemoveTool = (index: number) => {
    const newTools = [...selectedTools];
    newTools.splice(index, 1);
    setSelectedTools(newTools);
  };

  const handleShare = () => {
    const toolIds = selectedTools.map((t) => t.id).join(",");
    const url = `${window.location.origin}/compare?tools=${toolIds}`;
    
    if (navigator.share) {
      navigator.share({
        title: "AI Tools Comparison",
        url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Comparison link copied to clipboard!");
    }
  };

  const handleExport = () => {
    // TODO: Implement PDF export
    alert("Export to PDF - Coming soon!");
  };

  const handleReset = () => {
    setSelectedTools([]);
  };

  const breadcrumbItems = [{ label: "Compare Tools" }];

  const maxTools = 3;
  const slots = Array(maxTools).fill(null).map((_, i) => selectedTools[i] || null);

  return (
    <PageLayout>
      <Container className="py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Compare AI Tools
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Side-by-side comparison to find the best tool for your needs
              </p>
            </div>
            <Badge variant="accent" className="text-sm">
              Up to {maxTools} tools
            </Badge>
          </div>
        </div>

        {/* Info Alert */}
        {selectedTools.length === 0 && (
          <Alert className="mb-6">
            <Info className="h-4 w-4" />
            <AlertDescription>
              Select tools below to start comparing features, pricing, and more
            </AlertDescription>
          </Alert>
        )}

        {/* Tool Selection Cards */}
        <div className="grid gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((tool, index) => (
            <ComparisonToolCard
              key={index}
              tool={tool || undefined}
              isEmpty={!tool}
              onAdd={() => handleAddTool(index)}
              onRemove={tool ? () => handleRemoveTool(index) : undefined}
            />
          ))}
        </div>

        {/* Actions Bar */}
        {selectedTools.length > 0 && (
          <Card className="mb-8">
            <CardContent className="flex flex-wrap items-center justify-between gap-4 p-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Comparing {selectedTools.length} tool{selectedTools.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {/* View Mode Toggle */}
                <div className="flex items-center gap-2 lg:hidden">
                  <Button
                    variant={viewMode === "table" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("table")}
                  >
                    <Monitor className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "cards" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("cards")}
                  >
                    <Smartphone className="h-4 w-4" />
                  </Button>
                </div>

                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" onClick={handleExport}>
                  <Download className="mr-2 h-4 w-4" />
                  Export PDF
                </Button>
                <Button variant="ghost" size="sm" onClick={handleReset}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Comparison Table/Cards */}
        {selectedTools.length >= 2 ? (
          <>
            {/* Desktop: Always show table */}
            <div className="hidden lg:block">
              <ComparisonTable
                tools={selectedTools.map((t) => ({ id: t.id, name: t.name }))}
                rows={comparisonRows.map((row) => ({
                  ...row,
                  values: row.values.filter((v) =>
                    selectedTools.some((t) => t.id === v.toolId)
                  ),
                }))}
              />
            </div>

            {/* Mobile: Toggle between table and cards */}
            <div className="lg:hidden">
              {viewMode === "table" ? (
                <ComparisonTable
                  tools={selectedTools.map((t) => ({ id: t.id, name: t.name }))}
                  rows={comparisonRows.map((row) => ({
                    ...row,
                    values: row.values.filter((v) =>
                      selectedTools.some((t) => t.id === v.toolId)
                    ),
                  }))}
                />
              ) : (
                <ComparisonCards
                  tools={selectedTools.map((t) => ({ id: t.id, name: t.name }))}
                  rows={comparisonRows.map((row) => ({
                    ...row,
                    values: row.values.filter((v) =>
                      selectedTools.some((t) => t.id === v.toolId)
                    ),
                  }))}
                />
              )}
            </div>
          </>
        ) : selectedTools.length === 1 ? (
          <Card>
            <CardHeader>
              <CardTitle>Add More Tools</CardTitle>
              <CardDescription>
                Select at least one more tool to start comparing
              </CardDescription>
            </CardHeader>
          </Card>
        ) : null}

        {/* Helpful Tips */}
        {selectedTools.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-lg">Comparison Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>
                    Click on any tool name to view its detailed page
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>
                    Share your comparison with colleagues using the Share button
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>
                    Export to PDF for offline reference or presentations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>
                    Use the mobile view (card mode) for easier viewing on phones
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        )}
      </Container>

      {/* Tool Selector Dialog */}
      <ToolSelector
        open={selectorOpen}
        onOpenChange={setSelectorOpen}
        onSelectTool={handleSelectTool}
        selectedToolIds={selectedTools.map((t) => t.id)}
        availableTools={availableTools}
      />

      <BackToTop />
    </PageLayout>
  );
}
