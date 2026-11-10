import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Next Vibe Starter — Anti-Slop Progressive Boilerplate",
  description:
    "Kerangka Next.js 15, Tailwind CSS, shadcn/ui dan Anti-Slop AI Ruleset untuk Vibe Coding terstruktur dari PRD hingga web utuh.",
  keywords: [
    "Next.js 15",
    "Tailwind CSS",
    "Vibe Coding",
    "Cursor Rules",
    "Anti Slop",
    "PRD",
    "Product Manager",
  ],
  authors: [{ name: "ama", url: "https://github.com/amascar23" }],
};

export const viewport: Viewport = {
  themeColor: "#7c3aed",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-background font-sans text-foreground antialiased selection:bg-violet-500/20 selection:text-violet-700">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
