"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface OverviewTabProps {
  description: string;
  screenshots?: string[];
  demoVideoUrl?: string;
  keyFeatures?: Array<{
    title: string;
    description: string;
  }>;
  useCases?: string[];
  bestFor?: string[];
  notRecommendedFor?: string[];
  className?: string;
}

const OverviewTab: React.FC<OverviewTabProps> = ({
  description,
  screenshots = [],
  demoVideoUrl,
  keyFeatures = [],
  useCases = [],
  bestFor = [],
  notRecommendedFor = [],
  className,
}) => {
  return (
    <div className={cn("space-y-8", className)}>
      {/* Description */}
      <Card>
        <CardHeader>
          <CardTitle>About This Tool</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Demo Video */}
      {demoVideoUrl && (
        <Card>
          <CardHeader>
            <CardTitle>Demo Video</CardTitle>
            <CardDescription>See {name} in action</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 hover:bg-white transition-all hover:scale-110 shadow-2xl">
                  <Play className="h-8 w-8 text-gray-900 ml-1" fill="currentColor" />
                </button>
              </div>
              <img
                src="https://via.placeholder.com/1280x720?text=Video+Thumbnail"
                alt="Demo video thumbnail"
                className="h-full w-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Screenshots */}
      {screenshots.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Screenshots</CardTitle>
            <CardDescription>Visual overview of the interface</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-800 cursor-pointer hover:border-primary-500 transition-colors"
                >
                  <img
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Key Features */}
      {keyFeatures.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
            <CardDescription>What makes this tool stand out</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950 transition-colors"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Use Cases */}
      {useCases.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Common Use Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {useCases.map((useCase, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {useCase}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Best For / Not Recommended For */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Best For */}
        {bestFor.length > 0 && (
          <Card className="border-green-200 dark:border-green-900">
            <CardHeader>
              <CardTitle className="text-green-700 dark:text-green-400">
                ✓ Best For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {bestFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-500 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Not Recommended For */}
        {notRecommendedFor.length > 0 && (
          <Card className="border-amber-200 dark:border-amber-900">
            <CardHeader>
              <CardTitle className="text-amber-700 dark:text-amber-400">
                ⚠ Not Recommended For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {notRecommendedFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="flex-shrink-0 text-amber-500 mt-0.5">✕</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export { OverviewTab };
