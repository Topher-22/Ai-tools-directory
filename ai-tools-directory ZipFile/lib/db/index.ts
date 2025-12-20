// Central export for all database operations
export { prisma } from './prisma';

// Tool operations
export {
  getTools,
  getToolBySlug,
  getFeaturedTools,
  getPopularTools,
  getToolsByCategory,
  searchTools,
  getRelatedTools,
  incrementAffiliateClick,
} from './tools';

// Category operations
export {
  getAllCategories,
  getCategoryWithTools,
  getTopCategories,
  getCategoryTree,
} from './categories';

// Review and user operations
export {
  getReviewsByTool,
  getReviewStats,
  createReview,
  voteReview,
  saveToolForUser,
  unsaveToolForUser,
  getUserSavedTools,
  isToolSaved,
  createComparison,
  getUserComparisons,
  getComparisonById,
} from './reviews';
