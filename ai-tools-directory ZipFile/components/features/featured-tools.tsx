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
import { Sparkles, ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Tool {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  logoUrl: string;
  rating: number;
  reviewCount: number;
  category: string;
  pricingModel: string;
  isFeatured: boolean;
  verificationBadge?: "gold" | "silver" | "bronze";
}

interface FeaturedToolsProps {
  className?: string;
}

const FeaturedTools: React.FC<FeaturedToolsProps> = ({ className }) => {
  // Mock data - In real app, fetch from database
  const featuredTools: Tool[] = [
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
      isFeatured: true,
      verificationBadge: "gold",
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
      isFeatured: true,
      verificationBadge: "gold",
    },
    {
      id: "3",
      name: "Descript",
      slug: "descript",
      tagline: "Video and podcast editing as easy as editing a doc",
      logoUrl: "https://via.placeholder.com/80?text=Descript",
      rating: 4.6,
      reviewCount: 2156,
      category: "AI Video",
      pricingModel: "Freemium",
      isFeatured: true,
      verificationBadge: "silver",
    },
    {
      id: "4",
      name: "ElevenLabs",
      slug: "elevenlabs",
      tagline: "AI voice generation and speech synthesis",
      logoUrl: "https://via.placeholder.com/80?text=ElevenLabs",
      rating: 4.7,
      reviewCount: 3421,
      category: "AI Audio",
      pricingModel: "Freemium",
      isFeatured: true,
      verificationBadge: "gold",
    },
    {
      id: "5",
      name: "Jasper",
      slug: "jasper-ai",
      tagline: "AI copilot for marketing and content teams",
      logoUrl: "https://via.placeholder.com/80?text=Jasper",
      rating: 4.5,
      reviewCount: 3241,
      category: "AI Writing",
      pricingModel: "Subscription",
      isFeatured: true,
      verificationBadge: "gold",
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
      isFeatured: true,
      verificationBadge: "silver",
    },
  ];

  const getBadgeVariant = (badge?: "gold" | "silver" | "bronze") => {
    if (badge === "gold") return "gold";
    if (badge === "silver") return "silver";
    if (badge === "bronze") return "bronze";
    return "outline";
  };

  return (
    <section className={cn("bg-gray-50 dark:bg-gray-900 py-16", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-primary-600" />
              Featured Tools
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Hand-picked, verified AI tools trusted by thousands
            </p>
          </div>
          <Link
            href="/tools?featured=true"
            className="hidden sm:flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool, index) => (
            <Card
              key={tool.id}
              className="card-hover group overflow-hidden border-2 border-gray-200 dark:border-gray-800"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <img
                      src={tool.logoUrl}
                      alt={`${tool.name} logo`}
                      className="h-12 w-12 rounded-lg object-cover ring-2 ring-gray-100 dark:ring-gray-800"
                    />
                  </div>

                  {/* Verification Badge */}
                  {tool.verificationBadge && (
                    <Badge variant={getBadgeVariant(tool.verificationBadge)}>
                      {tool.verificationBadge.toUpperCase()}
                    </Badge>
                  )}
                </div>

                <div className="space-y-2">
                  <CardTitle className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {tool.name}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {tool.tagline}
                  </CardDescription>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 pt-2">
                  <Rating rating={tool.rating} size="sm" />
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {tool.rating}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ({tool.reviewCount.toLocaleString()})
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {tool.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {tool.pricingModel}
                  </Badge>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="default" size="sm" asChild className="flex-1">
                    <Link href={`/tools/${tool.slug}`}>
                      View Details
                      <ExternalLink className="ml-2 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/tools?featured=true"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
          >
            View All Featured Tools
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export { FeaturedTools };
