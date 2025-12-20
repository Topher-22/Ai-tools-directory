"use client";

import * as React from "react";
import Link from "next/link";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
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
  Heart,
  GitCompare,
  Eye,
  TrendingUp,
  ArrowRight,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  // Mock data
  const stats = [
    {
      name: "Saved Tools",
      value: "12",
      change: "+3 this week",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-100 dark:bg-red-950",
    },
    {
      name: "Comparisons",
      value: "5",
      change: "+2 this month",
      icon: GitCompare,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-950",
    },
    {
      name: "Tools Viewed",
      value: "48",
      change: "+12 this week",
      icon: Eye,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-950",
    },
    {
      name: "Activity Score",
      value: "87",
      change: "+5 points",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-950",
    },
  ];

  const recentlyViewed = [
    {
      id: "1",
      name: "ChatGPT",
      category: "AI Writing",
      logoUrl: "https://via.placeholder.com/60?text=ChatGPT",
      rating: 4.8,
      viewedAt: "2 hours ago",
    },
    {
      id: "2",
      name: "Midjourney",
      category: "AI Image",
      logoUrl: "https://via.placeholder.com/60?text=Midjourney",
      rating: 4.7,
      viewedAt: "5 hours ago",
    },
    {
      id: "3",
      name: "Jasper",
      category: "AI Writing",
      logoUrl: "https://via.placeholder.com/60?text=Jasper",
      rating: 4.5,
      viewedAt: "1 day ago",
    },
  ];

  const savedTools = [
    {
      id: "1",
      name: "ChatGPT",
      category: "AI Writing",
      logoUrl: "https://via.placeholder.com/60?text=ChatGPT",
      rating: 4.8,
      pricingModel: "Freemium",
    },
    {
      id: "2",
      name: "Copy.ai",
      category: "AI Writing",
      logoUrl: "https://via.placeholder.com/60?text=Copy.ai",
      rating: 4.3,
      pricingModel: "Freemium",
    },
    {
      id: "3",
      name: "Descript",
      category: "AI Video",
      logoUrl: "https://via.placeholder.com/60?text=Descript",
      rating: 4.6,
      pricingModel: "Freemium",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Welcome back, John!
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Here's what's happening with your AI tools
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.name}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {stat.name}
                      </p>
                      <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        {stat.change}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-lg",
                        stat.bgColor
                      )}
                    >
                      <Icon className={cn("h-6 w-6", stat.color)} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recently Viewed */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recently Viewed</CardTitle>
                <CardDescription>Tools you've checked out recently</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/tools">
                  Browse more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentlyViewed.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.id}`}
                  className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 hover:border-primary-500 hover:bg-primary-50 dark:border-gray-800 dark:hover:bg-primary-950 transition-colors"
                >
                  <img
                    src={tool.logoUrl}
                    alt={tool.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {tool.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {tool.category}
                      </Badge>
                      <Rating rating={tool.rating} size="sm" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {tool.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4" />
                    {tool.viewedAt}
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Saved Tools Preview */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Saved Tools</CardTitle>
                <CardDescription>Quick access to your favorites</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/saved">
                  View all
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {savedTools.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.id}`}
                  className="rounded-lg border border-gray-200 p-4 hover:border-primary-500 hover:bg-primary-50 dark:border-gray-800 dark:hover:bg-primary-950 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={tool.logoUrl}
                      alt={tool.name}
                      className="h-10 w-10 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                        {tool.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Rating rating={tool.rating} size="sm" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {tool.rating}
                        </span>
                      </div>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {tool.pricingModel}
                      </Badge>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Button variant="outline" className="h-auto flex-col gap-2 p-6" asChild>
                <Link href="/tools">
                  <Eye className="h-8 w-8 text-primary-600" />
                  <span className="font-semibold">Browse Tools</span>
                  <span className="text-xs text-gray-500">
                    Discover new AI tools
                  </span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 p-6" asChild>
                <Link href="/compare">
                  <GitCompare className="h-8 w-8 text-primary-600" />
                  <span className="font-semibold">Compare Tools</span>
                  <span className="text-xs text-gray-500">
                    Side-by-side comparison
                  </span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 p-6" asChild>
                <Link href="/quiz">
                  <TrendingUp className="h-8 w-8 text-primary-600" />
                  <span className="font-semibold">Tool Finder Quiz</span>
                  <span className="text-xs text-gray-500">
                    Find your perfect match
                  </span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
