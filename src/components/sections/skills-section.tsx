import {
  GraduationCap,
  Laptop,
  HeartHandshake,
  Sparkles,
  Check,
} from "lucide-react";
import { skillGroupsData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * Pemetaan ikon dan nuansa gaya untuk masing-masing kategori bento skill
 */
function getCategoryMeta(category: string) {
  switch (category) {
    case "pedagogik":
      return {
        icon: GraduationCap,
        badgeText: "Fondasi Mengajar",
        badgeVariant: "sky" as const,
        iconBg: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
        chipStyle:
          "border-sky-200/80 bg-sky-50/70 text-sky-800 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-300",
        accentGlow: "from-sky-400/10 to-transparent",
      };
    case "edtech":
      return {
        icon: Laptop,
        badgeText: "Alat & Media Digital",
        badgeVariant: "lavender" as const,
        iconBg: "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
        chipStyle:
          "border-violet-200/80 bg-violet-50/70 text-violet-800 dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-300",
        accentGlow: "from-violet-400/10 to-transparent",
      };
    case "soft-skill":
    default:
      return {
        icon: HeartHandshake,
        badgeText: "Relasi & Kolaborasi",
        badgeVariant: "success" as const,
        iconBg: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
        chipStyle:
          "border-emerald-200/80 bg-emerald-50/70 text-emerald-800 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300",
        accentGlow: "from-emerald-400/10 to-transparent",
      };
  }
}

export function SkillsSection() {
  const pedagogik = skillGroupsData.find((g) => g.category === "pedagogik");
  const edtech = skillGroupsData.find((g) => g.category === "edtech");
  const softskill = skillGroupsData.find((g) => g.category === "soft-skill");

  return (
    <section id="kompetensi" className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Seksi Kompetensi */}
        <div className="mx-auto max-w-3xl text-center space-y-3 mb-12 md:mb-16">
          <Badge variant="sky" className="px-3 py-1 text-xs font-semibold">
            Keahlian &amp; Kapabilitas
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Rumpun Kompetensi Pendidik
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Perpaduan komprehensif antara penguasaan pedagogi berdiferensiasi, kecakapan piranti teknologi
            edukasi mutakhir, dan komunikasi empatik yang mengayomi.
          </p>
        </div>

        {/* Bento Grid 3 Kelompok Keahlian dengan Ukuran Bervariasi */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Kartu 1: Kompetensi Pedagogik (Lebar Dominan 7 Kolom) */}
          {pedagogik && (
            <BentoSkillCard
              group={pedagogik}
              className="lg:col-span-7"
              featured
            />
          )}

          {/* Kartu 2: Media & EdTech (5 Kolom) */}
          {edtech && (
            <BentoSkillCard
              group={edtech}
              className="lg:col-span-5"
            />
          )}

          {/* Kartu 3: Keahlian Interpersonal & Kepemimpinan (Full Width 12 Kolom) */}
          {softskill && (
            <BentoSkillCard
              group={softskill}
              className="lg:col-span-12"
              horizontal
            />
          )}

        </div>

      </div>
    </section>
  );
}

interface BentoSkillCardProps {
  group: (typeof skillGroupsData)[0];
  className?: string;
  featured?: boolean;
  horizontal?: boolean;
}

function BentoSkillCard({
  group,
  className,
  featured,
  horizontal,
}: BentoSkillCardProps) {
  const meta = getCategoryMeta(group.category);
  const IconComponent = meta.icon;

  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-sky-100/80 bg-card/90 p-6 sm:p-8 shadow-sm transition-all duration-300",
        "hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5",
        "dark:border-sky-950/60 dark:bg-card/70 dark:hover:border-sky-800",
        className
      )}
    >
      {/* Efek Pendar Aksen Sudut Bento */}
      <div
        className={cn(
          "pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br blur-2xl transition-opacity group-hover:opacity-100 opacity-60",
          meta.accentGlow
        )}
        aria-hidden="true"
      />

      <CardContent className="p-0 space-y-6">
        {/* Header Kartu Bento */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm border border-sky-200/50 dark:border-sky-800/50",
                meta.iconBg
              )}
            >
              <IconComponent className="h-6 w-6" />
            </div>
            <div>
              <Badge variant={meta.badgeVariant} className="text-[11px] mb-1">
                {meta.badgeText}
              </Badge>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                {group.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Deskripsi Kelompok */}
        {group.description && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {group.description}
          </p>
        )}

        {/* Daftar Chips Keterampilan */}
        <div
          className={cn(
            "flex flex-wrap gap-2 pt-1",
            horizontal && "sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-3"
          )}
        >
          {group.skills.map((skill) => (
            <span
              key={skill}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold shadow-xs transition-transform duration-200 group-hover:scale-[1.02]",
                meta.chipStyle
              )}
            >
              <Check className="h-3.5 w-3.5 shrink-0 opacity-70" />
              <span>{skill}</span>
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

