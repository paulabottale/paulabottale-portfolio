export interface Project {
  id: string;
  title: string;
  tagline: string;
  highlights: string[];
  tech: string[];
  featuredImage?: string;
  liveDemo?: string;
  github: string;
  status: 'live' | 'in-development';
  featured: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface StackCategory {
  category: string;
  items: string[];
}