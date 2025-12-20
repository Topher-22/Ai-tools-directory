"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rating } from "@/components/ui/rating";
import { Search, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Tool {
  id: string;
  name: string;
  slug: string;
  logoUrl: string;
  rating: number;
  category: string;
  pricingModel: string;
  startingPrice?: number;
}

interface ToolSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectTool: (tool: Tool) => void;
  selectedToolIds?: string[];
  availableTools: Tool[];
}

const ToolSelector: React.FC<ToolSelectorProps> = ({
  open,
  onOpenChange,
  onSelectTool,
  selectedToolIds = [],
  availableTools,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredTools = availableTools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase());
    const notSelected = !selectedToolIds.includes(tool.id);
    return matchesSearch && notSelected;
  });

  const handleSelect = (tool: Tool) => {
    onSelectTool(tool);
    setSearchQuery("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Add Tool to Compare</DialogTitle>
          <DialogDescription>
            Search and select a tool to add to your comparison
          </DialogDescription>
        </DialogHeader>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Tools List */}
        <div className="flex-1 overflow-y-auto -mx-6 px-6 space-y-2">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => handleSelect(tool)}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  {/* Logo */}
                  <img
                    src={tool.logoUrl}
                    alt={tool.name}
                    className="h-12 w-12 rounded-lg object-cover flex-shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                        {tool.name}
                      </h4>
                      <Badge variant="secondary" className="text-xs flex-shrink-0">
                        {tool.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Rating rating={tool.rating} size="sm" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {tool.rating.toFixed(1)}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {tool.pricingModel}
                      </span>
                    </div>
                  </div>

                  {/* Add Button */}
                  <Button size="sm" variant="outline" className="flex-shrink-0">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </button>
            ))
          ) : (
            <div className="py-12 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                {searchQuery
                  ? "No tools found matching your search"
                  : "No more tools available"}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { ToolSelector };
export type { Tool };
