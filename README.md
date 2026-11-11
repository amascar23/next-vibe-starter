<div align="center">

# 🎓 Portofolio Pendidik & Akademisi — Annisa, S.Pd.

### *Web Portofolio Edukasi, Etalase Modul Pembelajaran Aktif & Publikasi Jurnal Ilmiah Terakreditasi*

Dibangun dengan **Next.js 15 (App Router)**, **TypeScript Strict**, **Tailwind CSS (Tema Pastel Creative Sky Blue)**, dan arsitektur modular bebas *AI-slop*.

[![Next.js 15](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Deploy on Vercel](https://img.shields.io/badge/Vercel-Zero%20Config-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

[Cara Menjalankan](#-cara-menjalankan-secara-lokal) • [Panduan Ganti Konten](#-panduan-manajemen--kustomisasi-konten-mandiri) • [Deploy ke Vercel](#-panduan-deploy-ke-vercel-zero-config) • [Fitur Unggulan](#-fitur-unggulan)

---

</div>

## 🌟 Tentang Proyek

Website portofolio ini dirancang khusus untuk merefleksikan identitas profesional **Annisa, S.Pd.** sebagai pendidik inovatif dan akademisi. Web ini menonjolkan pendekatan pembelajaran yang berpusat pada siswa (*student-centered learning*), diseminasi riset tindakan kelas pada jurnal nasional terakreditasi (SINTA & ISSN), serta etalase karya media ajar interaktif yang dapat diakses oleh sesama guru, dosen pembimbing, mahasiswa keguruan, dan masyarakat umum.

---

## 🚀 Cara Menjalankan Secara Lokal

### Prasyarat
- **Node.js**: Versi 18.x atau yang lebih baru (disarankan Node.js 20 LTS).
- **npm** atau **pnpm** terpasang di komputer.

### Langkah Menjalankan:
```bash
# 1. Masuk ke direktori proyek
cd profilAnnisa

# 2. Pasang semua dependensi
npm install

# 3. Jalankan server lokal pengembangan
npm run dev
```

Buka peramban di [http://localhost:3000](http://localhost:3000).  
Endpoint cek status sistem: [http://localhost:3000/api/health](http://localhost:3000/api/health) mengembalikan `{ "status": "ok" }`.

---

## 🛠️ Panduan Manajemen & Kustomisasi Konten Mandiri

Seluruh data portofolio tersimpan terpusat di satu file (**Single Source of Truth**), yaitu:  
📁 `src/data/portfolio.ts`

Annisa atau pengelola web dapat memperbarui seluruh teks dan aset kapan saja dengan sangat mudah:

### 1. Mengganti Foto Profil & Berkas CV Guru
- **Foto Profil**: Masukkan foto terbaru berformat JPG ke `public/images/profile.jpg`. Web akan otomatis menampilkan foto tersebut dengan bingkai pastel beraksen halus (jika belum ada, otomatis memakai avatar fallback).
- **Berkas Resume / CV**: Letakkan file CV terbaru dalam format PDF di `public/docs/cv-annisa.pdf`. Tombol unduh CV di hero section akan langsung mengunduh berkas tersebut.

### 2. Mengubah Kontak WhatsApp, Email & Media Sosial
Buka file `src/data/portfolio.ts` pada objek `profileData`:
```typescript
export const profileData: TeacherProfile = {
  name: "Annisa, S.Pd.",
  title: "Pendidik & Inovator Pembelajaran",
  email: "annisa.pendidik@gmail.com",
  whatsappNumber: "6281234567890", // Format 62xxx tanpa spasi atau simbol +
  isOpenForCollaboration: true,     // Ubah ke false jika sedang tidak menerima proyek baru
  socials: [
    { platform: "linkedin", url: "https://linkedin.com/in/username", label: "LinkedIn" },
    { platform: "instagram", url: "https://instagram.com/username", label: "Instagram" },
  ],
  // ...
};
```

### 3. Menambah atau Mengubah Jurnal Ilmiah
Buka file `src/data/portfolio.ts` pada bagian `journalsData`:
```typescript
{
  id: "jurnal-baru",
  slug: "judul-jurnal-ramah-seo",
  title: "Judul Lengkap Publikasi Jurnal Anda",
  authors: ["Annisa", "Nama Rekan Penulis, M.Pd."],
  journalName: "Nama Jurnal Penerbit",
  publisher: "LPPM Universitas",
  publicationYear: 2024,
  indexing: "SINTA 2", // 'SINTA 2', 'SINTA 3', 'ISSN', atau 'Open Access'
  keywords: ["Kurikulum", "PBL", "EdTech"],
  abstract: "Abstrak lengkap penelitian Anda...",
  fullContent: `
## Latar Belakang
Penjelasan latar belakang...

## Metode Penelitian
Penjelasan metodologi...

## Hasil dan Pembahasan
Temuan riset...

## Kesimpulan
Sintesis dan saran...
  `,
  pdfUrl: "/docs/nama-berkas-jurnal.pdf",
  externalUrl: "https://doi.org/10.xxxx/xxxx",
}
```
> Halaman detail `/jurnal/[slug]` akan otomatis di-generate secara statis (*Static Site Generation*) saat website di-build.

### 4. Menambah atau Mengubah Karya & Modul Ajar
Buka file `src/data/portfolio.ts` pada bagian `projectsData`:
```typescript
{
  id: "karya-baru",
  slug: "slug-karya-baru",
  title: "Judul Modul / Media Interaktif",
  targetAudience: "Peserta Didik SMP Kelas VII",
  subject: "Ilmu Pengetahuan Alam (IPA)",
  summary: "Ringkasan intisari modul...",
  description: "Penjelasan implementasi metode di kelas...",
  thumbnail: "/images/nama-thumbnail.svg", // atau .jpg/.png
  toolsUsed: ["Canva for Education", "Quizizz", "Google Docs"],
  resultsAndImpact: "Dampak nyata peningkatan nilai atau antusiasme belajar siswa...",
  demoUrl: "https://tautan-interaktif.com",
  documentUrl: "/docs/modul-lengkap.pdf",
}
```

---

## 🌐 Panduan Deploy ke Vercel (Zero Config)

Proyek ini telah dikonfigurasi 100% kompatibel dengan Vercel tanpa perlu pengaturan rumit (*Zero Configuration*):

1. **Buka Vercel**: Masuk ke [vercel.com](https://vercel.com) menggunakan akun GitHub Anda.
2. **Import Repository**:
   - Klik tombol **"Add New..."** lalu pilih **"Project"**.
   - Cari repositori GitHub proyek ini (`profilAnnisa` atau `next-vibe-starter`).
   - Klik tombol **"Import"**.
3. **Konfigurasi Project**:
   - **Framework Preset**: Otomatis terdeteksi sebagai `Next.js`.
   - **Root Directory**: `./` (biarkan default).
   - **Build Command**: `next build` (biarkan default).
   - **Output Directory**: `.next` (biarkan default).
   - **Environment Variables**: *(Opsional)* Jika ingin mendefinisikan domain kustom, tambahkan:
     - `NEXT_PUBLIC_SITE_URL` = `https://nama-domain-anda.vercel.app`
4. **Deploy**:
   - Klik tombol **"Deploy"**.
   - Tunggu sekitar 45–60 detik hingga proses build selesai.
   - Website resmi portofolio Annisa langsung live dengan URL publik berkecepatan tinggi!
5. **Pembaruan Otomatis (CI/CD)**:
   - Setiap kali Anda melakukan perubahan di file `src/data/portfolio.ts` lalu melakukan `git push` ke branch `main`, Vercel akan otomatis melakukan *re-build* dan memperbarui website secara otomatis.

---

## ✨ Fitur Unggulan

| Seksi / Fitur | Deskripsi |
| :--- | :--- |
| **Navbar Glassmorphism** | Header sticky dengan efek blur kaca, active scroll-spy, dan drawer responsif pada perangkat mobile. |
| **Hero Section** | Bingkai avatar pastel sky blue lembut, headline peran, status kolaborasi (*pulsing dot*), dan tombol aksi cepat WhatsApp + Unduh CV. |
| **Tentang & Filosofi** | Narasi pedagogik berpusat pada siswa (*student-centered*), kutipan filosofi mengajar, dan 4 kartu metrik pencapaian kuantitatif. |
| **Etalase Karya Ajar** | Grid kartu modul interaktif, badge sasaran siswa, chip alat EdTech, dan tautan halaman detail `/karya/[slug]`. |
| **Publikasi Jurnal Ilmiah** | Pengurutan tahun publikasi otomatis, badge indeksasi dinamis (SINTA/ISSN/Open Access), dan tombol unduh paper langsung. |
| **Bento Grid Kompetensi** | Tata letak asimetris memvisualisasikan keahlian Pedagogik, Media Digital (EdTech), dan Komunikasi Empatik. |
| **Timeline Rekam Jejak** | Pemisahan jalur vertikal antara Pengalaman Mengajar vs Pendidikan Formal & Organisasi. |
| **Testimoni & Rekomendasi** | Kartu apresiasi dari rekan sejawat guru senior, dosen pembimbing, rekan peneliti, dan orang tua murid. |
| **Kontak 1-Klik** | Tombol WhatsApp dengan pesan pembuka ter-encode otomatis, dan tombol salin email 1-klik dengan notifikasi visual tersalin. |
| **Halaman Detail Dinamis** | Telaah lengkap jurnal ilmiah dan studi kasus modul ajar dengan static pre-rendering (SSG). |
| **SEO & Aksesibilitas WCAG AA** | Metadata lengkap, OpenGraph card 1200x630, Favicon SVG toga, sitemap.xml, robots.txt, dan JSON-LD Schema.org (Person & ScholarlyArticle). |
| **Tema Gelap & Terang** | Toggle instan Dark/Light mode dengan transisi warna halus tanpa hydration mismatch. |

---

## 📜 Perintah Terminal Penting

```bash
# Menjalankan server pengembangan lokal
npm run dev

# Memvalidasi type data TypeScript secara ketat (zero error)
npx tsc --noEmit

# Memeriksa standar kode dan aturan linting
npm run lint

# Mengompilasi build produksi untuk siap deploy
npm run build

# Menjalankan build produksi di mesin lokal
npm run start
```

---

<div align="center">

Dibuat dengan dedikasi penuh untuk kemajuan pendidikan Indonesia.  
**Copyright © Annisa • Pendidik Bangsa**

</div>
