"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rating } from "@/components/ui/rating";
import { X, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonToolCardProps {
  tool?: {
    id: string;
    name: string;
    slug: string;
    logoUrl: string;
    rating: number;
    category: string;
    pricingModel: string;
    startingPrice?: number;
  };
  onRemove?: () => void;
  onAdd?: () => void;
  isEmpty?: boolean;
  className?: string;
}

const ComparisonToolCard: React.FC<ComparisonToolCardProps> = ({
  tool,
  onRemove,
  onAdd,
  isEmpty = false,
  className,
}) => {
  if (isEmpty) {
    return (
      <Card
        className={cn(
          "border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900",
          className
        )}
      >
        <CardContent className="flex flex-col items-center justify-center min-h-[300px] p-6">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
            <Plus className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Add Tool to Compare
          </h3>
          <p className="mb-4 text-center text-sm text-gray-600 dark:text-gray-400">
            Click below to select a tool for comparison
          </p>
          <Button onClick={onAdd} variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Add Tool
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!tool) return null;

  const formatPrice = () => {
    if (!tool.startingPrice) return "Free";
    return `From $${tool.startingPrice}/mo`;
  };

  return (
    <Card className={cn("relative", className)}>
      {/* Remove Button */}
      {onRemove && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-10"
          onClick={onRemove}
        >
          <X className="h-4 w-4" />
        </Button>
      )}

      <CardHeader className="pb-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img
            src={tool.logoUrl}
            alt={`${tool.name} logo`}
            className="h-20 w-20 rounded-xl object-cover mb-4 ring-2 ring-gray-100 dark:ring-gray-800"
          />

          {/* Name */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {tool.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <Rating rating={tool.rating} size="sm" />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {tool.rating.toFixed(1)}
            </span>
          </div>

          {/* Category */}
          <Badge variant="secondary" className="mb-2">
            {tool.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-2 text-center">
          {/* Pricing */}
          <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-3">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
              {tool.pricingModel}
            </p>
            <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {formatPrice()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { ComparisonToolCard };
