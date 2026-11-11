import Link from "next/link";
import { BookOpen, Download, Calendar, Building2, ExternalLink } from "lucide-react";
import { JournalItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface JournalCardProps {
  journal: JournalItem;
  className?: string;
}

/**
 * Menentukan varian warna badge berdasarkan status indeksasi jurnal
 */
function getIndexingBadgeVariant(indexing: string): "sinta" | "lavender" | "success" | "sky" {
  const normalized = indexing.toUpperCase();
  if (normalized.includes("SINTA")) return "sinta";
  if (normalized.includes("ISSN")) return "lavender";
  if (normalized.includes("OPEN ACCESS")) return "success";
  return "sky";
}

export function JournalCard({ journal, className }: JournalCardProps) {
  const badgeVariant = getIndexingBadgeVariant(journal.indexing);

  return (
    <Card
      className={cn(
        "group flex flex-col justify-between overflow-hidden rounded-2xl border border-sky-100/80 bg-card/90",
        "shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5",
        "dark:border-sky-950/60 dark:bg-card/70 dark:hover:border-sky-800",
        className
      )}
    >
      <CardHeader className="space-y-3 pb-3">
        {/* Baris Meta: Tahun, Institusi, dan Badge Indeksasi */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-medium text-foreground/80">
              <Calendar className="h-3.5 w-3.5 text-sky-500" />
              {journal.publicationYear}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 line-clamp-1">
              <Building2 className="h-3.5 w-3.5 text-sky-500" />
              {journal.publisher}
            </span>
          </div>

          <Badge variant={badgeVariant} className="px-2.5 py-0.5 text-[11px] font-semibold">
            {journal.indexing}
          </Badge>
        </div>

        {/* Judul Artikel Ilmiah */}
        <Link href={`/jurnal/${journal.slug}`} className="group/title block">
          <h3 className="text-lg font-bold leading-snug tracking-tight text-foreground transition-colors group-hover/title:text-sky-600 dark:group-hover/title:text-sky-400">
            {journal.title}
          </h3>
        </Link>

        {/* Nama Jurnal & Penulis */}
        <div className="space-y-1 text-xs">
          <p className="font-medium italic text-sky-700 dark:text-sky-300">
            {journal.journalName}
          </p>
          <p className="text-muted-foreground">
            Penulis: {journal.authors.join(", ")}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-1">
        {/* Abstrak Ringkas */}
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {journal.abstract}
        </p>

        {/* Chips Kata Kunci */}
        {journal.keywords.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {journal.keywords.slice(0, 3).map((keyword) => (
              <span
                key={keyword}
                className="inline-flex items-center rounded-lg bg-sky-50/80 px-2 py-0.5 text-[11px] font-medium text-sky-700 dark:bg-sky-950/40 dark:text-sky-300"
              >
                #{keyword}
              </span>
            ))}
            {journal.keywords.length > 3 && (
              <span className="text-[11px] text-muted-foreground/80">
                +{journal.keywords.length - 3} lainnya
              </span>
            )}
          </div>
        )}
      </CardContent>

      {/* Aksi: Baca Telaah & Unduh PDF */}
      <CardFooter className="flex flex-wrap items-center justify-between gap-2 border-t border-sky-100/50 pt-4 dark:border-sky-950/40">
        <Link
          href={`/jurnal/${journal.slug}`}
          className={cn(
            buttonVariants({ variant: "default", size: "sm" }),
            "gap-1.5 rounded-xl font-medium shadow-sm transition-transform active:scale-95"
          )}
        >
          <BookOpen className="h-4 w-4" />
          <span>Baca Telaah</span>
        </Link>

        <div className="flex items-center gap-1.5">
          {journal.pdfUrl && (
            <a
              href={journal.pdfUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Unduh berkas PDF artikel ${journal.title}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "gap-1.5 rounded-xl border-sky-200 text-xs hover:border-sky-400 hover:bg-sky-50 dark:border-sky-900 dark:hover:bg-sky-950/50"
              )}
            >
              <Download className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
              <span>Unduh PDF</span>
            </a>
          )}

          {journal.externalUrl && (
            <a
              href={journal.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi pranala resmi artikel"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "h-8 w-8 rounded-xl text-muted-foreground hover:text-sky-600 dark:hover:text-sky-400"
              )}
              title="Pranala Eksternal (DOI/Repositori)"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

