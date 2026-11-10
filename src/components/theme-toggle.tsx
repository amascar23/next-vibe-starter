"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-full"
        aria-label="Ganti tema"
      >
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 rounded-full transition-colors"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Ganti tema"
      title={isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-sky-400 hover:text-sky-300 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-slate-700 hover:text-sky-600 transition-transform hover:-rotate-12" />
      )}
      <span className="sr-only">Ganti tema</span>
    </Button>
  );
}

