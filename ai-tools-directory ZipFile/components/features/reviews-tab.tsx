"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Rating } from "@/components/ui/rating";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThumbsUp, ThumbsDown, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";

interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  reviewText: string;
  pros: string[];
  cons: string[];
  useCase?: string;
  industry?: string;
  companySize?: string;
  usageDuration?: string;
  isVerifiedPurchase: boolean;
  helpfulVotes: number;
  notHelpfulVotes: number;
  createdAt: Date;
}

interface RatingDistribution {
  5: number;
  4: number;
  3: number;
  2: number;
  1: number;
}

interface ReviewsTabProps {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: RatingDistribution;
  reviews: Review[];
  className?: string;
}

const ReviewsTab: React.FC<ReviewsTabProps> = ({
  averageRating,
  totalReviews,
  ratingDistribution,
  reviews,
  className,
}) => {
  const [sortBy, setSortBy] = React.useState("helpful");
  const [filterRating, setFilterRating] = React.useState("all");

  const calculatePercentage = (count: number) => {
    return (count / totalReviews) * 100;
  };

  return (
    <div className={cn("space-y-8", className)}>
      {/* Rating Overview */}
      <Card>
        <CardContent className="p-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Overall Rating */}
            <div className="text-center lg:text-left">
              <div className="mb-4">
                <div className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <Rating rating={averageRating} size="lg" />
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Based on {totalReviews.toLocaleString()} reviews
                </p>
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-3">
                  <span className="w-12 text-sm text-gray-600 dark:text-gray-400">
                    {stars} star{stars !== 1 && "s"}
                  </span>
                  <Progress
                    value={calculatePercentage(ratingDistribution[stars as keyof RatingDistribution])}
                    variant={stars >= 4 ? "success" : stars >= 3 ? "warning" : "error"}
                    className="flex-1"
                  />
                  <span className="w-12 text-right text-sm text-gray-600 dark:text-gray-400">
                    {ratingDistribution[stars as keyof RatingDistribution].toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="helpful">Most Helpful</SelectItem>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="highest">Highest Rated</SelectItem>
            <SelectItem value="lowest">Lowest Rated</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filterRating} onValueChange={setFilterRating}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Ratings</SelectItem>
            <SelectItem value="5">5 Stars</SelectItem>
            <SelectItem value="4">4 Stars</SelectItem>
            <SelectItem value="3">3 Stars</SelectItem>
            <SelectItem value="2">2 Stars</SelectItem>
            <SelectItem value="1">1 Star</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  {/* Avatar */}
                  <Avatar
                    size="md"
                    fallback={review.userName.slice(0, 2).toUpperCase()}
                    src={review.userAvatar}
                  />

                  {/* User Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        {review.userName}
                      </h4>
                      {review.isVerifiedPurchase && (
                        <Badge variant="success" className="text-xs gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Rating rating={review.rating} size="sm" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(review.createdAt)}
                      </span>
                    </div>
                    {review.useCase && (
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Use case: {review.useCase}
                        {review.industry && ` • ${review.industry}`}
                        {review.companySize && ` • ${review.companySize}`}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {review.title}
              </h3>

              {/* Review Text */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {review.reviewText}
              </p>

              {/* Pros & Cons */}
              {(review.pros.length > 0 || review.cons.length > 0) && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {review.pros.length > 0 && (
                    <div className="rounded-lg bg-green-50 dark:bg-green-950 p-4">
                      <h5 className="font-medium text-green-900 dark:text-green-100 mb-2 text-sm">
                        Pros
                      </h5>
                      <ul className="space-y-1">
                        {review.pros.map((pro, index) => (
                          <li key={index} className="text-sm text-green-700 dark:text-green-300 flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">+</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {review.cons.length > 0 && (
                    <div className="rounded-lg bg-red-50 dark:bg-red-950 p-4">
                      <h5 className="font-medium text-red-900 dark:text-red-100 mb-2 text-sm">
                        Cons
                      </h5>
                      <ul className="space-y-1">
                        {review.cons.map((con, index) => (
                          <li key={index} className="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
                            <span className="text-red-500 mt-0.5">−</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Helpful Votes */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Was this helpful?
                </span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{review.helpfulVotes}</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ThumbsDown className="h-4 w-4" />
                    <span>{review.notHelpfulVotes}</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Reviews
        </Button>
      </div>
    </div>
  );
};

export { ReviewsTab };
export type { Review, RatingDistribution };
