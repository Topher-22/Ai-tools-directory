import { prisma } from './prisma';
import { PricingModel, VerificationStatus, CompanySize, Prisma } from '@prisma/client';
import type { ToolFilters } from '../types';

export async function getTools(filters?: ToolFilters, page = 1, pageSize = 12) {
  const skip = (page - 1) * pageSize;

  const where: Prisma.ToolWhereInput = {
    isPublished: true,
  };

  // Apply filters
  if (filters?.search) {
    where.OR = [
      { name: { contains: filters.search, mode: 'insensitive' } },
      { tagline: { contains: filters.search, mode: 'insensitive' } },
      { description: { contains: filters.search, mode: 'insensitive' } },
    ];
  }

  if (filters?.categories && filters.categories.length > 0) {
    where.primaryCategoryId = { in: filters.categories };
  }

  if (filters?.pricingModels && filters.pricingModels.length > 0) {
    where.pricingModel = { in: filters.pricingModels };
  }

  if (filters?.priceRange) {
    where.startingPrice = {
      gte: filters.priceRange[0],
      lte: filters.priceRange[1],
    };
  }

  if (filters?.hasFreeVersion !== undefined) {
    where.hasFreeVersion = filters.hasFreeVersion;
  }

  if (filters?.hasFreeTrial !== undefined) {
    where.hasFreeTrial = filters.hasFreeTrial;
  }

  if (filters?.verificationStatus && filters.verificationStatus.length > 0) {
    where.verificationStatus = { in: filters.verificationStatus };
  }

  if (filters?.minRating) {
    where.ourRating = { gte: filters.minRating };
  }

  const [tools, total] = await Promise.all([
    prisma.tool.findMany({
      where,
      include: {
        primaryCategory: true,
        integrations: true,
      },
      skip,
      take: pageSize,
      orderBy: [
        { isFeatured: 'desc' },
        { popularityScore: 'desc' },
      ],
    }),
    prisma.tool.count({ where }),
  ]);

  return {
    data: tools,
    pagination: {
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    },
  };
}

export async function getToolBySlug(slug: string) {
  return prisma.tool.findUnique({
    where: { slug },
    include: {
      primaryCategory: true,
      categories: true,
      integrations: true,
      reviews: {
        where: { isApproved: true },
        include: { user: true },
        orderBy: { createdAt: 'desc' },
      },
      affiliateLinks: {
        where: { isActive: true },
      },
      dealAlerts: {
        where: {
          isActive: true,
          endDate: { gte: new Date() },
        },
      },
    },
  });
}

export async function getFeaturedTools(limit = 6) {
  return prisma.tool.findMany({
    where: {
      isPublished: true,
      isFeatured: true,
    },
    include: {
      primaryCategory: true,
    },
    take: limit,
    orderBy: { popularityScore: 'desc' },
  });
}

export async function getPopularTools(limit = 10) {
  return prisma.tool.findMany({
    where: { isPublished: true },
    include: {
      primaryCategory: true,
    },
    take: limit,
    orderBy: [
      { popularityScore: 'desc' },
      { communityRatingAvg: 'desc' },
    ],
  });
}

export async function getToolsByCategory(categorySlug: string, limit = 12) {
  const category = await prisma.category.findUnique({
    where: { slug: categorySlug },
  });

  if (!category) return null;

  const tools = await prisma.tool.findMany({
    where: {
      isPublished: true,
      primaryCategoryId: category.id,
    },
    include: {
      primaryCategory: true,
      integrations: true,
    },
    take: limit,
    orderBy: { popularityScore: 'desc' },
  });

  return { category, tools };
}

export async function searchTools(query: string, limit = 10) {
  return prisma.tool.findMany({
    where: {
      isPublished: true,
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { tagline: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
      ],
    },
    include: {
      primaryCategory: true,
    },
    take: limit,
  });
}

export async function getRelatedTools(toolId: string, categoryId: string, limit = 3) {
  return prisma.tool.findMany({
    where: {
      isPublished: true,
      id: { not: toolId },
      primaryCategoryId: categoryId,
    },
    include: {
      primaryCategory: true,
    },
    take: limit,
    orderBy: { popularityScore: 'desc' },
  });
}

export async function incrementAffiliateClick(toolId: string) {
  const affiliateLink = await prisma.affiliateLink.findFirst({
    where: {
      toolId,
      isActive: true,
    },
  });

  if (affiliateLink) {
    await prisma.affiliateLink.update({
      where: { id: affiliateLink.id },
      data: { clicks: { increment: 1 } },
    });
  }
}
