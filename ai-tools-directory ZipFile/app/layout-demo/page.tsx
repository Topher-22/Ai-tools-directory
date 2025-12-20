"use client";

import {
  PageLayout,
  Breadcrumb,
  Container,
  Sidebar,
  SidebarSection,
  BackToTop,
} from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Label,
  Slider,
  Button,
  Badge,
  Separator,
} from "@/components/ui";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

export default function LayoutDemo() {
  const [priceRange, setPriceRange] = useState([50]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const breadcrumbItems = [
    { label: "Tools", href: "/tools" },
    { label: "AI Writing", href: "/categories/ai-writing" },
    { label: "ChatGPT" },
  ];

  return (
    <PageLayout>
      <Container className="py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Layout Components Demo
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Showcasing the layout system with Header, Footer, Sidebar, and
                more
              </p>
            </div>
            <Badge variant="accent" className="text-sm">
              Phase 4
            </Badge>
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setSidebarOpen(true)}
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Show Filters
          </Button>
        </div>

        {/* Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <Sidebar
            title="Filters"
            sticky
            mobileOpen={sidebarOpen}
            onMobileClose={() => setSidebarOpen(false)}
          >
            <SidebarSection title="Price Range">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Max Price
                  </span>
                  <span className="font-medium">${priceRange[0]}</span>
                </div>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={200}
                  step={10}
                />
              </div>
            </SidebarSection>

            <Separator />

            <SidebarSection title="Pricing Model">
              <div className="space-y-3">
                {["Free", "Freemium", "Subscription", "One-time", "Enterprise"].map(
                  (model) => (
                    <div key={model} className="flex items-center space-x-2">
                      <Checkbox id={model.toLowerCase()} />
                      <Label
                        htmlFor={model.toLowerCase()}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {model}
                      </Label>
                    </div>
                  )
                )}
              </div>
            </SidebarSection>

            <Separator />

            <SidebarSection title="Features">
              <div className="space-y-3">
                {[
                  "Free Trial",
                  "API Access",
                  "Team Collaboration",
                  "Custom Branding",
                ].map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox id={feature.toLowerCase().replace(/\s/g, "-")} />
                    <Label
                      htmlFor={feature.toLowerCase().replace(/\s/g, "-")}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {feature}
                    </Label>
                  </div>
                ))}
              </div>
            </SidebarSection>

            <Separator />

            <div className="pt-4">
              <Button variant="outline" className="w-full">
                Reset Filters
              </Button>
            </div>
          </Sidebar>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Features Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Header Component</CardTitle>
                  <CardDescription>
                    Sticky navigation with logo, search, and user menu
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>✓ Sticky positioning</li>
                    <li>✓ Backdrop blur effect</li>
                    <li>✓ Responsive search bar</li>
                    <li>✓ User dropdown menu</li>
                    <li>✓ Dark mode toggle</li>
                    <li>✓ Mobile hamburger menu</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Footer Component</CardTitle>
                  <CardDescription>
                    Comprehensive footer with links and newsletter
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>✓ Newsletter signup</li>
                    <li>✓ 4-column link structure</li>
                    <li>✓ Social media icons</li>
                    <li>✓ Trust badges</li>
                    <li>✓ Gradient CTA section</li>
                    <li>✓ Responsive layout</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mobile Menu</CardTitle>
                  <CardDescription>
                    Slide-in navigation for mobile devices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>✓ Slide animation from right</li>
                    <li>✓ Backdrop blur</li>
                    <li>✓ User profile section</li>
                    <li>✓ Full navigation links</li>
                    <li>✓ Dark mode toggle</li>
                    <li>✓ Body scroll lock</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sidebar Component</CardTitle>
                  <CardDescription>
                    Flexible sidebar for filters and navigation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>✓ Sticky positioning (desktop)</li>
                    <li>✓ Mobile slide-in panel</li>
                    <li>✓ Scrollable content</li>
                    <li>✓ Section components</li>
                    <li>✓ Customizable width</li>
                    <li>✓ Auto backdrop</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Breadcrumb Navigation</CardTitle>
                  <CardDescription>
                    Hierarchical navigation breadcrumbs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>✓ Home icon option</li>
                    <li>✓ Chevron separators</li>
                    <li>✓ Active page styling</li>
                    <li>✓ Hover effects</li>
                    <li>✓ Accessible markup</li>
                    <li>✓ Mobile responsive</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Additional Components</CardTitle>
                  <CardDescription>
                    Supporting layout utilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>✓ PageLayout wrapper</li>
                    <li>✓ Container component</li>
                    <li>✓ BackToTop button</li>
                    <li>✓ Configurable max-widths</li>
                    <li>✓ Consistent spacing</li>
                    <li>✓ Dark mode support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Demo Content */}
            <Card>
              <CardHeader>
                <CardTitle>Try It Out</CardTitle>
                <CardDescription>
                  Scroll down to see the BackToTop button appear. Toggle the
                  mobile menu from the header. Use the sidebar filters on the
                  left.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  This page demonstrates all layout components working together:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  <li>
                    The <strong>Header</strong> at the top with navigation and
                    search
                  </li>
                  <li>
                    The <strong>Breadcrumb</strong> showing your current location
                  </li>
                  <li>
                    The <strong>Sidebar</strong> on the left with filters (try on
                    mobile!)
                  </li>
                  <li>
                    The <strong>Footer</strong> at the bottom with all sections
                  </li>
                  <li>
                    The <strong>BackToTop</strong> button (scroll to see it)
                  </li>
                  <li>
                    The <strong>MobileMenu</strong> accessible from the hamburger
                    icon
                  </li>
                </ul>

                {/* Spacer for scroll */}
                <div className="h-96 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
                  <p className="text-gray-500 dark:text-gray-400">
                    Scroll down to see the BackToTop button...
                  </p>
                </div>
                <div className="h-96 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
                  <p className="text-gray-500 dark:text-gray-400">
                    Keep scrolling...
                  </p>
                </div>
                <div className="h-96 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
                  <p className="text-gray-500 dark:text-gray-400">
                    Now look for the BackToTop button in the bottom-right! →
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>

      {/* Back to Top Button */}
      <BackToTop threshold={300} />
    </PageLayout>
  );
}
