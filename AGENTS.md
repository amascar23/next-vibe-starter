# 🤖 AGENT TASK MANAGER (`AGENTS.md`)

> **Status Saat Ini**: PRD Disetujui — Siap untuk Eksekusi  
> **Pemilik Proyek**: Annisa (Kak Han)  
> **Aplikasi**: Portofolio Pendidik & Akademisi Annisa  
> **Arsitek & PM**: Senior Product Manager & AI Lead Architect  

---

## 📌 DAFTAR TUGAS PERSIAPAN (COMPLETED)
- [x] Inisialisasi Boilerplate Next.js 15 + Tailwind CSS + shadcn/ui
- [x] Setup AI Rulesets (Anti-Slop, PRD Interview, Semantic Git)
- [x] Sesi Wawancara PRD dengan Kak Han (Mendefinisikan Ide & Kebutuhan)
- [x] Finalisasi & Persetujuan Dokumen `PRD.md`

---

## 📌 DAFTAR TUGAS EKSEKUSI ATOMIK

### Phase 1: Fondasi, Tema Pastel & Skema Data
- [x] **Task 1: Definisi Model Data & TypeScript Contracts**
  - **Goal**: Mendefinisikan interface data lengkap untuk profil guru, jurnal ilmiah, karya inovasi pembelajaran, timeline pengalaman, kompetensi, dan testimoni.
  - **Files**: `src/types/portfolio.ts`, `src/types/index.ts`
  - **Acceptance Criteria**: Type compiling tanpa error (`npx tsc --noEmit`) dengan strict mode tanpa `any`.

- [x] **Task 2: Penyediaan Dummy Data Realistis Pendidik & Jurnal Ilmiah**
  - **Goal**: Membuat data dummy kaya dan relevan dengan dunia pendidikan (profil Annisa, 3 publikasi jurnal ilmiah terakreditasi, 4 karya inovasi pembelajaran, riwayat mengajar, keahlian EdTech, testimoni).
  - **Files**: `src/data/portfolio.ts`
  - **Acceptance Criteria**: Data terhubung penuh dengan interface TypeScript, dapat diimpor dan dibaca secara type-safe.

- [x] **Task 3: Konfigurasi Tema Pastel Creative Sky Blue & Theme Support**
  - **Goal**: Menyesuaikan token warna Tailwind CSS ke palet Pastel Biru Langit (`sky-400`, `sky-500`, background tint lembut) serta setup `ThemeProvider` dan tombol toggle Dark/Light mode.
  - **Files**: `tailwind.config.ts`, `src/app/globals.css`, `src/components/theme-provider.tsx`, `src/components/theme-toggle.tsx`
  - **Acceptance Criteria**: Nuansa pastel biru langit aktif secara konsisten, toggle dark/light mode berjalan mulus tanpa hydration error.

---

### Phase 2: Shell Layout & Komponen Modular
- [x] **Task 4: Navbar Glassmorphism & Footer Edukasi**
  - **Goal**: Memperbarui Header navigasi sticky dengan efek glassmorphism, logo nama Annisa, link navigasi smooth-scroll, tombol unduh CV, dan Footer ramah dengan tautan media sosial.
  - **Files**: `src/components/layout/header.tsx`, `src/components/layout/footer.tsx`
  - **Acceptance Criteria**: Navigasi responsif sempurna di perangkat mobile (drawer/menu) dan desktop, anchor link meluncur mulus.

- [x] **Task 5: Komponen Kartu Publikasi Jurnal & Modul Ajar**
  - **Goal**: Membuat komponen kartu modular untuk jurnal ilmiah (badge SINTA/ISSN, tahun, tombol baca detail & unduh PDF) dan kartu karya inovasi ajar.
  - **Files**: `src/components/portfolio/journal-card.tsx`, `src/components/portfolio/project-card.tsx`, `src/components/portfolio/timeline-item.tsx`, `src/components/portfolio/testimonial-card.tsx`, `src/components/portfolio/index.ts`
  - **Acceptance Criteria**: Komponen modular (< 200 baris per file), visual konsisten dengan tema sky blue pastel.

---

