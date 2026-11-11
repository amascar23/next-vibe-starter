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

export const metadata: Metadata = {
  title: "Portofolio Annisa — Pendidik, Akademisi & Inovator Pembelajaran",
  description:
    "Web portofolio personal edukatif dan dokumentasi publikasi jurnal ilmiah serta karya inovasi pembelajaran Annisa.",
  keywords: [
    "Annisa",
    "Pendidik",
    "Guru",
    "Jurnal Ilmiah",
    "Inovasi Pembelajaran",
    "Portofolio Guru",
    "EdTech",
  ],
  authors: [{ name: "Annisa", url: "mailto:anisahuksya@gmail.com" }],
};

export const viewport: Viewport = {
  themeColor: "#38bdf8",
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
