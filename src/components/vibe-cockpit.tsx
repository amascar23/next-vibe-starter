"use client";

import { useState } from "react";
import { Check, Copy, MessageSquareText, ListTodo, Hammer, GitCommit, Sparkles, ArrowRight, ShieldCheck, FileCode, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function VibeCockpit() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const prompts = [
    {
      title: "Tahap 1: Mulai Interview PRD (Wajib)",
      description: "AI dilarang langsung ngoding! AI akan mewawancarai kamu 5-8 pertanyaan krusial terlebih dahulu untuk merumuskan PRD.md.",
      badge: "Langkah 1",
      icon: MessageSquareText,
      color: "border-violet-500/30 bg-violet-500/5",
      prompt: `Mulai proyek baru. Saya ingin membuat: [Tulis ide kasar kamu di sini, misal: Web katalog properti mewah dengan kalkulator KPR dan simulasi WhatsApp].

PERINGATAN ATURAN:
1. Jangan tulis kode apa pun terlebih dahulu.
2. Bertindaklah sebagai Senior Product Manager & Software Architect.
3. Wawancarai saya secara detail (5-8 pertanyaan bertahap) mengenai target pengguna, fitur utama (MVP vs nice-to-have), user flow, integrasi backend/database, dan gaya desain.
4. Setelah saya menjawab, susun hasilnya ke dalam file PRD.md.`,
    },
    {
      title: "Tahap 2: Pecah Menjadi Task (AGENTS.md)",
      description: "Setelah PRD.md disetujui, minta AI membedah seluruh kebutuhan menjadi daftar tugas atomik yang terstruktur.",
      badge: "Langkah 2",
      icon: ListTodo,
      color: "border-indigo-500/30 bg-indigo-500/5",
      prompt: `Saya sudah menyetujui dokumen PRD.md.
Sekarang, tolong buatkan breakdown tugas sistematis ke dalam file AGENTS.md.

Ketentuan:
1. Bagi menjadi Task-1, Task-2, dst. dengan urutan dependensi logis (Setup Data/Types -> Komponen UI -> Integrasi Halaman -> Interaktivitas & Testing).
2. Setiap task harus memiliki Acceptance Criteria spesifik dan file-file yang akan disentuh.
3. Buat checkbox [ ] untuk memantau progres eksekusi.`,
    },
    {
      title: "Tahap 3: Eksekusi Bertahap (Per Task)",
      description: "Eksekusi satu task dalam satu waktu. AI wajib mematuhi standar Next.js 15 App Router dan Tailwind CSS bersih.",
      badge: "Langkah 3",
      icon: Hammer,
      color: "border-emerald-500/30 bg-emerald-500/5",
      prompt: `Silakan eksekusi [Task-1: Judul Task] yang ada di AGENTS.md.

ATURAN ANTI-SLOP:
1. Hanya gunakan standar Next.js 15 (App Router) dan TypeScript ketat.
2. Gunakan Tailwind CSS dan komponen shadcn/ui modular (jangan buat file raksasa di atas 250 baris).
3. Setelah selesai, tandai [x] di AGENTS.md dan jelaskan apa saja yang telah dibuat.`,
    },
    {
      title: "Tahap 4: Semantic Git Commit",
      description: "Otomasi dokumentasi commit yang rapi menggunakan standar konvensional setiap satu fitur selesai.",
      badge: "Langkah 4",
      icon: GitCommit,
      color: "border-amber-500/30 bg-amber-500/5",
      prompt: `Fitur pada Task ini sudah selesai dan diverifikasi. Tolong buatkan commit git yang semantik sesuai aturan di .cursor/rules/04-semantic-git.mdc (contoh: feat(catalog): implement property filter grid with responsive layout). Lakukan commit sekarang.`,
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <section className="space-y-8" id="workflow">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/80 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="purple">Kokpit Vibe Coding</Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> Anti-Slop Enforced
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Alur Kerja Vibe Coding 3-Tahap
          </h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
            Cukup salin prompt di bawah ini ke AI (Cursor, Windsurf, Cline, atau Antigravity) untuk memulai proses pembuatan aplikasi dari ide kasar hingga jadi.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleCopy(prompts[0].prompt, 99)}
            className="text-xs"
          >
            {copiedIndex === 99 ? (
              <>
                <Check className="mr-1.5 h-3.5 w-3.5 text-emerald-500" />
                Prompt Tersalin!
              </>
            ) : (
              <>
                <Copy className="mr-1.5 h-3.5 w-3.5" />
                Salin Prompt Interview
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {prompts.map((p, idx) => {
          const Icon = p.icon;
          const isCopied = copiedIndex === idx;

          return (
            <Card key={p.title} className={`relative flex flex-col justify-between border ${p.color} transition-all hover:shadow-md`}>
              <CardHeader className="space-y-2 pb-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-bold text-sm">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-background border border-border shadow-xs text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    {p.title}
                  </span>
                  <Badge variant="secondary" className="text-[11px]">
                    {p.badge}
                  </Badge>
                </div>
                <CardDescription className="text-xs">
                  {p.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 pt-2">
                <div className="relative rounded-lg bg-background/80 p-3 border border-border/60 font-mono text-[11px] leading-relaxed text-muted-foreground max-h-36 overflow-y-auto">
                  <pre className="whitespace-pre-wrap">{p.prompt}</pre>
                </div>

                <Button
                  variant={isCopied ? "secondary" : "default"}
                  size="sm"
                  className="w-full text-xs font-semibold"
                  onClick={() => handleCopy(p.prompt, idx)}
                >
                  {isCopied ? (
                    <>
                      <Check className="mr-1.5 h-3.5 w-3.5 text-emerald-500" />
                      Berhasil Disalin ke Clipboard!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-1.5 h-3.5 w-3.5" />
                      Salin Prompt Ini
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
