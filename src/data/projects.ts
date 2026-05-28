import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ledgr',
    title: 'Ledgr',
    description:
      'Multi-tenant SaaS for financial management, built from the ground up to scale. Phase 1 is live: JWT authentication with organization-based data isolation, so every record is strictly scoped to its company — the foundation that separates a real SaaS from a standard app. Backend and frontend deployed independently, allowing each to evolve on its own. Up next: financial dashboard with real-time metrics, Stripe payments with webhooks, and an AI financial agent powered by Claude (Anthropic) for natural language reporting and spending pattern detection.',
    tech: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Tailwind CSS',
      'Claude AI',
      'Stripe',
      'Render',
      'Vercel',
    ],
    github: 'https://github.com/paulabottale/ledgr-backend',
    featured: true,
    status: 'in-development',
  },
  {
    id: 'storify',
    title: 'Storify',
    description:
      'Full-stack e-commerce platform with role-based access (user/admin) and a complete checkout flow. Backend in Express + TypeScript following MVC architecture, with JWT authentication, Zod validation, and protected routes. React frontend uses Context API for cart state and React Router for navigation. Deployed across three independent services: Vercel, Render, and MongoDB Atlas.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Zod', 'Vercel', 'Render'],
    liveDemo: 'https://e-commerce-para-usuarios-y-administ.vercel.app/',
    github: 'https://github.com/paulabottale/fullstack-ecommerce-app',
    featured: true,
    status: 'live',
  },
  {
    id: 'workout-planner',
    title: 'Smart Workout Planner',
    description:
    'LLM-powered workout planner that generates personalized training routines in real time. Built around the Claude API (Anthropic) with carefully engineered prompts that turn user data — available time and experience level — into structured, actionable training plans. The React + TypeScript frontend handles a multi-step controlled form that captures user context, dispatches it to the LLM, and renders the AI-generated response with full type safety. A practical example of how prompt engineering and integration design can turn an LLM into a real product feature.',
    tech: ['React', 'TypeScript', 'Vite', 'Claude API', 'Prompt Engineering', 'CSS Modules'],
    liveDemo: 'https://workout-routine-react.vercel.app/',
    github: 'https://github.com/paulabottale/workout-routine-react',
    featured: true,
    status: 'live',
  },
  {
    id: 'digital-library',
    title: 'Digital Library API',
    description:
      'RESTful API for digital library management, built with Node.js + Express + TypeScript and structured around MVC architecture. Full CRUD operations with proper HTTP status codes, Mongoose schemas for data modeling, and complete API documentation served via Swagger UI at /api/docs. Deployed to Render with MongoDB Atlas.',
    tech: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Mongoose', 'Swagger', 'Render'],
    github: 'https://github.com/paulabottale/digital-library-api',
    featured: true,
    status: 'live',
  },
];