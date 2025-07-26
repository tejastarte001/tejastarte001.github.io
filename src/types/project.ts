// src/types/project.ts
export interface Project {
  id: string;
  title: string;
  fullDescription: string;
  categoryDetails: {
    [category: string]: {
      description: string;
      highlights: string[];
    };
  };
  tags: string[];
  link: string;
  image?: string;
  categories: string[];
  description?: string; // Optional for enhanced projects
  highlights?: string[]; // Optional for enhanced projects
    challenges?: {
    problem: string;
    solution: string;
  }[];
  screenshots?: string[];
  technicalApproach?: string[];
      githubUrl?: string;

}