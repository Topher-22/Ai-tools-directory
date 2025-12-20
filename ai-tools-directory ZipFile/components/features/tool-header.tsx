"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rating } from "@/components/ui/rating";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Heart,
  ExternalLink,
  Share2,
  Flag,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolHeaderProps {
  name: string;
  tagline: string;
  logoUrl: string;
  websiteUrl: string;
  rating: number;
  reviewCount: number;
  category: string;
  verificationBadge?: "gold" | "silver" | "bronze";
  isFeatured?: boolean;
  isPopular?: boolean;
  monthlyVisits?: number;
  className?: string;
}

const ToolHeader: React.FC<ToolHeaderProps> = ({
  name,
  tagline,
  logoUrl,
  websiteUrl,
  rating,
  reviewCount,
  category,
  verificationBadge,
  isFeatured,
  isPopular,
  monthlyVisits,
  className,
}) => {
  const [isSaved, setIsSaved] = React.useState(false);

  const handleSave = () => {
    setIsSaved(!isSaved);
    // TODO: Call API to save/unsave tool
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: name,
        text: tagline,
        url: window.location.href,
      });
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const getBadgeVariant = (badge?: "gold" | "silver" | "bronze") => {
    if (badge === "gold") return "gold";
    if (badge === "silver") return "silver";
    if (badge === "bronze") return "bronze";
    return "outline";
  };

  return (
    <div className={cn("border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950", className)}>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          {/* Left Side: Logo, Name, Info */}
          <div className="flex gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={logoUrl}
                alt={`${name} logo`}
                className="h-24 w-24 rounded-2xl object-cover shadow-lg ring-4 ring-gray-100 dark:ring-gray-800"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              {/* Name & Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
                  {name}
                </h1>
                {verificationBadge && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge variant={getBadgeVariant(verificationBadge)}>
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                          {verificationBadge.toUpperCase()}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Verified by our team</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
                {isPopular && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge variant="accent">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          TRENDING
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Popular this week</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>

              {/* Tagline */}
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                {tagline}
              </p>

              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{category}</Badge>
                {monthlyVisits && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {monthlyVisits.toLocaleString()} monthly visits
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Rating rating={rating} size="md" />
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {rating.toFixed(1)}
                  </span>
                </div>
                <Link
                  href="#reviews"
                  className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                >
                  {reviewCount.toLocaleString()} reviews
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Actions */}
          <div className="flex flex-wrap gap-3">
            {/* Visit Website */}
            <Button size="lg" asChild variant="gradient">
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>

            {/* Save Button */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="lg"
                    variant={isSaved ? "default" : "outline"}
                    onClick={handleSave}
                  >
                    <Heart
                      className={cn(
                        "h-5 w-5",
                        isSaved && "fill-current"
                      )}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isSaved ? "Remove from favorites" : "Add to favorites"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Share Button */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="lg" variant="outline" onClick={handleShare}>
                    <Share2 className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share this tool</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Report Button */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="lg" variant="ghost">
                    <Flag className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Report an issue</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ToolHeader };
