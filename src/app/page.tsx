import Link from "next/link";
import { Sparkles, Terminal, Shield, FileText, CheckCircle2, ArrowRight, Layers, Cpu, Code2, Zap, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { VibeCockpit } from "@/components/vibe-cockpit";

export default function HomePage() {
  return (
    <div className="container py-10 space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 pt-6 pb-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Vibe Coding Tanpa Slop (Clean Architecture)</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight sm:leading-none">
          Ubah Ide Menjadi Web Utuh{" "}
          <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Tanpa Kode Sembarangan
          </span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Kombinasi <strong>Boilerplate Next.js 15 + Tailwind CSS</strong> dan{" "}
          <strong>AI Ruleset Disiplin</strong>. Memaksa AI melakukan wawancara PRD mendalam sebelum menulis satu baris kode pun.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a href="#workflow">
            <Button variant="gradient" size="lg" className="gap-2 font-semibold shadow-md">
              <Zap className="h-4 w-4" />
              Mulai Vibe Coding Sekarang
            </Button>
          </a>
          <a href="#quickstart">
            <Button variant="outline" size="lg" className="gap-2">
              <Terminal className="h-4 w-4" />
              Cara Setup di Laptop
            </Button>
          </a>
        </div>

        {/* Quick status pill */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs text-muted-foreground border-t border-border/60 w-full max-w-xl">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Next.js 15 App Router
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Tailwind CSS + shadcn/ui
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Wajib Interview PRD
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Semantic Git Rules
          </span>
        </div>
      </section>

      {/* Interactive Cockpit / Prompt Suite */}
      <VibeCockpit />

      {/* 3 Pillars Architecture */}
      <section className="space-y-6" id="rulesets">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="purple">Kombinasi Emas</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Mengapa Setup Ini Menghasilkan Kode Berkualitas?
          </h2>
          <p className="text-sm text-muted-foreground">
            Bukan sekadar repo kosong, melainkan sistem berlapis yang menjaga AI tetap berada di koridor Senior Software Engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-border/80">
            <CardHeader className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 border border-violet-500/20">
                <FileText className="h-5 w-5" />
              </div>
              <CardTitle>1. Wawancara PRD Wajib</CardTitle>
              <CardDescription>
                AI dilarang langsung menyentuh kode. AI wajib bertindak sebagai Product Manager dan menanyakan 5-8 pertanyaan spesifik untuk merumuskan <code>PRD.md</code>.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-1">
              <p>• User Personas &amp; Acceptance Criteria</p>
              <p>• Database Schema &amp; Entity Relations</p>
              <p>• UI/UX Flow &amp; Responsive Layouts</p>
            </CardContent>
          </Card>

          <Card className="border border-border/80">
            <CardHeader className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 border border-indigo-500/20">
                <Shield className="h-5 w-5" />
              </div>
              <CardTitle>2. Aturan Anti-Slop AI</CardTitle>
              <CardDescription>
                Mengadopsi prinsip <code>anti-slop</code>, <code>hallmark</code>, dan standar Next.js 15. Melarang AI membuat file raksasa atau kode usang.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-1">
              <p>• Server vs Client Components yang tepat</p>
              <p>• Komponen UI modular shadcn &amp; Tailwind</p>
              <p>• Zero deprecated API / no monolitik files</p>
            </CardContent>
          </Card>

          <Card className="border border-border/80">
            <CardHeader className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                <Layers className="h-5 w-5" />
              </div>
              <CardTitle>3. Eksekusi Terstruktur (AGENTS.md)</CardTitle>
              <CardDescription>
                Pekerjaan dipecah menjadi task-task atomik kecil di <code>AGENTS.md</code>. Setiap task diuji dan diverifikasi sebelum lanjut ke task berikutnya.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-1">
              <p>• Tracking progres dengan checkbox [ ]</p>
              <p>• Otomasi Semantic Git Commit</p>
              <p>• Kamu bertindak sebagai penentu arah (PM)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* One-Liner Laptop Setup Section */}
      <section className="space-y-6 rounded-2xl border border-violet-500/20 bg-gradient-to-b from-violet-500/5 to-transparent p-6 sm:p-10" id="quickstart">
        <div className="max-w-3xl space-y-3">
          <Badge variant="purple">Otomatisasi Setup di Laptop</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Tinggal Panggil Satu Perintah, Langsung Siap Vibe Coding
          </h2>
          <p className="text-sm text-muted-foreground">
            Kapan pun kamu ingin membuat proyek baru dari nol, jalankan perintah ini di Command Prompt / PowerShell laptop kamu:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Opsi 1: Menggunakan Git Clone (Paling Cepat)
            </span>
            <div className="rounded-lg bg-card p-4 border border-border font-mono text-xs text-foreground space-y-2 shadow-xs">
              <p className="text-muted-foreground"># 1. Clone repositori ini ke folder proyek baru</p>
              <p className="text-violet-600 dark:text-violet-400 font-bold select-all">
                git clone https://github.com/amascar23/next-vibe-starter.git nama-proyek-kamu
              </p>
              <p className="text-muted-foreground pt-1"># 2. Masuk dan jalankan setup otomatis</p>
              <p className="text-violet-600 dark:text-violet-400 font-bold select-all">
                cd nama-proyek-kamu ; .\setup.bat
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Skrip <code>setup.bat</code> (atau <code>setup.ps1</code>) akan otomatis menginstall dependensi, menyiapkan file env, dan membuka editor favoritmu.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Opsi 2: Menggunakan Degit (Tanpa History Git Lama)
            </span>
            <div className="rounded-lg bg-card p-4 border border-border font-mono text-xs text-foreground space-y-2 shadow-xs">
              <p className="text-muted-foreground"># Download starter bersih sebagai repo baru</p>
              <p className="text-violet-600 dark:text-violet-400 font-bold select-all">
                npx degit amascar23/next-vibe-starter nama-proyek-kamu
              </p>
              <p className="text-muted-foreground pt-1"># Masuk dan setup</p>
              <p className="text-violet-600 dark:text-violet-400 font-bold select-all">
                cd nama-proyek-kamu ; npm run setup
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Degit langsung mengunduh template bersih tanpa riwayat commit lama, siap untuk langsung di-commit ke repo barumu.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Structure Guide */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Badge variant="purple">Struktur File Proyek</Badge>
          <h2 className="text-2xl font-bold tracking-tight">
            Folder Terstruktur untuk Progressive Disclosure
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Semua file pengatur AI diletakkan di root agar Cursor, Windsurf, Cline, dan Antigravity langsung membaca konteks secara otomatis.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 font-mono text-xs space-y-1.5 overflow-x-auto shadow-xs">
          <p className="text-violet-600 font-bold">next-vibe-starter/</p>
          <p className="text-muted-foreground pl-4">├── <strong className="text-foreground">PRD.md</strong> <span className="text-emerald-600">(Tahap 1: Dokumen PRD hasil wawancara AI)</span></p>
          <p className="text-muted-foreground pl-4">├── <strong className="text-foreground">AGENTS.md</strong> <span className="text-indigo-600">(Tahap 2: Daftar task terstruktur yang dieksekusi bertahap)</span></p>
          <p className="text-muted-foreground pl-4">├── <strong className="text-foreground">PROMPTS.md</strong> <span className="text-amber-600">(Cheat sheet prompt siap copy-paste untuk Kak Han)</span></p>
          <p className="text-muted-foreground pl-4">├── <strong className="text-foreground">.cursorrules</strong> <span className="text-muted-foreground">(Master rules untuk Cursor IDE)</span></p>
          <p className="text-muted-foreground pl-4">├── <strong className="text-foreground">.cursor/rules/</strong> <span className="text-muted-foreground">(Modular rules: Anti-Slop, Next.js 15, Semantic Git, PRD Protocol)</span></p>
          <p className="text-muted-foreground pl-4">├── <strong className="text-foreground">.windsurfrules</strong> <span className="text-muted-foreground">(Rules untuk Windsurf Cascade)</span></p>
          <p className="text-muted-foreground pl-4">├── <strong className="text-foreground">CLAUDE.md</strong> <span className="text-muted-foreground">(Instruksi untuk Claude Code &amp; Cline)</span></p>
          <p className="text-muted-foreground pl-4">├── <strong className="text-foreground">setup.bat / setup.ps1</strong> <span className="text-muted-foreground">(Skrip otomasi setup 1-klik untuk Windows)</span></p>
          <p className="text-muted-foreground pl-4">└── <strong className="text-foreground">src/</strong></p>
          <p className="text-muted-foreground pl-8">├── <strong className="text-foreground">app/</strong> (Next.js 15 App Router: layout, page, globals.css)</p>
          <p className="text-muted-foreground pl-8">├── <strong className="text-foreground">components/ui/</strong> (Komponen UI shadcn: button, card, badge)</p>
          <p className="text-muted-foreground pl-8">└── <strong className="text-foreground">lib/</strong> (Utility functions seperti cn)</p>
        </div>
      </section>
    </div>
  );
}
