import { GraduationCap, BookOpen, Users, CheckCircle2 } from "lucide-react";
import { TimelineItem as TimelineItemType } from "@/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  item: TimelineItemType;
  isLast?: boolean;
  className?: string;
}

/**
 * Mendapatkan ikon dan label kategori berdasarkan tipe riwayat
 */
function getTimelineMeta(type: TimelineItemType["type"]) {
  switch (type) {
    case "teaching":
      return {
        icon: GraduationCap,
        label: "Pengalaman Mengajar",
        badgeVariant: "sky" as const,
        iconBg: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
      };
    case "education":
      return {
        icon: BookOpen,
        label: "Pendidikan Formal",
        badgeVariant: "lavender" as const,
        iconBg: "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
      };
    case "organization":
      return {
        icon: Users,
        label: "Organisasi & Komunitas",
        badgeVariant: "success" as const,
        iconBg: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
      };
  }
}

export function TimelineItem({ item, isLast = false, className }: TimelineItemProps) {
  const meta = getTimelineMeta(item.type);
  const IconComponent = meta.icon;

  return (
    <div className={cn("relative flex gap-4 sm:gap-6", className)}>
      {/* Kolom Garis dan Node Ikon */}
      <div className="flex flex-col items-center">
        {/* Lingkaran Ikon */}
        <div
          className={cn(
            "relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-sm border border-sky-200/60 dark:border-sky-800/60",
            meta.iconBg
          )}
        >
          <IconComponent className="h-5 w-5" />
        </div>

        {/* Batang Garis Vertikal Antar Node */}
        {!isLast && (
          <div className="w-[2px] grow bg-gradient-to-b from-sky-200 via-sky-100 to-transparent dark:from-sky-800 dark:via-sky-900/40 my-2" />
        )}
      </div>

      {/* Konten Kartu Timeline */}
      <div
        className={cn(
          "w-full rounded-2xl border border-sky-100/80 bg-card/80 p-5 shadow-sm transition-all duration-300",
          "hover:border-sky-300 hover:shadow-md dark:border-sky-950/60 dark:bg-card/60 dark:hover:border-sky-800",
          !isLast && "mb-6"
        )}
      >
        {/* Header Kartu: Periode & Kategori */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="inline-flex items-center rounded-full bg-sky-100/70 px-3 py-1 text-xs font-semibold text-sky-800 dark:bg-sky-950 dark:text-sky-300">
            {item.period}
          </span>
          <Badge variant={meta.badgeVariant} className="text-[11px]">
            {meta.label}
          </Badge>
        </div>

        {/* Posisi / Gelar */}
        <h4 className="text-base font-bold text-foreground tracking-tight sm:text-lg">
          {item.roleOrDegree}
        </h4>

        {/* Nama Institusi */}
        <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mb-3">
          {item.institution}
        </p>

        {/* Poin-Poin Deskripsi dan Tanggung Jawab */}
        <ul className="space-y-2">
          {item.description.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-500 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

