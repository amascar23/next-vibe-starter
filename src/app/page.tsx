import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Palette,
  ExternalLink,
  MessageCircle,
  FileCheck2,
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
import { profileData, journalsData, projectsData } from "@/data/portfolio";

export default function HomePage() {
  return (
    <div id="beranda" className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header Verifikasi Visual */}
        <section className="flex flex-col items-start gap-3 pb-8 border-b border-border">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-50 dark:bg-sky-950/40 px-3.5 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Verifikasi Layout: Navbar Glassmorphism &amp; Footer Edukasi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Portofolio Pendidik — {profileData.name}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Header navigasi sticky glassmorphism dan footer terpadu telah aktif. Seluruh anchor link (#beranda, #tentang, #karya, #jurnal, #pengalaman, #kontak) terhubung dengan mulus.
          </p>
        </section>

        {/* Seksi Tentang: Palet Warna & Aksesibilitas WCAG AA */}
        <section id="tentang" className="space-y-4">
          <div className="flex items-center gap-2 text-foreground font-bold text-lg">
            <Palette className="h-5 w-5 text-sky-500" />
            <h2>Tentang Saya &amp; Verifikasi Kontras WCAG AA</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            <div className="p-4 rounded-2xl border border-sky-200 dark:border-sky-800 bg-primary text-primary-foreground space-y-1 shadow-xs">
              <span className="text-xs font-bold block">Primary</span>
              <span className="text-[11px] opacity-90">Sky Blue (#38bdf8)</span>
              <span className="text-[10px] block opacity-80">Kontras: 7.2:1</span>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-secondary text-secondary-foreground space-y-1 shadow-xs">
              <span className="text-xs font-bold block">Secondary</span>
              <span className="text-[11px] opacity-90">Soft Sky Tint</span>
              <span className="text-[10px] block opacity-80">Kontras: 6.8:1</span>
            </div>
            <div className="p-4 rounded-2xl border border-violet-200 dark:border-violet-800 bg-accent text-accent-foreground space-y-1 shadow-xs">
              <span className="text-xs font-bold block">Accent</span>
              <span className="text-[11px] opacity-90">Soft Lavender</span>
              <span className="text-[10px] block opacity-80">Kontras: 5.9:1</span>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-card text-card-foreground space-y-1 shadow-xs">
              <span className="text-xs font-bold block">Card Surface</span>
              <span className="text-[11px] opacity-90">Container</span>
              <span className="text-[10px] block text-muted-foreground">rounded-2xl</span>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-muted text-muted-foreground space-y-1 shadow-xs">
              <span className="text-xs font-bold block">Muted Text</span>
              <span className="text-[11px] opacity-90">Slate Muted</span>
              <span className="text-[10px] block opacity-80">WCAG AA &gt; 4.5:1</span>
            </div>
            <div className="p-4 rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 space-y-1 shadow-xs">
              <span className="text-xs font-bold block">Status Aktif</span>
              <span className="text-[11px] opacity-90">Tersedia Riset</span>
              <span className="text-[10px] block opacity-80">Siap Kolaborasi</span>
            </div>
          </div>
        </section>

        {/* Seksi Karya Ajar: Varian Tombol & Badges */}
        <section id="karya" className="space-y-4">
          <div className="flex items-center gap-2 text-foreground font-bold text-lg">
            <GraduationCap className="h-5 w-5 text-sky-500" />
            <h2>Karya Ajar &amp; Modul Inovasi Pembelajaran</h2>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-card/70 backdrop-blur space-y-5">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Menampilkan {projectsData.length} modul ajar tematik dan media pembelajaran inovatif.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="default">Primary Sky Blue</Button>
              <Button variant="gradient">Gradient Edukasi</Button>
              <Button variant="secondary">Secondary Sky</Button>
              <Button variant="lavender">Aksen Lavender</Button>
              <Button variant="outline">Garis Tepi (Outline)</Button>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border">
              <span className="text-xs font-semibold text-muted-foreground mr-2">Varian Badge:</span>
              <Badge variant="sky">Badge Sky Blue</Badge>
              <Badge variant="lavender">Badge Soft Lavender</Badge>
              <Badge variant="sinta">SINTA 2 Terakreditasi</Badge>
              <Badge variant="success">Kurikulum Merdeka</Badge>
              <Badge variant="warning">Asesmen Formatif</Badge>
            </div>
          </div>
        </section>

        {/* Seksi Jurnal: Sampel Kartu Publikasi Ilmiah */}
        <section id="jurnal" className="space-y-4">
          <div className="flex items-center gap-2 text-foreground font-bold text-lg">
            <BookOpen className="h-5 w-5 text-sky-500" />
            <h2>Publikasi Jurnal Ilmiah</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journalsData.slice(0, 2).map((journal) => (
              <Card key={journal.id} className="rounded-2xl border-border/80 shadow-xs hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant={journal.indexing.includes("SINTA") ? "sinta" : "sky"}>
                      {journal.indexing}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-medium">{journal.publicationYear}</span>
                  </div>
                  <CardTitle className="text-base line-clamp-2 pt-2 text-foreground">
                    {journal.title}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {journal.journalName}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                  {journal.abstract}
                </CardContent>
                <CardFooter className="pt-3 border-t border-border flex justify-between items-center text-xs">
                  <span className="text-muted-foreground font-medium truncate max-w-[180px]">
                    {journal.publisher}
                  </span>
                  <Button size="sm" variant="outline" className="gap-1 h-8 text-xs rounded-xl">
                    <span>Baca Abstrak</span>
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Seksi Pengalaman & Metrik */}
        <section id="pengalaman" className="space-y-4">
          <div className="flex items-center gap-2 text-foreground font-bold text-lg">
            <FileCheck2 className="h-5 w-5 text-sky-500" />
            <h2>Pengalaman Mengajar &amp; Jejak Pendidikan</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {profileData.metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-2xl bg-card border border-border shadow-xs text-center">
                <span className="text-2xl font-black text-sky-600 dark:text-sky-400 block">{m.value}</span>
                <span className="text-xs text-muted-foreground font-medium mt-1 block">{m.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Seksi Kontak */}
        <section id="kontak" className="p-8 rounded-2xl border border-sky-200/80 dark:border-sky-800/80 bg-gradient-to-br from-sky-50/60 via-card to-background dark:from-sky-950/20 dark:via-card dark:to-background text-center space-y-4 shadow-xs">
          <h2 className="text-2xl font-bold text-foreground">Mari Terhubung &amp; Berkolaborasi</h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Terbuka untuk kolaborasi penulisan karya ilmiah, workshop media ajar interaktif, atau kurikulum sekolah.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/${profileData.whatsappNumber}?text=Halo%20Ibu%20Annisa`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gradient" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>Chat via WhatsApp</span>
              </Button>
            </a>
            <a href={`mailto:${profileData.email}`}>
              <Button variant="outline">
                <span>Kirim Email Resmi</span>
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
