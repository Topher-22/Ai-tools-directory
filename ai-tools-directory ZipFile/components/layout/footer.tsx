import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sparkles,
  Twitter,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const Footer = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    const [email, setEmail] = React.useState("");

    const handleNewsletterSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle newsletter subscription
      console.log("Newsletter signup:", email);
      setEmail("");
    };

    const footerLinks = {
      tools: [
        { name: "Browse All Tools", href: "/tools" },
        { name: "Categories", href: "/categories" },
        { name: "Featured Tools", href: "/tools?featured=true" },
        { name: "New Additions", href: "/tools?sort=newest" },
        { name: "Submit Tool", href: "/submit-tool" },
      ],
      resources: [
        { name: "Blog", href: "/blog" },
        { name: "Tool Finder Quiz", href: "/quiz" },
        { name: "Comparison Guide", href: "/compare" },
        { name: "ROI Calculator", href: "/calculator" },
        { name: "API Documentation", href: "/docs/api" },
      ],
      company: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "/careers" },
        { name: "For Vendors", href: "/vendors" },
        { name: "Advertise", href: "/advertise" },
      ],
      legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Disclaimer", href: "/disclaimer" },
      ],
    };

    const socialLinks = [
      {
        name: "Twitter",
        href: "https://twitter.com/aitoolsdir",
        icon: Twitter,
      },
      {
        name: "GitHub",
        href: "https://github.com/aitoolsdir",
        icon: Github,
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/company/aitoolsdir",
        icon: Linkedin,
      },
      {
        name: "Email",
        href: "mailto:hello@aitoolsdirectory.com",
        icon: Mail,
      },
    ];

    return (
      <footer
        ref={ref}
        className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
        {...props}
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Newsletter Section */}
          <div className="mb-12 rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 p-8 text-white">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-2xl font-bold mb-2">
                Stay Updated with the Latest AI Tools
              </h3>
              <p className="mb-6 text-primary-100">
                Join 25,000+ subscribers and get weekly updates on new AI tools,
                exclusive deals, and expert insights.
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="whitespace-nowrap"
                >
                  Subscribe
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="mt-3 text-xs text-primary-100">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12 mb-12">
            {/* Tools */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                Tools
              </h4>
              <ul className="space-y-3">
                {footerLinks.tools.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Logo and Copyright */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} AI Tools Directory. All rights
                reserved.
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Trust Badges / Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                500+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                AI Tools
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                50K+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Monthly Users
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                12K+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Reviews
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Free to Use
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = "Footer";

export { Footer };
