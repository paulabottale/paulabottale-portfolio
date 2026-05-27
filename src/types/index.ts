export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveDemo?: string;
  github: string;
  featured?: boolean;
  status: 'live' | 'in-development';
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface StackCategory {
  category: string;
  items: string[];
}