# Product Requirements Document (PRD) — Portofolio Pendidik & Akademisi Annisa

> **Status**: Approved (Disetujui oleh Kak Han)  
> **Pemilik Proyek**: Annisa (Kak Han)  
> **Profesi Utama**: Pendidik / Guru & Peneliti Pendidikan  
> **Arsitek & PM**: Senior Product Manager & AI Lead Architect  
> **Last Updated**: 2026-11-11  

---

## 1. Ringkasan Eksekutif & Visi Produk
- **Deskripsi Singkat**:  
  Web portofolio personal edukatif dan modern untuk **Annisa**, seorang guru/pendidik dan akademisi. Web ini dirancang untuk mendokumentasikan rekam jejak pengajaran, karya/media inovasi pembelajaran, publikasi jurnal ilmiah, serta pemikiran seputar dunia pendidikan secara profesional, hangat, dan interaktif.
- **Masalah Utama yang Diselesaikan**:  
  Rekam jejak seorang pendidik (modul ajar, inovasi kelas, karya pengabdian, dan jurnal ilmiah) sering kali hanya tersimpan dalam dokumen terpisah atau arsip kampus/sekolah. Web ini menjadi panggung digital terpadu (*educational hub*) yang membuktikan kredibilitas pedagogik Annisa kepada rekan guru, sesama mahasiswa, sekolah, dan masyarakat luas.
- **Tolak Ukur Keberhasilan (Metrics/KPI)**:
  - Google Lighthouse Score > 90 (Performance, Accessibility, SEO).
  - Tampilan visual bertema **Pastel Creative (Dominan Biru Langit / Sky Blue)** yang ramah dan menenangkan.
  - Akses publikasi jurnal & modul ajar 1-klik (Unduh PDF & Baca Abstrak).
  - Alur kontak cepat via WhatsApp & Email tanpa hambatan.
  - Siap di-deploy dengan mulus ke platform cloud (Vercel).

---

## 2. Target Pengguna & Persona

| Persona | Deskripsi | Kebutuhan Utama | Rasa Frustrasi (Pain Points) |
| :--- | :--- | :--- | :--- |
| **Sesama Rekan Guru & Kepala Sekolah** | Pendidik di sekolah/institusi, calon mitra kolaborasi mengajar | Melihat modul ajar, inovasi metode pembelajaran di kelas, riwayat mengajar, dan pendekatan pedagogik | Portofolio yang terlalu kaku, tidak ada dokumentasi konkret hasil kegiatan belajar mengajar |
| **Sesama Mahasiswa & Rekan Akademisi** | Mahasiswa/peneliti bidang pendidikan | Membaca publikasi ilmiah/jurnal, referensi penelitian, kolaborasi riset pendidikan | Tautan jurnal sulit diakses, tidak ada rangkuman abstrak yang mudah dibaca |
| **Orang Sekitar & Komunitas Pendidikan** | Orang tua murid, komunitas belajar lokal, masyarakat umum | Mengenal sosok Annisa, filosofi mendidik, kegiatan sosial/pengabdian, dan kemudahan menghubungi | Web yang terlalu teknis dan rumit dijelajahi di HP (mobile) |

---

## 3. Cakupan Fitur (Scope & MoSCoW Prioritization)

### 🟢 Must-Have (Mutlak Ada di MVP / Rilis 1)
- [x] **Hero Section (Identity & Teaching Passion)**:
  - Foto profil ramah & profesional dengan bingkai lembut khas tema pastel biru langit.
  - Headline nama ("Annisa"), identitas peran (*"Pendidik & Inovator Pembelajaran"*), dan moto pengajaran.
  - Badge status: *"Terbuka untuk Kolaborasi Pengajaran & Riset"*.
  - Tombol CTA: *"Hubungi Saya"* (Direct WhatsApp/Email) & *"Unduh Resume / CV Guru"* (File PDF).
- [x] **About Section (Filosofi & Nilai Pendidik)**:
  - Narasi biografi personal: visi tentang pendidikan, pendekatan mengajar yang berpusat pada siswa (*student-centered*).
  - Kartu statistik mini: *Tahun Pengalaman Mengajar*, *Jurnal Dipublikasikan*, *Siswa Terbina*, *Media Ajar Dibuat*.
