export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  images: string[];
  category: 'security' | 'networking' | 'tools' | 'research';
}