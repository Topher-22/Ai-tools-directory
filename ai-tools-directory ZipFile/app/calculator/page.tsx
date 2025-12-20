import { PageLayout, Container, Breadcrumb } from "@/components/layout";
import { ROICalculator } from "@/components/features/roi-calculator";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";

export default function ROICalculatorPage() {
  const benefits = [
    {
      icon: Calculator,
      title: "Accurate Calculations",
      description: "Based on real-world data and industry averages",
    },
    {
      icon: TrendingUp,
      title: "See the Impact",
      description: "Understand the true value of AI tools for your business",
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Calculate exactly how many hours you'll save",
    },
    {
      icon: DollarSign,
      title: "Cost Justification",
      description: "Make data-driven decisions about tool investments",
    },
  ];

  const breadcrumbItems = [{ label: "ROI Calculator" }];

  return (
    <PageLayout>
      <Container className="py-12">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-8" />

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
            AI Tool ROI Calculator
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Calculate the return on investment for your AI tools and make
            data-driven decisions about your technology stack.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Calculator - 2 columns */}
          <div className="lg:col-span-2">
            <ROICalculator />
          </div>

          {/* Sidebar Info - 1 column */}
          <div className="space-y-6">
            {/* Benefits */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Why Use This Calculator?
                </h3>
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={benefit.title} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-950">
                        <Icon className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="border-2 border-primary-200 dark:border-primary-900 bg-primary-50 dark:bg-primary-950">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Tips for Accurate Results
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-0.5">•</span>
                    <span>
                      Be realistic about time savings - start with conservative
                      estimates
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-0.5">•</span>
                    <span>
                      Include the full cost of employee time (salary + benefits)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-0.5">•</span>
                    <span>
                      Consider both direct time savings and indirect productivity
                      gains
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-0.5">•</span>
                    <span>
                      Factor in any training or onboarding time needed
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Need Help Choosing?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Take our quiz to find the perfect AI tool for your needs
                </p>
                <a
                  href="/quiz"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 px-6 py-2 text-sm font-medium text-white hover:from-primary-700 hover:to-secondary-700 transition-all"
                >
                  Take the Quiz
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}
