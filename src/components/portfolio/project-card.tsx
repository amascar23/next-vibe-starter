import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
import { TeachingProject } from "@/types";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: TeachingProject;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group flex flex-col justify-between overflow-hidden rounded-2xl border border-sky-100/80 bg-card/90",
        "shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5",
        "dark:border-sky-950/60 dark:bg-card/70 dark:hover:border-sky-800",
        className
      )}
    >
      <div>
        {/* Gambar Thumbnail dengan Efek Zoom Lembut Saat Hover */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-sky-50/50 dark:bg-sky-950/30">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Label Target Jenjang di Atas Thumbnail */}
          <div className="absolute left-3 top-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur">
              <Sparkles className="h-3 w-3 text-sky-500" />
              {project.targetAudience}
            </span>
          </div>
        </div>

        <CardContent className="space-y-3 p-5">
          {/* Badge Mata Pelajaran */}
          <div>
            <Badge
              variant="sky"
              className="px-2.5 py-0.5 text-[11px] font-semibold"
            >
              {project.subject}
            </Badge>
          </div>

          {/* Judul Karya Inovatif */}
          <Link href={`/karya/${project.slug}`} className="group/title block">
            <h3 className="line-clamp-2 text-lg font-bold leading-snug tracking-tight text-foreground transition-colors group-hover/title:text-sky-600 dark:group-hover/title:text-sky-400">
              {project.title}
            </h3>
          </Link>

          {/* Ringkasan Karya */}
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          {/* Chip Piranti / Tools EdTech yang Digunakan */}
          {project.toolsUsed && project.toolsUsed.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.toolsUsed.slice(0, 3).map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-sky-100 bg-sky-50/50 px-2 py-0.5 text-[11px] font-medium text-sky-700 dark:border-sky-900/60 dark:bg-sky-950/40 dark:text-sky-300"
                >
                  {tool}
                </span>
              ))}
              {project.toolsUsed.length > 3 && (
                <span className="self-center text-[11px] text-muted-foreground">
                  +{project.toolsUsed.length - 3} lainnya
                </span>
              )}
            </div>
          )}
        </CardContent>
      </div>

      {/* Footer Aksi */}
      <CardFooter className="flex items-center justify-between gap-2 border-t border-sky-100/50 p-5 pt-3 dark:border-sky-950/40">
        <Link
          href={`/karya/${project.slug}`}
          className={cn(
            buttonVariants({ variant: "default", size: "sm" }),
            "gap-1.5 rounded-xl font-medium shadow-sm transition-transform active:scale-95"
          )}
        >
          <span>Lihat Detail</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Uji coba langsung materi ${project.title}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-1 rounded-xl border-sky-200 text-xs hover:border-sky-400 hover:bg-sky-50 dark:border-sky-900 dark:hover:bg-sky-950/50"
            )}
          >
            <ExternalLink className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
            <span className="hidden sm:inline">Uji Coba</span>
          </a>
        )}
      </CardFooter>
    </Card>
  );
}

