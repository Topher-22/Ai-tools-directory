import { prisma } from './prisma';

export async function getAllCategories() {
  return prisma.category.findMany({
    where: { isActive: true },
    orderBy: { displayOrder: 'asc' },
  });
}

export async function getCategoryWithTools(slug: string) {
  const category = await prisma.category.findUnique({
    where: { slug },
    include: {
      subcategories: true,
    },
  });

  if (!category) return null;

  const tools = await prisma.tool.findMany({
    where: {
      isPublished: true,
      primaryCategoryId: category.id,
    },
    include: {
      primaryCategory: true,
    },
    orderBy: { popularityScore: 'desc' },
  });

  const toolCount = await prisma.tool.count({
    where: {
      isPublished: true,
      primaryCategoryId: category.id,
    },
  });

  return {
    ...category,
    tools,
    toolCount,
  };
}

export async function getTopCategories(limit = 6) {
  const categories = await prisma.category.findMany({
    where: {
      isActive: true,
      parentCategoryId: null, // Only top-level categories
    },
    orderBy: { displayOrder: 'asc' },
    take: limit,
  });

  // Get tool count for each category
  const categoriesWithCount = await Promise.all(
    categories.map(async (category) => {
      const toolCount = await prisma.tool.count({
        where: {
          isPublished: true,
          primaryCategoryId: category.id,
        },
      });
      return { ...category, toolCount };
    })
  );

  return categoriesWithCount;
}

export async function getCategoryTree() {
  const topLevelCategories = await prisma.category.findMany({
    where: {
      isActive: true,
      parentCategoryId: null,
    },
    include: {
      subcategories: {
        where: { isActive: true },
      },
    },
    orderBy: { displayOrder: 'asc' },
  });

  return topLevelCategories;
}
