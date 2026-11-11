"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "beranda", label: "Beranda", href: "#beranda" },
  { id: "tentang", label: "Tentang", href: "#tentang" },
  { id: "karya", label: "Karya Ajar", href: "#karya" },
  { id: "jurnal", label: "Jurnal", href: "#jurnal" },
  { id: "pengalaman", label: "Pengalaman", href: "#pengalaman" },
  { id: "kontak", label: "Kontak", href: "#kontak" },
];

/**
 * Komponen Navigasi Desktop dengan Scroll Spy (IntersectionObserver)
 * Otomatis mendeteksi seksi aktif dan menyesuaikan tautan jika berada di halaman detail.
 */
export function NavLinks({ className }: { className?: string }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = React.useState<string>("beranda");

  // Scroll Spy menggunakan IntersectionObserver di halaman beranda
  React.useEffect(() => {
    if (!isHomePage) return;

    const sectionElements = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Ambil elemen yang paling banyak terlihat di viewport
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Pilih seksi dengan intersection ratio tertinggi
          const highest = visibleEntries.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          );
          setActiveSection(highest.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.2, 0.5, 0.8],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, [isHomePage]);

  return (
    <nav className={cn("hidden md:flex items-center gap-1 lg:gap-2", className)}>
      {NAV_ITEMS.map((item) => {
        // Jika di halaman detail, arahkan ke /#id
        const targetHref = isHomePage ? item.href : `/${item.href}`;
        const isActive = isHomePage && activeSection === item.id;

        return (
          <Link
            key={item.id}
            href={targetHref}
            className={cn(
              "relative px-3 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200",
              isActive
                ? "text-sky-700 dark:text-sky-300 font-semibold bg-sky-100/70 dark:bg-sky-950/50 shadow-xs"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
            )}
          >
            {item.label}
            {isActive && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-sky-500 rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

