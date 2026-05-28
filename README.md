# Paula Bottale — Portfolio

Personal portfolio and landing page showcasing my work as a Full Stack Developer with a focus on AI integration and LLM-powered features.

🔗 **Live**: [paulabottale.dev](https://paulabottale.dev/)

## Tech Stack

- **React 18** with **TypeScript** for the component layer
- **Vite** as the build tool and dev server
- **CSS Modules** for scoped, maintainable styling — no external UI libraries
- **Lucide React** + **React Icons** for iconography
- **IntersectionObserver API** for scroll-reveal animations

## Architecture

The project follows a component-based architecture with clear separation of concerns:

```
src/
├── components/    # Reusable UI components, each in its own folder
├── data/          # Static content (projects, personal info, education)
├── hooks/         # Custom React hooks (useScrollReveal)
├── styles/        # Global CSS variables and design tokens
└── types/         # Shared TypeScript type definitions
```

Each component lives in its own folder with a `.tsx` file, a `.module.css` for styles, and an `index.ts` barrel export.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Build

```bash
npm run build
npm run preview
```

## Deployment

Deployed on **Vercel**. Each push to `main` triggers an automatic deployment.

## Contact

- **Email**: paulabottale.dev@gmail.com
- **LinkedIn**: [linkedin.com/in/paula-bottale](https://linkedin.com/in/paula-bottale)
- **GitHub**: [@paulabottale](https://github.com/paulabottale)
