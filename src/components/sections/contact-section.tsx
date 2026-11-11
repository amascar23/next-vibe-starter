"use client";

import { useState } from "react";
import {
  MessageCircle,
  Mail,
  Copy,
  Check,
  Linkedin,
  Instagram,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { profileData } from "@/data/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const waMessage = encodeURIComponent(
    `Halo Bu Annisa, saya tertarik untuk berdiskusi dan berkolaborasi mengenai inovasi pendidikan / riset.`
  );
  const waUrl = `https://wa.me/${profileData.whatsappNumber}?text=${waMessage}`;

  const linkedinSocial = profileData.socials.find((s) => s.platform === "linkedin");
  const instagramSocial = profileData.socials.find((s) => s.platform === "instagram");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback jika browser membatasi clipboard API
      const textarea = document.createElement("textarea");
      textarea.value = profileData.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="kontak" className="relative py-16 md:py-24 bg-sky-50/40 dark:bg-sky-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Kontainer Utama Kontak Beraksen Pastel */}
        <div className="mx-auto max-w-4xl rounded-3xl border border-sky-100/90 bg-card/95 p-8 sm:p-12 md:p-16 text-center shadow-lg shadow-sky-500/5 backdrop-blur dark:border-sky-900/60 dark:bg-card/80">
          
          <Badge variant="sky" className="px-3.5 py-1 text-xs font-semibold mb-4">
            Komunikasi &amp; Kolaborasi
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Mari Terhubung &amp; Ciptakan Dampak Bersama
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-muted-foreground">
            Terbuka untuk kolaborasi penulisan publikasi ilmiah, narasumber lokakarya media ajar interaktif,
            perancangan modul Kurikulum Merdeka, maupun diskusi pedagogi.
          </p>

          {/* Tombol Aksi Utama: WhatsApp & Salin Email 1-Klik */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Tombol WhatsApp */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "gradient", size: "lg" }),
                "gap-2.5 rounded-2xl shadow-md shadow-sky-500/20 active:scale-95"
              )}
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat via WhatsApp</span>
            </a>

            {/* Tombol Salin Email dengan Umpan Balik */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2.5 rounded-2xl border-sky-200/80 bg-background/80 hover:border-sky-400 hover:bg-sky-50/50 dark:border-sky-800 dark:hover:bg-sky-950/40 active:scale-95"
              )}
            >
              {copied ? (
                <>
                  <Check className="h-5 w-5 text-emerald-500 animate-scale-in" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    Email Tersalin!
                  </span>
                </>
              ) : (
                <>
                  <Copy className="h-5 w-5 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span className="truncate max-w-[210px] sm:max-w-none">
                    Salin Email ({profileData.email})
                  </span>
                </>
              )}
            </button>
          </div>

          {/* Saluran Media Sosial Tambahan */}
          <div className="mt-10 pt-8 border-t border-sky-100/70 dark:border-sky-950/60">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-4">
              Atau ikuti jejaring profesional saya di:
            </span>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {linkedinSocial && (
                <a
                  href={linkedinSocial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-sky-200/60 bg-sky-50/50 px-4 py-2 text-xs font-semibold text-sky-800 transition-all hover:border-sky-400 hover:bg-sky-100/70 hover:shadow-xs dark:border-sky-900 dark:bg-sky-950/40 dark:text-sky-300"
                >
                  <Linkedin className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                  <span>{linkedinSocial.label}</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              )}

              {instagramSocial && (
                <a
                  href={instagramSocial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-violet-200/60 bg-violet-50/50 px-4 py-2 text-xs font-semibold text-violet-800 transition-all hover:border-violet-400 hover:bg-violet-100/70 hover:shadow-xs dark:border-violet-900 dark:bg-violet-950/40 dark:text-violet-300"
                >
                  <Instagram className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                  <span>{instagramSocial.label}</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
