import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  readonly?: boolean;
  onRatingChange?: (rating: number) => void;
}

const sizeMap = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      rating,
      maxRating = 5,
      size = "md",
      showValue = false,
      readonly = true,
      onRatingChange,
      className,
      ...props
    },
    ref
  ) => {
    const [hoverRating, setHoverRating] = React.useState(0);

    const handleClick = (value: number) => {
      if (!readonly && onRatingChange) {
        onRatingChange(value);
      }
    };

    const handleMouseEnter = (value: number) => {
      if (!readonly) {
        setHoverRating(value);
      }
    };

    const handleMouseLeave = () => {
      if (!readonly) {
        setHoverRating(0);
      }
    };

    const displayRating = hoverRating || rating;

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-1", className)}
        {...props}
      >
        {Array.from({ length: maxRating }, (_, i) => {
          const value = i + 1;
          const isFilled = value <= Math.floor(displayRating);
          const isHalfFilled =
            value === Math.ceil(displayRating) &&
            displayRating % 1 >= 0.5 &&
            !hoverRating;

          return (
            <button
              key={i}
              type="button"
              onClick={() => handleClick(value)}
              onMouseEnter={() => handleMouseEnter(value)}
              onMouseLeave={handleMouseLeave}
              disabled={readonly}
              className={cn(
                "relative transition-transform duration-150",
                !readonly && "hover:scale-110 cursor-pointer",
                readonly && "cursor-default"
              )}
            >
              {isHalfFilled ? (
                <div className="relative">
                  <Star
                    className={cn(sizeMap[size], "text-gray-300")}
                    fill="currentColor"
                  />
                  <div className="absolute inset-0 overflow-hidden w-1/2">
                    <Star
                      className={cn(sizeMap[size], "text-amber-400")}
                      fill="currentColor"
                    />
                  </div>
                </div>
              ) : (
                <Star
                  className={cn(
                    sizeMap[size],
                    isFilled ? "text-amber-400" : "text-gray-300",
                    "transition-colors duration-150"
                  )}
                  fill="currentColor"
                />
              )}
            </button>
          );
        })}
        {showValue && (
          <span className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            {rating.toFixed(1)}
          </span>
        )}
      </div>
    );
  }
);

Rating.displayName = "Rating";

export { Rating };
