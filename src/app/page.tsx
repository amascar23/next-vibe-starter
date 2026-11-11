import {
  HeroSection,
  AboutSection,
  TeachingSection,
  JournalsSection,
} from "@/components/sections";
import { profileData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* 1. Seksi Hero (id="beranda") */}
      <HeroSection />

      {/* 2. Seksi Tentang Saya & Filosofi (id="tentang") */}
      <AboutSection />

      {/* 3. Seksi Karya & Inovasi Pembelajaran (id="karya") */}
      <TeachingSection />

      {/* 4. Seksi Publikasi Jurnal Ilmiah (id="jurnal") */}
      <JournalsSection />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
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
