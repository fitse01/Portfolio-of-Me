export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  longDescription: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
  color: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "liyana-telemedicine",
    title: "Liyana Telemedicine Dashboard & Mobile App",
    category: "Healthcare",
    shortDescription: "A full-featured telemedicine suite with real-time video consultations, encrypted patient records, and an AI-powered symptom checker — bridging patients and doctors at scale.",
    fullDescription: "A comprehensive telemedicine platform designed to bridge the gap between patients and healthcare providers. Built with modern technologies to ensure secure, reliable, and user-friendly healthcare consultations.",
    longDescription: "Liyana is a full-featured telemedicine suite that enables patients to connect with licensed healthcare providers through video consultations, messaging, and prescription management. The platform handles appointment scheduling, medical record management, and secure payment processing.",
    challenge: "Creating a HIPAA-compliant platform that handles real-time video consultations while managing complex patient-provider relationships and medical data securely.",
    solution: "Implemented WebRTC for secure video streaming, encrypted end-to-end messaging, role-based access control, and comprehensive audit logging for compliance. Built scalable microservices architecture on Node.js with PostgreSQL for data persistence.",
    outcome: "Successfully launched platform serving 500+ active users with 99.9% uptime. Reduced patient wait times by 60% and increased provider availability by 40%.",
    tags: ["TypeScript", "React", "Node.js", "WebRTC", "PostgreSQL", "Docker"],
    color: "from-blue-500 to-cyan-500",
    images: ["/projects/liyana-1.jpg", "/projects/liyana-2.jpg"],
    liveUrl: "https://liyana.health",
    githubUrl: "https://github.com/liyana/platform"
  },
  {
    id: "2",
    slug: "imaltu-travel",
    title: "Imaltu — AI Travel Management System",
    category: "Travel Tech",
    shortDescription: "An intelligent travel platform that combines AI-driven trip recommendations with real-time itinerary collaboration, budget tracking, and multi-provider booking integrations.",
    fullDescription: "Imaltu revolutionizes travel planning by combining AI-driven recommendations with intuitive itinerary management. Users can plan, book, and manage their entire travel experience in one unified platform.",
    longDescription: "A full-stack travel management system that uses AI to recommend destinations, activities, and accommodations based on user preferences. Features include real-time collaboration for group trips, budget tracking, and integration with major booking platforms.",
    challenge: "Integrating multiple third-party APIs (flights, hotels, activities) while providing real-time updates and maintaining consistent UX across different providers.",
    solution: "Built a robust API aggregation layer with caching strategies, implemented real-time updates using WebSocket, and created a responsive mobile-first interface with React Native for on-the-go access.",
    outcome: "Processed 10,000+ trips in first year with average user rating of 4.8/5. Saved users an average of $500 per trip through smart recommendations.",
    tags: ["TypeScript", "React", "React Native", "Node.js", "MongoDB", "AI/ML"],
    color: "from-purple-500 to-pink-500",
    images: ["/projects/imaltu-1.jpg", "/projects/imaltu-2.jpg"],
    liveUrl: "https://imaltu.app",
    githubUrl: "https://github.com/imaltu/platform"
  },
  {
    id: "3",
    slug: "social-marketing",
    title: "Social Media Marketing Website",
    category: "Marketing SaaS",
    shortDescription: "All-in-one social media management platform for businesses to schedule, analyze, and optimize content across every major social network with AI content suggestions.",
    fullDescription: "A comprehensive marketing platform that enables businesses to manage, schedule, and analyze social media content across multiple platforms. Includes audience analytics, competitor tracking, and AI-powered content suggestions.",
    longDescription: "Social Media Marketing Platform provides businesses with unified management of their social presence. Features include bulk scheduling, detailed analytics dashboards, audience sentiment analysis, and AI-generated content recommendations based on trending topics.",
    challenge: "Handling real-time data processing for multiple social networks while maintaining accurate analytics and providing sub-second dashboard response times.",
    solution: "Implemented distributed caching with Redis, used message queues for background jobs, and built separate analytics pipeline with Apache Kafka. Created optimized React dashboards with real-time data subscriptions.",
    outcome: "Onboarded 1,200+ small and medium businesses. Increased average social media engagement by 45% for users. Generated $2M ARR in first year.",
    tags: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Redis"],
    color: "from-green-500 to-emerald-500",
    images: ["/projects/social-1.jpg", "/projects/social-2.jpg"],
    liveUrl: "https://socialmarketing.pro",
    githubUrl: "https://github.com/social-marketing/platform"
  },
  {
    id: "4",
    slug: "crime-reporting",
    title: "Crime Reporting System",
    category: "Public Safety",
    shortDescription: "Mobile-first crime reporting platform connecting citizens with law enforcement, featuring real-time mapping, anonymous reporting, and an officer dashboard with live case updates.",
    fullDescription: "A public safety application that enables citizens to report crimes and suspicious activities in real-time. Features include location tracking, evidence upload, and direct communication with law enforcement agencies.",
    longDescription: "Crime Reporting System streamlines the process of reporting criminal activities by providing citizens with an easy-to-use mobile app and web interface. Law enforcement officers have access to real-time reports with geographic visualization.",
    challenge: "Ensuring user anonymity while maintaining data accuracy and enabling law enforcement to respond quickly. Handling sensitive data with proper encryption and access controls.",
    solution: "Implemented anonymous reporting with optional identity verification, built real-time mapping with WebSocket updates, encrypted sensitive data at rest and in transit, and created separate officer dashboard with role-based access.",
    outcome: "Deployed across 5 cities with 50,000+ monthly active users. Reduced average response time to reports by 30%. Helped solve 200+ cases in first year.",
    tags: ["TypeScript", "React Native", "Node.js", "PostgreSQL", "MapBox", "Socket.io"],
    color: "from-red-500 to-orange-500",
    images: ["/projects/crime-1.jpg", "/projects/crime-2.jpg"],
    liveUrl: "https://crimehelps.app",
    githubUrl: "https://github.com/crime-reporting/app"
  },
  {
    id: "5",
    slug: "fintrack-dashboard",
    title: "FinTrack — Personal Finance Dashboard",
    category: "FinTech",
    shortDescription: "A smart personal finance dashboard that aggregates bank accounts, tracks spending patterns, visualizes budgets, and sends intelligent alerts to help users reach their financial goals.",
    fullDescription: "FinTrack is a personal finance management app that connects to multiple bank accounts and provides deep insights into spending habits, savings goals, and investment performance.",
    longDescription: "FinTrack uses Plaid API to securely aggregate data from multiple financial institutions. It categorizes transactions using machine learning, provides visual budget tracking tools, and sends proactive alerts when users approach budget limits or detect unusual activity.",
    challenge: "Securely handling sensitive financial data from multiple banking institutions while providing real-time insights and maintaining regulatory compliance (PCI-DSS, GDPR).",
    solution: "Integrated Plaid API for bank connections with end-to-end encryption, built ML-powered transaction categorization, implemented anomaly detection for fraud alerts, and created performant chart visualizations with D3.js.",
    outcome: "Helped 3,000+ users save an average of 20% more monthly. Detected 150+ fraudulent transactions in beta. Maintained zero security incidents.",
    tags: ["TypeScript", "Next.js", "Plaid API", "Python", "PostgreSQL", "D3.js"],
    color: "from-yellow-500 to-orange-400",
    images: ["/projects/fintrack-1.jpg", "/projects/fintrack-2.jpg"],
    liveUrl: "https://fintrack.app",
    githubUrl: "https://github.com/fintrack/dashboard"
  },
  {
    id: "6",
    slug: "eduhub-lms",
    title: "EduHub — Learning Management System",
    category: "EdTech",
    shortDescription: "A scalable LMS platform for educators to create rich interactive courses, track student progress with analytics, conduct live sessions, and issue blockchain-verified certificates.",
    fullDescription: "EduHub is a full-featured learning management system built for modern education. Instructors can create courses with video, quizzes, and live sessions while students track their progress and earn verified certificates.",
    longDescription: "EduHub provides educators with a complete toolkit for online teaching — from course creation and video hosting to live classes and automated grading. Students benefit from personalized learning paths, peer collaboration, and blockchain-anchored credentials that are universally verifiable.",
    challenge: "Handling high-volume concurrent video streaming, real-time quiz grading, and live classroom features while keeping the platform affordable and accessible on low-bandwidth connections.",
    solution: "Built adaptive video streaming with HLS, implemented WebRTC-based live classes, designed an offline-first mobile app with sync, and issued NFT-based certificates on Ethereum for tamper-proof credentials.",
    outcome: "Onboarded 200+ educators and 8,000+ students across 30 countries. Course completion rate 3× industry average. Issued 1,500+ blockchain-verified certificates.",
    tags: ["TypeScript", "React", "Node.js", "WebRTC", "HLS", "Ethereum"],
    color: "from-indigo-500 to-violet-500",
    images: ["/projects/eduhub-1.jpg", "/projects/eduhub-2.jpg"],
    liveUrl: "https://eduhub.io",
    githubUrl: "https://github.com/eduhub/lms"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
