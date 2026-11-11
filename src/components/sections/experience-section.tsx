import { GraduationCap, BookOpen } from "lucide-react";
import { timelineData } from "@/data/portfolio";
import { TimelineItem } from "@/components/portfolio";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  // Memisahkan riwayat: Pengalaman Mengajar vs Pendidikan Formal & Organisasi
  const teachingList = timelineData.filter((item) => item.type === "teaching");
  const educationList = timelineData.filter((item) => item.type !== "teaching");

  return (
    <section
      id="pengalaman"
      className="relative py-16 md:py-24 bg-sky-50/30 dark:bg-sky-950/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Seksi Pengalaman */}
        <div className="mx-auto max-w-3xl text-center space-y-3 mb-12 md:mb-16">
          <Badge variant="sky" className="px-3 py-1 text-xs font-semibold">
            Rekam Jejak &amp; Dedikasi
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Pengalaman Mengajar &amp; Riwayat Akademis
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Perjalanan bertumbuh dalam ruang kelas, penempaan kompetensi pendidikan profesi,
            serta keaktifan mengabdi di komunitas guru.
          </p>
        </div>

        {/* Layout 2 Kolom: Mengajar vs Pendidikan */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* Kolom Kiri: Pengalaman Mengajar */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-sky-100 dark:border-sky-950">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Pengalaman Mengajar &amp; Praktik Kelas
                </h3>
                <p className="text-xs text-muted-foreground">
                  Dedikasi nyata memfasilitasi pembelajaran peserta didik
                </p>
              </div>
            </div>

            <div className="pt-2">
              {teachingList.map((item, idx) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  isLast={idx === teachingList.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Pendidikan Formal & Organisasi */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-sky-100 dark:border-sky-950">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Pendidikan Formal &amp; Organisasi
                </h3>
                <p className="text-xs text-muted-foreground">
                  Landasan keilmuan akademis dan pengabdian komunitas
                </p>
              </div>
            </div>

            <div className="pt-2">
              {educationList.map((item, idx) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  isLast={idx === educationList.length - 1}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

