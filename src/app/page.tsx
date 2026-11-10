import { CheckCircle2, Sparkles, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-sky-50/50 via-background to-background dark:from-slate-950 dark:via-background dark:to-background">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <div className="max-w-xl w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold text-sky-700 dark:text-sky-300">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Inisialisasi Proyek Berhasil</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Portofolio & Jurnal{" "}
          <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            Annisa
          </span>
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Pondasi proyek Next.js 15, Tailwind CSS, shadcn/ui, dan tema Pastel Biru Langit telah siap.
        </p>

        <Card className="border-sky-200/50 dark:border-sky-900/50 bg-card/60 backdrop-blur shadow-sm">
          <CardHeader className="text-left pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-sky-500" />
                Status Komponen & Arsitektur
              </CardTitle>
              <Badge variant="outline" className="border-sky-400/40 text-sky-600 dark:text-sky-400 text-xs">
                Ready
              </Badge>
            </div>
            <CardDescription className="text-xs">
              Komponen inti shadcn/ui dan konfigurasi tema aktif:
            </CardDescription>
          </CardHeader>
          <CardContent className="text-left text-xs space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" />
              <span>Next.js 15 App Router + TypeScript Strict</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" />
              <span>Tailwind CSS + shadcn/ui (Button, Badge, Card, Dialog)</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" />
              <span>Tema Pastel Sky Blue + next-themes (Dark/Light mode)</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" />
              <span>Ikon Lucide React & Struktur Direktori roadmaps.md</span>
            </div>
          </CardContent>
        </Card>

        <div className="pt-2 flex justify-center">
          <Button className="bg-sky-500 hover:bg-sky-600 text-white shadow-sm font-medium">
            <BookOpen className="mr-2 h-4 w-4" />
            Siap Untuk Fase Berikutnya
          </Button>
        </div>
      </div>
    </main>
  );
}
