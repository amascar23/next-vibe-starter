import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://annisa-pendidik.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Annisa, S.Pd. — Pendidik & Inovator Pembelajaran",
    template: "%s | Annisa",
  },
  description:
    "Portofolio pendidik, akademisi, dan inovator pembelajaran Annisa, S.Pd. Menampilkan modul ajar Kurikulum Merdeka, publikasi jurnal ilmiah terakreditasi SINTA, dan media edukasi interaktif.",
  keywords: [
    "Annisa",
    "Annisa Pendidik",
    "Guru Inovatif",
    "Pendidik Indonesia",
    "Kurikulum Merdeka",
    "Jurnal SINTA",
    "Publikasi Ilmiah Pendidikan",
    "Problem-Based Learning",
    "Media Pembelajaran Interaktif",
    "EdTech Guru",
    "Modul Ajar SMP",
  ],
  authors: [{ name: "Annisa, S.Pd.", url: siteUrl }],
  creator: "Annisa, S.Pd.",
  publisher: "Annisa, S.Pd.",
  openGraph: {
    title: "Annisa, S.Pd. — Pendidik & Inovator Pembelajaran",
    description:
      "Portofolio pendidik, akademisi, dan inovator pembelajaran Annisa, S.Pd. Menghubungkan riset tindakan kelas dengan inovasi ruang belajar nyata.",
    url: siteUrl,
    siteName: "Portofolio Pendidik Annisa",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Annisa, S.Pd. — Pendidik & Inovator Pembelajaran",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Annisa, S.Pd. — Pendidik & Inovator Pembelajaran",
    description:
      "Portofolio pendidik, akademisi, dan inovator pembelajaran Annisa, S.Pd. Menampilkan publikasi jurnal SINTA dan karya ajar kontekstual.",
    creator: "@annisa_pendidik",
    images: ["/images/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0284c7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} font-sans min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-sky-500/20 selection:text-sky-800 dark:selection:text-sky-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
