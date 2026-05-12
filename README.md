# AI Tools Directory 🚀

A modern, full-featured directory platform for discovering and comparing AI tools. Built with Next.js 14, TypeScript, Tailwind CSS, and Prisma.

## ✨ Features

### Core Features
- 🏠 **Beautiful Homepage** - Hero section, categories, featured tools, stats, newsletter
- 🔍 **Advanced Search** - Full-text search with filters and sorting
- 📊 **Tool Listings** - Grid view with filters, sorting, and pagination
- 📝 **Tool Details** - Comprehensive tool pages with tabs, reviews, and pricing
- ⚖️ **Comparison Engine** - Side-by-side tool comparison (up to 3 tools)
- 📂 **Categories** - 12 organized categories with 610+ tools
- ⭐ **Reviews System** - User reviews with ratings, pros/cons, and voting

### User Features
- 👤 **Authentication** - Login/signup with email and social auth
- 💾 **User Dashboard** - Activity stats, saved tools, comparisons
- 💖 **Favorites** - Save and organize favorite tools

### Interactive Features
- 🧮 **ROI Calculator** - Calculate return on investment for AI tools
- 🎯 **Tool Finder Quiz** - 5-question quiz for personalized recommendations

### Admin Features
- 🛠️ **Admin Panel** - Dashboard with stats and activity monitoring
- 📦 **Content Management** - CRUD operations for all content

## 🎨 Design System

### Colors
- **Primary (Deep Blue)**: #1E40AF
- **Secondary (Purple)**: #7C3AED
- **Accent (Cyan)**: #06B6D4

### Typography
- **Font**: Inter (sans-serif)
- **Mono**: JetBrains Mono

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL + Prisma
- **Auth**: NextAuth.js
- **UI**: Radix UI + Lucide Icons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ai-tools-directory.git
cd ai-tools-directory
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/ai_tools_directory"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
```

4. **Set up the database**
```bash
npx prisma generate
npx prisma migrate dev
npx prisma db seed
```

5. **Start development**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

11 models including:
- Tool, Category, Review, User
- SavedTool, Comparison, Pricing
- Tag, Integration, FAQ, Activity

## 🎯 Key Pages

### Public
- `/` - Homepage
- `/tools` - Browse tools
- `/tools/[slug]` - Tool details
- `/categories` - All categories
- `/compare` - Compare tools
- `/calculator` - ROI calculator
- `/quiz` - Tool finder
- `/about`, `/contact`

### User (Protected)
- `/login`, `/signup`
- `/dashboard` - Overview
- `/dashboard/saved` - Saved tools

### Admin (Protected)
- `/admin` - Dashboard
- `/admin/tools` - Manage tools
- `/admin/users` - Manage users
- `/admin/reviews` - Moderate reviews

## 🔧 Development

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production
npx prisma studio    # Open database UI
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy!

## 📝 Environment Variables

Required:
```env
DATABASE_URL
NEXTAUTH_URL
NEXTAUTH_SECRET
```

Optional:
```env
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET
```

## 🗺️ Project Phases

✅ **Phase 1-12 Complete!**
- [x] Project setup & design
- [x] Database schema
- [x] UI components (24)
- [x] Layout components (9)
- [x] Homepage
- [x] Tools listing & detail
- [x] Comparison engine
- [x] Auth & dashboard
- [x] Additional pages
- [x] Special features
- [x] Admin panel
- [Nick Launches](https://nicklaunches.com/) - Launch platform for builders, AI startups, and SaaS founders to get discovered and earn a permanent dofollow backlink.

## 📄 License

MIT License - see LICENSE file

## 🙏 Credits

Built with Next.js, Tailwind CSS, Prisma, and ❤️

---

**⭐ Star this repo if you find it helpful!**
