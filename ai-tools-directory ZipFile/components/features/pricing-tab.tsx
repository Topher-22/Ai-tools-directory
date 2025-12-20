"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  price: number | null; // null for free plans
  billingPeriod: "month" | "year" | "one-time";
  description?: string;
  features: Array<{
    name: string;
    included: boolean;
    details?: string;
  }>;
  limitations?: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaUrl?: string;
}

interface PricingTabProps {
  pricingTiers: PricingTier[];
  hasFreeVersion?: boolean;
  hasFreeTrial?: boolean;
  freeTrialDays?: number;
  className?: string;
}

const PricingTab: React.FC<PricingTabProps> = ({
  pricingTiers,
  hasFreeVersion = false,
  hasFreeTrial = false,
  freeTrialDays,
  className,
}) => {
  return (
    <div className={cn("space-y-8", className)}>
      {/* Trial Info */}
      {(hasFreeVersion || hasFreeTrial) && (
        <Card className="border-primary-200 dark:border-primary-900 bg-primary-50 dark:bg-primary-950">
          <CardContent className="flex items-center gap-3 p-6">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary-600" />
            <div>
              {hasFreeVersion && (
                <p className="font-medium text-primary-900 dark:text-primary-100">
                  Free version available
                </p>
              )}
              {hasFreeTrial && (
                <p className="text-sm text-primary-700 dark:text-primary-300">
                  {freeTrialDays}-day free trial • No credit card required
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Pricing Tiers Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier, index) => (
          <Card
            key={index}
            className={cn(
              "relative flex flex-col",
              tier.isPopular &&
                "border-2 border-primary-500 shadow-lg ring-2 ring-primary-100 dark:ring-primary-900"
            )}
          >
            {/* Popular Badge */}
            {tier.isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge variant="default" className="shadow-md">
                  Most Popular
                </Badge>
              </div>
            )}

            <CardHeader className={cn(tier.isPopular && "pt-8")}>
              {/* Tier Name */}
              <CardTitle className="text-xl">{tier.name}</CardTitle>
              
              {/* Price */}
              <div className="mt-4">
                {tier.price === null ? (
                  <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                    Free
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                      ${tier.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /{tier.billingPeriod === "month" ? "mo" : tier.billingPeriod === "year" ? "yr" : "once"}
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              {tier.description && (
                <CardDescription className="mt-2">
                  {tier.description}
                </CardDescription>
              )}
            </CardHeader>

            <CardContent className="flex-1 flex flex-col">
              {/* Features List */}
              <div className="flex-1 space-y-3 mb-6">
                {tier.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-2"
                  >
                    {feature.included ? (
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                    ) : (
                      <X className="h-5 w-5 flex-shrink-0 text-gray-300 dark:text-gray-700 mt-0.5" />
                    )}
                    <div>
                      <span
                        className={cn(
                          "text-sm",
                          feature.included
                            ? "text-gray-900 dark:text-gray-100"
                            : "text-gray-500 dark:text-gray-500 line-through"
                        )}
                      >
                        {feature.name}
                      </span>
                      {feature.details && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {feature.details}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Limitations */}
              {tier.limitations && tier.limitations.length > 0 && (
                <div className="mb-6 rounded-lg bg-gray-50 dark:bg-gray-900 p-3">
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Limitations:
                  </p>
                  <ul className="space-y-1">
                    {tier.limitations.map((limitation, limitIndex) => (
                      <li
                        key={limitIndex}
                        className="text-xs text-gray-600 dark:text-gray-400"
                      >
                        • {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Button */}
              <Button
                variant={tier.isPopular ? "gradient" : "outline"}
                className="w-full"
                asChild
              >
                <a
                  href={tier.ctaUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tier.ctaText || "Get Started"}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <Card>
        <CardHeader>
          <CardTitle>Pricing Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                Payment Methods
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Credit Card, PayPal, Bank Transfer
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                Refund Policy
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                30-day money-back guarantee
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                Cancellation
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Cancel anytime, no questions asked
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                Enterprise Pricing
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Custom pricing available for teams
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { PricingTab };
export type { PricingTier };
