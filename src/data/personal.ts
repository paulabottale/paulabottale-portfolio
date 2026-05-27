import type { SocialLink, StackCategory } from '../types';

export const personalInfo = {
  name: 'Paula Bottale',
  role: 'Full Stack Developer',
  tagline: 'I build modern web apps and SaaS platforms with React, TypeScript, and Node.js.',
  location: 'Buenos Aires, Argentina',
  email: 'paulabottale.dev@gmail.com',
  about:
    "I'm a Full Stack Developer based in Buenos Aires, Argentina. I recently completed the Full Stack Web Development diploma at UTN (Universidad Tecnologica Nacional), and I'm currently building Ledgr: a multi-tenant SaaS for financial management with JWT authentication, Stripe payments, and an AI financial agent powered by Claude. I focus on writing clean, maintainable code with solid architectural decisions, and on shipping features that actually work in production.",
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