import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Building2,
  BookOpen,
  Download,
  ExternalLink,
  ChevronRight,
  FileText,
} from "lucide-react";
import { getJournalBySlug, getAllJournalSlugs } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllJournalSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const journal = getJournalBySlug(slug);

  if (!journal) {
    return {
      title: "Jurnal Tidak Ditemukan | Annisa Pendidik",
    };
  }

  return {
    title: `${journal.title} — Publikasi Ilmiah Annisa`,
    description: journal.abstract.slice(0, 160) + "...",
  };
}

function getIndexingBadgeVariant(indexing: string): "sinta" | "lavender" | "success" | "sky" {
  const normalized = indexing.toUpperCase();
  if (normalized.includes("SINTA")) return "sinta";
  if (normalized.includes("ISSN")) return "lavender";
  if (normalized.includes("OPEN ACCESS")) return "success";
  return "sky";
}

function renderContent(content: string) {
  const blocks = content.trim().split("\n\n");
  return blocks.map((block, idx) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return (
        <h3
          key={idx}
          className="mt-8 mb-3 text-xl font-bold tracking-tight text-foreground flex items-center gap-2 border-b border-sky-100/80 pb-2 dark:border-sky-950"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
          {trimmed.replace(/^##\s+/, "")}
        </h3>
      );
    }
    return (
      <p key={idx} className="mb-4 text-base leading-relaxed text-muted-foreground">
        {trimmed}
      </p>
    );
  });
}

export default async function JournalDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const journal = getJournalBySlug(slug);

  if (!journal) {
    notFound();
  }

  const badgeVariant = getIndexingBadgeVariant(journal.indexing);

  return (
    <div className="min-h-screen bg-background py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Breadcrumb Navigasi */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
        >
          <Link href="/" className="hover:text-sky-600 transition-colors">
            Beranda
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
          <Link href="/#jurnal" className="hover:text-sky-600 transition-colors">
            Jurnal
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
          <span className="truncate max-w-[180px] sm:max-w-md font-medium text-foreground">
            {journal.title}
          </span>
        </nav>

        {/* Tombol Kembali ke Beranda Seksi Jurnal */}
        <div className="mb-6">
          <Link
            href="/#jurnal"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "gap-1.5 rounded-xl text-muted-foreground hover:text-foreground"
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Daftar Jurnal</span>
          </Link>
        </div>

        {/* Header Artikel Jurnal */}
        <header className="space-y-4 pb-8 border-b border-sky-100 dark:border-sky-950">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={badgeVariant} className="px-3 py-1 text-xs font-semibold">
              {journal.indexing}
            </Badge>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 text-sky-500" />
              Tahun Terbit: {journal.publicationYear}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            {journal.title}
          </h1>

          <div className="space-y-1.5 text-sm">
            <p className="font-semibold text-sky-700 dark:text-sky-300 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>{journal.journalName}</span>
            </p>
            <p className="text-muted-foreground flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>{journal.publisher}</span>
            </p>
            <p className="text-xs text-muted-foreground pt-1">
              <span className="font-semibold text-foreground">Penulis:</span>{" "}
              {journal.authors.join(", ")}
            </p>
          </div>

          {/* Chips Kata Kunci */}
          {journal.keywords.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {journal.keywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded-lg border border-sky-100 bg-sky-50/70 px-2.5 py-1 text-xs font-medium text-sky-800 dark:border-sky-900/60 dark:bg-sky-950/40 dark:text-sky-300"
                >
                  #{kw}
                </span>
              ))}
            </div>
          )}

          {/* Tombol Aksi Cepat: Unduh PDF & Sumber Resmi */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            {journal.pdfUrl && (
              <a
                href={journal.pdfUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "gradient" }), "gap-2 rounded-xl shadow-xs")}
              >
                <Download className="h-4 w-4" />
                <span>Unduh Full Paper (PDF)</span>
              </a>
            )}

            {journal.externalUrl && (
              <a
                href={journal.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }), "gap-2 rounded-xl border-sky-200")}
              >
                <ExternalLink className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                <span>Buka Sumber Asli / DOI</span>
              </a>
            )}
          </div>
        </header>

        {/* Kotak Abstrak Lengkap */}
        <section className="my-8 rounded-2xl border border-sky-100/90 bg-sky-50/50 p-6 sm:p-8 dark:border-sky-950 dark:bg-sky-950/20">
          <div className="flex items-center gap-2 text-sky-700 dark:text-sky-300 mb-3">
            <FileText className="h-5 w-5" />
            <h2 className="text-base font-bold uppercase tracking-wider">Abstrak Penelitian</h2>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-foreground/90 italic">
            {journal.abstract}
          </p>
        </section>

        {/* Isi Telaah Lengkap (Full Content Markdown) */}
        {journal.fullContent && (
          <article className="my-8 pt-2">
            <h2 className="text-2xl font-black tracking-tight text-foreground mb-6">
              Telaah &amp; Pembahasan Lengkap
            </h2>
            <div className="space-y-2">{renderContent(journal.fullContent)}</div>
          </article>
        )}

        {/* Footer Halaman Detail */}
        <div className="mt-12 pt-8 border-t border-sky-100 dark:border-sky-950 flex justify-between items-center">
          <Link
            href="/#jurnal"
            className={cn(buttonVariants({ variant: "outline" }), "gap-2 rounded-xl")}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Daftar Jurnal</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

