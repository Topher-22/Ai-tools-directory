# Layout Components - Quick Usage Guide

## 🎨 All Layout Components

```typescript
import {
  PageLayout,      // Wraps entire page with header/footer
  Header,          // Navigation header
  Footer,          // Site footer
  MobileMenu,      // Mobile slide-in menu
  Sidebar,         // Filter/navigation sidebar
  SidebarSection,  // Sidebar content sections
  Breadcrumb,      // Breadcrumb navigation
  Container,       // Content width container
  BackToTop,       // Scroll to top button
} from "@/components/layout";
```

## 📦 Component Examples

### PageLayout - Page Wrapper

```typescript
import { PageLayout } from "@/components/layout";

export default function MyPage() {
  return (
    <PageLayout maxWidth="7xl">
      {/* Your content here */}
      <h1>My Page</h1>
    </PageLayout>
  );
}

// Without header/footer
<PageLayout showHeader={false} showFooter={false}>
  {/* Content */}
</PageLayout>
```

### Container - Content Width

```typescript
import { Container } from "@/components/layout";

<Container maxWidth="6xl" className="py-8">
  <h1>Centered Content</h1>
</Container>

// Max widths: "full" | "7xl" | "6xl" | "5xl" | "4xl" | "3xl"
```

### Breadcrumb - Navigation Path

```typescript
import { Breadcrumb } from "@/components/layout";

<Breadcrumb 
  items={[
    { label: "Tools", href: "/tools" },
    { label: "AI Writing", href: "/categories/ai-writing" },
    { label: "ChatGPT" } // No href = current page
  ]} 
  showHome={true}  // Show home icon
/>
```

### Sidebar - Filters/Navigation

```typescript
import { Sidebar, SidebarSection } from "@/components/layout";
import { Checkbox, Label, Slider, Button } from "@/components/ui";

function ToolsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex gap-8">
      <Sidebar 
        title="Filters"
        sticky={true}
        mobileOpen={sidebarOpen}
        onMobileClose={() => setSidebarOpen(false)}
      >
        <SidebarSection title="Price Range">
          <Slider value={[50]} max={200} />
        </SidebarSection>

        <SidebarSection title="Categories">
          <div className="space-y-2">
            <Checkbox id="cat1" />
            <Label htmlFor="cat1">Category 1</Label>
          </div>
        </SidebarSection>

        <Button variant="outline" className="w-full">
          Reset Filters
        </Button>
      </Sidebar>

      <div className="flex-1">
        {/* Main content */}
      </div>
    </div>
  );
}
```

### BackToTop Button

```typescript
import { BackToTop } from "@/components/layout";

// Add to any page
<BackToTop threshold={300} />  // Shows after scrolling 300px
```

## 🏗️ Complete Page Structure

```typescript
import {
  PageLayout,
  Container,
  Breadcrumb,
  Sidebar,
  SidebarSection,
  BackToTop,
} from "@/components/layout";
import { Button } from "@/components/ui";

export default function ToolsPage() {
  return (
    <PageLayout>
      <Container className="py-8">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: "Tools", href: "/tools" },
            { label: "AI Writing" }
          ]} 
          className="mb-6"
        />

        {/* Page Header */}
        <h1 className="text-4xl font-bold mb-8">
          AI Writing Tools
        </h1>

        {/* Content with Sidebar */}
        <div className="flex gap-8">
          {/* Sidebar */}
          <Sidebar title="Filters" sticky>
            <SidebarSection title="Price">
              {/* Filters */}
            </SidebarSection>
          </Sidebar>

          {/* Main Content */}
          <div className="flex-1">
            {/* Tools grid */}
          </div>
        </div>
      </Container>

      <BackToTop />
    </PageLayout>
  );
}
```

## 📱 Mobile Behavior

### Sidebar on Mobile
```typescript
// Mobile filter toggle button
<Button 
  onClick={() => setSidebarOpen(true)}
  className="lg:hidden"
>
  Show Filters
</Button>

// Sidebar automatically becomes slide-in panel on mobile
<Sidebar
  mobileOpen={sidebarOpen}
  onMobileClose={() => setSidebarOpen(false)}
>
  {/* Content */}
</Sidebar>
```

### Header Mobile Menu
The header automatically shows a hamburger menu on mobile. The mobile menu is managed internally by PageLayout.

## 🎨 Styling Tips

### Custom Header Spacing
```typescript
<PageLayout>
  <Container className="py-8">
    {/* py-8 = 2rem top and bottom padding */}
  </Container>
</PageLayout>
```

### Full Width Sections
```typescript
// Full width background
<div className="bg-gray-50 dark:bg-gray-900">
  <Container className="py-12">
    {/* Centered content with background */}
  </Container>
</div>
```

### Sticky Sidebar
```typescript
<Sidebar 
  sticky={true}  // Sidebar sticks while scrolling
  className="lg:top-20 lg:h-[calc(100vh-5rem)]"
>
  {/* Filters */}
</Sidebar>
```

## 🌙 Dark Mode

All layout components automatically support dark mode:
```typescript
// Dark mode toggle is built into Header and MobileMenu
// Just click the moon/sun icon to switch
```

## ♿ Accessibility

All layout components include:
- ✓ Semantic HTML (`<header>`, `<nav>`, `<footer>`, etc.)
- ✓ ARIA labels where needed
- ✓ Keyboard navigation
- ✓ Focus indicators
- ✓ Screen reader friendly

## 📊 Component Props Reference

### PageLayout
```typescript
{
  children: ReactNode;
  showHeader?: boolean;        // Default: true
  showFooter?: boolean;        // Default: true
  maxWidth?: "full" | "7xl" | "6xl" | "5xl";  // Default: "7xl"
  className?: string;
}
```

### Container
```typescript
{
  maxWidth?: "full" | "7xl" | "6xl" | "5xl" | "4xl" | "3xl";
  padding?: boolean;           // Default: true
  className?: string;
  children: ReactNode;
}
```

### Sidebar
```typescript
{
  title?: string;
  sticky?: boolean;            // Default: true
  mobileOpen?: boolean;        // Default: false
  onMobileClose?: () => void;
  className?: string;
  children: ReactNode;
}
```

### Breadcrumb
```typescript
{
  items: BreadcrumbItem[];     // { label: string, href?: string }[]
  showHome?: boolean;          // Default: true
  className?: string;
}
```

### BackToTop
```typescript
{
  threshold?: number;          // Default: 500 (pixels)
}
```

## 🎯 Best Practices

1. **Always use PageLayout** as the outermost wrapper
2. **Use Container** for consistent content width
3. **Add Breadcrumb** for better navigation
4. **Include BackToTop** on long pages
5. **Make Sidebar sticky** for better UX
6. **Mobile-first** - test responsive behavior
7. **Consistent spacing** - use Tailwind spacing utilities

## 🚀 View Demo

See all layouts in action:
```
http://localhost:3000/layout-demo
```

---

Happy building! 🎨
