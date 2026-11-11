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
import { profileData } from "@/data/portfolio";

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://annisa-pendidik.vercel.app";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: profileData.title,
    description: profileData.bio,
    url: siteUrl,
    email: profileData.email,
    image: `${siteUrl}${profileData.avatarUrl}`,
    sameAs: profileData.socials
      .map((s) => s.url)
      .filter((url) => url.startsWith("http")),
    knowsAbout: [
      "Kurikulum Merdeka",
      "Pembelajaran Berdiferensiasi",
      "Problem-Based Learning",
      "EdTech",
      "Penelitian Tindakan Kelas",
      "Media Pembelajaran Interaktif",
    ],
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Schema.org Person JSON-LD untuk SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

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
