import Image from "next/image";
import { Quote } from "lucide-react";
import { Testimonial } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

/**
 * Menghasilkan inisial nama jika foto avatar tidak tersedia
 */
function getInitials(name: string): string {
  const parts = name.replace(/^(Dr\.|Prof\.|Ir\.|Dra\.|Drs\.)\s*/i, "").trim().split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return (parts[0]?.[0] || "A").toUpperCase();
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const initials = getInitials(testimonial.name);
  const quoteText = testimonial.quote || testimonial.content || "";

  return (
    <Card
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-sky-100/80 bg-card/90 p-6",
        "shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5",
        "dark:border-sky-950/60 dark:bg-card/70 dark:hover:border-sky-800",
        className
      )}
    >
      {/* Ikon Kutipan Dekoratif di Sudut Kanan Atas */}
      <div className="absolute right-4 top-4 text-sky-200/50 transition-colors group-hover:text-sky-300/80 dark:text-sky-900/40 dark:group-hover:text-sky-800/60 pointer-events-none">
        <Quote className="h-12 w-12 rotate-180" />
      </div>

      <CardContent className="relative z-10 p-0 space-y-4">
        {/* Kutipan Testimoni */}
        <p className="text-sm leading-relaxed text-foreground/90 italic">
          &ldquo;{quoteText}&rdquo;
        </p>

        {/* Identitas Pemberi Rekomendasi */}
        <div className="flex items-center gap-3 pt-3 border-t border-sky-100/60 dark:border-sky-950/40">
          {/* Avatar atau Inisial */}
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-sky-200 bg-sky-100 font-semibold text-sky-700 shadow-sm dark:border-sky-800 dark:bg-sky-950 dark:text-sky-300">
            {testimonial.avatarUrl ? (
              <Image
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-xs font-bold">{initials}</span>
            )}
          </div>

          {/* Nama, Jabatan, & Institusi */}
          <div className="space-y-0.5 min-w-0">
            <h4 className="truncate text-sm font-bold text-foreground">
              {testimonial.name}
            </h4>
            <p className="truncate text-xs font-medium text-sky-600 dark:text-sky-400">
              {testimonial.role}
            </p>
            {testimonial.institution && (
              <p className="truncate text-[11px] text-muted-foreground">
                {testimonial.institution}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

