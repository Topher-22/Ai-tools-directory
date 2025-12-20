# UI Components Quick Usage Guide

## 🚀 Getting Started

All components are available from a single import:

```typescript
import { Button, Card, Badge, Rating, Alert } from "@/components/ui";
```

## 📦 Component Examples

### Buttons

```typescript
// Basic variants
<Button variant="default">Click Me</Button>
<Button variant="gradient">Gradient Button</Button>
<Button variant="outline">Outline</Button>

// With loading state
<Button loading>Saving...</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

### Cards

```typescript
<Card hover> {/* hover prop adds lift effect */}
  <CardHeader>
    <CardTitle>Tool Name</CardTitle>
    <CardDescription>Short description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Badges

```typescript
<Badge>Default</Badge>
<Badge variant="success">Verified</Badge>
<Badge variant="gold">GOLD</Badge>
<Badge variant="warning">Beta</Badge>
```

### Rating

```typescript
// Read-only
<Rating rating={4.5} showValue />

// Interactive
<Rating 
  rating={rating}
  readonly={false}
  onRatingChange={setRating}
  showValue
/>
```

### Forms

```typescript
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    type="email" 
    placeholder="Enter email" 
  />
</div>

<div className="space-y-2">
  <Label>Category</Label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Choose..." />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="1">Option 1</SelectItem>
      <SelectItem value="2">Option 2</SelectItem>
    </SelectContent>
  </Select>
</div>
```

### Alerts

```typescript
<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>
    Your changes have been saved.
  </AlertDescription>
</Alert>
```

### Dialog

```typescript
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    {/* Dialog content */}
  </DialogContent>
</Dialog>
```

### Tabs

```typescript
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="features">Features</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    Overview content
  </TabsContent>
  <TabsContent value="features">
    Features content
  </TabsContent>
</Tabs>
```

### Loading States

```typescript
// Spinner
<LoadingSpinner size="md" text="Loading..." />

// Skeleton
<Skeleton className="h-4 w-full" />
<Skeleton className="h-4 w-3/4" />

// Progress
<Progress value={75} variant="success" showValue />

// Tool Card Skeleton
<ToolCardSkeleton count={3} />
```

### Empty State

```typescript
<EmptyState
  icon={Search}
  title="No results found"
  description="Try adjusting your filters"
  action={{
    label: "Clear Filters",
    onClick: () => clearFilters()
  }}
/>
```

### Tooltip

```typescript
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
</TooltipProvider>
```

## 🎨 Customization

All components accept className for customization:

```typescript
<Button className="w-full">Full Width Button</Button>
<Card className="border-2 border-primary-600">Custom Card</Card>
<Badge className="text-lg">Large Badge</Badge>
```

## 📱 Responsive Design

Components are mobile-first and responsive:

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</div>
```

## 🌙 Dark Mode

All components support dark mode automatically. No extra configuration needed!

## ♿ Accessibility

- All interactive components are keyboard accessible
- Screen reader friendly with ARIA labels
- Focus indicators on all focusable elements
- Semantic HTML structure

## 🎯 Best Practices

1. **Use Semantic Components**: Choose the right component for the job
2. **Consistent Spacing**: Use Tailwind spacing utilities
3. **Loading States**: Always show feedback during async operations
4. **Error Handling**: Show error states with Alert component
5. **Mobile First**: Design for mobile, enhance for desktop

## 📚 View All Components

Visit the demo page to see all components in action:
```
http://localhost:3000/components-demo
```

## 🔗 Component List

**Base:** Button, Card, Badge, Input, Label, Textarea, Checkbox, Select, Slider
**Interactive:** Dialog, Tabs, Accordion, Tooltip
**Feedback:** Alert, Skeleton, Progress, LoadingSpinner, EmptyState
**Custom:** Rating, Avatar, ToolCardSkeleton

---

Happy building! 🚀
