"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Download, Sparkles } from "lucide-react";
import { profileData } from "@/data/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  // Mencoba memuat foto profile.jpg terlebih dahulu, fallback ke profile.svg jika belum ada
  const [imgSrc, setImgSrc] = useState("/images/profile.jpg");

  const waMessage = encodeURIComponent(
    `Halo Bu Annisa, saya tertarik untuk berdiskusi dan berkolaborasi mengenai inovasi pendidikan / riset.`
  );
  const waUrl = `https://wa.me/${profileData.whatsappNumber}?text=${waMessage}`;

  return (
    <section
      id="beranda"
      className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24"
    >
      {/* Efek Pendar Latar Belakang Pastel Sky & Lavender */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-200/40 via-sky-100/20 to-violet-200/30 blur-3xl dark:from-sky-950/30 dark:via-sky-900/10 dark:to-violet-950/20"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:gap-16">
          
          {/* Kolom Teks & CTA */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            
            {/* Status Ketersediaan Kolaborasi */}
            {profileData.isOpenForCollaboration && (
              <div className="animate-fade-in-up mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/90 px-3.5 py-1.5 text-xs font-semibold text-sky-800 shadow-sm backdrop-blur dark:border-sky-800/80 dark:bg-sky-950/60 dark:text-sky-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Terbuka untuk Kolaborasi Pengajaran & Riset</span>
              </div>
            )}

            {/* Headline Nama & Peran */}
            <div className="animate-fade-in-up animation-delay-150 space-y-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Portofolio Pendidik & Akademisi
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Halo, saya{" "}
                <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent dark:from-sky-400 dark:to-blue-400">
                  {profileData.name}
                </span>
              </h1>
              <p className="text-lg font-bold text-foreground/80 sm:text-xl">
                {profileData.title}
              </p>
            </div>

            {/* Moto Pendidikan */}
            <p className="animate-fade-in-up animation-delay-300 mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              &ldquo;{profileData.tagline}&rdquo;
            </p>

            {/* Tombol CTA */}
            <div className="animate-fade-in-up animation-delay-450 mt-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "gradient", size: "lg" }),
                  "gap-2 rounded-2xl shadow-md shadow-sky-500/20 active:scale-95"
                )}
              >
                <MessageCircle className="h-5 w-5" />
                <span>Hubungi Saya</span>
              </a>

              <a
                href={profileData.resumePdfUrl}
                download="CV-Annisa-Pendidik.pdf"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "gap-2 rounded-2xl border-sky-200/80 bg-background/80 hover:border-sky-400 hover:bg-sky-50/50 dark:border-sky-800 dark:hover:bg-sky-950/40 active:scale-95"
                )}
              >
                <Download className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                <span>Unduh Resume / CV Guru</span>
              </a>
            </div>
          </div>

          {/* Kolom Foto Profil Berbingkai Lembut Pastel Sky Blue */}
          <div className="animate-fade-in-up flex shrink-0 justify-center">
            <div className="relative">
              
              {/* Lingkaran Pendar Aksen Belakang */}
              <div
                className="absolute -inset-3 rounded-full bg-gradient-to-tr from-sky-400/30 via-sky-200/40 to-violet-300/30 blur-xl dark:from-sky-600/20 dark:to-violet-700/20"
                aria-hidden="true"
              />

              {/* Bingkai Luar Halus */}
              <div className="relative rounded-full p-2.5 bg-gradient-to-b from-sky-200 via-sky-100 to-white shadow-xl shadow-sky-500/10 ring-4 ring-sky-100/80 dark:from-sky-800 dark:via-sky-900 dark:to-card dark:ring-sky-950">
                <div className="relative h-60 w-60 overflow-hidden rounded-full bg-sky-50 sm:h-72 sm:w-72 md:h-80 md:w-80 dark:bg-sky-950">
                  <Image
                    src={imgSrc}
                    alt={`Foto Profil ${profileData.name}`}
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, 320px"
                    priority
                    className="object-cover"
                    onError={() => setImgSrc("/images/profile.svg")}
                  />
                </div>
              </div>

              {/* Lencana Mengambang Inspiratif */}
              <div className="absolute -bottom-2 -left-2 sm:bottom-2 sm:left-0 flex items-center gap-1.5 rounded-2xl border border-sky-100/90 bg-card/95 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur dark:border-sky-900/80">
                <Sparkles className="h-4 w-4 text-sky-500" />
                <span>Student-Centered</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

