# Product Requirements Document (PRD) — [Nama Proyek Web]

> **Status**: [Draft / In Review / Approved]  
> **Author**: [Kak Han / User]  
> **Architect**: AI Lead Engineer  
> **Last Updated**: [YYYY-MM-DD]  

---

## 1. Ringkasan Eksekutif & Visi Produk
- **Deskripsi Singkat**: [1-2 paragraf menjelaskan apa aplikasi ini dan nilai tambah utamanya]
- **Masalah Utama yang Diselesaikan**: [Problem statement spesifik yang dialami pengguna saat ini]
- **Tolak Ukur Keberhasilan (Metrics/KPI)**: [Contoh: Kecepatan checkout di bawah 30 detik, bounce rate di bawah 40%]

---

## 2. Target Pengguna & Persona
| Persona | Deskripsi | Kebutuhan Utama | Rasa Frustrasi (Pain Points) |
| :--- | :--- | :--- | :--- |
| **User Utama** | [Contoh: Pembeli properti usia 25-40] | Melihat katalog terverifikasi, kalkulator simulasi cicilan | Listing palsu, navigasi membingungkan di mobile |
| **Admin / Operator**| [Contoh: Pemilik bisnis / admin web] | Mengelola listing, melihat leads WhatsApp masuk | Input data yang ribet, layout dashboard lambat |

---

## 3. Cakupan Fitur (Scope & MoSCoW Prioritization)
### 🟢 Must-Have (Mutlak Ada di MVP / Rilis 1)
- [ ] Fitur 1: [Deskripsi dan acceptance criteria]
- [ ] Fitur 2: [Deskripsi dan acceptance criteria]
- [ ] Fitur 3: [Deskripsi dan acceptance criteria]

### 🟡 Should-Have (Sangat Diinginkan jika Waktu Cukup)
- [ ] Fitur 4: [Deskripsi]

### ⚪ Could-Have / Nice-to-Have (Fase 2 / Lanjutan)
- [ ] Fitur 5: [Deskripsi]

### 🔴 Won't-Have (Di luar cakupan versi ini)
- Tidak ada fitur [contoh: multi-bahasa atau pembayaran kripto pada v1]

---

## 4. User Journey & Alur Halaman (Site Map)
1. **Halaman Beranda (`/`)**: Hero section, pencarian cepat, highlight produk terpopuler, CTA.
2. **Halaman Katalog (`/catalog`)**: Grid produk responsif, filter kategori, pengurutan harga.
3. **Halaman Detail (`/catalog/[id]`)**: Galeri foto, spesifikasi lengkap, tombol aksi utama (WhatsApp / Beli).
4. **Halaman Dashboard (`/dashboard`)**: Ringkasan data (hanya untuk authenticated users jika ada).

---

## 5. Arsitektur Teknis & Tech Stack
- **Framework**: Next.js 15 (App Router, React Server Components)
- **Styling**: Tailwind CSS + shadcn/ui component primitives
- **Icons**: Lucide React
- **Language**: TypeScript (Strict mode, no-any)
- **Database / Backend (opsional)**: [Supabase / PostgreSQL / Local Mock]
- **Third Party Integrations**: [Midtrans / QRIS / WhatsApp API / Resend Email]

---

## 6. Skema Data (Database Entities & Models)
```typescript
// Contoh representasi skema data:
interface Product {
  id: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  featured: boolean;
  createdAt: string;
}
```

---

## 7. Persyaratan Non-Fungsional (NFR)
- **Kecepatan & Performa**: Google Lighthouse Score > 90 pada mobile dan desktop.
- **Responsivitas**: Tampilan sempurna pada mobile (375px+), tablet (768px+), dan desktop (1280px+). Tidak boleh ada horizontal scroll yang merusak layout.
- **Aksesibilitas & SEO**: Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`), valid open-graph meta tags.

---

## 8. Check-off Persetujuan
- [ ] PRD telah ditinjau oleh Kak Han
- [ ] Semua pertanyaan arsitektur telah terjawab
- [ ] Siap untuk dipecah ke dalam `AGENTS.md`
