# 💡 CHEAT SHEET PROMPT VIBE CODING UNTUK KAK HAN

Koleksi prompt siap pakai (copy-paste) untuk memandu AI (Cursor, Windsurf, Cline, atau Antigravity) agar bekerja seperti tim insinyur senior tanpa kode asal-asalan (*anti-slop*).

---

## 🟢 1. Prompt Memulai Proyek Baru (Memicu Sesi Wawancara PRD)
> Gunakan prompt ini pertama kali saat membuka editor baru dengan ide aplikasimu.

```text
Halo! Saya ingin membuat proyek web baru: [Tuliskan ide kasarmu di sini, contoh: Web marketplace jasa desain grafis dengan pembayaran QRIS otomatis dan chat WhatsApp].

TOLONG PATUHI ATURAN BERIKUT:
1. Jangan tulis kode apa pun terlebih dahulu.
2. Bertindaklah sebagai Senior Product Manager & Software Architect.
3. Wawancarai saya terlebih dahulu secara mendalam (5-8 pertanyaan terarah) mengenai target pengguna, fitur inti MVP, alur halaman, database/integrasi, dan preferensi desain.
4. Setelah saya menjawab, rumuskan hasilnya ke dalam file PRD.md dan tunggu persetujuan saya.
```

---

## 🟡 2. Prompt Menyetujui PRD & Membuat Breakdown Tugas (`AGENTS.md`)
> Gunakan prompt ini setelah AI selesai merumuskan `PRD.md` dan kamu merasa dokumennya sudah sesuai.

```text
Saya sudah membaca dan menyetujui dokumen PRD.md.
Sekarang, tolong bedah PRD tersebut menjadi daftar tugas terstruktur dan atomik di dalam file AGENTS.md.

Pastikan:
- Tugas diurutkan secara logis (Setup data/types -> Komponen UI -> Integrasi Halaman -> Validasi).
- Setiap task punya Acceptance Criteria yang jelas.
- Berikan checkbox [ ] pada setiap nomor task.
- Jangan mulai eksekusi sebelum saya menginstruksikannya.
```

---

## 🔵 3. Prompt Eksekusi Task per Task
> Gunakan prompt ini untuk memerintahkan AI mengeksekusi satu pekerjaan secara fokus.

```text
Silakan kerjakan [Task-1: Judul Task] yang ada di AGENTS.md.

ATURAN KUALITAS KODE (ANTI-SLOP):
- Gunakan Next.js 15 App Router (Server Components sebagai default).
- Gunakan Tailwind CSS dan komponen shadcn/ui modular (maksimal 200 baris per file).
- TypeScript ketat tanpa tipe 'any'.
- Jika task sudah selesai, ubah checkbox menjadi [x] di AGENTS.md dan berikan instruksi cara mengujinya di browser.
```

---

## 🟣 4. Prompt Semantic Git Commit Otomatis
> Gunakan prompt ini setiap satu task selesai agar riwayat commit di GitHub rapi.

```text
Task ini sudah selesai diuji dan berjalan sempurna. 
Tolong buatkan pesan git commit semantik sesuai aturan di .cursor/rules/04-semantic-git.mdc (misal: feat(catalog): add responsive product grid with filter bar) dan lakukan commit sekarang.
```

---

## 🔴 5. Prompt Debugging / Perbaikan Tampilan
> Gunakan jika ada layout yang berantakan atau error.

```text
Tampilan di halaman [nama halaman] mengalami masalah: [jelaskan masalahnya, misal: di layar HP terjadi horizontal scroll dan card produk terpotong].

Tolong perbaiki dengan standar Tailwind CSS responsif (gunakan container yang rapi, overflow-hidden atau grid yang pas). Jangan merusak styling komponen lain.
```
