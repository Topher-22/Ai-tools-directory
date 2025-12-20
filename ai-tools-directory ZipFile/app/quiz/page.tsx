"use client";

import { PageLayout, Container, Breadcrumb } from "@/components/layout";
import { ToolFinderQuiz } from "@/components/features/tool-finder-quiz";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Target, Users } from "lucide-react";

export default function QuizPage() {
  const features = [
    {
      icon: Sparkles,
      title: "Personalized Results",
      description: "Get recommendations tailored to your specific needs",
    },
    {
      icon: Zap,
      title: "Quick & Easy",
      description: "Just 5 questions - takes less than 2 minutes",
    },
    {
      icon: Target,
      title: "Accurate Matching",
      description: "AI-powered algorithm finds your perfect tools",
    },
    {
      icon: Users,
      title: "Trusted by 50K+",
      description: "Join thousands who found their ideal tools",
    },
  ];

  const breadcrumbItems = [{ label: "Tool Finder Quiz" }];

  return (
    <PageLayout>
      <Container className="py-12">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-8" />

        {/* Page Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <Badge variant="accent" className="gap-2 px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4" />
              Free Tool Finder
            </Badge>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
            Find Your Perfect AI Tool
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Answer 5 quick questions and get personalized tool recommendations
            based on your needs, budget, and experience level.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Quiz - 2 columns */}
          <div className="lg:col-span-2">
            <ToolFinderQuiz />
          </div>

          {/* Sidebar Info - 1 column */}
          <div className="space-y-6">
            {/* Features */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  What You'll Get
                </h3>
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-950">
                        <Icon className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* How it Works */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  How It Works
                </h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                      1
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        Answer Questions
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Tell us about your needs and preferences
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                      2
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        Get Matched
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Our algorithm finds your best matches
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                      3
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        Explore Tools
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Review recommendations and get started
                      </p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card className="border-2 border-primary-200 dark:border-primary-900 bg-primary-50 dark:bg-primary-950">
              <CardContent className="p-6">
                <div className="mb-3 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  "This quiz helped me find the perfect AI writing tool for my
                  blog. Saved me hours of research!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-sm font-bold text-white">
                    SJ
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Sarah Johnson
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Content Creator
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Want to Compare Tools?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Use our comparison engine to see tools side-by-side
                </p>
                <a
                  href="/compare"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-gray-200 dark:border-gray-800 px-6 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950 transition-all"
                >
                  Compare Tools
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}
