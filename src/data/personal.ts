import type { SocialLink, StackCategory } from '../types';

export const personalInfo = {
  name: 'Paula Bottale',
  role: 'Full Stack Developer',
  tagline: 'I build modern web apps and SaaS platforms with React, TypeScript, and Node.js.',
  location: 'Buenos Aires, Argentina',
  email: 'paulabottale.dev@gmail.com',
  about:
    "Full Stack Developer based in Buenos Aires, Argentina. I build modern web applications with React, TypeScript, Node.js, Express, and MongoDB, with a focus on integrating AI into production features.\n\nI work with the Claude API to build LLM-powered workflows that respond to real user data, and prompt engineering is a regular part of how I design those features. Claude and GitHub Copilot are part of my daily workflow — I use them to ship faster while keeping full ownership of every line of code.\n\nEverything I build is oriented around clean architecture, type safety, and writing maintainable, scalable code that stays easy to extend over time. Open to freelance work and full-time roles.",
};

export const stack: StackCategory[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'REST APIs', 'Zod'],
  },
  {
    category: 'Tools & Deploy',
    items: ['Git', 'GitHub', 'Vercel', 'Render', 'Postman', 'MongoDB Atlas', 'Stripe', 'Claude AI'],
  },
];

export const socials: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/paulabottale' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/paula-bottale' },
  { name: 'Email', url: 'mailto:paulabottale.dev@gmail.com' },
];