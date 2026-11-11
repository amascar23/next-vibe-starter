import {
  HeroSection,
  AboutSection,
  TeachingSection,
  JournalsSection,
  SkillsSection,
  ExperienceSection,
  TestimonialsSection,
  ContactSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* 1. Hero Section (id="beranda") */}
      <HeroSection />

      {/* 2. Seksi Tentang Saya & Filosofi (id="tentang") */}
      <AboutSection />

      {/* 3. Seksi Karya & Media Pembelajaran (id="karya") */}
      <TeachingSection />

      {/* 4. Seksi Publikasi Jurnal Ilmiah (id="jurnal") */}
      <JournalsSection />

      {/* 5. Seksi Rumpun Kompetensi Bento Grid (id="kompetensi") */}
      <SkillsSection />

      {/* 6. Seksi Pengalaman & Riwayat Akademis (id="pengalaman") */}
      <ExperienceSection />

      {/* 7. Seksi Testimoni & Apresiasi Rekan (id="testimoni") */}
      <TestimonialsSection />

      {/* 8. Seksi Kontak Terpadu & Kolaborasi (id="kontak") */}
      <ContactSection />
    </div>
  );
}
