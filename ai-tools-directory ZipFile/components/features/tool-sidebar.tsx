"use client";

import * as React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ExternalLink,
  Globe,
  Mail,
  Twitter,
  Linkedin,
  CheckCircle2,
  X,
} from "lucide-react";

interface ToolSidebarProps {
  websiteUrl: string;
  pricingModel: string;
  startingPrice?: number;
  hasFreeVersion: boolean;
  hasFreeTrial: boolean;
  freeTrialDays?: number;
  integrations?: Array<{ name: string; logoUrl: string }>;
  supportEmail?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  relatedTools?: Array<{
    id: string;
    name: string;
    slug: string;
    logoUrl: string;
    rating: number;
  }>;
  className?: string;
}

const ToolSidebar: React.FC<ToolSidebarProps> = ({
  websiteUrl,
  pricingModel,
  startingPrice,
  hasFreeVersion,
  hasFreeTrial,
  freeTrialDays,
  integrations = [],
  supportEmail,
  socialLinks,
  relatedTools = [],
  className,
}) => {
  const formatPrice = () => {
    if (hasFreeVersion && !startingPrice) return "Free";
    if (!startingPrice) return "Free";
    return `From $${startingPrice}/mo`;
  };

  return (
    <div className={className}>
      <div className="space-y-6 lg:sticky lg:top-20">
        {/* Quick Info Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Pricing */}
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Pricing
              </p>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                {formatPrice()}
              </p>
              <Badge variant="outline" className="mt-1 text-xs">
                {pricingModel}
              </Badge>
            </div>

            <Separator />

            {/* Free Features */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {hasFreeVersion ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <X className="h-4 w-4 text-gray-300 dark:text-gray-700" />
                )}
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Free version available
                </span>
              </div>
              <div className="flex items-center gap-2">
                {hasFreeTrial ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <X className="h-4 w-4 text-gray-300 dark:text-gray-700" />
                )}
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {hasFreeTrial
                    ? `${freeTrialDays}-day free trial`
                    : "No free trial"}
                </span>
              </div>
            </div>

            <Separator />

            {/* CTA Button */}
            <Button variant="gradient" className="w-full" asChild>
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Integrations */}
        {integrations.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Integrations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                {integrations.slice(0, 6).map((integration, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 p-3 hover:border-primary-500 transition-colors"
                  >
                    <img
                      src={integration.logoUrl}
                      alt={integration.name}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                ))}
              </div>
              {integrations.length > 6 && (
                <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400">
                  +{integrations.length - 6} more integrations
                </p>
              )}
            </CardContent>
          </Card>
        )}

        {/* Contact & Social */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Contact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {supportEmail && (
              <a
                href={`mailto:${supportEmail}`}
                className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                {supportEmail}
              </a>
            )}
            {socialLinks?.website && (
              <a
                href={socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Globe className="h-4 w-4" />
                Website
              </a>
            )}
            {socialLinks?.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </a>
            )}
            {socialLinks?.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            )}
          </CardContent>
        </Card>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Similar Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.slug}`}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 dark:border-gray-800 p-3 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950 transition-colors"
                >
                  <img
                    src={tool.logoUrl}
                    alt={tool.name}
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-gray-900 dark:text-gray-100 truncate">
                      {tool.name}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      ⭐ {tool.rating.toFixed(1)}
                    </p>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export { ToolSidebar };
