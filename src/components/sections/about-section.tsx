import {
  GraduationCap,
  BookOpen,
  Users,
  Layers,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";
import { profileData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * Pemetaan ikon untuk metrik statistik berdasarkan label
 */
function getMetricIcon(label: string) {
  const normalized = label.toLowerCase();
  if (normalized.includes("tahun") || normalized.includes("pengalaman")) {
    return GraduationCap;
  }
  if (normalized.includes("jurnal") || normalized.includes("publikasi")) {
    return BookOpen;
  }
  if (normalized.includes("siswa") || normalized.includes("terbina")) {
    return Users;
  }
  return Layers;
}

export function AboutSection() {
  return (
    <section
      id="tentang"
      className="relative overflow-hidden py-16 md:py-24 bg-sky-50/40 dark:bg-sky-950/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Seksi Tentang */}
        <div className="mx-auto max-w-3xl text-center space-y-3">
          <Badge variant="sky" className="px-3 py-1 text-xs font-semibold">
            Mengenal Lebih Dekat
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Dedikasi untuk Pendidikan & Pembelajaran Bermakna
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Menghubungkan pedagogi teoretis, aksi riset kelas, dan sentuhan teknologi
            edukasi guna menghidupkan ruang kelas yang aktif dan inklusif.
          </p>
        </div>

        {/* Konten Narasi Biografi & Filosofi Mengajar */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* Kolom 1: Biografi Profesional */}
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
              <Lightbulb className="h-5 w-5" />
              <h3 className="text-lg font-bold text-foreground">
                Profil & Latar Belakang
              </h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              {profileData.bio}
            </p>
          </div>

          {/* Kolom 2: Kartu Filosofi Berpusat Pada Siswa */}
          <div className="lg:col-span-5">
            <Card className="rounded-2xl border-sky-200/80 bg-card/95 p-6 shadow-sm dark:border-sky-800/60 dark:bg-card/70">
              <CardContent className="p-0 space-y-3">
                <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
                  <HeartHandshake className="h-5 w-5" />
                  <h4 className="text-sm font-bold uppercase tracking-wider">
                    Filosofi Pengajaran
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-foreground/90 italic">
                  &ldquo;{profileData.philosophy}&rdquo;
                </p>
                <div className="pt-2 text-right">
                  <span className="text-xs font-semibold text-sky-700 dark:text-sky-300">
                    — {profileData.name}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>

        {/* 4 Kartu Statistik Metrik Mini */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {profileData.metrics.map((metric, idx) => {
              const IconComp = getMetricIcon(metric.label);
              return (
                <Card
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-sky-100/80 bg-card/90 p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md dark:border-sky-950/60 dark:bg-card/70 dark:hover:border-sky-800"
                >
                  <CardContent className="p-0 space-y-2">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100/70 text-sky-700 dark:bg-sky-950 dark:text-sky-300 group-hover:scale-110 transition-transform">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <div className="text-2xl font-black tracking-tight text-sky-600 sm:text-3xl dark:text-sky-400">
                      {metric.value}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground leading-snug">
                      {metric.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

