import Link from "next/link";
import {
  GraduationCap,
  Heart,
  Mail,
  Linkedin,
  Instagram,
  Github,
  MessageCircle,
  ArrowUp,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/portfolio";
import { SocialLink } from "@/types";

function getSocialIcon(platform: SocialLink["platform"]) {
  switch (platform) {
    case "whatsapp":
      return <MessageCircle className="h-4 w-4" />;
    case "email":
      return <Mail className="h-4 w-4" />;
    case "linkedin":
      return <Linkedin className="h-4 w-4" />;
    case "instagram":
      return <Instagram className="h-4 w-4" />;
    case "github":
      return <Github className="h-4 w-4" />;
    default:
      return <Mail className="h-4 w-4" />;
  }
}

/**
 * Footer Edukasi Ramah dengan Tautan Media Sosial & Navigasi Cepat
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-card/60 backdrop-blur transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identitas Brand di Footer */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <Link href="/#beranda" className="flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-xs group-hover:scale-105 transition-transform">
                <GraduationCap className="h-4 w-4" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-foreground">
                {profileData.name}
              </span>
            </Link>
            <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
              {profileData.tagline}
            </p>
          </div>

          {/* Ikon Jejaring Sosial dari profileData */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <span className="text-xs font-semibold text-muted-foreground">
              Terhubung &amp; Berkolaborasi
            </span>
            <div className="flex items-center gap-2">
              {profileData.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-200/50 dark:border-sky-800/60 bg-card hover:bg-sky-50 dark:hover:bg-sky-950/40 text-muted-foreground hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-200 hover:scale-105"
                  aria-label={social.label}
                  title={social.label}
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Garis Pemisah & Baris Hak Cipta */}
        <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>Copyright © {currentYear} Annisa • Pendidik Bangsa</span>
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/#beranda"
              className="inline-flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
