# Task Breakdown Template (AGENTS.md)

> Digunakan pada Tahap 2 untuk memecah PRD.md menjadi tugas atomik.

---

### Phase 1: Fondasi & Skema Data
- [ ] **Task 1: Definisi Type & Model Data**
  - **Goal**: Mendefinisikan interface TypeScript di `src/types/`
  - **Files**: `src/types/index.ts`
  - **Acceptance Criteria**: Type compiling tanpa error TypeScript

- [ ] **Task 2: Setup Mock Data / Database Client**
  - **Goal**: Menyiapkan penyedia data lokal atau koneksi backend
  - **Files**: `src/lib/data.ts`
  - **Acceptance Criteria**: Data dummy dapat diimpor dan dibaca dengan type-safe

---

### Phase 2: Komponen UI & Layout
- [ ] **Task 3: Implementasi Komponen Primitif UI**
  - **Goal**: Membuat komponen yang dibutuhkan (Modal, Input, Badge)
  - **Files**: `src/components/ui/`
  - **Acceptance Criteria**: Komponen modular, responsive, menggunakan Tailwind CSS

- [ ] **Task 4: Navigasi & Shell Layout**
  - **Goal**: Memperbarui Header, Footer, dan Sidebar sesuai PRD
  - **Files**: `src/components/layout/`
  - **Acceptance Criteria**: Navigasi responsive mobile & desktop

---

### Phase 3: Halaman & Fitur Interaktif
- [ ] **Task 5: Halaman Beranda & Hero Section**
  - **Goal**: Menampilkan value proposition dan CTA utama
  - **Files**: `src/app/page.tsx`
  - **Acceptance Criteria**: Loading cepat, layout bersih tanpa horizontal scroll

- [ ] **Task 6: Halaman Fitur Utama (Katalog / Form / Dashboard)**
  - **Goal**: Menghubungkan interaksi user, filter, dan state
  - **Files**: `src/app/[fitur]/page.tsx`
  - **Acceptance Criteria**: Validasi form berjalan, filter state bekerja via URL params

---

### Phase 4: Polish, Verifikasi & Audit
- [ ] **Task 7: Audit Responsivitas & Error Boundary**
  - **Goal**: Cek tampilan mobile, loading state, dan error state
  - **Files**: `src/app/loading.tsx`, `src/app/error.tsx`
  - **Acceptance Criteria**: Lighthouse score tinggi, fallback UI elegan
