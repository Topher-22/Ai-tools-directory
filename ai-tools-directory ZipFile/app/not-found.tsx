import Link from "next/link";
import { PageLayout, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  const quickLinks = [
    { name: "Homepage", href: "/", icon: Home },
    { name: "Browse Tools", href: "/tools", icon: Search },
    { name: "Categories", href: "/categories", icon: Sparkles },
  ];

  return (
    <PageLayout>
      <Container className="flex min-h-[calc(100vh-20rem)] items-center justify-center py-12">
        <div className="text-center max-w-2xl">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative inline-block">
              <span className="text-9xl font-bold text-gray-200 dark:text-gray-800">
                404
              </span>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 shadow-xl">
                  <Search className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
            Page Not Found
          </h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Sorry, we couldn't find the page you're looking for. It might have been
            moved, deleted, or the URL might be incorrect.
          </p>

          {/* Quick Actions */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild variant="gradient">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Homepage
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/tools">
                <Search className="mr-2 h-5 w-5" />
                Browse Tools
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12">
            <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Popular Pages
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link key={link.name} href={link.href}>
                    <Card className="card-hover">
                      <CardContent className="flex flex-col items-center gap-3 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-950">
                          <Icon className="h-6 w-6 text-primary-600" />
                        </div>
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {link.name}
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-12 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              If you believe this is an error or need assistance, please{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
              >
                contact our support team
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}
