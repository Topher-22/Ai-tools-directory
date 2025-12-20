import { PageLayout, Container, Breadcrumb } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Target, Users, Award, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "AI Tools Listed", value: "500+" },
    { label: "Monthly Users", value: "50K+" },
    { label: "Reviews Published", value: "12K+" },
    { label: "Countries Served", value: "120+" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To help individuals and businesses discover and choose the best AI tools for their specific needs through honest, comprehensive reviews and comparisons.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "We're built by users, for users. Every review, rating, and recommendation comes from real people using these tools in the real world.",
    },
    {
      icon: Award,
      title: "Quality Over Quantity",
      description:
        "We don't just list every tool that exists. Each tool in our directory has been carefully vetted and reviewed by our team of experts.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Former Product Manager at leading AI companies with 10+ years of experience in SaaS.",
    },
    {
      name: "Mike Chen",
      role: "Head of Research",
      bio: "AI researcher and tech journalist specializing in emerging technologies.",
    },
    {
      name: "Emily Rodriguez",
      role: "Community Manager",
      bio: "Building and nurturing communities around technology and innovation.",
    },
  ];

  const breadcrumbItems = [{ label: "About Us" }];

  return (
    <PageLayout>
      <Container className="py-12">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-8" />

        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-600 shadow-lg">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-gray-100">
            About AI Tools Directory
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
            Your trusted source for discovering, comparing, and choosing the best
            AI tools and SaaS products.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6 text-center">
                <p className="mb-2 text-4xl font-bold text-gray-900 dark:text-gray-100">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">
            Our Story
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              AI Tools Directory was born out of a simple frustration: finding the
              right AI tool was incredibly difficult. With thousands of tools
              launching every month, each claiming to be "the best," we needed a
              better way to separate the signal from the noise.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We started by reviewing tools ourselves, then opened up to community
              contributions. Today, we're proud to be the largest independent
              directory of AI tools, with honest reviews from real users and
              comprehensive comparisons to help you make informed decisions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Our platform is completely free to use, with no paywalls or hidden
              fees. We make money through affiliate partnerships, but we never let
              that influence our reviews or recommendations.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100 text-center">
            What We Stand For
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title}>
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-950">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100 text-center">
            Meet the Team
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-2xl font-bold text-white">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                  <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-gray-100">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Trust Us */}
        <Card className="border-2 border-primary-200 dark:border-primary-900 bg-primary-50 dark:bg-primary-950">
          <CardHeader>
            <CardTitle className="text-2xl">Why Trust Us?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Independent Reviews
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We maintain complete editorial independence from the tools we
                    review.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Verified Reviews
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    All reviews are verified to come from real users of the tools.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Regular Updates
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We continuously update our listings as tools evolve and new
                    features are added.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Transparent Methodology
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Our review process and criteria are openly documented and
                    consistent.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </PageLayout>
  );
}
