"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Rating } from "@/components/ui/rating";
import { CheckCircle2, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface QuizQuestion {
  id: string;
  question: string;
  options: Array<{
    id: string;
    label: string;
    value: string;
  }>;
}

interface ToolRecommendation {
  id: string;
  name: string;
  slug: string;
  logoUrl: string;
  tagline: string;
  rating: number;
  category: string;
  matchScore: number;
  whyRecommended: string[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: "1",
    question: "What's your primary use case?",
    options: [
      { id: "1a", label: "Content Writing", value: "writing" },
      { id: "1b", label: "Image Generation", value: "image" },
      { id: "1c", label: "Video Production", value: "video" },
      { id: "1d", label: "Code Development", value: "code" },
      { id: "1e", label: "Data Analysis", value: "analytics" },
    ],
  },
  {
    id: "2",
    question: "What's your experience level?",
    options: [
      { id: "2a", label: "Beginner", value: "beginner" },
      { id: "2b", label: "Intermediate", value: "intermediate" },
      { id: "2c", label: "Advanced", value: "advanced" },
      { id: "2d", label: "Expert", value: "expert" },
    ],
  },
  {
    id: "3",
    question: "What's your budget?",
    options: [
      { id: "3a", label: "Free only", value: "free" },
      { id: "3b", label: "Under $20/month", value: "under20" },
      { id: "3c", label: "Under $50/month", value: "under50" },
      { id: "3d", label: "$50+ per month", value: "over50" },
      { id: "3e", label: "Enterprise pricing", value: "enterprise" },
    ],
  },
  {
    id: "4",
    question: "Team size?",
    options: [
      { id: "4a", label: "Solo (just me)", value: "solo" },
      { id: "4b", label: "Small team (2-10)", value: "small" },
      { id: "4c", label: "Medium team (11-50)", value: "medium" },
      { id: "4d", label: "Large team (50+)", value: "large" },
    ],
  },
  {
    id: "5",
    question: "What features are most important?",
    options: [
      { id: "5a", label: "Ease of use", value: "ease" },
      { id: "5b", label: "Advanced features", value: "features" },
      { id: "5c", label: "Integrations", value: "integrations" },
      { id: "5d", label: "Customer support", value: "support" },
      { id: "5e", label: "API access", value: "api" },
    ],
  },
];

interface ToolFinderQuizProps {
  className?: string;
}

const ToolFinderQuiz: React.FC<ToolFinderQuizProps> = ({ className }) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = React.useState(false);
  const [recommendations, setRecommendations] = React.useState<
    ToolRecommendation[]
  >([]);

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswer = (value: string) => {
    const newAnswers = {
      ...answers,
      [quizQuestions[currentQuestion].id]: value,
    };
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz complete
      generateRecommendations(newAnswers);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const generateRecommendations = (finalAnswers: Record<string, string>) => {
    // Mock recommendations based on answers
    const mockRecommendations: ToolRecommendation[] = [
      {
        id: "1",
        name: "ChatGPT",
        slug: "chatgpt",
        logoUrl: "https://via.placeholder.com/80?text=ChatGPT",
        tagline: "AI assistant for writing, coding, and problem-solving",
        rating: 4.8,
        category: "AI Writing",
        matchScore: 95,
        whyRecommended: [
          "Perfect for beginners",
          "Excellent for content writing",
          "Free tier available",
        ],
      },
      {
        id: "2",
        name: "Jasper",
        slug: "jasper-ai",
        logoUrl: "https://via.placeholder.com/80?text=Jasper",
        tagline: "AI copilot for marketing and content teams",
        rating: 4.5,
        category: "AI Writing",
        matchScore: 88,
        whyRecommended: [
          "Great for team collaboration",
          "Advanced marketing features",
          "50+ templates included",
        ],
      },
      {
        id: "3",
        name: "Copy.ai",
        slug: "copy-ai",
        logoUrl: "https://via.placeholder.com/80?text=Copy.ai",
        tagline: "AI-powered copywriting for marketing teams",
        rating: 4.3,
        category: "AI Writing",
        matchScore: 82,
        whyRecommended: [
          "Easy to use interface",
          "Budget-friendly pricing",
          "Good for small teams",
        ],
      },
    ];

    setRecommendations(mockRecommendations);
    setIsComplete(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsComplete(false);
    setRecommendations([]);
  };

  if (isComplete) {
    return (
      <div className={cn("space-y-6", className)}>
        {/* Header */}
        <Card className="border-2 border-primary-200 dark:border-primary-900 bg-primary-50 dark:bg-primary-950">
          <CardContent className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-secondary-600">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Perfect Matches Found!
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Based on your answers, here are the top {recommendations.length}{" "}
              tools we recommend
            </p>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <div className="space-y-4">
          {recommendations.map((tool, index) => (
            <Card
              key={tool.id}
              className="card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  {/* Rank Badge */}
                  <div className="flex-shrink-0">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-full font-bold text-white",
                        index === 0 && "bg-gradient-to-br from-yellow-400 to-yellow-600",
                        index === 1 && "bg-gradient-to-br from-gray-300 to-gray-500",
                        index === 2 && "bg-gradient-to-br from-orange-400 to-orange-600"
                      )}
                    >
                      #{index + 1}
                    </div>
                  </div>

                  {/* Tool Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={tool.logoUrl}
                          alt={tool.name}
                          className="h-12 w-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            {tool.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Rating rating={tool.rating} size="sm" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {tool.rating}
                            </span>
                            <Badge variant="secondary" className="text-xs">
                              {tool.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant={index === 0 ? "success" : "secondary"}
                        className="text-sm"
                      >
                        {tool.matchScore}% match
                      </Badge>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {tool.tagline}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Why we recommend this:
                      </h4>
                      <ul className="space-y-1">
                        {tool.whyRecommended.map((reason, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-500 mt-0.5" />
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="gradient" asChild>
                        <Link href={`/tools/${tool.slug}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href={`/compare?tools=${tool.id}`}>
                          Add to Compare
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={handleRestart}>
            Retake Quiz
          </Button>
          <Button variant="default" asChild>
            <Link href="/tools">Browse All Tools</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Progress */}
      <Card>
        <CardContent className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm font-medium text-primary-600">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} />
        </CardContent>
      </Card>

      {/* Question */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-primary-600" />
            <Badge variant="secondary">
              Step {currentQuestion + 1}
            </Badge>
          </div>
          <CardTitle className="text-2xl">
            {quizQuestions[currentQuestion].question}
          </CardTitle>
          <CardDescription>
            Choose the option that best describes your needs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {quizQuestions[currentQuestion].options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswer(option.value)}
              className={cn(
                "w-full rounded-lg border-2 p-4 text-left transition-all hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950",
                answers[quizQuestions[currentQuestion].id] === option.value
                  ? "border-primary-500 bg-primary-50 dark:bg-primary-950"
                  : "border-gray-200 dark:border-gray-800"
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all",
                    answers[quizQuestions[currentQuestion].id] === option.value
                      ? "border-primary-600 bg-primary-600"
                      : "border-gray-300 dark:border-gray-700"
                  )}
                >
                  {answers[quizQuestions[currentQuestion].id] ===
                    option.value && (
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  )}
                </div>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {option.label}
                </span>
              </div>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentQuestion === 0}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            setCurrentQuestion(0);
            setAnswers({});
          }}
        >
          Restart Quiz
        </Button>
      </div>
    </div>
  );
};

export { ToolFinderQuiz };
