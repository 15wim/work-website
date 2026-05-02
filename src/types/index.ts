export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  title: string;
  location: string;
  bullets: string[];
  current?: boolean;
}

export interface Project {
  id: string;
  tier: 1 | 2 | 3;
  company: string;
  title: string;
  description: string;
  tags: string[];
  highlight?: string;
  link?: string;
  tech?: string[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  year?: number;
  note?: string;
  status: 'reading' | 'read';
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  focus?: string;
  location: string;
}

export interface CertItem {
  id: string;
  name: string;
  issuer?: string;
}

export interface HighlightStat {
  id: string;
  target: number;
  prefix: string;
  suffix: string;
  label: string;
}

export interface ExpertiseDomain {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}
