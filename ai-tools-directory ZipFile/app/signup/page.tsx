"use client";

import * as React from "react";
import { PageLayout, Container } from "@/components/layout";
import { AuthForm } from "@/components/auth/auth-form";

export default function SignupPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSignup = async (data: {
    email: string;
    password: string;
    name?: string;
  }) => {
    setIsLoading(true);
    setError("");

    try {
      // TODO: Implement actual registration
      console.log("Signup:", data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Redirect to dashboard
      window.location.href = "/dashboard";
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageLayout showFooter={false}>
      <Container className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
        <AuthForm
          mode="signup"
          onSubmit={handleSignup}
          isLoading={isLoading}
          error={error}
        />
      </Container>
    </PageLayout>
  );
}
