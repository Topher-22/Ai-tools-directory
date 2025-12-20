"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsletterCTAProps {
  className?: string;
}

const NewsletterCTA: React.FC<NewsletterCTAProps> = ({ className }) => {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Handle newsletter subscription
      console.log("Newsletter signup:", email);
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className={cn("py-16", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 p-8 sm:p-12 lg:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-white blur-3xl" />
            <div className="absolute -right-4 bottom-0 h-72 w-72 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                <Mail className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Headline */}
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Stay Ahead with AI Tool Updates
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Join 25,000+ subscribers and get weekly updates on new AI tools,
              exclusive deals, and expert insights delivered to your inbox.
            </p>

            {/* Form */}
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 flex-1 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-white focus:bg-white/20 focus:ring-white/20"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="whitespace-nowrap"
                >
                  Subscribe Now
                </Button>
              </form>
            ) : (
              <div className="mx-auto flex max-w-md items-center justify-center gap-2 rounded-lg bg-white/20 p-4 text-white backdrop-blur-sm animate-in zoom-in-50">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-medium">
                  Thanks for subscribing! Check your email.
                </span>
              </div>
            )}

            <p className="mt-4 text-sm text-white/70">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>Weekly Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>Exclusive Deals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>Expert Tips</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { NewsletterCTA };
