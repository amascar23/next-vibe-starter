import {
  TeacherProfile,
  JournalItem,
  TeachingProject,
  SkillItem,
  TimelineItem,
  TestimonialItem,
} from "@/types";

export const profileData: TeacherProfile = {
  name: "Annisa",
  title: "Pendidik & Inovator Pembelajaran",
  tagline: "Mendedikasikan ilmu untuk memantik potensi terbaik setiap insan pembelajar.",
  bio: "Seorang pendidik dan akademisi yang berfokus pada pengembangan kurikulum interaktif, teknologi pembelajaran (EdTech), dan penelitian pendidikan berbasis kelas.",
  philosophy: "Pendidikan bukan sekadar mengisi bejana yang kosong, melainkan menyalakan api rasa ingin tahu siswa.",
  avatarUrl: "/images/profile.jpg",
  resumePdfUrl: "/docs/cv-annisa.pdf",
  isOpenForCollaboration: true,
  email: "anisahuksya@gmail.com",
  whatsappNumber: "6281234567890",
  socials: [
    { platform: "email", url: "mailto:anisahuksya@gmail.com", label: "Email" },
    { platform: "whatsapp", url: "https://wa.me/6281234567890", label: "WhatsApp" },
    { platform: "linkedin", url: "https://linkedin.com", label: "LinkedIn" },
  ],
  metrics: [
    { label: "Tahun Pengalaman", value: "3+" },
    { label: "Jurnal & Publikasi", value: "3" },
    { label: "Siswa Terbina", value: "250+" },
    { label: "Modul Pembelajaran", value: "4" },
  ],
};

export const journalsData: JournalItem[] = [];
export const teachingProjectsData: TeachingProject[] = [];
export const skillsData: SkillItem[] = [];
export const timelineData: TimelineItem[] = [];
export const testimonialsData: TestimonialItem[] = [];