### Phase 3: Perakitan Halaman Utama (Single-Page Scroll)
- [x] **Task 6: Seksi Hero & Tentang Saya (Filosofi Pendidik & Metrik)**
  - **Goal**: Membangun Hero section ramah dengan foto profil berbingkai pastel, headline peran pendidik, badge kolaborasi, tombol CTA WhatsApp & Unduh CV, serta seksi Filosofi Mengajar & Metrik ringkas.
  - **Files**: `src/components/sections/hero-section.tsx`, `src/components/sections/about-section.tsx`
  - **Acceptance Criteria**: Visual estetik, responsif di mobile/desktop, CTA terhubung dengan benar.

- [x] **Task 7: Seksi Publikasi Jurnal & Karya Inovasi Pembelajaran**
  - **Goal**: Mengintegrasikan seksi daftar jurnal ilmiah dan galeri karya pembelajaran pada halaman beranda dengan filter kategori dan tombol menuju halaman detail.
  - **Files**: `src/components/sections/journals-section.tsx`, `src/components/sections/teaching-section.tsx`
  - **Acceptance Criteria**: Grid kartu jurnal dan karya tampil rapi, tombol menuju halaman detail berfungsi.

- [x] **Task 8: Seksi Kompetensi (Bento Grid), Pengalaman (Timeline), Testimoni & Kontak Terpadu**
  - **Goal**: Mengimplementasikan bento grid keahlian pedagogik/EdTech, timeline riwayat mengajar, rekomendasi/testimoni, dan seksi kontak (direct WhatsApp CTA, email copy, formulir pesan).
  - **Files**: `src/components/sections/skills-section.tsx`, `src/components/sections/experience-section.tsx`, `src/components/sections/testimonials-section.tsx`, `src/components/sections/contact-section.tsx`, `src/app/page.tsx`
  - **Acceptance Criteria**: Halaman beranda utama utuh, semua seksi terangkai rapi, alur kontak 1-klik berfungsi.

---

### Phase 4: Halaman Detail Khusus (Multi-Page Exploration)
- [ ] **Task 9: Halaman Detail Publikasi Jurnal Ilmiah (`/jurnal/[slug]`)**
  - **Goal**: Membuat halaman dinamis untuk telaah lengkap jurnal ilmiah: informasi penerbit, abstrak mendalam, metodologi, temuan penelitian, dan tombol unduh paper.
  - **Files**: `src/app/jurnal/[slug]/page.tsx`
  - **Acceptance Criteria**: Routing dinamis berjalan lancar, penanganan 404 jika slug salah, tombol kembali ke beranda.

- [ ] **Task 10: Halaman Detail Karya & Media Pembelajaran (`/karya/[slug]`)**
  - **Goal**: Membuat halaman dinamis untuk studi kasus modul pembelajaran (tujuan pembelajaran, kurikulum, dampak terhadap siswa di kelas).
  - **Files**: `src/app/karya/[slug]/page.tsx`
  - **Acceptance Criteria**: Dokumentasi modul pembelajaran rapi dan mudah dibaca oleh sesama guru/mahasiswa.

---

### Phase 5: Verifikasi Build, SEO & Kesiapan Deploy
- [ ] **Task 11: Setup Metadata SEO, OpenGraph & Favicon Edukasi**
  - **Goal**: Mengonfigurasi metadata Next.js 15 (title, description, OpenGraph tags, preview social card) yang relevan untuk portofolio pendidik.
  - **Files**: `src/app/layout.tsx`
  - **Acceptance Criteria**: Metadata valid dan menarik saat tautan web dibagikan di WhatsApp/LinkedIn.

- [ ] **Task 12: Audit Responsivitas, Build Test (`npm run build`), & Deployment Ready**
  - **Goal**: Menjalankan pengujian build penuh untuk memvalidasi zero error TypeScript, tidak ada layout shift/overflow di mobile, dan siap dideploy ke Vercel.
  - **Files**: Evaluasi menyeluruh
  - **Acceptance Criteria**: `npm run build` sukses 100% tanpa error, web siap di-deploy secara langsung.

---

## 📝 CATATAN EKSEKUSI
- Eksekusi dilakukan secara disiplin: **Satu task per satu waktu**.
- Setiap task selesai, lakukan verifikasi build atau type-check (`npm run build` atau `npx tsc --noEmit`).
- Centang checkbox `[x]` pada task yang telah selesai di file ini.
