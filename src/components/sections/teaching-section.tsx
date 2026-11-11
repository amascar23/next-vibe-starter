import { GraduationCap } from "lucide-react";
import { projectsData } from "@/data/portfolio";
import { ProjectCard } from "@/components/portfolio";
import { Badge } from "@/components/ui/badge";

export function TeachingSection() {
  return (
    <section id="karya" className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Seksi Karya Ajar */}
        <div className="mx-auto max-w-3xl text-center space-y-3 mb-12 md:mb-16">
          <Badge variant="sky" className="px-3 py-1 text-xs font-semibold">
            Inovasi Pedagogik &amp; Media Ajar
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Karya &amp; Modul Pembelajaran
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Kumpulan modul kontekstual, asesmen gamifikasi, dan lembar kerja interaktif
            yang telah diujicobakan secara nyata di ruang kelas untuk meningkatkan partisipasi aktif siswa.
          </p>
        </div>

        {/* Grid Kartu Karya Inovatif */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

