import { Heart, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 py-8 text-center text-sm text-muted-foreground bg-muted/20">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-medium">
          <Sparkles className="h-4 w-4 text-violet-500" />
          <span>Next Vibe Starter — Anti-Slop Progressive Boilerplate</span>
        </div>
        <p className="flex items-center gap-1 text-xs">
          Dibuat khusus untuk alur kerja Product Manager &amp; Vibe Coder handal
        </p>
      </div>
    </footer>
  );
}
