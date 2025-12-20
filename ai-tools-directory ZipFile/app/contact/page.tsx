"use client";

import * as React from "react";
import { PageLayout, Container, Breadcrumb } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const breadcrumbItems = [{ label: "Contact Us" }];

  return (
    <PageLayout>
      <Container className="py-12">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-8" />

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Have a question, suggestion, or want to submit a tool? We'd love to
            hear from you!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <Alert variant="success">
                    <CheckCircle2 className="h-4 w-4" />
                    <AlertDescription>
                      Thank you for your message! We'll get back to you soon.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) =>
                          setFormData({ ...formData, subject: value })
                        }
                        disabled={isSubmitting}
                      >
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="submit-tool">Submit a Tool</SelectItem>
                          <SelectItem value="report-issue">
                            Report an Issue
                          </SelectItem>
                          <SelectItem value="partnership">
                            Partnership Opportunity
                          </SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        disabled={isSubmitting}
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-950">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                      Email Us
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      We typically respond within 24 hours
                    </p>
                    <a
                      href="mailto:hello@aitoolsdirectory.com"
                      className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      hello@aitoolsdirectory.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary-100 dark:bg-secondary-950">
                    <MapPin className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                      Location
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      San Francisco, CA
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="border-2 border-primary-200 dark:border-primary-900 bg-primary-50 dark:bg-primary-950">
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Have a quick question?
                </h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  Check out our FAQ section for instant answers to common questions.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/faq">View FAQ</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6">
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100">
            Other Ways to Connect
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                Submit a Tool
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Have an AI tool to add to our directory?{" "}
                <a href="/submit" className="text-primary-600 hover:underline">
                  Submit it here
                </a>
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                Report an Issue
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Found a bug or incorrect information?{" "}
                <a href="/report" className="text-primary-600 hover:underline">
                  Let us know
                </a>
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                Partnerships
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Interested in partnering with us?{" "}
                <a
                  href="mailto:partnerships@aitoolsdirectory.com"
                  className="text-primary-600 hover:underline"
                >
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}
