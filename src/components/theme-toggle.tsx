"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

/**
 * Komponen pemilih tema Gelap / Terang yang elegan dengan ikon Sun & Moon Lucide
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Mencegah mismatch hidrasi
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className={`h-9 w-9 rounded-full border-border bg-card/60 backdrop-blur opacity-70 ${className ?? ""}`}
        aria-label="Ganti tema mode tampilan"
      >
        <Sun className="h-4 w-4 text-muted-foreground" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      className={`relative h-9 w-9 rounded-full border-sky-200/60 dark:border-sky-800/60 bg-card/70 hover:bg-sky-50 dark:hover:bg-sky-950/40 backdrop-blur shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 ${className ?? ""}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ganti ke mode terang (Light Mode)" : "Ganti ke mode gelap (Dark Mode)"}
      title={isDark ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
    >
      <Sun
        className={`h-4 w-4 text-amber-500 dark:text-sky-400 transition-all duration-300 ${
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 text-sky-400 transition-all duration-300 ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      />
      <span className="sr-only">
        {isDark ? "Mode Gelap aktif" : "Mode Terang aktif"}
      </span>
    </Button>
  );
}
