import { prisma } from './prisma';
import { CompanySize } from '@prisma/client';

export async function getReviewsByTool(
  toolId: string,
  filters?: {
    rating?: number;
    verifiedOnly?: boolean;
  },
  page = 1,
  pageSize = 10
) {
  const skip = (page - 1) * pageSize;

  const where: any = {
    toolId,
    isApproved: true,
  };

  if (filters?.rating) {
    where.rating = filters.rating;
  }

  if (filters?.verifiedOnly) {
    where.isVerifiedPurchase = true;
  }

  const [reviews, total] = await Promise.all([
    prisma.review.findMany({
      where,
      include: { user: true },
      skip,
      take: pageSize,
      orderBy: [
        { helpfulVotes: 'desc' },
        { createdAt: 'desc' },
      ],
    }),
    prisma.review.count({ where }),
  ]);

  return {
    data: reviews,
    pagination: {
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    },
  };
}

export async function getReviewStats(toolId: string) {
  const reviews = await prisma.review.findMany({
    where: {
      toolId,
      isApproved: true,
    },
    select: { rating: true },
  });

  const totalReviews = reviews.length;
  if (totalReviews === 0) {
    return {
      averageRating: 0,
      totalReviews: 0,
      ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
    };
  }

  const ratingDistribution = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length,
  };

  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews;

  return {
    averageRating: Math.round(averageRating * 10) / 10,
    totalReviews,
    ratingDistribution,
  };
}

export async function createReview(data: {
  toolId: string;
  userId: string;
  rating: number;
  title: string;
  reviewText: string;
  useCase: string;
  industry: string;
  companySize: CompanySize;
  usageDuration: string;
  pros: string[];
  cons: string[];
  isVerifiedPurchase?: boolean;
}) {
  return prisma.review.create({
    data: {
      ...data,
      isApproved: false, // Requires moderation
    },
  });
}

export async function voteReview(reviewId: string, helpful: boolean) {
  return prisma.review.update({
    where: { id: reviewId },
    data: {
      helpfulVotes: helpful ? { increment: 1 } : undefined,
      notHelpfulVotes: !helpful ? { increment: 1 } : undefined,
    },
  });
}

// User operations
export async function saveToolForUser(userId: string, toolId: string, notes?: string) {
  return prisma.userToolSave.create({
    data: {
      userId,
      toolId,
      notes,
    },
  });
}

export async function unsaveToolForUser(userId: string, toolId: string) {
  return prisma.userToolSave.deleteMany({
    where: {
      userId,
      toolId,
    },
  });
}

export async function getUserSavedTools(userId: string) {
  const saves = await prisma.userToolSave.findMany({
    where: { userId },
    include: {
      tool: {
        include: {
          primaryCategory: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return saves.map(save => ({
    ...save.tool,
    savedAt: save.createdAt,
    notes: save.notes,
  }));
}

export async function isToolSaved(userId: string, toolId: string) {
  const save = await prisma.userToolSave.findUnique({
    where: {
      userId_toolId: {
        userId,
        toolId,
      },
    },
  });

  return !!save;
}

// Comparison operations
export async function createComparison(data: {
  userId?: string;
  name: string;
  toolIds: string[];
  criteria?: any;
}) {
  return prisma.toolComparison.create({
    data: {
      userId: data.userId,
      name: data.name,
      toolIds: data.toolIds,
      criteria: data.criteria || {},
    },
  });
}

export async function getUserComparisons(userId: string) {
  return prisma.toolComparison.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getComparisonById(id: string) {
  const comparison = await prisma.toolComparison.findUnique({
    where: { id },
  });

  if (!comparison) return null;

  const tools = await prisma.tool.findMany({
    where: {
      id: { in: comparison.toolIds },
    },
    include: {
      primaryCategory: true,
      integrations: true,
    },
  });

  return {
    ...comparison,
    tools,
  };
}
