import type { LucideIcon } from 'lucide-react';

export type Profile = {
  name: string;
  role: string;
  photo: string;
  intro: string;
  email: string;
  github: string;
  linkedin: string;
};

export type Strength = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  codeUrl: string;
  demoUrl: string;
};
