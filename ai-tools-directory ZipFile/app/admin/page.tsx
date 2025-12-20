"use client";

import * as React from "react";
import { AdminLayout } from "@/components/admin/admin-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Package,
  Users,
  MessageSquare,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Eye,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminDashboardPage() {
  const stats = [
    {
      name: "Total Tools",
      value: "487",
      change: "+23",
      changeType: "increase" as const,
      icon: Package,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-950",
    },
    {
      name: "Total Users",
      value: "12,453",
      change: "+342",
      changeType: "increase" as const,
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-950",
    },
    {
      name: "Reviews",
      value: "8,234",
      change: "+127",
      changeType: "increase" as const,
      icon: MessageSquare,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-950",
    },
    {
      name: "Monthly Growth",
      value: "23.5%",
      change: "+4.3%",
      changeType: "increase" as const,
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-950",
    },
  ];

  const recentActivity = [
    {
      id: "1",
      type: "tool",
      action: "New tool added",
      description: "GPT-4 Turbo by OpenAI",
      time: "2 minutes ago",
      status: "pending",
    },
    {
      id: "2",
      type: "review",
      action: "Review submitted",
      description: "5-star review for ChatGPT",
      time: "15 minutes ago",
      status: "approved",
    },
    {
      id: "3",
      type: "user",
      action: "New user registered",
      description: "john.doe@example.com",
      time: "1 hour ago",
      status: "completed",
    },
    {
      id: "4",
      type: "tool",
      action: "Tool updated",
      description: "Midjourney v6 released",
      time: "2 hours ago",
      status: "completed",
    },
  ];

  const pendingActions = [
    {
      id: "1",
      title: "3 reviews pending approval",
      category: "Reviews",
      priority: "high",
      count: 3,
    },
    {
      id: "2",
      title: "5 tools awaiting verification",
      category: "Tools",
      priority: "medium",
      count: 5,
    },
    {
      id: "3",
      title: "2 reported issues",
      category: "Issues",
      priority: "high",
      count: 2,
    },
  ];

  const topTools = [
    { name: "ChatGPT", views: 24534, change: 12.5 },
    { name: "Midjourney", views: 18923, change: 8.3 },
    { name: "Jasper", views: 15432, change: -2.1 },
    { name: "Copy.ai", views: 12876, change: 5.7 },
    { name: "Descript", views: 10234, change: 15.2 },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Dashboard Overview
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Monitor your platform's performance and activity
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.name}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {stat.name}
                      </p>
                      <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
                        {stat.value}
                      </p>
                      <div className="mt-1 flex items-center gap-1">
                        {stat.changeType === "increase" ? (
                          <ArrowUp className="h-4 w-4 text-green-600" />
                        ) : (
                          <ArrowDown className="h-4 w-4 text-red-600" />
                        )}
                        <span
                          className={cn(
                            "text-sm font-medium",
                            stat.changeType === "increase"
                              ? "text-green-600"
                              : "text-red-600"
                          )}
                        >
                          {stat.change}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          this month
                        </span>
                      </div>
                    </div>
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-lg",
                        stat.bgColor
                      )}
                    >
                      <Icon className={cn("h-6 w-6", stat.color)} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions on your platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-4 rounded-lg border border-gray-200 p-4 dark:border-gray-800"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-gray-900 dark:text-gray-100">
                          {activity.action}
                        </p>
                        {activity.status === "pending" && (
                          <Badge variant="warning">Pending</Badge>
                        )}
                        {activity.status === "approved" && (
                          <Badge variant="success">Approved</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {activity.description}
                      </p>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Pending Actions</CardTitle>
              <CardDescription>Items requiring your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pendingActions.map((action) => (
                  <div
                    key={action.id}
                    className="flex items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-800"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-lg",
                          action.priority === "high"
                            ? "bg-red-100 dark:bg-red-950"
                            : "bg-yellow-100 dark:bg-yellow-950"
                        )}
                      >
                        <AlertCircle
                          className={cn(
                            "h-5 w-5",
                            action.priority === "high"
                              ? "text-red-600"
                              : "text-yellow-600"
                          )}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">
                          {action.title}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {action.category}
                        </p>
                      </div>
                    </div>
                    <Button size="sm">Review</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Tools */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Tools</CardTitle>
            <CardDescription>Most viewed tools this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topTools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-800"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold text-gray-500 dark:text-gray-400">
                      #{index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        {tool.name}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Eye className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {tool.views.toLocaleString()} views
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {tool.change > 0 ? (
                      <ArrowUp className="h-4 w-4 text-green-600" />
                    ) : (
                      <ArrowDown className="h-4 w-4 text-red-600" />
                    )}
                    <span
                      className={cn(
                        "text-sm font-medium",
                        tool.change > 0 ? "text-green-600" : "text-red-600"
                      )}
                    >
                      {Math.abs(tool.change)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
