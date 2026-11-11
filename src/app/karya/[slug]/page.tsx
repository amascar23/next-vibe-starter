import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Download,
  ExternalLink,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs, projectsData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Karya Tidak Ditemukan | Annisa Pendidik" };
  }

  return {
    title: `${project.title} — Karya Inovasi Pembelajaran Annisa`,
    description: project.summary.slice(0, 160),
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Breadcrumb Navigasi */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
        >
          <Link href="/" className="hover:text-sky-600 transition-colors">
            Beranda
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
          <Link href="/#karya" className="hover:text-sky-600 transition-colors">
            Karya Ajar
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
          <span className="truncate max-w-[180px] sm:max-w-md font-medium text-foreground">
            {project.title}
          </span>
        </nav>

        {/* Tombol Kembali ke Karya Ajar */}
        <div className="mb-6">
          <Link
            href="/#karya"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "gap-1.5 rounded-xl text-muted-foreground hover:text-foreground"
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Karya Ajar</span>
          </Link>
        </div>

        {/* Thumbnail Besar Representatif */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-sky-100 bg-sky-50/50 shadow-md dark:border-sky-900/60 dark:bg-sky-950/40 mb-8">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Header Karya */}
        <header className="space-y-4 pb-8 border-b border-sky-100 dark:border-sky-950">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="sky" className="px-3 py-1 text-xs font-semibold">
              {project.subject}
            </Badge>
            <Badge variant="lavender" className="px-3 py-1 text-xs font-semibold">
              {project.targetAudience}
            </Badge>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground italic">
            &ldquo;{project.summary}&rdquo;
          </p>

          {/* Tombol Aksi: Coba Demo & Unduh Modul */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "gradient" }), "gap-2 rounded-xl shadow-xs")}
              >
                <ExternalLink className="h-4 w-4" />
                <span>Coba Demo Interaktif</span>
              </a>
            )}

            {project.documentUrl && (
              <a
                href={project.documentUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }), "gap-2 rounded-xl border-sky-200")}
              >
                <Download className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                <span>Unduh Modul Lengkap (PDF)</span>
              </a>
            )}
          </div>
        </header>

        {/* Deskripsi & Implementasi Kelas */}
        <section className="my-8 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Layers className="h-5 w-5 text-sky-500" />
            <span>Deskripsi &amp; Implementasi Kurikulum</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </section>

        {/* Piranti / Tools EdTech yang Digunakan */}
        {project.toolsUsed && project.toolsUsed.length > 0 && (
          <section className="my-8 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Piranti &amp; Media Teknologi Digunakan
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.toolsUsed.map((tool) => (
                <span
                  key={tool}
                  className="rounded-xl border border-sky-200/80 bg-sky-50/70 px-3 py-1.5 text-xs font-semibold text-sky-800 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Bagian Dampak pada Murid */}
        {project.resultsAndImpact && (
          <section className="my-8 rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-6 sm:p-8 dark:border-emerald-900/60 dark:bg-emerald-950/20">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 mb-3">
              <CheckCircle2 className="h-5 w-5" />
              <h2 className="text-base font-bold uppercase tracking-wider">
                Dampak &amp; Evaluasi pada Murid di Kelas
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
              {project.resultsAndImpact}
            </p>
          </section>
        )}

        {/* Navigasi Karya Sebelumnya / Berikutnya */}
        <nav
          aria-label="Navigasi Karya"
          className="my-12 pt-8 border-t border-sky-100 dark:border-sky-950 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {prevProject ? (
            <Link
              href={`/karya/${prevProject.slug}`}
              className="flex flex-col gap-1 rounded-2xl border border-sky-100/80 p-4 transition-all hover:border-sky-300 hover:bg-sky-50/40 dark:border-sky-900 dark:hover:bg-sky-950/30"
            >
              <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Karya Sebelumnya</span>
              </span>
              <span className="line-clamp-1 text-sm font-bold text-foreground">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              href={`/karya/${nextProject.slug}`}
              className="flex flex-col gap-1 items-end rounded-2xl border border-sky-100/80 p-4 transition-all hover:border-sky-300 hover:bg-sky-50/40 dark:border-sky-900 dark:hover:bg-sky-950/30 text-right"
            >
              <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                <span>Karya Berikutnya</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <span className="line-clamp-1 text-sm font-bold text-foreground">
                {nextProject.title}
              </span>
            </Link>
          )}
        </nav>

        {/* Tombol Footer Kembali ke /#karya */}
        <div className="pt-4 flex justify-center">
          <Link
            href="/#karya"
            className={cn(buttonVariants({ variant: "outline" }), "gap-2 rounded-xl")}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Galeri Karya Ajar</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

