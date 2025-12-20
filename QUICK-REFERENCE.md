# AI Tools Directory - Quick Reference Guide

## 🚀 Quick Start

### 1. Setup Database
```bash
# Install dependencies (if not done)
npm install

# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed with sample data
npm run db:seed

# Open Prisma Studio (GUI)
npm run db:studio
```

### 2. Start Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

## 📊 Database Operations

### Import Database Functions
```typescript
import { 
  getTools,
  getToolBySlug,
  getFeaturedTools,
  getTopCategories,
  createReview,
  saveToolForUser
} from '@/lib/db';
```

### Common Queries

**Get Featured Tools:**
```typescript
const featured = await getFeaturedTools(6);
```

**Get Tools with Filters:**
```typescript
const tools = await getTools({
  search: 'AI writing',
  pricingModels: ['FREE', 'FREEMIUM'],
  minRating: 4.0,
  hasFreeVersion: true,
}, 1, 12); // page 1, 12 per page
```

**Get Tool Details:**
```typescript
const tool = await getToolBySlug('chatgpt');
// Includes: categories, reviews, integrations, deals
```

**Get Categories:**
```typescript
const categories = await getTopCategories(6);
```

**Search Tools:**
```typescript
const results = await searchTools('video editor', 10);
```

**Get Reviews:**
```typescript
const { data, pagination } = await getReviewsByTool(
  toolId,
  { rating: 5, verifiedOnly: true },
  1,
  10
);
```

**Save Tool:**
```typescript
await saveToolForUser(userId, toolId, 'Great for marketing!');
```

**Create Review:**
```typescript
await createReview({
  toolId: 'tool-id',
  userId: 'user-id',
  rating: 5,
  title: 'Amazing tool!',
  reviewText: 'This changed my workflow...',
  useCase: 'Content Creation',
  industry: 'Marketing',
  companySize: 'SMALL',
  usageDuration: '3-6 months',
  pros: ['Easy to use', 'Great results'],
  cons: ['Bit pricey'],
});
```

## 🎨 Seeded Data

### Tools (9 total)
- **ChatGPT** (4.8★, GOLD) - AI Writing
- **Jasper** (4.5★, GOLD) - AI Writing
- **Copy.ai** (4.3★, SILVER) - AI Writing
- **Descript** (4.6★, SILVER) - AI Video
- **Runway ML** (4.4★, SILVER) - AI Video
- **Midjourney** (4.7★, GOLD) - AI Image
- **DALL-E 3** (4.5★, GOLD) - AI Image
- **ElevenLabs** (4.7★, GOLD) - AI Audio
- **Notion AI** (4.4★, SILVER) - Productivity

### Categories (5 total)
- AI Writing Tools
- AI Video Tools
- AI Image Tools
- AI Audio Tools
- AI Productivity

### Demo Users (3 total)
- Sarah Johnson (Marketing, Content Manager)
- Mike Chen (Technology, Software Engineer)
- Emma Williams (Creative, Designer)

## 🔧 Useful Scripts

```bash
# Generate Prisma client (after schema changes)
npm run db:generate

# Push schema to database (development)
npm run db:push

# Create and run migrations (production)
npx prisma migrate dev --name migration_name

# Seed database
npm run db:seed

# Open Prisma Studio
npm run db:studio

# Reset database (WARNING: Deletes all data)
npx prisma migrate reset
```

## 📁 Key Files

- `prisma/schema.prisma` - Database schema
- `prisma/seed.ts` - Seed data
- `lib/db/` - Database query helpers
  - `prisma.ts` - Prisma client
  - `tools.ts` - Tool queries
  - `categories.ts` - Category queries
  - `reviews.ts` - Review & user queries
  - `index.ts` - Central exports
- `lib/types/index.ts` - TypeScript types
- `lib/utils.ts` - Utility functions

## 🎯 Next Steps

1. ✅ Phase 1: Project Setup
2. ✅ Phase 2: Database Schema
3. **→ Phase 3: UI Components** (say "Continue with Phase 3")
4. Phase 4: Layout Components
5. Phase 5: Homepage
6. Phase 6: Tools Listing
7. Phase 7: Tool Page
8. Phase 8: Comparison Engine
9. Phase 9: Authentication
10. Phase 10: Additional Pages
11. Phase 11: Special Features
12. Phase 12: Admin Panel

## 💡 Tips

- Use Prisma Studio (`npm run db:studio`) to visually browse data
- All database functions are typed with TypeScript
- Queries are optimized with proper indexes
- Reviews require moderation (isApproved: false by default)
- Tools must be published to appear (isPublished: true)
- Featured tools appear first (isFeatured: true)

---

Ready when you are! Say **"Continue with Phase 3"** to build the UI components library. 🚀
