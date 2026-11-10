import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
      <body className="min-h-screen flex flex-col bg-background font-sans text-foreground antialiased selection:bg-sky-500/20 selection:text-sky-700 dark:selection:text-sky-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
