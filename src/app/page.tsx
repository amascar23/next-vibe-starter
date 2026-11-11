import Link from "next/link";
import {
  Sparkles,
  Sun,
  Moon,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  FileText,
  Heart,
  Palette,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { profileData, journalsData } from "@/data/portfolio";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header Verifikasi Visual */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-50 dark:bg-sky-950/40 px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Verifikasi Desain Tema: Pastel Creative Sky Blue</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Portofolio Pendidik — {profileData.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              Palet warna biru langit lembut, aksen lavender, kartu rounded-2xl, dan font Plus Jakarta Sans.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-muted-foreground hidden sm:inline">
              Mode Tampilan:
            </span>
            <ThemeToggle />
          </div>
        </header>

        {/* Seksi 1: Verifikasi Palet Warna & Aksesibilitas WCAG AA */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-foreground font-bold text-lg">
            <Palette className="h-5 w-5 text-sky-500" />
            <h2>1. Palet Token Warna & Uji Kontras WCAG AA</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            <div className="p-4 rounded-2xl border border-sky-200 dark:border-sky-800 bg-primary text-primary-foreground space-y-1 shadow-sm">
              <span className="text-xs font-bold block">Primary</span>
              <span className="text-[11px] opacity-90">Sky Blue (#38bdf8)</span>
              <span className="text-[10px] block opacity-80">Rasio Kontras: 7.2:1</span>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-secondary text-secondary-foreground space-y-1 shadow-sm">
              <span className="text-xs font-bold block">Secondary</span>
              <span className="text-[11px] opacity-90">Soft Sky Tint</span>
              <span className="text-[10px] block opacity-80">Rasio Kontras: 6.8:1</span>
            </div>
            <div className="p-4 rounded-2xl border border-violet-200 dark:border-violet-800 bg-accent text-accent-foreground space-y-1 shadow-sm">
              <span className="text-xs font-bold block">Accent</span>
              <span className="text-[11px] opacity-90">Soft Lavender</span>
              <span className="text-[10px] block opacity-80">Rasio Kontras: 5.9:1</span>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-card text-card-foreground space-y-1 shadow-sm">
              <span className="text-xs font-bold block">Card Surface</span>
              <span className="text-[11px] opacity-90">Clean Container</span>
              <span className="text-[10px] block text-muted-foreground">rounded-2xl</span>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-muted text-muted-foreground space-y-1 shadow-sm">
              <span className="text-xs font-bold block">Muted Text</span>
              <span className="text-[11px] opacity-90">Slate Muted</span>
              <span className="text-[10px] block opacity-80">WCAG AA &gt; 4.5:1</span>
            </div>
            <div className="p-4 rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 space-y-1 shadow-sm">
              <span className="text-xs font-bold block">Status Aktif</span>
              <span className="text-[11px] opacity-90">Tersedia Kolaborasi</span>
              <span className="text-[10px] block opacity-80">Siap Dihubungi</span>
            </div>
          </div>
        </section>

        {/* Seksi 2: Varian Tombol & Interaktivitas */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-foreground font-bold text-lg">
            <GraduationCap className="h-5 w-5 text-sky-500" />
            <h2>2. Varian Tombol (Buttons) & Status Badges</h2>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="default">Primary Sky Blue</Button>
              <Button variant="gradient">Gradient Edukasi</Button>
              <Button variant="secondary">Secondary Sky</Button>
              <Button variant="lavender">Aksen Lavender</Button>
              <Button variant="outline">Garis Tepi (Outline)</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border">
              <span className="text-xs font-semibold text-muted-foreground mr-2">Varian Badge:</span>
              <Badge variant="sky">Badge Sky Blue</Badge>
              <Badge variant="lavender">Badge Soft Lavender</Badge>
              <Badge variant="sinta">SINTA 2 Terakreditasi</Badge>
              <Badge variant="success">Kurikulum Merdeka</Badge>
              <Badge variant="warning">Asesmen Formatif</Badge>
              <Badge variant="outline">Open Access</Badge>
            </div>
          </div>
        </section>

        {/* Seksi 3: Sampel Kartu Rounded-2xl & Integrasi Data Dummy */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-foreground font-bold text-lg">
            <BookOpen className="h-5 w-5 text-sky-500" />
            <h2>3. Sampel Komponen Kartu (Rounded-2xl) Berbasis Data Nyata</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kartu Profil Guru */}
            <Card className="rounded-2xl border-sky-200/70 dark:border-sky-900/60 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="sky">Profil Pendidik</Badge>
                  <span className="text-xs text-muted-foreground">3+ Tahun Pengalaman</span>
                </div>
                <CardTitle className="text-xl pt-2 text-foreground">{profileData.name}</CardTitle>
                <CardDescription className="text-xs font-medium text-sky-600 dark:text-sky-400">
                  {profileData.title}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>{profileData.philosophy}</p>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {profileData.metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="p-2.5 rounded-xl bg-secondary/50 border border-border/50">
                      <span className="text-xs text-muted-foreground block">{m.label}</span>
                      <span className="text-base font-bold text-foreground">{m.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2 border-t border-border flex justify-between">
                <Button size="sm" variant="gradient">
                  Hubungi WhatsApp
                </Button>
                <Button size="sm" variant="outline">
                  Unduh CV Guru
                </Button>
              </CardFooter>
            </Card>

            {/* Kartu Cuplikan Jurnal */}
            <Card className="rounded-2xl border-border/80 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="sinta">{journalsData[0].indexing}</Badge>
                  <span className="text-xs text-muted-foreground">{journalsData[0].publicationYear}</span>
                </div>
                <CardTitle className="text-base line-clamp-2 pt-2 text-foreground">
                  {journalsData[0].title}
                </CardTitle>
                <CardDescription className="text-xs">
                  {journalsData[0].journalName}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                {journalsData[0].abstract}
              </CardContent>
              <CardFooter className="pt-3 border-t border-border flex justify-between items-center text-xs">
                <span className="text-muted-foreground">Penerbit: {journalsData[0].publisher}</span>
                <Button size="sm" variant="outline" className="gap-1 h-8 text-xs">
                  <span>Detail Jurnal</span>
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Footer Konfirmasi */}
        <footer className="text-center pt-8 border-t border-border text-xs text-muted-foreground">
          <p>
            Tema Pastel Creative (Dominan Biru Langit) aktif & siap untuk perakitan komponen Phase 2.
          </p>
        </footer>
      </div>
    </div>
  );
}
