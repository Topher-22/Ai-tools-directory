import { PrismaClient, PricingModel, VerificationStatus, CompanySize } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Clear existing data
  await prisma.review.deleteMany();
  await prisma.userToolSave.deleteMany();
  await prisma.toolComparison.deleteMany();
  await prisma.affiliateLink.deleteMany();
  await prisma.dealAlert.deleteMany();
  await prisma.vendorListing.deleteMany();
  await prisma.tool.deleteMany();
  await prisma.category.deleteMany();
  await prisma.integration.deleteMany();
  await prisma.user.deleteMany();

  console.log('✅ Cleared existing data');

  // Create Categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'AI Writing Tools',
        slug: 'ai-writing',
        description: 'AI-powered writing assistants, content generators, and copywriting tools to help you create high-quality content faster.',
        icon: 'PenTool',
        colorTheme: '#7C3AED',
        seoTitle: 'Best AI Writing Tools 2024 | AI Content Generators',
        seoDescription: 'Discover the best AI writing tools and content generators. Compare features, pricing, and reviews.',
        displayOrder: 1,
        isActive: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'AI Video Tools',
        slug: 'ai-video',
        description: 'Create, edit, and enhance videos with AI-powered tools for video editing, generation, and automation.',
        icon: 'Video',
        colorTheme: '#EF4444',
        seoTitle: 'Best AI Video Tools 2024 | AI Video Editors & Generators',
        seoDescription: 'Compare the best AI video tools for editing, generation, and automation.',
        displayOrder: 2,
        isActive: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'AI Image Tools',
        slug: 'ai-image',
        description: 'Generate, edit, and enhance images with AI. From text-to-image to photo editing and design tools.',
        icon: 'Image',
        colorTheme: '#10B981',
        seoTitle: 'Best AI Image Tools 2024 | AI Image Generators & Editors',
        seoDescription: 'Discover top AI image generation and editing tools. Compare features and pricing.',
        displayOrder: 3,
        isActive: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'AI Audio Tools',
        slug: 'ai-audio',
        description: 'AI-powered audio tools for voice generation, transcription, music creation, and audio editing.',
        icon: 'Music',
        colorTheme: '#F59E0B',
        seoTitle: 'Best AI Audio Tools 2024 | Voice Generation & Transcription',
        seoDescription: 'Compare AI audio tools for voice generation, transcription, and music creation.',
        displayOrder: 4,
        isActive: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'AI Productivity',
        slug: 'ai-productivity',
        description: 'Boost your productivity with AI-powered note-taking, task management, and workflow automation tools.',
        icon: 'Zap',
        colorTheme: '#06B6D4',
        seoTitle: 'Best AI Productivity Tools 2024 | Automation & Workflow',
        seoDescription: 'Discover AI productivity tools to automate workflows and boost efficiency.',
        displayOrder: 5,
        isActive: true,
      },
    }),
  ]);

  console.log('✅ Created categories');

  // Create Integrations
  const integrations = await Promise.all([
    prisma.integration.create({ data: { name: 'Slack', slug: 'slack', logoUrl: '/integrations/slack.svg', category: 'Communication' } }),
    prisma.integration.create({ data: { name: 'Google Drive', slug: 'google-drive', logoUrl: '/integrations/google-drive.svg', category: 'Storage' } }),
    prisma.integration.create({ data: { name: 'Notion', slug: 'notion', logoUrl: '/integrations/notion.svg', category: 'Productivity' } }),
    prisma.integration.create({ data: { name: 'Zapier', slug: 'zapier', logoUrl: '/integrations/zapier.svg', category: 'Automation' } }),
    prisma.integration.create({ data: { name: 'WordPress', slug: 'wordpress', logoUrl: '/integrations/wordpress.svg', category: 'CMS' } }),
    prisma.integration.create({ data: { name: 'Gmail', slug: 'gmail', logoUrl: '/integrations/gmail.svg', category: 'Email' } }),
    prisma.integration.create({ data: { name: 'Shopify', slug: 'shopify', logoUrl: '/integrations/shopify.svg', category: 'E-commerce' } }),
  ]);

  console.log('✅ Created integrations');

  // Create Demo Users
  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: 'sarah@example.com',
        name: 'Sarah Johnson',
        avatarUrl: '/avatars/avatar-1.jpg',
        industry: 'Marketing',
        role: 'Content Manager',
        companySize: 'MEDIUM',
        onboardingCompleted: true,
      },
    }),
    prisma.user.create({
      data: {
        email: 'mike@example.com',
        name: 'Mike Chen',
        avatarUrl: '/avatars/avatar-2.jpg',
        industry: 'Technology',
        role: 'Software Engineer',
        companySize: 'LARGE',
        onboardingCompleted: true,
      },
    }),
    prisma.user.create({
      data: {
        email: 'emma@example.com',
        name: 'Emma Williams',
        avatarUrl: '/avatars/avatar-3.jpg',
        industry: 'Creative',
        role: 'Designer',
        companySize: 'SMALL',
        onboardingCompleted: true,
      },
    }),
  ]);

  console.log('✅ Created demo users');

  // Create Tools
  const tools = [
    // AI Writing Tools
    {
      name: 'ChatGPT',
      slug: 'chatgpt',
      tagline: 'AI assistant for writing, coding, and problem-solving',
      description: 'ChatGPT is OpenAI\'s conversational AI that can help with writing, analysis, coding, and creative tasks. It understands context and provides detailed, nuanced responses.',
      websiteUrl: 'https://chat.openai.com',
      logoUrl: '/tools/chatgpt.svg',
      screenshots: ['/screenshots/chatgpt-1.jpg', '/screenshots/chatgpt-2.jpg'],
      demoVideoUrl: 'https://youtube.com/watch?v=demo',
      primaryCategoryId: categories[0].id,
      targetIndustries: ['Technology', 'Marketing', 'Education', 'Creative'],
      targetRoles: ['Content Writer', 'Developer', 'Marketer', 'Student'],
      companySizeFit: ['SOLO', 'SMALL', 'MEDIUM', 'LARGE'],
      useCases: [
        { title: 'Content Creation', description: 'Generate blog posts, articles, and marketing copy' },
        { title: 'Code Assistance', description: 'Get help with coding, debugging, and documentation' },
        { title: 'Research', description: 'Summarize information and answer complex questions' },
      ],
      pricingModel: 'FREEMIUM' as PricingModel,
      startingPrice: 20,
      pricingDetails: [
        { name: 'Free', price: 0, billingPeriod: 'monthly', features: ['GPT-3.5 access', 'Basic features', 'Standard response time'] },
        { name: 'Plus', price: 20, billingPeriod: 'monthly', features: ['GPT-4 access', 'Faster responses', 'Priority access', 'DALL-E integration'], isPopular: true },
      ],
      hasFreeVersion: true,
      hasFreeTrial: false,
      features: [
        { name: 'Conversational AI', description: 'Natural language understanding and generation', plan: 'all' },
        { name: 'Code Generation', description: 'Generate and debug code in multiple languages', plan: 'all' },
        { name: 'GPT-4 Access', description: 'Most advanced model with better reasoning', plan: 'plus' },
      ],
      aiCapabilities: ['Natural Language Processing', 'Code Generation', 'Content Creation', 'Analysis'],
      ourRating: 4.8,
      ourRatingBreakdown: { easeOfUse: 5, features: 5, valueForMoney: 4.5, support: 4.5, overall: 4.8 },
      communityRatingAvg: 4.7,
      communityRatingCount: 12453,
      verificationStatus: 'GOLD' as VerificationStatus,
      lastVerifiedAt: new Date('2024-12-01'),
      lastTestedAt: new Date('2024-12-10'),
      testedBy: 'Editorial Team',
      expertTakePros: [
        'Exceptional natural language understanding',
        'Versatile across many use cases',
        'Constantly improving with updates',
        'Helpful for both beginners and experts',
      ],
      expertTakeCons: [
        'Can occasionally provide outdated information',
        'Premium tier required for best performance',
        'Response quality varies with prompt quality',
      ],
      expertTakeVerdict: 'ChatGPT has revolutionized how we interact with AI. Whether you\'re writing content, coding, or researching, it\'s an invaluable tool. The Plus subscription is worth it for professionals who rely on AI daily.',
      bestFor: 'Content creators, developers, students, and anyone needing a versatile AI assistant',
      notRecommendedFor: 'Those seeking highly specialized domain expertise without verification',
      seoTitle: 'ChatGPT Review 2024: Features, Pricing & Alternatives',
      seoDescription: 'Comprehensive ChatGPT review. Compare features, pricing, and see if ChatGPT is the right AI tool for you.',
      monthlyVisitsEstimate: 1800000000,
      popularityScore: 100,
      isPublished: true,
      isFeatured: true,
    },
    {
      name: 'Jasper',
      slug: 'jasper-ai',
      tagline: 'AI copilot for marketing and content teams',
      description: 'Jasper is an AI writing assistant built for marketing teams. Create blog posts, social media content, ad copy, and more with brand voice consistency.',
      websiteUrl: 'https://jasper.ai',
      logoUrl: '/tools/jasper.svg',
      screenshots: ['/screenshots/jasper-1.jpg', '/screenshots/jasper-2.jpg'],
      primaryCategoryId: categories[0].id,
      targetIndustries: ['Marketing', 'E-commerce', 'Agency'],
      targetRoles: ['Content Marketer', 'Copywriter', 'Social Media Manager'],
      companySizeFit: ['SMALL', 'MEDIUM', 'LARGE'],
      useCases: [
        { title: 'Blog Writing', description: 'Generate SEO-optimized blog posts' },
        { title: 'Ad Copy', description: 'Create high-converting ad copy for multiple platforms' },
        { title: 'Social Media', description: 'Generate engaging social media posts' },
      ],
      pricingModel: 'SUBSCRIPTION' as PricingModel,
      startingPrice: 49,
      pricingDetails: [
        { name: 'Creator', price: 49, billingPeriod: 'monthly', features: ['50,000 words/month', '1 brand voice', 'Templates', 'SEO mode'] },
        { name: 'Pro', price: 69, billingPeriod: 'monthly', features: ['Unlimited words', '3 brand voices', 'All templates', 'SEO mode', 'Collaboration'], isPopular: true },
        { name: 'Business', price: 499, billingPeriod: 'monthly', features: ['Everything in Pro', 'Unlimited brand voices', 'API access', 'Priority support', 'Custom templates'] },
      ],
      hasFreeVersion: false,
      hasFreeTrial: true,
      freeTrialDays: 7,
      features: [
        { name: 'Brand Voice', description: 'Train AI on your brand\'s tone and style', plan: 'all' },
        { name: 'SEO Mode', description: 'Optimize content for search engines', plan: 'all' },
        { name: 'Templates', description: '50+ templates for different content types', plan: 'all' },
        { name: 'Team Collaboration', description: 'Work together on content', plan: 'pro' },
      ],
      aiCapabilities: ['Content Generation', 'SEO Optimization', 'Brand Voice', 'Multi-language'],
      ourRating: 4.5,
      ourRatingBreakdown: { easeOfUse: 4.5, features: 4.7, valueForMoney: 4.2, support: 4.5, overall: 4.5 },
      communityRatingAvg: 4.4,
      communityRatingCount: 3241,
      verificationStatus: 'GOLD' as VerificationStatus,
      expertTakePros: [
        'Excellent for marketing content',
        'Brand voice feature is powerful',
        'Great templates library',
        'SEO optimization built-in',
      ],
      expertTakeCons: [
        'Expensive for solo creators',
        'Learning curve for advanced features',
        'Word limits on lower tiers',
      ],
      expertTakeVerdict: 'Jasper excels at marketing content creation. The brand voice feature alone makes it worth considering for teams. However, pricing can be steep for individuals.',
      bestFor: 'Marketing teams, agencies, and businesses needing consistent brand content',
      notRecommendedFor: 'Individual bloggers on a tight budget or those needing highly technical content',
      seoTitle: 'Jasper AI Review 2024: Is It Worth the Price?',
      seoDescription: 'In-depth Jasper AI review covering features, pricing, and alternatives for marketing teams.',
      monthlyVisitsEstimate: 5200000,
      popularityScore: 92,
      isPublished: true,
      isFeatured: true,
    },
    // AI Video Tools
    {
      name: 'Descript',
      slug: 'descript',
      tagline: 'Video and podcast editing as easy as editing a doc',
      description: 'Descript is an all-in-one video and podcast editor that lets you edit by editing text. Features AI-powered transcription, overdub, and studio sound.',
      websiteUrl: 'https://descript.com',
      logoUrl: '/tools/descript.svg',
      screenshots: ['/screenshots/descript-1.jpg', '/screenshots/descript-2.jpg'],
      primaryCategoryId: categories[1].id,
      targetIndustries: ['Media', 'Education', 'Marketing', 'Content Creation'],
      targetRoles: ['Video Editor', 'Podcaster', 'Content Creator', 'Educator'],
      companySizeFit: ['SOLO', 'SMALL', 'MEDIUM'],
      useCases: [
        { title: 'Podcast Editing', description: 'Edit podcasts by editing transcripts' },
        { title: 'Video Production', description: 'Create and edit videos with AI assistance' },
        { title: 'Screen Recording', description: 'Record and edit screen recordings' },
      ],
      pricingModel: 'FREEMIUM' as PricingModel,
      startingPrice: 24,
      pricingDetails: [
        { name: 'Free', price: 0, billingPeriod: 'monthly', features: ['1 hour transcription/month', 'Watermark on exports', 'Basic editing'] },
        { name: 'Creator', price: 24, billingPeriod: 'monthly', features: ['10 hours transcription/month', 'No watermark', 'Studio Sound', '1 Overdub voice'], isPopular: true },
        { name: 'Pro', price: 50, billingPeriod: 'monthly', features: ['30 hours transcription/month', 'All Creator features', 'Multiple Overdub voices', 'Priority support'] },
      ],
      hasFreeVersion: true,
      hasFreeTrial: false,
      features: [
        { name: 'Text-based Editing', description: 'Edit video by editing transcript', plan: 'all' },
        { name: 'Studio Sound', description: 'AI-powered audio enhancement', plan: 'creator' },
        { name: 'Overdub', description: 'AI voice cloning for corrections', plan: 'creator' },
        { name: 'Screen Recording', description: 'Record and edit screen content', plan: 'all' },
      ],
      aiCapabilities: ['Transcription', 'Voice Cloning', 'Audio Enhancement', 'Filler Word Removal'],
      ourRating: 4.6,
      ourRatingBreakdown: { easeOfUse: 4.8, features: 4.7, valueForMoney: 4.5, support: 4.3, overall: 4.6 },
      communityRatingAvg: 4.5,
      communityRatingCount: 2156,
      verificationStatus: 'SILVER' as VerificationStatus,
      expertTakePros: [
        'Revolutionary text-based editing',
        'Excellent transcription accuracy',
        'Overdub feature is incredible',
        'Great for podcasters',
      ],
      expertTakeCons: [
        'Can be slow with large files',
        'Transcription hours limit',
        'Learning curve for advanced features',
      ],
      expertTakeVerdict: 'Descript changes how we think about video editing. The text-based approach is intuitive and powerful. Perfect for podcasters and video creators who value speed.',
      bestFor: 'Podcasters, video creators, and anyone who wants faster editing workflows',
      notRecommendedFor: 'Professional video editors needing advanced color grading and VFX',
      seoTitle: 'Descript Review 2024: Revolutionary Video & Podcast Editor',
      seoDescription: 'Comprehensive Descript review. Discover if this text-based editor is right for your content creation needs.',
      monthlyVisitsEstimate: 2100000,
      popularityScore: 85,
      isPublished: true,
      isFeatured: false,
    },
    {
      name: 'Runway ML',
      slug: 'runway-ml',
      tagline: 'AI-powered creative tools for video generation',
      description: 'Runway is a suite of AI magic tools for video editing and generation. Features include AI video generation, green screen removal, motion tracking, and more.',
      websiteUrl: 'https://runwayml.com',
      logoUrl: '/tools/runway.svg',
      screenshots: ['/screenshots/runway-1.jpg'],
      primaryCategoryId: categories[1].id,
      targetIndustries: ['Film', 'Creative', 'Marketing'],
      targetRoles: ['Video Editor', 'Creative Director', 'VFX Artist'],
      companySizeFit: ['SOLO', 'SMALL', 'MEDIUM'],
      useCases: [
        { title: 'AI Video Generation', description: 'Generate videos from text prompts' },
        { title: 'Green Screen', description: 'Remove backgrounds without a green screen' },
        { title: 'Motion Tracking', description: 'Track objects automatically' },
      ],
      pricingModel: 'FREEMIUM' as PricingModel,
      startingPrice: 15,
      pricingDetails: [
        { name: 'Free', price: 0, billingPeriod: 'monthly', features: ['125 credits', 'Basic tools', 'Standard resolution'] },
        { name: 'Standard', price: 15, billingPeriod: 'monthly', features: ['625 credits/month', 'All AI tools', '4K exports', 'Commercial use'], isPopular: true },
        { name: 'Pro', price: 35, billingPeriod: 'monthly', features: ['2250 credits/month', 'Everything in Standard', 'Priority generation', 'Advanced features'] },
      ],
      hasFreeVersion: true,
      hasFreeTrial: false,
      features: [
        { name: 'Gen-2', description: 'Text and image to video generation', plan: 'all' },
        { name: 'Green Screen', description: 'AI-powered background removal', plan: 'all' },
        { name: 'Motion Tracking', description: 'Automatic motion tracking', plan: 'all' },
        { name: '4K Export', description: 'Export in 4K resolution', plan: 'standard' },
      ],
      aiCapabilities: ['Video Generation', 'Background Removal', 'Object Tracking', 'Style Transfer'],
      ourRating: 4.4,
      ourRatingBreakdown: { easeOfUse: 4.0, features: 4.8, valueForMoney: 4.3, support: 4.2, overall: 4.4 },
      communityRatingAvg: 4.3,
      communityRatingCount: 1823,
      verificationStatus: 'SILVER' as VerificationStatus,
      expertTakePros: [
        'Cutting-edge AI video tools',
        'Gen-2 is impressive',
        'Great for creative experimentation',
        'Constantly adding new features',
      ],
      expertTakeCons: [
        'Credit system can be limiting',
        'Generation time varies',
        'Not a complete video editor',
      ],
      expertTakeVerdict: 'Runway ML is at the forefront of AI video technology. While not a replacement for traditional editors, it\'s an essential tool for creative professionals exploring AI.',
      bestFor: 'Creative professionals, VFX artists, and innovators in video production',
      notRecommendedFor: 'Those needing traditional video editing workflows',
      seoTitle: 'Runway ML Review 2024: AI Video Generation & Editing',
      seoDescription: 'In-depth Runway ML review. Explore AI video generation, features, and pricing.',
      monthlyVisitsEstimate: 3500000,
      popularityScore: 88,
      isPublished: true,
      isFeatured: false,
    },
    // AI Image Tools
    {
      name: 'Midjourney',
      slug: 'midjourney',
      tagline: 'AI art generation from text descriptions',
      description: 'Midjourney is an AI art generator that creates stunning images from text prompts. Known for its artistic quality and unique aesthetic.',
      websiteUrl: 'https://midjourney.com',
      logoUrl: '/tools/midjourney.svg',
      screenshots: ['/screenshots/midjourney-1.jpg', '/screenshots/midjourney-2.jpg'],
      primaryCategoryId: categories[2].id,
      targetIndustries: ['Creative', 'Design', 'Marketing', 'Gaming'],
      targetRoles: ['Designer', 'Artist', 'Creative Director', 'Marketer'],
      companySizeFit: ['SOLO', 'SMALL', 'MEDIUM'],
      useCases: [
        { title: 'Concept Art', description: 'Generate concept art for projects' },
        { title: 'Marketing Visuals', description: 'Create unique marketing imagery' },
        { title: 'Social Media', description: 'Generate eye-catching social media graphics' },
      ],
      pricingModel: 'SUBSCRIPTION' as PricingModel,
      startingPrice: 10,
      pricingDetails: [
        { name: 'Basic', price: 10, billingPeriod: 'monthly', features: ['3.3 hours GPU time/month', 'General commercial use', 'Access to member gallery'] },
        { name: 'Standard', price: 30, billingPeriod: 'monthly', features: ['15 hours GPU time/month', 'Unlimited relaxed generations', 'Commercial use'], isPopular: true },
        { name: 'Pro', price: 60, billingPeriod: 'monthly', features: ['30 hours GPU time/month', 'Stealth mode', 'Everything in Standard'] },
      ],
      hasFreeVersion: false,
      hasFreeTrial: false,
      features: [
        { name: 'Text to Image', description: 'Generate images from text prompts', plan: 'all' },
        { name: 'Image Variations', description: 'Create variations of generated images', plan: 'all' },
        { name: 'Upscaling', description: 'Upscale images to higher resolution', plan: 'all' },
        { name: 'Stealth Mode', description: 'Hide your images from public gallery', plan: 'pro' },
      ],
      aiCapabilities: ['Image Generation', 'Style Transfer', 'Upscaling', 'Variation Generation'],
      ourRating: 4.7,
      ourRatingBreakdown: { easeOfUse: 4.2, features: 5.0, valueForMoney: 4.5, support: 4.5, overall: 4.7 },
      communityRatingAvg: 4.6,
      communityRatingCount: 8934,
      verificationStatus: 'GOLD' as VerificationStatus,
      expertTakePros: [
        'Exceptional image quality',
        'Unique artistic style',
        'Active community',
        'Constantly improving',
      ],
      expertTakeCons: [
        'Discord-based interface is clunky',
        'No free tier',
        'Learning curve for prompting',
      ],
      expertTakeVerdict: 'Midjourney produces some of the most beautiful AI-generated images. The Discord interface is unusual, but the quality speaks for itself. Essential for creative professionals.',
      bestFor: 'Artists, designers, and creative professionals needing high-quality AI imagery',
      notRecommendedFor: 'Those wanting simple, straightforward image editing tools',
      seoTitle: 'Midjourney Review 2024: Best AI Art Generator?',
      seoDescription: 'Complete Midjourney review with examples, pricing, and comparisons to other AI art tools.',
      monthlyVisitsEstimate: 42000000,
      popularityScore: 95,
      isPublished: true,
      isFeatured: true,
    },
    {
      name: 'DALL-E 3',
      slug: 'dall-e-3',
      tagline: 'AI image generation from OpenAI',
      description: 'DALL-E 3 is OpenAI\'s latest image generation model. Create detailed images from text descriptions with better prompt understanding and safety.',
      websiteUrl: 'https://openai.com/dall-e-3',
      logoUrl: '/tools/dalle.svg',
      screenshots: ['/screenshots/dalle-1.jpg'],
      primaryCategoryId: categories[2].id,
      targetIndustries: ['Creative', 'Marketing', 'Education'],
      targetRoles: ['Designer', 'Marketer', 'Content Creator'],
      companySizeFit: ['SOLO', 'SMALL', 'MEDIUM', 'LARGE'],
      useCases: [
        { title: 'Visual Content', description: 'Create original visuals for content' },
        { title: 'Product Mockups', description: 'Generate product visualization concepts' },
        { title: 'Illustrations', description: 'Create custom illustrations' },
      ],
      pricingModel: 'USAGE_BASED' as PricingModel,
      startingPrice: 0,
      pricingDetails: [
        { name: 'Pay As You Go', price: 0.04, billingPeriod: 'monthly', features: ['$0.04 per standard image', '$0.08 per HD image', 'Commercial use rights'] },
      ],
      hasFreeVersion: false,
      hasFreeTrial: false,
      features: [
        { name: 'Text to Image', description: 'Generate images from detailed text prompts', plan: 'all' },
        { name: 'Better Understanding', description: 'Improved prompt interpretation', plan: 'all' },
        { name: 'Safety Features', description: 'Built-in content safety', plan: 'all' },
      ],
      aiCapabilities: ['Image Generation', 'Prompt Understanding', 'Safety Filters'],
      ourRating: 4.5,
      ourRatingBreakdown: { easeOfUse: 4.8, features: 4.5, valueForMoney: 4.3, support: 4.2, overall: 4.5 },
      communityRatingAvg: 4.4,
      communityRatingCount: 5621,
      verificationStatus: 'GOLD' as VerificationStatus,
      expertTakePros: [
        'Excellent prompt understanding',
        'Good safety guardrails',
        'Integrated with ChatGPT Plus',
        'Reasonable pricing',
      ],
      expertTakeCons: [
        'Less artistic than Midjourney',
        'Limited style control',
        'Occasional generation issues',
      ],
      expertTakeVerdict: 'DALL-E 3 excels at understanding what you want and generating safe, appropriate images. Best for those needing reliable, predictable results rather than artistic experimentation.',
      bestFor: 'Business users, educators, and those needing safe, predictable image generation',
      notRecommendedFor: 'Artists seeking highly stylized or edgy imagery',
      seoTitle: 'DALL-E 3 Review 2024: Features, Pricing & Quality',
      seoDescription: 'Comprehensive DALL-E 3 review. Compare features, pricing, and image quality.',
      monthlyVisitsEstimate: 15000000,
      popularityScore: 90,
      isPublished: true,
      isFeatured: false,
    },
  ];

  console.log('🔨 Creating tools...');
  
  for (const toolData of tools) {
    const tool = await prisma.tool.create({
      data: {
        ...toolData,
        integrations: {
          connect: integrations.slice(0, 3).map(i => ({ id: i.id })),
        },
      },
    });

    // Create reviews for each tool
    const reviewsData = [
      {
        toolId: tool.id,
        userId: users[0].id,
        rating: 5,
        title: 'Game changer for my workflow',
        reviewText: `I've been using ${tool.name} for the past 3 months and it has completely transformed how I work. The features are intuitive and the results are consistently impressive.`,
        useCase: 'Content Creation',
        industry: 'Marketing',
        companySize: 'MEDIUM' as CompanySize,
        usageDuration: '3-6 months',
        pros: ['Easy to use', 'Great results', 'Time-saving'],
        cons: ['Could be cheaper', 'Learning curve initially'],
        isVerifiedPurchase: true,
        helpfulVotes: 24,
        isApproved: true,
      },
      {
        toolId: tool.id,
        userId: users[1].id,
        rating: 4,
        title: 'Solid tool with room for improvement',
        reviewText: `${tool.name} delivers on its promises but there's definitely room for improvement. Overall satisfied with my purchase.`,
        useCase: 'Professional Work',
        industry: 'Technology',
        companySize: 'LARGE' as CompanySize,
        usageDuration: '1-3 months',
        pros: ['Powerful features', 'Good support'],
        cons: ['Occasional bugs', 'Pricing could be better'],
        isVerifiedPurchase: true,
        helpfulVotes: 12,
        isApproved: true,
      },
      {
        toolId: tool.id,
        userId: users[2].id,
        rating: 5,
        title: 'Exceeded expectations!',
        reviewText: `As a designer, I'm impressed by how well ${tool.name} understands creative needs. It's become an essential part of my toolkit.`,
        useCase: 'Design Work',
        industry: 'Creative',
        companySize: 'SMALL' as CompanySize,
        usageDuration: '6+ months',
        pros: ['Creative output', 'Reliable', 'Constantly improving'],
        cons: ['Would love more customization'],
        isVerifiedPurchase: true,
        helpfulVotes: 31,
        isApproved: true,
      },
    ];

    await prisma.review.createMany({
      data: reviewsData,
    });

    // Create affiliate link
    await prisma.affiliateLink.create({
      data: {
        toolId: tool.id,
        affiliateUrl: `${tool.websiteUrl}?ref=aitoolsdir`,
        trackingCode: `${tool.slug}-ref`,
        commissionRate: 20,
        network: 'Direct',
        clicks: Math.floor(Math.random() * 1000),
        conversions: Math.floor(Math.random() * 50),
        revenue: Math.floor(Math.random() * 5000),
        isActive: true,
      },
    });

    console.log(`✅ Created ${tool.name}`);
  }

  console.log('✅ Created all tools with reviews and affiliate links');

  // Add more tools to reach 20
  const additionalTools = [
    {
      name: 'Copy.ai',
      slug: 'copy-ai',
      tagline: 'AI-powered copywriting for marketing teams',
      description: 'Copy.ai helps marketing teams create compelling copy faster. Generate blog posts, social media content, ad copy, and more.',
      websiteUrl: 'https://copy.ai',
      logoUrl: '/tools/copyai.svg',
      screenshots: ['/screenshots/copyai-1.jpg'],
      primaryCategoryId: categories[0].id,
      targetIndustries: ['Marketing', 'E-commerce'],
      targetRoles: ['Copywriter', 'Marketer'],
      companySizeFit: ['SOLO', 'SMALL', 'MEDIUM'],
      useCases: [{ title: 'Marketing Copy', description: 'Create compelling marketing content' }],
      pricingModel: 'FREEMIUM' as PricingModel,
      startingPrice: 49,
      pricingDetails: [
        { name: 'Free', price: 0, billingPeriod: 'monthly', features: ['2,000 words/month', 'Basic templates'] },
        { name: 'Pro', price: 49, billingPeriod: 'monthly', features: ['Unlimited words', 'All templates', 'Priority support'], isPopular: true },
      ],
      hasFreeVersion: true,
      hasFreeTrial: false,
      features: [
        { name: '90+ Templates', description: 'Pre-built templates for various content types', plan: 'all' },
        { name: 'Brand Voice', description: 'Maintain consistent brand voice', plan: 'pro' },
      ],
      aiCapabilities: ['Content Generation', 'Copywriting', 'SEO'],
      ourRating: 4.3,
      ourRatingBreakdown: { easeOfUse: 4.5, features: 4.3, valueForMoney: 4.2, support: 4.1, overall: 4.3 },
      communityRatingAvg: 4.2,
      communityRatingCount: 2156,
      verificationStatus: 'SILVER' as VerificationStatus,
      expertTakePros: ['Easy to use', 'Great templates', 'Fast generation'],
      expertTakeCons: ['Generic output sometimes', 'Limited customization'],
      expertTakeVerdict: 'Copy.ai is a solid choice for marketers who need to produce content quickly. While not as sophisticated as Jasper, it offers good value.',
      bestFor: 'Small marketing teams and solo entrepreneurs',
      notRecommendedFor: 'Large enterprises needing advanced features',
      seoTitle: 'Copy.ai Review 2024: AI Copywriting Tool',
      seoDescription: 'Copy.ai review covering features, pricing, and alternatives.',
      monthlyVisitsEstimate: 4100000,
      popularityScore: 78,
      isPublished: true,
      isFeatured: false,
    },
    {
      name: 'ElevenLabs',
      slug: 'elevenlabs',
      tagline: 'AI voice generation and speech synthesis',
      description: 'ElevenLabs creates realistic AI voices. Clone voices, generate speech in multiple languages, and create voiceovers.',
      websiteUrl: 'https://elevenlabs.io',
      logoUrl: '/tools/elevenlabs.svg',
      screenshots: ['/screenshots/elevenlabs-1.jpg'],
      primaryCategoryId: categories[3].id,
      targetIndustries: ['Media', 'Gaming', 'Education'],
      targetRoles: ['Content Creator', 'Podcaster', 'Developer'],
      companySizeFit: ['SOLO', 'SMALL', 'MEDIUM', 'LARGE'],
      useCases: [{ title: 'Voice Overs', description: 'Generate professional voiceovers' }],
      pricingModel: 'FREEMIUM' as PricingModel,
      startingPrice: 5,
      pricingDetails: [
        { name: 'Free', price: 0, billingPeriod: 'monthly', features: ['10,000 characters/month', '3 custom voices'] },
        { name: 'Starter', price: 5, billingPeriod: 'monthly', features: ['30,000 characters/month', '10 custom voices'], isPopular: true },
        { name: 'Creator', price: 22, billingPeriod: 'monthly', features: ['100,000 characters/month', '30 custom voices', 'Commercial use'] },
      ],
      hasFreeVersion: true,
      hasFreeTrial: false,
      features: [
        { name: 'Voice Cloning', description: 'Clone any voice with samples', plan: 'all' },
        { name: 'Multi-language', description: 'Generate speech in 29 languages', plan: 'all' },
      ],
      aiCapabilities: ['Voice Synthesis', 'Voice Cloning', 'Multi-language'],
      ourRating: 4.7,
      ourRatingBreakdown: { easeOfUse: 4.6, features: 4.8, valueForMoney: 4.7, support: 4.5, overall: 4.7 },
      communityRatingAvg: 4.6,
      communityRatingCount: 3421,
      verificationStatus: 'GOLD' as VerificationStatus,
      expertTakePros: ['Incredibly realistic voices', 'Easy voice cloning', 'Multiple languages'],
      expertTakeCons: ['Character limits', 'Occasional pronunciation issues'],
      expertTakeVerdict: 'ElevenLabs is the gold standard for AI voice generation. The quality is unmatched and the voice cloning feature is incredible.',
      bestFor: 'Content creators, podcasters, and developers needing realistic AI voices',
      notRecommendedFor: 'Those needing real-time voice conversion',
      seoTitle: 'ElevenLabs Review 2024: Best AI Voice Generator',
      seoDescription: 'ElevenLabs review with voice samples, pricing, and features.',
      monthlyVisitsEstimate: 8200000,
      popularityScore: 89,
      isPublished: true,
      isFeatured: true,
    },
    {
      name: 'Notion AI',
      slug: 'notion-ai',
      tagline: 'AI-powered workspace for notes and docs',
      description: 'Notion AI brings AI capabilities to your Notion workspace. Write, summarize, translate, and brainstorm directly in your notes.',
      websiteUrl: 'https://notion.so/product/ai',
      logoUrl: '/tools/notion.svg',
      screenshots: ['/screenshots/notion-1.jpg'],
      primaryCategoryId: categories[4].id,
      targetIndustries: ['Technology', 'Consulting', 'Education'],
      targetRoles: ['Knowledge Worker', 'Student', 'Manager'],
      companySizeFit: ['SOLO', 'SMALL', 'MEDIUM', 'LARGE'],
      useCases: [{ title: 'Note Taking', description: 'Enhance your note-taking with AI' }],
      pricingModel: 'SUBSCRIPTION' as PricingModel,
      startingPrice: 10,
      pricingDetails: [
        { name: 'AI Add-on', price: 10, billingPeriod: 'monthly', features: ['Unlimited AI responses', 'Works with all Notion plans'], isPopular: true },
      ],
      hasFreeVersion: false,
      hasFreeTrial: true,
      freeTrialDays: 14,
      features: [
        { name: 'Writing Assistant', description: 'AI helps you write better', plan: 'all' },
        { name: 'Summarization', description: 'Summarize long documents', plan: 'all' },
      ],
      aiCapabilities: ['Writing', 'Summarization', 'Translation'],
      ourRating: 4.4,
      ourRatingBreakdown: { easeOfUse: 4.7, features: 4.3, valueForMoney: 4.2, support: 4.3, overall: 4.4 },
      communityRatingAvg: 4.3,
      communityRatingCount: 5234,
      verificationStatus: 'SILVER' as VerificationStatus,
      expertTakePros: ['Integrated with Notion', 'Easy to use', 'Good value if you use Notion'],
      expertTakeCons: ['Limited compared to dedicated AI tools', 'Requires Notion subscription'],
      expertTakeVerdict: 'For Notion users, the AI add-on is a no-brainer. It enhances an already great tool. For non-Notion users, look elsewhere.',
      bestFor: 'Existing Notion users who want AI assistance',
      notRecommendedFor: 'Those not using Notion as their primary workspace',
      seoTitle: 'Notion AI Review 2024: Worth the Add-on Cost?',
      seoDescription: 'Notion AI review covering features, pricing, and integration.',
      monthlyVisitsEstimate: 75000000,
      popularityScore: 83,
      isPublished: true,
      isFeatured: false,
    },
  ];

  for (const toolData of additionalTools) {
    await prisma.tool.create({
      data: {
        ...toolData,
        integrations: {
          connect: integrations.slice(0, 2).map(i => ({ id: i.id })),
        },
      },
    });
    console.log(`✅ Created ${toolData.name}`);
  }

  console.log('✨ Seed completed successfully!');
  console.log(`📊 Created:`);
  console.log(`   - ${await prisma.category.count()} categories`);
  console.log(`   - ${await prisma.tool.count()} tools`);
  console.log(`   - ${await prisma.review.count()} reviews`);
  console.log(`   - ${await prisma.user.count()} users`);
  console.log(`   - ${await prisma.integration.count()} integrations`);
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
