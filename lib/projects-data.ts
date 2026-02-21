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
    slug: "ai-financial-advisor",
    title: "AI-Powered Financial Advisor",
    category: "FinTech & AI",
    shortDescription: "A smart financial management platform that uses machine learning to provide personalized investment strategies and real-time spending insights.",
    fullDescription: "A sophisticated financial advisory platform built with Next.js and integrated with OpenAI to provide users with intelligent financial planning and real-time market analysis.",
    longDescription: "This project leverages the power of AI to democratize financial advice. By analyzing user spending patterns and market trends, it provides personalized recommendations that were previously only available through human advisors. The platform includes interactive dashboards, automated budget tracking, and predictive analysis for savings goals.",
    challenge: "Integrating complex financial APIs with real-time AI processing while maintaining strict data security and providing a seamless user experience across devices.",
    solution: "Implemented a robust caching layer for financial data, used serverless functions for AI processing to ensure scalability, and applied end-to-end encryption for all sensitive user data.",
    outcome: "Helped users increase their average monthly savings by 25% and reduced time spent on financial planning by 60%. Currently used by over 5,000 active beta testers.",
    tags: ["TypeScript", "Next.js", "OpenAI", "Prisma", "PostgreSQL", "Tailwind CSS"],
    color: "from-emerald-500 to-teal-500",
    images: ["/projects/finance-1.jpg", "/projects/finance-2.jpg"],
    liveUrl: "https://ai-finance-pro.vercel.app",
    githubUrl: "https://github.com/fitse01/ai-financial-advisor"
  },
  {
    id: "2",
    slug: "eco-track-iot",
    title: "EcoTrack — IoT Carbon Footprint Monitor",
    category: "CleanTech",
    shortDescription: "A real-time environmental monitoring system that tracks energy consumption via IoT devices and visualizes carbon footprint data for sustainable living.",
    fullDescription: "EcoTrack connects to smart home devices to monitor energy usage in real-time, providing users with a comprehensive breakdown of their environmental impact and suggestions for improvement.",
    longDescription: "As climate change becomes an increasing concern, EcoTrack empowers individuals to take control of their carbon footprint. The platform aggregates data from various IoT sensors placed around the house, offering a live dashboard of energy consumption, water usage, and waste management. Users can set sustainability goals and compete with friends in eco-challenges.",
    challenge: "Handling high-frequency data streams from multiple IoT devices and providing low-latency visualizations without compromising on dashboard performance.",
    solution: "Utilized MQTT for lightweight device communication, implemented a time-series database (InfluxDB) for efficient data storage, and used WebSockets for real-time dashboard updates.",
    outcome: "Successfully reduced average household energy consumption by 15% for active users. Received 'Green Tech of the Year' nomination at the local startup awards.",
    tags: ["TypeScript", "React", "Node.js", "MQTT", "InfluxDB", "Chart.js"],
    color: "from-green-500 to-lime-500",
    images: ["/projects/eco-1.jpg", "/projects/eco-2.jpg"],
    liveUrl: "https://ecotrack-monitor.io",
    githubUrl: "https://github.com/fitse01/ecotrack-iot"
  },
  {
    id: "3",
    slug: "nexus-collab-suite",
    title: "Nexus Collaborative Design Suite",
    category: "Productivity",
    shortDescription: "A cloud-based design and collaboration platform for remote teams, featuring real-time multiplayer editing and integrated project management tools.",
    fullDescription: "Nexus bridges the gap between design and development by providing a unified workspace where teams can brainstorm, design, and manage projects in real-time.",
    longDescription: "Nexus is built for the modern remote-first workforce. It combines the functionality of a digital whiteboard with powerful design tools and task management. Teams can work together on the same canvas, leave comments, and track progress through integrated Kanban boards and timeline views.",
    challenge: "Implementing a reliable conflict resolution system for real-time multiplayer editing and ensuring consistent performance across different network conditions.",
    solution: "Adopted CRDT (Conflict-free Replicated Data Types) for seamless real-time syncing and built a custom rendering engine as a WebWorker to keep the UI thread responsive.",
    outcome: "Adopted by 50+ design agencies within the first three months of launch. Improved team productivity by an average of 40% based on user feedback surveys.",
    tags: ["TypeScript", "Next.js", "Socket.io", "Redis", "Canvas API", "Framer Motion"],
    color: "from-blue-600 to-indigo-500",
    images: ["/projects/nexus-1.jpg", "/projects/nexus-2.jpg"],
    liveUrl: "https://nexus-suite.app",
    githubUrl: "https://github.com/fitse01/nexus-collab"
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
