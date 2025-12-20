"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface ROICalculatorProps {
  className?: string;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ className }) => {
  const [inputs, setInputs] = React.useState({
    hourlyRate: 50,
    hoursPerWeek: 10,
    timeSaved: 30, // percentage
    toolCost: 20, // monthly
    employeeCount: 1,
  });

  const [results, setResults] = React.useState({
    weeklyTimeSaved: 0,
    monthlyTimeSaved: 0,
    annualTimeSaved: 0,
    weeklyCostSaved: 0,
    monthlyCostSaved: 0,
    annualCostSaved: 0,
    monthlyROI: 0,
    annualROI: 0,
    paybackPeriod: 0,
  });

  React.useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const hoursPerWeek = inputs.hoursPerWeek;
    const timeSavedPercentage = inputs.timeSaved / 100;
    const hourlyRate = inputs.hourlyRate;
    const monthlyToolCost = inputs.toolCost * inputs.employeeCount;
    const annualToolCost = monthlyToolCost * 12;

    // Time saved calculations
    const weeklyTimeSaved = hoursPerWeek * timeSavedPercentage;
    const monthlyTimeSaved = weeklyTimeSaved * 4.33; // average weeks per month
    const annualTimeSaved = monthlyTimeSaved * 12;

    // Cost saved calculations
    const weeklyCostSaved = weeklyTimeSaved * hourlyRate * inputs.employeeCount;
    const monthlyCostSaved = monthlyTimeSaved * hourlyRate * inputs.employeeCount;
    const annualCostSaved = annualTimeSaved * hourlyRate * inputs.employeeCount;

    // ROI calculations
    const monthlyNetSavings = monthlyCostSaved - monthlyToolCost;
    const annualNetSavings = annualCostSaved - annualToolCost;
    const monthlyROI = monthlyToolCost > 0 ? (monthlyNetSavings / monthlyToolCost) * 100 : 0;
    const annualROI = annualToolCost > 0 ? (annualNetSavings / annualToolCost) * 100 : 0;

    // Payback period (months)
    const paybackPeriod = monthlyNetSavings > 0 ? monthlyToolCost / monthlyNetSavings : 0;

    setResults({
      weeklyTimeSaved,
      monthlyTimeSaved,
      annualTimeSaved,
      weeklyCostSaved,
      monthlyCostSaved,
      annualCostSaved,
      monthlyROI,
      annualROI,
      paybackPeriod,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatHours = (hours: number) => {
    return hours.toFixed(1);
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Input Form */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary-600" />
            <CardTitle>ROI Calculator</CardTitle>
          </div>
          <CardDescription>
            Calculate the return on investment for your AI tool
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Hourly Rate */}
          <div className="space-y-2">
            <Label htmlFor="hourlyRate">Average Hourly Rate ($)</Label>
            <Input
              id="hourlyRate"
              type="number"
              value={inputs.hourlyRate}
              onChange={(e) =>
                setInputs({ ...inputs, hourlyRate: Number(e.target.value) })
              }
              min={0}
              step={5}
            />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Your or your team's average hourly cost
            </p>
          </div>

          {/* Hours Per Week */}
          <div className="space-y-2">
            <Label htmlFor="hoursPerWeek">
              Hours Spent on This Task Per Week
            </Label>
            <Input
              id="hoursPerWeek"
              type="number"
              value={inputs.hoursPerWeek}
              onChange={(e) =>
                setInputs({ ...inputs, hoursPerWeek: Number(e.target.value) })
              }
              min={0}
              step={1}
            />
          </div>

          {/* Time Saved */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Expected Time Saved (%)</Label>
              <Badge variant="secondary">{inputs.timeSaved}%</Badge>
            </div>
            <Slider
              value={[inputs.timeSaved]}
              onValueChange={(value) =>
                setInputs({ ...inputs, timeSaved: value[0] })
              }
              min={0}
              max={100}
              step={5}
            />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              How much time the tool will save you
            </p>
          </div>

          {/* Tool Cost */}
          <div className="space-y-2">
            <Label htmlFor="toolCost">Tool Cost (Monthly, per user)</Label>
            <Input
              id="toolCost"
              type="number"
              value={inputs.toolCost}
              onChange={(e) =>
                setInputs({ ...inputs, toolCost: Number(e.target.value) })
              }
              min={0}
              step={5}
            />
          </div>

          {/* Employee Count */}
          <div className="space-y-2">
            <Label htmlFor="employeeCount">Number of Users</Label>
            <Select
              value={inputs.employeeCount.toString()}
              onValueChange={(value) =>
                setInputs({ ...inputs, employeeCount: Number(value) })
              }
            >
              <SelectTrigger id="employeeCount">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 user</SelectItem>
                <SelectItem value="5">5 users</SelectItem>
                <SelectItem value="10">10 users</SelectItem>
                <SelectItem value="25">25 users</SelectItem>
                <SelectItem value="50">50 users</SelectItem>
                <SelectItem value="100">100 users</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card className="border-2 border-primary-200 dark:border-primary-900">
        <CardHeader>
          <CardTitle>Your ROI Results</CardTitle>
          <CardDescription>
            Based on your inputs, here's what you can expect
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Time Saved */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Time Saved
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-green-50 dark:bg-green-950 p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Weekly
                </p>
                <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                  {formatHours(results.weeklyTimeSaved)}h
                </p>
              </div>
              <div className="rounded-lg bg-green-50 dark:bg-green-950 p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Monthly
                </p>
                <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                  {formatHours(results.monthlyTimeSaved)}h
                </p>
              </div>
              <div className="rounded-lg bg-green-50 dark:bg-green-950 p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Annually
                </p>
                <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                  {formatHours(results.annualTimeSaved)}h
                </p>
              </div>
            </div>
          </div>

          {/* Cost Savings */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Cost Savings
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-blue-50 dark:bg-blue-950 p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Weekly
                </p>
                <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                  {formatCurrency(results.weeklyCostSaved)}
                </p>
              </div>
              <div className="rounded-lg bg-blue-50 dark:bg-blue-950 p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Monthly
                </p>
                <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                  {formatCurrency(results.monthlyCostSaved)}
                </p>
              </div>
              <div className="rounded-lg bg-blue-50 dark:bg-blue-950 p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Annually
                </p>
                <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                  {formatCurrency(results.annualCostSaved)}
                </p>
              </div>
            </div>
          </div>

          {/* ROI */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-purple-600" />
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Return on Investment
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-purple-50 dark:bg-purple-950 p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Monthly ROI
                </p>
                <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">
                  {results.monthlyROI.toFixed(0)}%
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Payback in {results.paybackPeriod.toFixed(1)} months
                </p>
              </div>
              <div className="rounded-lg bg-purple-50 dark:bg-purple-950 p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Annual ROI
                </p>
                <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">
                  {results.annualROI.toFixed(0)}%
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Net savings: {formatCurrency(results.annualCostSaved - inputs.toolCost * inputs.employeeCount * 12)}
                </p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="rounded-lg border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-950 p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Bottom line:</strong> This tool will save you{" "}
              <strong>{formatHours(results.annualTimeSaved)} hours</strong> and{" "}
              <strong>{formatCurrency(results.annualCostSaved)}</strong> per year,
              delivering a <strong>{results.annualROI.toFixed(0)}% ROI</strong>.
            </p>
          </div>

          {/* CTA */}
          <Button className="w-full" size="lg" variant="gradient">
            Start Saving Time & Money
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export { ROICalculator };
