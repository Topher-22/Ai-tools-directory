"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, X, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonRow {
  category: string;
  feature: string;
  values: Array<{
    toolId: string;
    value: boolean | string | number | null;
    label?: string;
  }>;
}

interface ComparisonTableProps {
  tools: Array<{
    id: string;
    name: string;
  }>;
  rows: ComparisonRow[];
  className?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  tools,
  rows,
  className,
}) => {
  // Group rows by category
  const groupedRows = rows.reduce((acc, row) => {
    if (!acc[row.category]) {
      acc[row.category] = [];
    }
    acc[row.category].push(row);
    return acc;
  }, {} as Record<string, ComparisonRow[]>);

  const renderValue = (value: boolean | string | number | null, label?: string) => {
    if (value === true) {
      return (
        <div className="flex items-center justify-center">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
        </div>
      );
    }
    if (value === false) {
      return (
        <div className="flex items-center justify-center">
          <X className="h-5 w-5 text-gray-300 dark:text-gray-700" />
        </div>
      );
    }
    if (value === null || value === undefined) {
      return (
        <div className="flex items-center justify-center">
          <Minus className="h-5 w-5 text-gray-300 dark:text-gray-700" />
        </div>
      );
    }
    return (
      <div className="text-center">
        <span className="text-sm text-gray-900 dark:text-gray-100">
          {label || value}
        </span>
      </div>
    );
  };

  return (
    <div className={cn("space-y-6", className)}>
      {Object.entries(groupedRows).map(([category, categoryRows]) => (
        <Card key={category}>
          <CardHeader>
            <CardTitle className="text-lg">{category}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-900 min-w-[200px]">
                      Feature
                    </th>
                    {tools.map((tool) => (
                      <th
                        key={tool.id}
                        className="px-6 py-3 text-center text-sm font-semibold text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-900 min-w-[150px]"
                      >
                        {tool.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {categoryRows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="border-b border-gray-100 dark:border-gray-900 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {row.feature}
                      </td>
                      {tools.map((tool) => {
                        const cellValue = row.values.find(
                          (v) => v.toolId === tool.id
                        );
                        return (
                          <td key={tool.id} className="px-6 py-4">
                            {cellValue
                              ? renderValue(cellValue.value, cellValue.label)
                              : renderValue(null)}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Mobile-friendly Comparison Cards (alternative to table)
interface ComparisonCardsProps {
  tools: Array<{
    id: string;
    name: string;
  }>;
  rows: ComparisonRow[];
  className?: string;
}

const ComparisonCards: React.FC<ComparisonCardsProps> = ({
  tools,
  rows,
  className,
}) => {
  // Group rows by category
  const groupedRows = rows.reduce((acc, row) => {
    if (!acc[row.category]) {
      acc[row.category] = [];
    }
    acc[row.category].push(row);
    return acc;
  }, {} as Record<string, ComparisonRow[]>);

  const renderValue = (value: boolean | string | number | null, label?: string) => {
    if (value === true) {
      return <Badge variant="success">Yes</Badge>;
    }
    if (value === false) {
      return <Badge variant="outline">No</Badge>;
    }
    if (value === null || value === undefined) {
      return <Badge variant="outline">N/A</Badge>;
    }
    return (
      <Badge variant="secondary">
        {label || value}
      </Badge>
    );
  };

  return (
    <div className={cn("space-y-6", className)}>
      {Object.entries(groupedRows).map(([category, categoryRows]) => (
        <Card key={category}>
          <CardHeader>
            <CardTitle className="text-lg">{category}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {categoryRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="rounded-lg border border-gray-200 dark:border-gray-800 p-4"
              >
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                  {row.feature}
                </h4>
                <div className="space-y-2">
                  {tools.map((tool) => {
                    const cellValue = row.values.find(
                      (v) => v.toolId === tool.id
                    );
                    return (
                      <div
                        key={tool.id}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {tool.name}
                        </span>
                        {cellValue
                          ? renderValue(cellValue.value, cellValue.label)
                          : renderValue(null)}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export { ComparisonTable, ComparisonCards };
export type { ComparisonRow };
