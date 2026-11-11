import Link from "next/link";
import { GraduationCap, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLinks } from "./nav-links";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { profileData } from "@/data/portfolio";

/**
 * Header Navigasi Utama Sticky Glassmorphism
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="/#beranda"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 text-white shadow-xs group-hover:scale-105 transition-transform">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-lg font-black tracking-tight text-foreground">
                Annisa
              </span>
              <Badge
                variant="sky"
                className="text-[10px] py-0 px-1.5 h-4 font-semibold hidden sm:inline-flex"
              >
                Pendidik
              </Badge>
            </div>
            <span className="text-[10px] text-muted-foreground hidden sm:block font-medium -mt-0.5">
              Inovator Pembelajaran
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <NavLinks />

        {/* Action Controls: Theme Toggle, CTA & Mobile Hamburger */}
        <div className="flex items-center gap-2.5">
          {/* Tombol Unduh CV Desktop */}
          <a
            href={profileData.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex"
          >
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 text-xs font-semibold rounded-xl h-9 border-sky-300/40 dark:border-sky-800/60 hover:bg-sky-50 dark:hover:bg-sky-950/40"
            >
              <Download className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
              <span>Unduh CV</span>
            </Button>
          </a>

          {/* Theme Switcher Toggle */}
          <ThemeToggle />

          {/* Mobile Drawer Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
