"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarSection } from "@/components/layout/sidebar";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// Price Range Filter
interface PriceRangeFilterProps {
  value: number[];
  onChange: (value: number[]) => void;
  max?: number;
}

export const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({
  value,
  onChange,
  max = 200,
}) => {
  return (
    <SidebarSection title="Price Range">
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Max Price</span>
          <span className="font-medium text-gray-900 dark:text-gray-100">
            ${value[0]}/mo
          </span>
        </div>
        <Slider value={value} onValueChange={onChange} max={max} step={10} />
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>$0</span>
          <span>${max}</span>
        </div>
      </div>
    </SidebarSection>
  );
};

// Pricing Model Filter
interface PricingModelFilterProps {
  selected: string[];
  onChange: (selected: string[]) => void;
}

export const PricingModelFilter: React.FC<PricingModelFilterProps> = ({
  selected,
  onChange,
}) => {
  const models = [
    { id: "free", label: "Free" },
    { id: "freemium", label: "Freemium" },
    { id: "subscription", label: "Subscription" },
    { id: "one_time", label: "One-time Purchase" },
    { id: "enterprise", label: "Enterprise" },
  ];

  const toggleModel = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((m) => m !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <SidebarSection title="Pricing Model">
      <div className="space-y-3">
        {models.map((model) => (
          <div key={model.id} className="flex items-center space-x-2">
            <Checkbox
              id={model.id}
              checked={selected.includes(model.id)}
              onCheckedChange={() => toggleModel(model.id)}
            />
            <Label
              htmlFor={model.id}
              className="text-sm font-normal cursor-pointer"
            >
              {model.label}
            </Label>
          </div>
        ))}
      </div>
    </SidebarSection>
  );
};

// Category Filter
interface CategoryFilterProps {
  selected: string[];
  onChange: (selected: string[]) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selected,
  onChange,
}) => {
  const categories = [
    { id: "ai-writing", label: "AI Writing", count: 87 },
    { id: "ai-video", label: "AI Video", count: 52 },
    { id: "ai-image", label: "AI Image", count: 64 },
    { id: "ai-audio", label: "AI Audio", count: 38 },
    { id: "productivity", label: "Productivity", count: 95 },
    { id: "chatbots", label: "Chatbots", count: 43 },
    { id: "code", label: "Code", count: 56 },
    { id: "analytics", label: "Analytics", count: 41 },
  ];

  const toggleCategory = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((c) => c !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <SidebarSection title="Categories">
      <div className="space-y-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-between space-x-2"
          >
            <div className="flex items-center space-x-2 flex-1">
              <Checkbox
                id={category.id}
                checked={selected.includes(category.id)}
                onCheckedChange={() => toggleCategory(category.id)}
              />
              <Label
                htmlFor={category.id}
                className="text-sm font-normal cursor-pointer flex-1"
              >
                {category.label}
              </Label>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {category.count}
            </span>
          </div>
        ))}
      </div>
    </SidebarSection>
  );
};

// Features Filter
interface FeaturesFilterProps {
  selected: string[];
  onChange: (selected: string[]) => void;
}

export const FeaturesFilter: React.FC<FeaturesFilterProps> = ({
  selected,
  onChange,
}) => {
  const features = [
    { id: "free_trial", label: "Free Trial" },
    { id: "free_version", label: "Free Version" },
    { id: "api_access", label: "API Access" },
    { id: "team_collaboration", label: "Team Collaboration" },
    { id: "custom_branding", label: "Custom Branding" },
    { id: "integrations", label: "Integrations" },
  ];

  const toggleFeature = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((f) => f !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <SidebarSection title="Features">
      <div className="space-y-3">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-center space-x-2">
            <Checkbox
              id={feature.id}
              checked={selected.includes(feature.id)}
              onCheckedChange={() => toggleFeature(feature.id)}
            />
            <Label
              htmlFor={feature.id}
              className="text-sm font-normal cursor-pointer"
            >
              {feature.label}
            </Label>
          </div>
        ))}
      </div>
    </SidebarSection>
  );
};

// Rating Filter
interface RatingFilterProps {
  value: number;
  onChange: (value: number) => void;
}

export const RatingFilter: React.FC<RatingFilterProps> = ({
  value,
  onChange,
}) => {
  const ratings = [
    { value: 0, label: "All Ratings" },
    { value: 4.5, label: "4.5+ Stars" },
    { value: 4.0, label: "4.0+ Stars" },
    { value: 3.5, label: "3.5+ Stars" },
    { value: 3.0, label: "3.0+ Stars" },
  ];

  return (
    <SidebarSection title="Minimum Rating">
      <Select
        value={value.toString()}
        onValueChange={(val) => onChange(parseFloat(val))}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {ratings.map((rating) => (
            <SelectItem key={rating.value} value={rating.value.toString()}>
              {rating.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </SidebarSection>
  );
};

// Active Filters Display
interface ActiveFiltersProps {
  filters: {
    priceRange?: number[];
    pricingModels?: string[];
    categories?: string[];
    features?: string[];
    minRating?: number;
  };
  onRemove: (type: string, value?: string) => void;
  onClearAll: () => void;
}

export const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  filters,
  onRemove,
  onClearAll,
}) => {
  const getFilterChips = () => {
    const chips: Array<{ type: string; label: string; value?: string }> = [];

    if (filters.priceRange && filters.priceRange[0] < 200) {
      chips.push({
        type: "priceRange",
        label: `Under $${filters.priceRange[0]}/mo`,
      });
    }

    filters.pricingModels?.forEach((model) => {
      chips.push({
        type: "pricingModels",
        label: model.replace("_", " "),
        value: model,
      });
    });

    filters.categories?.forEach((category) => {
      chips.push({
        type: "categories",
        label: category.replace("-", " "),
        value: category,
      });
    });

    filters.features?.forEach((feature) => {
      chips.push({
        type: "features",
        label: feature.replace("_", " "),
        value: feature,
      });
    });

    if (filters.minRating && filters.minRating > 0) {
      chips.push({
        type: "minRating",
        label: `${filters.minRating}+ Stars`,
      });
    }

    return chips;
  };

  const chips = getFilterChips();

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Active Filters:
      </span>
      {chips.map((chip, index) => (
        <Badge
          key={`${chip.type}-${chip.value || index}`}
          variant="secondary"
          className="gap-1.5 capitalize"
        >
          {chip.label}
          <button
            onClick={() => onRemove(chip.type, chip.value)}
            className="hover:text-red-500 transition-colors"
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}
      <Button
        variant="ghost"
        size="sm"
        onClick={onClearAll}
        className="h-6 text-xs"
      >
        Clear All
      </Button>
    </div>
  );
};
