"use client";

import * as React from "react";
import {
  PageLayout,
  Container,
  Breadcrumb,
  BackToTop,
} from "@/components/layout";
import {
  ToolHeader,
  OverviewTab,
  PricingTab,
  ReviewsTab,
  ToolSidebar,
  type PricingTier,
  type Review,
  type RatingDistribution,
} from "@/components/features";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ToolDetailPage() {
  // Mock data - replace with actual data fetching
  const tool = {
    id: "1",
    name: "ChatGPT",
    tagline: "AI assistant for writing, coding, and problem-solving",
    logoUrl: "https://via.placeholder.com/150?text=ChatGPT",
    websiteUrl: "https://chat.openai.com",
    rating: 4.8,
    reviewCount: 12453,
    category: "AI Writing",
    verificationBadge: "gold" as const,
    isPopular: true,
    monthlyVisits: 1800000000,
    description:
      "ChatGPT is a state-of-the-art AI language model developed by OpenAI. It can understand and generate human-like text, making it perfect for a wide range of tasks including writing, coding, brainstorming, learning, and problem-solving. With its advanced natural language processing capabilities, ChatGPT can engage in conversations, answer questions, help with creative projects, debug code, and much more.",
    screenshots: [
      "https://via.placeholder.com/800x600?text=Screenshot+1",
      "https://via.placeholder.com/800x600?text=Screenshot+2",
      "https://via.placeholder.com/800x600?text=Screenshot+3",
      "https://via.placeholder.com/800x600?text=Screenshot+4",
    ],
    demoVideoUrl: "https://example.com/demo.mp4",
    keyFeatures: [
      {
        title: "Natural Conversations",
        description:
          "Engage in human-like conversations with context awareness and memory",
      },
      {
        title: "Code Assistance",
        description:
          "Get help with coding, debugging, and learning programming languages",
      },
      {
        title: "Content Creation",
        description:
          "Generate articles, emails, creative writing, and marketing copy",
      },
      {
        title: "Data Analysis",
        description:
          "Upload files and get insights, summaries, and analysis",
      },
    ],
    useCases: [
      "Content Writing",
      "Code Development",
      "Research Assistant",
      "Learning & Education",
      "Brainstorming",
      "Email Drafting",
    ],
    bestFor: [
      "Writers and content creators looking for inspiration and assistance",
      "Developers who need coding help and debugging support",
      "Students and learners seeking explanations and tutoring",
      "Professionals needing quick research and summaries",
    ],
    notRecommendedFor: [
      "Tasks requiring real-time internet access or current events",
      "Highly specialized medical or legal advice",
      "Tasks requiring guaranteed factual accuracy without verification",
    ],
    pricingModel: "Freemium",
    hasFreeVersion: true,
    hasFreeTrial: false,
    integrations: [
      { name: "Slack", logoUrl: "https://via.placeholder.com/50?text=Slack" },
      {
        name: "Zapier",
        logoUrl: "https://via.placeholder.com/50?text=Zapier",
      },
      { name: "API", logoUrl: "https://via.placeholder.com/50?text=API" },
    ],
    supportEmail: "support@openai.com",
    socialLinks: {
      twitter: "https://twitter.com/openai",
      linkedin: "https://linkedin.com/company/openai",
      website: "https://openai.com",
    },
  };

  const pricingTiers: PricingTier[] = [
    {
      name: "Free",
      price: null,
      billingPeriod: "month",
      description: "Get started with basic features",
      features: [
        { name: "GPT-3.5 model access", included: true },
        { name: "Standard response time", included: true },
        { name: "Limited requests per hour", included: true, details: "~50 messages/3 hours" },
        { name: "GPT-4 access", included: false },
        { name: "Faster response times", included: false },
        { name: "Priority support", included: false },
      ],
      limitations: ["Limited to GPT-3.5", "Rate limited", "No priority access"],
      ctaText: "Start Free",
      ctaUrl: "https://chat.openai.com",
    },
    {
      name: "Plus",
      price: 20,
      billingPeriod: "month",
      description: "For individuals who want more",
      features: [
        { name: "GPT-4 model access", included: true },
        { name: "GPT-3.5 unlimited", included: true },
        { name: "Faster response times", included: true },
        { name: "Access during peak times", included: true },
        { name: "Early access to features", included: true },
        { name: "Custom instructions", included: true },
      ],
      isPopular: true,
      ctaText: "Upgrade to Plus",
      ctaUrl: "https://chat.openai.com/plus",
    },
    {
      name: "Team",
      price: 30,
      billingPeriod: "month",
      description: "For teams and organizations",
      features: [
        { name: "Everything in Plus", included: true },
        { name: "Workspace for teams", included: true },
        { name: "Admin console", included: true },
        { name: "Usage analytics", included: true },
        { name: "Priority support", included: true },
        { name: "Data excluded from training", included: true },
      ],
      ctaText: "Contact Sales",
      ctaUrl: "https://openai.com/contact-sales",
    },
  ];

  const ratingDistribution: RatingDistribution = {
    5: 8234,
    4: 3012,
    3: 892,
    2: 234,
    1: 81,
  };

  const reviews: Review[] = [
    {
      id: "1",
      userId: "1",
      userName: "Sarah Johnson",
      rating: 5,
      title: "Game-changer for content creation",
      reviewText:
        "ChatGPT has completely transformed how I approach content writing. The quality of outputs is consistently high, and it saves me hours of work every week. The GPT-4 model is particularly impressive for complex tasks.",
      pros: [
        "Excellent natural language understanding",
        "Very versatile for different tasks",
        "Fast and reliable",
      ],
      cons: [
        "Can occasionally provide outdated information",
        "Sometimes needs multiple prompts for best results",
      ],
      useCase: "Content Writing & Marketing",
      industry: "Marketing",
      companySize: "Small Business",
      usageDuration: "6+ months",
      isVerifiedPurchase: true,
      helpfulVotes: 234,
      notHelpfulVotes: 12,
      createdAt: new Date("2024-01-15"),
    },
    {
      id: "2",
      userId: "2",
      userName: "Mike Chen",
      rating: 4,
      title: "Great for coding assistance",
      reviewText:
        "As a developer, ChatGPT has become an invaluable tool. It helps me debug code, understand new frameworks, and even generates boilerplate code. While it's not perfect, it significantly speeds up my development workflow.",
      pros: [
        "Excellent for explaining code concepts",
        "Good at generating code snippets",
        "Helps with debugging",
      ],
      cons: [
        "Sometimes suggests outdated approaches",
        "Needs careful review of generated code",
      ],
      useCase: "Software Development",
      industry: "Technology",
      companySize: "Medium Business",
      usageDuration: "3-6 months",
      isVerifiedPurchase: true,
      helpfulVotes: 189,
      notHelpfulVotes: 8,
      createdAt: new Date("2024-02-20"),
    },
  ];

  const relatedTools = [
    {
      id: "2",
      name: "Jasper",
      slug: "jasper-ai",
      logoUrl: "https://via.placeholder.com/80?text=Jasper",
      rating: 4.5,
    },
    {
      id: "3",
      name: "Copy.ai",
      slug: "copy-ai",
      logoUrl: "https://via.placeholder.com/80?text=Copy.ai",
      rating: 4.3,
    },
    {
      id: "4",
      name: "Notion AI",
      slug: "notion-ai",
      logoUrl: "https://via.placeholder.com/80?text=Notion",
      rating: 4.4,
    },
  ];

  const faqs = [
    {
      question: "What is ChatGPT?",
      answer:
        "ChatGPT is an AI language model developed by OpenAI that can understand and generate human-like text. It can help with a wide range of tasks including writing, coding, analysis, and creative projects.",
    },
    {
      question: "Is ChatGPT free to use?",
      answer:
        "Yes, ChatGPT offers a free tier with access to GPT-3.5. For access to GPT-4 and additional features, you can subscribe to ChatGPT Plus for $20/month.",
    },
    {
      question: "What's the difference between GPT-3.5 and GPT-4?",
      answer:
        "GPT-4 is more advanced, offering better reasoning, creativity, and accuracy. It can handle more complex tasks and provides more nuanced responses compared to GPT-3.5.",
    },
    {
      question: "Can I use ChatGPT for commercial purposes?",
      answer:
        "Yes, ChatGPT can be used for commercial purposes. However, you should review OpenAI's terms of service and consider using the API for high-volume commercial applications.",
    },
    {
      question: "How do I get the most out of ChatGPT?",
      answer:
        "Be specific with your prompts, provide context, iterate on responses, and use features like custom instructions to tailor the AI's behavior to your needs.",
    },
  ];

  const breadcrumbItems = [
    { label: "Tools", href: "/tools" },
    { label: tool.category, href: `/categories/${tool.category.toLowerCase().replace(/\s/g, "-")}` },
    { label: tool.name },
  ];

  return (
    <PageLayout>
      {/* Tool Header */}
      <ToolHeader
        name={tool.name}
        tagline={tool.tagline}
        logoUrl={tool.logoUrl}
        websiteUrl={tool.websiteUrl}
        rating={tool.rating}
        reviewCount={tool.reviewCount}
        category={tool.category}
        verificationBadge={tool.verificationBadge}
        isPopular={tool.isPopular}
        monthlyVisits={tool.monthlyVisits}
      />

      <Container className="py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="reviews">
                  Reviews ({tool.reviewCount.toLocaleString()})
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview">
                <OverviewTab
                  description={tool.description}
                  screenshots={tool.screenshots}
                  demoVideoUrl={tool.demoVideoUrl}
                  keyFeatures={tool.keyFeatures}
                  useCases={tool.useCases}
                  bestFor={tool.bestFor}
                  notRecommendedFor={tool.notRecommendedFor}
                />
              </TabsContent>

              {/* Pricing Tab */}
              <TabsContent value="pricing">
                <PricingTab
                  pricingTiers={pricingTiers}
                  hasFreeVersion={tool.hasFreeVersion}
                  hasFreeTrial={tool.hasFreeTrial}
                />
              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews" id="reviews">
                <ReviewsTab
                  averageRating={tool.rating}
                  totalReviews={tool.reviewCount}
                  ratingDistribution={ratingDistribution}
                  reviews={reviews}
                />
              </TabsContent>
            </Tabs>

            {/* FAQs */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600 dark:text-gray-400">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <ToolSidebar
            websiteUrl={tool.websiteUrl}
            pricingModel={tool.pricingModel}
            startingPrice={pricingTiers.find((t) => t.price !== null)?.price}
            hasFreeVersion={tool.hasFreeVersion}
            hasFreeTrial={tool.hasFreeTrial}
            integrations={tool.integrations}
            supportEmail={tool.supportEmail}
            socialLinks={tool.socialLinks}
            relatedTools={relatedTools}
            className="w-full lg:w-80"
          />
        </div>
      </Container>

      <BackToTop />
    </PageLayout>
  );
}
