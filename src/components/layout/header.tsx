import Link from "next/link";
import { Sparkles, Terminal, Github, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight hover:opacity-90 transition-opacity">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-sm">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-extrabold">
            Next Vibe Starter
          </span>
          <Badge variant="purple" className="ml-1 text-[10px] hidden sm:inline-flex">
            Anti-Slop AI
          </Badge>
        </Link>

        <nav className="flex items-center gap-4 text-sm font-medium">
          <a
            href="#workflow"
            className="text-muted-foreground hover:text-foreground transition-colors hidden md:inline-block"
          >
            Alur Vibe
          </a>
          <a
            href="#rulesets"
            className="text-muted-foreground hover:text-foreground transition-colors hidden md:inline-block"
          >
            Ruleset AI
          </a>
          <a
            href="#prompts"
            className="text-muted-foreground hover:text-foreground transition-colors hidden sm:inline-block"
          >
            Cheat Sheet
          </a>
          <a
            href="https://github.com/amascar23/next-vibe-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs sm:text-sm px-3 py-1.5 rounded-md border border-border bg-card hover:bg-accent transition-colors"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
