// Course types and interfaces
export interface CourseSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  video?: string; // Optional video preview
  videos?: string[]; // Multiple course videos for premium courses
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: CourseSpecifications;
  inStock: boolean;
}

// Helper function to get course image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  // Используем единое изображение для всех курсов копирайтинга
  return `/images/img_1.jpg`;
};

// Helper function to get all available images for a course
export const getProductImages = (productId: number): string[] => {
  // Для всех курсов используем copywriting изображения
  return [getProductImage(productId)];
};

// Helper function to get course video preview
export const getProductVideo = (productId: number): string | undefined => {
  if (productId === 1) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (1).mp4";
  }
  if (productId === 2) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (2).mp4";
  }
  if (productId === 3) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (3).mp4";
  }
  if (productId === 4) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (4).mp4";
  }
  if (productId === 5) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (5).mp4";
  }
  if (productId === 6) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (6).mp4";
  }
  if (productId === 7) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (7).mp4";
  }
  if (productId === 8) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (8).mp4";
  }
  if (productId === 9) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (9).mp4";
  }
  if (productId === 10) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (10).mp4";
  }
  if (productId === 11) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (11).mp4";
  }
  return undefined;
};

// Helper function to get course videos (for premium courses with multiple videos)
export const getProductVideos = (productId: number): string[] | undefined => {
  // Courses 5-7: 3 videos each
  if (productId === 5) {
    return [
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (5).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (6).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (7).mp4"
    ];
  }
  if (productId === 6) {
    return [
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (8).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (9).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (10).mp4"
    ];
  }
  if (productId === 7) {
    return [
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (11).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (12).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (13).mp4"
    ];
  }
  
  // Courses 8-10: 5 videos each
  if (productId === 8) {
    return [
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (14).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (15).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (16).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (17).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (18).mp4"
    ];
  }
  if (productId === 9) {
    return [
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (19).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (20).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (21).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (22).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (23).mp4"
    ];
  }
  if (productId === 10) {
    return [
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (24).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (25).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (26).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (27).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (28).mp4"
    ];
  }
  
  // Course 11: 7 videos (premium)
  if (productId === 11) {
    return [
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (23).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (24).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (25).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (26).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (27).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (28).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (29).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (30).mp4"
    ];
  }
  
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Copywriting Fundamentals",
    price: 6.99,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    description: "Introduction to persuasive copywriting with essential writing techniques and psychology basics.",
    detailedDescription: "Master the fundamentals of persuasive copywriting. Learn core writing principles, understand customer psychology, and get started with your copywriting journey. Perfect foundation for aspiring copywriters.",
    category: "Copywriting Basics",
    features: [
      "Core copywriting principles",
      "Psychology of persuasion",
      "Basic writing techniques",
      "Customer psychology basics",
      "Getting started guide"
    ],
    specifications: {
      "Duration": "2 minutes 12 seconds",
      "Level": "Complete Beginner",
      "Language": "English",
      "Focus": "Persuasive Writing",
      "Access": "6 months",
      "Certificate": "Basic completion badge"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Headlines That Convert",
    price: 9.99,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    description: "Master headline writing techniques and psychological triggers for maximum conversion rates.",
    detailedDescription: "Deep dive into headline writing with comprehensive training on psychological triggers, conversion optimization, and proven formulas. Learn to write headlines that grab attention and drive action for professional marketing campaigns.",
    category: "Headline Writing",
    features: [
      "Proven headline formulas",
      "Psychological triggers mastery",
      "A/B testing strategies",
      "Conversion optimization",
      "Professional templates"
    ],
    specifications: {
      "Duration": "3 minutes 1 second",
      "Level": "Beginner",
      "Focus": "Headlines & Conversion",
      "Topics": "Psychology, formulas, testing",
      "Access": "8 months",
      "Support": "Community forum access"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Email Marketing Copywriting",
    price: 19.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    description: "Learn email copywriting techniques and sequence strategies for high-converting email campaigns.",
    detailedDescription: "Master email copywriting with comprehensive training on email sequences, subject lines, and conversion optimization. Learn professional techniques for effective email marketing and precise audience targeting.",
    category: "Email Marketing",
    features: [
      "Email sequence mastery",
      "Subject line techniques",
      "Conversion optimization",
      "Audience segmentation",
      "A/B testing precision"
    ],
    specifications: {
      "Duration": "4 minutes 41 seconds",
      "Level": "Beginner",
      "Focus": "Email Marketing",
      "Tools": "Sequences, subject lines, testing",
      "Access": "10 months",
      "Bonus": "Email templates library"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Sales Page Copywriting",
    price: 29.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    description: "Master sales page copywriting - the foundation of all high-converting sales funnels and landing pages.",
    detailedDescription: "Learn the essential sales page copywriting techniques that form the foundation of all high-converting campaigns. Master persuasion, structure, and the fundamental psychology of selling through proven frameworks used by professional copywriters worldwide.",
    category: "Sales Copywriting",
    features: [
      "Sales page structure mastery",
      "Persuasion psychology principles",
      "Conversion-focused writing",
      "AIDA framework fundamentals",
      "Professional sales workflow"
    ],
    specifications: {
      "Duration": "3 minutes 34 seconds",
      "Level": "Intermediate",
      "Focus": "Sales pages, conversion, psychology",
      "Techniques": "AIDA, persuasion, structure",
      "Access": "8 months",
      "Bonus": "Sales page templates"
    },
    inStock: true
  },
  {
    id: 5,
    name: "Direct Response Copywriting",
    price: 39.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    videos: getProductVideos(5),
    description: "Master direct response copywriting for immediate action and maximum response rates.",
    detailedDescription: "Master the powerful direct response copywriting techniques with comprehensive training. This course includes 3 detailed video modules covering direct response principles, urgency creation, and professional conversion optimization techniques used by industry copywriters.",
    category: "Direct Response",
    features: [
      "3 comprehensive video modules",
      "Direct response mastery",
      "Urgency and scarcity tactics",
      "Professional conversion techniques",
      "Industry-standard frameworks",
      "Live campaign analysis"
    ],
    specifications: {
      "Duration": "8 minutes 15 seconds",
      "Videos": "3 comprehensive modules",
      "Level": "Advanced",
      "Focus": "Direct response, urgency, conversion",
      "Projects": "Live campaign exercises",
      "Access": "10 months",
      "Bonus": "Direct response templates"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Social Media Copywriting",
    price: 49.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    videos: getProductVideos(6),
    description: "Learn social media copywriting principles - essential for engaging your audience and driving action.",
    detailedDescription: "Master social media copywriting with comprehensive training. This course includes 2 detailed video modules covering platform-specific techniques, engagement strategies, and professional social media campaign applications.",
    category: "Social Media",
    features: [
      "2 detailed video modules",
      "Platform-specific mastery",
      "Engagement strategy setup",
      "Social media campaign principles",
      "Professional techniques",
      "Live campaign analysis"
    ],
    specifications: {
      "Duration": "8 minutes 33 seconds",
      "Videos": "2 detailed modules",
      "Level": "Intermediate",
      "Focus": "Social media, engagement, campaigns",
      "Applications": "Facebook, Instagram, LinkedIn copywriting",
      "Access": "12 months",
      "Support": "Social media templates"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Advanced Copywriting Techniques",
    price: 59.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    videos: getProductVideos(7),
    description: "Master advanced copywriting techniques including storytelling, persuasion principles, and professional frameworks.",
    detailedDescription: "Master advanced copywriting with comprehensive training on storytelling techniques, persuasion psychology, and professional frameworks. This course includes 3 detailed video modules covering narrative structures, psychological triggers, and conversion optimization for professional copywriting campaigns.",
    category: "Advanced Copywriting",
    features: [
      "3 comprehensive video modules",
      "Storytelling mastery (Hero's Journey)",
      "Advanced persuasion techniques",
      "One Big Idea framework",
      "Professional narrative polish",
      "Psychological triggers mastery"
    ],
    specifications: {
      "Duration": "7 minutes 9 seconds",
      "Videos": "3 detailed modules",
      "Level": "Intermediate",
      "Focus": "Storytelling, persuasion, frameworks",
      "Applications": "Narrative copywriting, emotional triggers",
      "Access": "12 months",
      "Bonus": "Storytelling templates"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Professional Writing Fundamentals",
    price: 69.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    videos: getProductVideos(8),
    description: "Master professional writing fundamentals with comprehensive training on structure, clarity, and audience engagement.",
    detailedDescription: "Master professional writing with comprehensive training. This course includes 5 detailed video modules covering writing structure, audience targeting, clarity techniques, and professional editing methods for effective business communication.",
    category: "Professional Writing",
    features: [
      "5 detailed video modules",
      "Writing structure fundamentals",
      "Audience targeting mastery",
      "Clarity and conciseness",
      "Professional editing techniques",
      "Business communication mastery"
    ],
    specifications: {
      "Duration": "13 minutes 56 seconds",
      "Videos": "5 detailed modules",
      "Level": "Advanced",
      "Focus": "Structure, clarity, audience targeting",
      "Techniques": "Professional writing, editing",
      "Access": "12 months",
      "Bonus": "Writing templates library"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Advanced Headline Writing & Formulas",
    price: 79.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    videos: getProductVideos(9),
    description: "Master advanced headline writing techniques with proven formulas and power words for maximum impact.",
    detailedDescription: "Master advanced headline writing with comprehensive formula training. This premium course includes 5 comprehensive video modules covering ABC Formula, ROT Formula, power words, and professional headline optimization techniques.",
    category: "Advanced Headlines",
    features: [
      "5 comprehensive video modules",
      "ABC Formula mastery",
      "ROT Formula techniques",
      "Power words optimization",
      "Professional headline strategies",
      "A/B testing principles"
    ],
    specifications: {
      "Duration": "18 minutes 43 seconds",
      "Videos": "5 comprehensive modules",
      "Level": "Advanced",
      "Focus": "Headline formulas, power words, testing",
      "Techniques": "ABC/ROT formulas, optimization",
      "Access": "15 months",
      "Bonus": "Headline formula collection"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Persuasion Psychology Mastery",
    price: 89.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    videos: getProductVideos(10),
    description: "Master the 6 principles of persuasion and advanced psychological techniques for professional copywriting.",
    detailedDescription: "Master professional persuasion psychology with comprehensive training on Cialdini's 6 principles. This premium course includes 5 detailed video modules covering Authority, Consistency, Likeability, Reciprocity, Social Proof, and Scarcity for maximum conversion results.",
    category: "Persuasion Psychology",
    features: [
      "5 detailed video modules",
      "6 Principles of Persuasion mastery",
      "Authority building techniques",
      "Social proof optimization",
      "Scarcity and urgency tactics",
      "Advanced psychological triggers"
    ],
    specifications: {
      "Duration": "16 minutes 57 seconds",
      "Videos": "5 detailed modules",
      "Level": "Advanced",
      "Focus": "Persuasion psychology, conversion",
      "Techniques": "6 principles, psychological triggers",
      "Access": "15 months",
      "Bonus": "Psychology reference toolkit"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Complete Copywriting Mastery + Client Acquisition",
    price: 99.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    videos: getProductVideos(11),
    description: "Master all aspects of copywriting plus client acquisition strategies including LinkedIn outreach, cold email, and guest posting.",
    detailedDescription: "Achieve complete copywriting mastery with comprehensive training plus business development. This premium course includes 8 comprehensive video modules covering all copywriting principles, advanced techniques, professional workflows, and proven client acquisition strategies used by successful copywriters worldwide.",
    category: "Complete Mastery",
    features: [
      "8 comprehensive video modules",
      "Complete copywriting mastery",
      "All persuasion principles covered",
      "LinkedIn outreach strategies",
      "Cold email techniques",
      "Guest posting for clients",
      "Professional client workflows",
      "Business development mastery"
    ],
    specifications: {
      "Duration": "9 minutes 51 seconds",
      "Videos": "8 comprehensive modules",
      "Level": "Expert",
      "Coverage": "All copywriting + client acquisition",
      "Skills": "Complete copywriting & business mastery",
      "Access": "18 months",
      "Bonus": "Complete copywriting toolkit & client templates"
    },
    inStock: true
  }
];