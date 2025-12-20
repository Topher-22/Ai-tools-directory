"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Badge,
  Input,
  Label,
  Textarea,
  Checkbox,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Separator,
  Alert,
  AlertDescription,
  AlertTitle,
  Skeleton,
  Progress,
  EmptyState,
  LoadingSpinner,
  Rating,
  Avatar,
  ToolCardSkeleton,
} from "@/components/ui";
import { Search, Heart, Settings } from "lucide-react";

export default function ComponentsDemo() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [rating, setRating] = useState(4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-8">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-700 via-secondary-700 to-accent-600 bg-clip-text text-transparent">
            UI Components Library
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Phase 3: Complete Component Collection
          </p>
        </div>

        {/* Buttons */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Buttons
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>
                All button styles with hover animations
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="gradient">Gradient</Button>
              <Button loading>Loading</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </CardContent>
          </Card>
        </section>

        {/* Badges */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Badges
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="accent">Accent</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="gold">Gold</Badge>
              <Badge variant="silver">Silver</Badge>
              <Badge variant="bronze">Bronze</Badge>
            </CardContent>
          </Card>
        </section>

        {/* Forms */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Form Components
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Input Fields</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="search">Search with Icon</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input id="search" className="pl-10" placeholder="Search tools..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Textarea</Label>
                  <Textarea id="message" placeholder="Type your message..." />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Select & Checkbox</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Select Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="writing">AI Writing</SelectItem>
                      <SelectItem value="video">AI Video</SelectItem>
                      <SelectItem value="image">AI Image</SelectItem>
                      <SelectItem value="audio">AI Audio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="marketing" defaultChecked />
                    <Label htmlFor="marketing">Receive marketing emails</Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Price Range: ${sliderValue[0]}</Label>
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rating & Avatar */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Rating & Avatar
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Star Ratings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Read-only</p>
                  <Rating rating={4.5} showValue />
                  <Rating rating={3.2} showValue size="sm" />
                  <Rating rating={5} showValue size="lg" />
                </div>
                <Separator />
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Interactive</p>
                  <Rating
                    rating={rating}
                    readonly={false}
                    onRatingChange={setRating}
                    showValue
                  />
                  <p className="text-xs text-gray-500">
                    Current rating: {rating}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Avatars</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-4">
                  <Avatar fallback="JD" size="sm" />
                  <Avatar fallback="SK" size="md" />
                  <Avatar fallback="AB" size="lg" />
                  <Avatar fallback="MG" size="xl" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Alerts */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Alerts
          </h2>
          <div className="space-y-4">
            <Alert variant="default">
              <AlertTitle>Default Alert</AlertTitle>
              <AlertDescription>
                This is a default informational alert message.
              </AlertDescription>
            </Alert>
            <Alert variant="success">
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Your tool has been successfully added to favorites.
              </AlertDescription>
            </Alert>
            <Alert variant="warning">
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Your free trial will expire in 3 days.
              </AlertDescription>
            </Alert>
            <Alert variant="error">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Failed to save changes. Please try again.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Tabs */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Tabs
          </h2>
          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <h3 className="text-xl font-semibold">Overview</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    This is the overview tab content with smooth transitions.
                  </p>
                </TabsContent>
                <TabsContent value="features">
                  <h3 className="text-xl font-semibold">Features</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Features content goes here.
                  </p>
                </TabsContent>
                <TabsContent value="pricing">
                  <h3 className="text-xl font-semibold">Pricing</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Pricing information displayed here.
                  </p>
                </TabsContent>
                <TabsContent value="reviews">
                  <h3 className="text-xl font-semibold">Reviews</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    User reviews and ratings.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Accordion */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Accordion
          </h2>
          <Card>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is AI Tools Directory?</AccordionTrigger>
                  <AccordionContent>
                    A comprehensive platform to discover, compare, and choose the best
                    AI tools for your workflow.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I add my tool?</AccordionTrigger>
                  <AccordionContent>
                    Click on "Submit Tool" in the navigation menu and fill out the
                    submission form.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it free to use?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Browsing and comparing tools is completely free. Premium
                    features are available for vendors.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Dialog & Tooltip */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Dialog & Tooltip
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Dialog Example</CardTitle>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when you're
                        done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="@johndoe" />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Changes</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tooltip Examples</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add to favorites</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Settings</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Progress & Loading */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Progress & Loading States
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Progress Bars</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={25} variant="default" showValue />
                <Progress value={50} variant="success" showValue />
                <Progress value={75} variant="warning" showValue />
                <Progress value={90} variant="error" showValue />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Loading States</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <LoadingSpinner size="sm" text="Loading..." />
                <Separator />
                <div className="space-y-2">
                  <p className="text-sm font-medium">Skeleton Loaders</p>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tool Card Skeleton */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Tool Card Skeleton
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ToolCardSkeleton count={3} />
          </div>
        </section>

        {/* Empty State */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Empty State
          </h2>
          <Card>
            <CardContent>
              <EmptyState
                icon={Search}
                title="No tools found"
                description="Try adjusting your filters or search query to find what you're looking for."
                action={{
                  label: "Clear Filters",
                  onClick: () => alert("Filters cleared!"),
                }}
              />
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <div className="py-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            ✅ Phase 3 Complete: UI Components Library
          </p>
          <p className="mt-2 text-sm text-gray-500">
            All components are ready for use in the application
          </p>
        </div>
      </div>
    </div>
  );
}
