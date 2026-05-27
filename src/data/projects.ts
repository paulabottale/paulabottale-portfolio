import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ledgr',
    title: 'Ledgr',
    description:
      'Multi-tenant SaaS for financial management, currently in active development. Phase 1 (live): JWT authentication with organization-based data isolation — every record is scoped to its organization ID, ensuring true tenant separation between companies. Strict input validation, bcrypt password hashing, and global error handling. Decoupled architecture with backend and frontend in separate repositories and deployments, allowing each to scale independently. Upcoming modules: financial dashboard with real-time metrics, transaction management, Stripe payments with webhooks, and an AI financial agent powered by Claude (Anthropic API) for natural language reporting and spending pattern detection.',
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
      'Full-stack e-commerce with JWT authentication and role-based access (user/admin). Backend built with Express + TypeScript following MVC architecture, with Zod validation, Mongoose models, and protected routes. React frontend with Context API for cart state and React Router for navigation. Deployed across three services: frontend on Vercel, backend on Render, database on MongoDB Atlas.',
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
      'AI-powered workout routine generator built with React + TypeScript. Users get personalized training plans based on their goals, equipment, and experience level. Implements controlled forms with multi-step state, async handling with async/await, and responsive design.',
    tech: ['React', 'TypeScript', 'Vite', 'AI Integration', 'CSS Modules'],
    liveDemo: 'https://workout-routine-react.vercel.app/',
    github: 'https://github.com/paulabottale/workout-routine-react',
    featured: true,
    status: 'live',
  },
  {
    id: 'digital-library',
    title: 'Digital Library API',
    description:
      'RESTful API for managing a digital library. Built with Node.js + Express + TypeScript following MVC architecture, with full CRUD operations, Mongoose schemas, and proper HTTP status codes. Documented with Swagger UI (available at /api/docs). Deployed to Render with MongoDB Atlas.',
    tech: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Mongoose', 'Swagger', 'Render'],
    github: 'https://github.com/paulabottale/digital-library-api',
    featured: true,
    status: 'live',
  },
];