- [x] **Jurnal & Publikasi Ilmiah (Academic Publications Section)**:
  - Daftar jurnal ilmiah dan artikel pendidikan yang pernah diterbitkan.
  - Setiap kartu jurnal memuat: Judul paper, nama jurnal/prosiding, tahun rilis, badge indeksasi (misal: SINTA / ISSN / Open Access), abstrak ringkas, tautan DOI/Download PDF, dan tombol baca telaah lengkap (Halaman Detail).
- [x] **Karya & Proyek Inovasi Pembelajaran (Teaching Showcase)**:
  - Galeri modul ajar kreatif, media ajar interaktif, lembar kerja siswa, atau proyek pengabdian masyarakat.
  - Dilengkapi tombol menuju **Halaman Detail Proyek** untuk dokumentasi menyeluruh.
- [x] **Kompetensi & Keahlian (Pedagogik & EdTech Skills)**:
  - Pengelompokan: *Kompetensi Pedagogik* (Kurikulum, Manajemen Kelas), *Media & EdTech* (Canva Edu, Quizizz, Google Workspace, Video Pembelajaran), serta *Soft Skills* (Komunikasi Empatik, Public Speaking).
- [x] **Riwayat Pengalaman & Pendidikan (Timeline)**:
  - Riwayat pengalaman mengajar (sekolah, bimbel, program kampus mengajar/magang) & riwayat pendidikan tinggi.
- [x] **Testimoni & Rekomendasi**:
  - Kutipan apresiasi dari rekan guru, dosen pembimbing, sesama mahasiswa, atau orang tua siswa.
- [x] **Halaman Detail Khusus (Multi-page Detail Support)**:
  - Halaman detail untuk membaca telaah lengkap proyek/karya (`/karya/[slug]`).
  - Halaman detail untuk membaca abstrak lengkap & pembahasan jurnal (`/jurnal/[slug]`).
- [x] **Kontak & Jejaring Sosial**:
  - Tombol cepat chat WhatsApp langsung (dengan salam pembuka otomatis), salin email 1-klik, dan link LinkedIn/Instagram.
- [x] **Desain & Tema Pastel Creative (Sky Blue)**:
  - Aksen warna biru langit pastel lembut, kartu dengan sudut melengkung halus (*rounded-2xl*), dan toggle Dark/Light mode yang elegan.

### 🟡 Should-Have (Rilis Segera Setelah MVP Berjalan)
- [ ] Filter kategori jurnal (misal: *Jurnal Terakreditasi, Artikel Populer, Modul Guru*).
- [ ] Galeri foto kegiatan kelas (*photo slider/lightbox*).

### ⚪ Could-Have (Fase Lanjutan)
- [ ] Sudut Opini Guru / Blog Pendidikan singkat via format Markdown.
- [ ] Buku tamu interaktif (*Guestbook*).

### 🔴 Won't-Have (Di Luar Cakupan Versi 1)
- Sistem login berbayar atau paywall jurnal (semua publikasi dibuat *open-access* untuk publik).
- Database server backend (semua data proyek, jurnal, dan biografi dikelola di `src/data/portfolio.ts` yang terstruktur, *type-safe*, dan instan diubah).

---

## 4. Struktur Halaman & Alur Pengguna (Site Map)

Web mengombinasikan **Single-page Scroll** pada landing page utama dengan **Halaman Detail Terpisah** untuk eksplorasi mendalam:

```
[Pengunjung Masuk]
       │
       ▼
[Navbar: Annisa | Beranda | Tentang | Karya Ajar | Jurnal | Pengalaman | Kontak | Theme Toggle]
       │
       ├─► Hero Section (Perkenalan, Status Terbuka, Download CV, CTA WhatsApp)
       ├─► Tentang Saya (Filosofi Pendidikan, Pendekatan Mengajar, Metrik Ringkas)
       ├─► Karya & Media Ajar ──────► [Klik Kartu] ──► Halaman Detail Karya (`/karya/[slug]`)
       ├─► Jurnal & Publikasi ──────► [Klik Jurnal] ──► Halaman Detail Jurnal (`/jurnal/[slug]`)
       ├─► Kompetensi & EdTech (Bento Grid keahlian pedagogik & digital)
       ├─► Riwayat Mengajar & Edukasi (Timeline interaktif)
       ├─► Testimoni Rekan & Komunitas
       ├─► Kontak Langsung (WhatsApp, Email, Sosmed)
       │
       ▼
[Footer: Copyright © Annisa • Pendidik Bangsa • Tautan Media Sosial]
```

