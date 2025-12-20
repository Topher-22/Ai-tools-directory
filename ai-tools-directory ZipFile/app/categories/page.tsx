"use client";

import * as React from "react";
import Link from "next/link";
import { PageLayout, Container, Breadcrumb, BackToTop } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  PenTool,
  Video,
  Image as ImageIcon,
  Music,
  Zap,
  Bot,
  Code,
  BarChart3,
  Briefcase,
  Users,
  Mail,
  FileText,
  Search,
  TrendingUp,
} from "lucide-react";

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const categories = [
    {
      name: "AI Writing",
      slug: "ai-writing",
      description: "Content creation, copywriting, and text generation tools",
      icon: PenTool,
      color: "from-purple-500 to-purple-600",
      toolCount: 87,
      trending: true,
    },
    {
      name: "AI Video",
      slug: "ai-video",
      description: "Video editing, generation, and enhancement tools",
      icon: Video,
      color: "from-red-500 to-red-600",
      toolCount: 52,
    },
    {
      name: "AI Image",
      slug: "ai-image",
      description: "Image generation, editing, and design tools",
      icon: ImageIcon,
      color: "from-green-500 to-green-600",
      toolCount: 64,
      trending: true,
    },
    {
      name: "AI Audio",
      slug: "ai-audio",
      description: "Voice generation, music creation, and audio editing",
      icon: Music,
      color: "from-amber-500 to-amber-600",
      toolCount: 38,
    },
    {
      name: "Productivity",
      slug: "productivity",
      description: "Workflow automation and efficiency tools",
      icon: Zap,
      color: "from-cyan-500 to-cyan-600",
      toolCount: 95,
    },
    {
      name: "Chatbots",
      slug: "chatbots",
      description: "Conversational AI and customer service bots",
      icon: Bot,
      color: "from-blue-500 to-blue-600",
      toolCount: 43,
    },
    {
      name: "Code",
      slug: "code",
      description: "Programming assistants and code generation",
      icon: Code,
      color: "from-indigo-500 to-indigo-600",
      toolCount: 56,
      trending: true,
    },
    {
      name: "Analytics",
      slug: "analytics",
      description: "Data analysis and business intelligence",
      icon: BarChart3,
      color: "from-pink-500 to-pink-600",
      toolCount: 41,
    },
    {
      name: "Business",
      slug: "business",
      description: "Business operations and management tools",
      icon: Briefcase,
      color: "from-orange-500 to-orange-600",
      toolCount: 33,
    },
    {
      name: "HR & Recruiting",
      slug: "hr-recruiting",
      description: "Human resources and talent acquisition",
      icon: Users,
      color: "from-teal-500 to-teal-600",
      toolCount: 27,
    },
    {
      name: "Email & Marketing",
      slug: "email-marketing",
      description: "Email campaigns and marketing automation",
      icon: Mail,
      color: "from-rose-500 to-rose-600",
      toolCount: 45,
    },
    {
      name: "Document Processing",
      slug: "document-processing",
      description: "Document analysis and text extraction",
      icon: FileText,
      color: "from-violet-500 to-violet-600",
      toolCount: 29,
    },
  ];

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalTools = categories.reduce((sum, cat) => sum + cat.toolCount, 0);
  const breadcrumbItems = [{ label: "Categories" }];

  return (
    <PageLayout>
      <Container className="py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Browse AI Tools by Category
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore {totalTools.toLocaleString()} AI tools organized into {categories.length} categories
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-14 pl-12 text-base shadow-lg"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group"
              >
                <Card className="card-hover h-full" style={{ animationDelay: `${index * 0.05}s` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={cn(
                          "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg",
                          category.color,
                          "transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                        )}
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      {category.trending && (
                        <Badge variant="accent" className="gap-1">
                          <TrendingUp className="h-3 w-3" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {category.toolCount} tools
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                        Explore →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No categories found matching "{searchQuery}"
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {categories.length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Categories
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {totalTools}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Tools
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {categories.filter(c => c.trending).length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Trending Categories
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>

      <BackToTop />
    </PageLayout>
  );
}
