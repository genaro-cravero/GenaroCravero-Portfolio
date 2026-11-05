export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  about: string;
  email: string;
  socials: SocialLink[];
  focusAreas: string[];
  stack: string[];
  description: string;
  keywords: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectCover = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  year: number;
  role: string;
  status?: string;
  featured?: boolean;
  tech: string[];
  description: string[];
  highlights: string[];
  links?: ProjectLink[];
  cover?: ProjectCover;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  startYear: number;
  endYear?: number;
  location?: string;
  summary: string;
  highlights: string[];
  tech?: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type StudyType = "degree" | "certification";

export type Study = {
  type: StudyType;
  title: string;
  institution: string;
  year: string;
  href?: string;
};
