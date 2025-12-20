"use client";

import * as React from "react";
import { useInView } from "react-intersection-observer";
import { Users, Sparkles, MessageSquare, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: React.ElementType;
  color: string;
}

interface StatsSectionProps {
  className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ className }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats: Stat[] = [
    {
      label: "AI Tools Reviewed",
      value: 500,
      suffix: "+",
      icon: Sparkles,
      color: "from-primary-500 to-primary-600",
    },
    {
      label: "Monthly Active Users",
      value: 50,
      suffix: "K+",
      icon: Users,
      color: "from-secondary-500 to-secondary-600",
    },
    {
      label: "User Reviews",
      value: 12,
      suffix: "K+",
      icon: MessageSquare,
      color: "from-accent-500 to-accent-600",
    },
    {
      label: "Tools Added Monthly",
      value: 25,
      suffix: "+",
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 py-16 sm:py-20",
        className
      )}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div
                    className={cn(
                      "flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg",
                      "bg-white/20 backdrop-blur-sm"
                    )}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Counter */}
                <div className="mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </div>

                {/* Label */}
                <p className="text-sm font-medium text-white/90 sm:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Animated Counter Component
interface AnimatedCounterProps {
  value: number;
  suffix: string;
  inView: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix,
  inView,
}) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="text-4xl font-bold text-white sm:text-5xl">
      {count}
      {suffix}
    </span>
  );
};

export { StatsSection };
