export interface SocialLink {
  platform: "email" | "whatsapp" | "linkedin" | "instagram" | "github";
  url: string;
  label: string;
}

export interface TeacherProfile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  philosophy: string;
  avatarUrl: string;
  resumePdfUrl: string;
  isOpenForCollaboration: boolean;
  email: string;
  whatsappNumber: string;
  socials: SocialLink[];
  metrics: { label: string; value: string }[];
}

export interface JournalItem {
  id: string;
  slug: string;
  title: string;
  authors: string[];
  journalName: string;
  publisher: string;
  publicationYear: number;
  indexing: string; // e.g. "SINTA 2", "ISSN", "Google Scholar"
  abstract: string;
  fullContent?: string;
  keywords: string[];
  pdfUrl?: string;
  externalUrl?: string;
}

export interface TeachingProject {
  id: string;
  slug: string;
  title: string;
  targetAudience: string; // e.g. "Siswa SMP Kelas 8"
  subject: string;
  summary: string;
  description: string;
  thumbnail: string;
  toolsUsed: string[];
  resultsAndImpact?: string;
  demoUrl?: string;
  documentUrl?: string;
}

export interface SkillItem {
  name: string;
  category: "pedagogy" | "edtech" | "tools" | "softskill";
  level?: "dasar" | "menengah" | "mahir";
}

export interface TimelineItem {
  id: string;
  roleOrDegree: string;
  institution: string;
  period: string;
  description: string[];
  type: "teaching" | "education" | "organization";
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  institution: string;
  avatarUrl?: string;
  content: string;
}

