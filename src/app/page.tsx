import { HeroSection, AboutSection } from "@/components/sections";
import { JournalCard, ProjectCard } from "@/components/portfolio";
import { journalsData, projectsData, profileData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* 1. Seksi Hero (id="beranda") */}
      <HeroSection />

      {/* 2. Seksi Tentang Saya & Filosofi (id="tentang") */}
      <AboutSection />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* 3. Seksi Karya Ajar Preview (id="karya") */}
        <section id="karya" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-semibold text-sm">
                <GraduationCap className="h-4 w-4" />
                <span>Inovasi Pedagogik</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mt-1">
                Karya &amp; Media Pembelajaran
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Rancangan modul tematik dan media pembelajaran interaktif yang telah diujicobakan pada peserta didik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 4. Seksi Jurnal Ilmiah Preview (id="jurnal") */}
        <section id="jurnal" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-semibold text-sm">
                <BookOpen className="h-4 w-4" />
                <span>Riset &amp; Diseminasi</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mt-1">
                Publikasi Jurnal Ilmiah
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Karya tulis ilmiah terakreditasi nasional SINTA, ISSN, dan jurnal pendidikan terbuka (Open Access).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journalsData.slice(0, 2).map((journal) => (
              <JournalCard key={journal.id} journal={journal} />
            ))}
          </div>
        </section>

        {/* 5. Seksi Pengalaman & Riwayat Preview (id="pengalaman") */}
        <section id="pengalaman" className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Rekam Jejak &amp; Pengalaman
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Perjalanan dedikasi dalam pengajaran, pendidikan formal, dan keaktifan organisasi.
            </p>
          </div>
        </section>

        {/* 6. Seksi Kontak Preview (id="kontak") */}
        <section
          id="kontak"
          className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50/80 via-card to-background p-8 sm:p-12 text-center space-y-4 shadow-sm dark:border-sky-950 dark:from-sky-950/30"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-foreground">
            Mari Terhubung &amp; Berkolaborasi
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Terbuka untuk kolaborasi penulisan karya ilmiah, workshop media ajar interaktif, atau pelatihan kurikulum.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <a
              href={`https://wa.me/${profileData.whatsappNumber}?text=${encodeURIComponent(
                "Halo Bu Annisa, saya ingin berdiskusi dan berkolaborasi."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gradient" size="lg" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                <span>Chat via WhatsApp</span>
              </Button>
            </a>
            <a href={`mailto:${profileData.email}`}>
              <Button variant="outline" size="lg">
                <span>Kirim Email Resmi</span>
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
