// Enums
export enum PricingModel {
  FREE = "FREE",
  FREEMIUM = "FREEMIUM",
  SUBSCRIPTION = "SUBSCRIPTION",
  ONE_TIME = "ONE_TIME",
  USAGE_BASED = "USAGE_BASED",
  ENTERPRISE = "ENTERPRISE",
}

export enum VerificationStatus {
  UNVERIFIED = "UNVERIFIED",
  BRONZE = "BRONZE",
  SILVER = "SILVER",
  GOLD = "GOLD",
}

export enum SubscriptionTier {
  FREE = "FREE",
  PRO = "PRO",
}

export enum VendorTier {
  FREE = "FREE",
  VERIFIED = "VERIFIED",
  FEATURED = "FEATURED",
  PREMIUM = "PREMIUM",
}

export enum CompanySize {
  SOLO = "SOLO",
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  ENTERPRISE = "ENTERPRISE",
}

// Tool Types
export interface Tool {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  websiteUrl: string;
  logoUrl: string;
  screenshots: string[];
  demoVideoUrl?: string;
  primaryCategoryId: string;
  primaryCategory?: Category;
  categories?: Category[];
  targetIndustries: string[];
  targetRoles: string[];
  companySizeFit: CompanySize[];
  useCases: UseCase[];
  pricingModel: PricingModel;
  startingPrice?: number;
  pricingDetails: PricingTier[];
  hasFreeVersion: boolean;
  hasFreeTrial: boolean;
  freeTrialDays?: number;
  features: Feature[];
  aiCapabilities: string[];
  integrations?: Integration[];
  ourRating: number;
  ourRatingBreakdown: RatingBreakdown;
  communityRatingAvg: number;
  communityRatingCount: number;
  verificationStatus: VerificationStatus;
  lastVerifiedAt?: Date;
  lastTestedAt?: Date;
  testedBy?: string;
  expertTakePros: string[];
  expertTakeCons: string[];
  expertTakeVerdict: string;
  bestFor: string;
  notRecommendedFor: string;
  seoTitle: string;
  seoDescription: string;
  monthlyVisitsEstimate?: number;
  popularityScore: number;
  isPublished: boolean;
  isFeatured: boolean;
  reviews?: Review[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  colorTheme: string;
  parentCategoryId?: string;
  parentCategory?: Category;
  subcategories?: Category[];
  seoTitle: string;
  seoDescription: string;
  displayOrder: number;
  isActive: boolean;
  toolCount?: number;
}

export interface Feature {
  name: string;
  description: string;
  plan: string;
}

export interface UseCase {
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: number;
  billingPeriod: "monthly" | "yearly" | "one-time";
  features: string[];
  isPopular?: boolean;
  maxUsers?: number;
}

export interface RatingBreakdown {
  easeOfUse: number;
  features: number;
  valueForMoney: number;
  support: number;
  overall: number;
}

export interface Integration {
  id: string;
  name: string;
  slug: string;
  logoUrl: string;
  category: string;
}

export interface Review {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  toolId: string;
  tool?: Tool;
  userId: string;
  user?: User;
  rating: number;
  title: string;
  reviewText: string;
  useCase: string;
  industry: string;
  companySize: CompanySize;
  usageDuration: string;
  pros: string[];
  cons: string[];
  isVerifiedPurchase: boolean;
  verificationProof?: string;
  helpfulVotes: number;
  notHelpfulVotes: number;
  isApproved: boolean;
  isFlagged: boolean;
}

export interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  name: string;
  avatarUrl?: string;
  industry?: string;
  role?: string;
  companySize?: CompanySize;
  interests: string[];
  painPoints: string[];
  toolsCurrentlyUsing: string[];
  subscriptionTier: SubscriptionTier;
  subscriptionEndsAt?: Date;
  onboardingCompleted: boolean;
}

export interface ToolComparison {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId?: string;
  user?: User;
  name: string;
  toolIds: string[];
  tools?: Tool[];
  criteria: Record<string, any>;
}

export interface DealAlert {
  id: string;
  createdAt: Date;
  toolId: string;
  tool?: Tool;
  title: string;
  description: string;
  discountPercent?: number;
  promoCode?: string;
  startDate: Date;
  endDate: Date;
  termsConditions?: string;
  isActive: boolean;
}

export interface AffiliateLink {
  id: string;
  createdAt: Date;
  toolId: string;
  affiliateUrl: string;
  trackingCode: string;
  commissionRate?: number;
  network?: string;
  clicks: number;
  conversions: number;
  revenue: number;
  isActive: boolean;
}

// Filter Types
export interface ToolFilters {
  search?: string;
  categories?: string[];
  pricingModels?: PricingModel[];
  priceRange?: [number, number];
  features?: string[];
  integrations?: string[];
  companySizes?: CompanySize[];
  hasFreeVersion?: boolean;
  hasFreeTrial?: boolean;
  verificationStatus?: VerificationStatus[];
  minRating?: number;
}

export interface ToolSortOption {
  label: string;
  value: string;
  field: keyof Tool;
  direction: "asc" | "desc";
}

// API Response Types
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
