export interface EducationItem {
  institution: string;
  title: string;
  period: string;
  description: string;
}

export const education: EducationItem[] = [
  {
    institution: 'Universidad Tecnológica Nacional (UTN)',
    title: 'Full Stack Web Development Diploma',
    period: 'Nov 2024 — May 2025',
    description:
      'Comprehensive program covering JavaScript fundamentals, React (hooks, routing, controlled forms), Node.js + Express + TypeScript with MVC architecture, MongoDB + Mongoose, REST API design, JWT authentication, and full-stack deployment with Vercel, Render, and MongoDB Atlas.',
  },
];