---

## 5. Arsitektur Teknis, Tech Stack & Deployment

- **Framework**: Next.js 15 (App Router, React Server Components)
- **Styling**: Tailwind CSS + shadcn/ui
- **Palet Warna**:
  - *Primary*: Sky Blue Pastel (`#38bdf8` / `sky-400`, `sky-500`)
  - *Background Soft*: Soft Powder Blue / Slate Tint (`sky-50/50` di light mode, `slate-950/sky-950` di dark mode)
  - *Accent*: Soft Lavender & Muted Slate untuk tipografi yang nyaman dibaca
- **Icons**: Lucide React (ikon buku, toga, pena, riset, kontak, dll.)
- **Bahasa**: TypeScript (Strict, type-safe)
- **Data Management**: File statis `src/data/portfolio.ts` yang memuat seluruh dummy data (profil, jurnal, proyek, pengalaman) sehingga siap saji dan mudah diganti dengan data asli kapan saja.
- **Strategi Deployment**:
  - Siap dideploy ke **Vercel** via GitHub dengan zero configuration build (`npm run build`).

---

## 6. Skema Data (TypeScript Entities)

Struktur data terpusat di `src/data/portfolio.ts`:

```typescript
// Entitas Profil Guru
export interface TeacherProfile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  philosophy: string;
  avatarUrl: string;
  resumePdfUrl: string;
  isOpenForCollaboration: boolean;
  email: string;
  whatsappNumber: string;
  socials: { platform: string; url: string; label: string }[];
  metrics: { label: string; value: string }[];
}

// Entitas Jurnal & Publikasi Ilmiah
export interface JournalItem {
  id: string;
  slug: string;
  title: string;
  authors: string[];
  journalName: string;
  publisher: string;
  publicationYear: number;
  indexing: string; // misal: "SINTA 2", "Google Scholar", "ISSN"
  abstract: string;
  fullContent?: string;
  keywords: string[];
  pdfUrl?: string;
  externalUrl?: string;
}

// Entitas Karya & Inovasi Pembelajaran
export interface TeachingProject {
  id: string;
  slug: string;
  title: string;
  targetAudience: string; // misal: "Siswa SMP Kelas 8", "Mahasiswa Baru"
  subject: string;
  summary: string;
  description: string;
  thumbnail: string;
  toolsUsed: string[];
  resultsAndImpact?: string;
  demoUrl?: string;
  documentUrl?: string;
}

// Entitas Pengalaman Mengajar & Pendidikan
export interface TimelineItem {
  id: string;
  roleOrDegree: string;
  institution: string;
  period: string;
  description: string[];
  type: "teaching" | "education" | "organization";
}
```

---

## 7. Persyaratan Non-Fungsional (NFR)

1. **Responsivitas & Tipografi**:
   - Skala teks yang nyaman dibaca untuk konten ilmiah dan narasi mengajar.
   - 100% responsif di smartphone, tablet, dan laptop tanpa overflow.
2. **Kecepatan Akses**:
   - Pemuatan instan karena menggunakan React Server Components dan Static Generation untuk halaman beranda maupun halaman detail jurnal.
3. **Kesiapan Dummy Data**:
   - Dummy data disiapkan realistis (contoh jurnal pendidikan, metode pembelajaran interaktif, dsb.) sehingga tampilan web langsung hidup sejak pertama kali di-run.
4. **Deploy Ready**:
   - Lulus audit build (`npm run build` / `next build`) tanpa error tipe data atau linting.

---

## 8. Check-off Persetujuan

- [x] Sesi wawancara selesai & kebutuhan Kak Han diakomodasi
- [x] **PRD telah ditinjau dan disetujui oleh Kak Han**
- [x] **Siap untuk dipecah ke dalam daftar tugas atomik pada `AGENTS.md`**
