"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, GraduationCap, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { NAV_ITEMS } from "./nav-links";
import { profileData } from "@/data/portfolio";

/**
 * Drawer Navigasi Mobile Responsif (Tutup otomatis setelah klik tautan)
 */
export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden h-9 w-9 rounded-full border-sky-200/60 dark:border-sky-800/60 bg-card/70 backdrop-blur"
          aria-label="Buka Menu Navigasi"
        >
          <Menu className="h-5 w-5 text-foreground" />
          <span className="sr-only">Buka menu</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[90vw] max-w-sm rounded-2xl p-6 border-sky-200/80 dark:border-sky-800/80 bg-background/95 backdrop-blur-xl shadow-xl">
        <DialogHeader className="text-left pb-4 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-sm">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <DialogTitle className="text-base font-extrabold text-foreground">
                  {profileData.name}
                </DialogTitle>
                <p className="text-[11px] text-muted-foreground">
                  Pendidik &amp; Inovator Pembelajaran
                </p>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Daftar Menu Navigasi */}
        <nav className="flex flex-col gap-1 py-4">
          {NAV_ITEMS.map((item) => {
            const targetHref = isHomePage ? item.href : `/${item.href}`;
            return (
              <Link
                key={item.id}
                href={targetHref}
                onClick={handleLinkClick}
                className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-xl text-foreground hover:bg-sky-50 dark:hover:bg-sky-950/40 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <span>{item.label}</span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-60" />
              </Link>
            );
          })}
        </nav>

        {/* Footer Drawer: Status Kolaborasi & Tombol Aksi */}
        <div className="pt-4 border-t border-border space-y-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] text-muted-foreground font-medium">
              Terbuka untuk kolaborasi riset &amp; mengajar
            </span>
          </div>

          <a
            href={`https://wa.me/${profileData.whatsappNumber}?text=Halo%20Ibu%20Annisa,%20saya%20tertarik%20berkolaborasi`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="block"
          >
            <Button variant="gradient" className="w-full gap-2 text-xs font-semibold h-9 rounded-xl">
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Hubungi via WhatsApp</span>
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
