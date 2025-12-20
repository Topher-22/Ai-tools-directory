import { PageLayout, BackToTop } from "@/components/layout";
import {
  HeroSection,
  QuickCategories,
  FeaturedTools,
  StatsSection,
  NewsletterCTA,
} from "@/components/features";

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Categories Grid */}
      <QuickCategories />

      {/* Featured Tools */}
      <FeaturedTools />

      {/* Stats Section with Animated Counters */}
      <StatsSection />

      {/* Newsletter CTA */}
      <NewsletterCTA />

      {/* Back to Top Button */}
      <BackToTop />
    </PageLayout>
  );
}
