"use client";

import * as React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rating } from "@/components/ui/rating";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Heart, ExternalLink, TrendingUp, Verified } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  logoUrl: string;
  rating: number;
  reviewCount: number;
  category: string;
  pricingModel: string;
  startingPrice?: number;
  features?: string[];
  isFeatured?: boolean;
  isPopular?: boolean;
  verificationBadge?: "gold" | "silver" | "bronze";
  className?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({
  id,
  name,
  slug,
  tagline,
  logoUrl,
  rating,
  reviewCount,
  category,
  pricingModel,
  startingPrice,
  features = [],
  isFeatured = false,
  isPopular = false,
  verificationBadge,
  className,
}) => {
  const [isSaved, setIsSaved] = React.useState(false);

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSaved(!isSaved);
    // TODO: Call API to save/unsave tool
  };

  const getBadgeVariant = (badge?: "gold" | "silver" | "bronze") => {
    if (badge === "gold") return "gold";
    if (badge === "silver") return "silver";
    if (badge === "bronze") return "bronze";
    return "outline";
  };

  const formatPrice = (price?: number) => {
    if (!price) return "Free";
    return `From $${price}/mo`;
  };

  return (
    <Card className={cn("card-hover group overflow-hidden", className)}>
      <CardHeader>
        {/* Top Row: Logo, Badges, Save Button */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={logoUrl}
                alt={`${name} logo`}
                className="h-14 w-14 rounded-xl object-cover ring-2 ring-gray-100 dark:ring-gray-800 transition-transform duration-200 group-hover:scale-105"
              />
            </div>

            {/* Name & Category */}
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate">
                {name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {category}
                </Badge>
                {isPopular && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <TrendingUp className="h-3.5 w-3.5 text-green-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Trending</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
                {verificationBadge && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Verified className="h-3.5 w-3.5 text-primary-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{verificationBadge.toUpperCase()} Verified</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          </div>

          {/* Save Button */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex-shrink-0"
                  onClick={handleSave}
                >
                  <Heart
                    className={cn(
                      "h-5 w-5 transition-all duration-200",
                      isSaved
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400 hover:text-red-500"
                    )}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isSaved ? "Remove from favorites" : "Add to favorites"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Description */}
        <CardDescription className="line-clamp-2 mt-2">
          {tagline}
        </CardDescription>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <Rating rating={rating} size="sm" />
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {rating.toFixed(1)}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            ({reviewCount.toLocaleString()})
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Features */}
        {features.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{features.length - 3} more
              </Badge>
            )}
          </div>
        )}

        {/* Pricing & CTA */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {pricingModel}
            </span>
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              {formatPrice(startingPrice)}
            </span>
          </div>
          <Button size="sm" asChild>
            <Link href={`/tools/${slug}`}>
              View Details
              <ExternalLink className="ml-2 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { ToolCard };
export type { ToolCardProps };
