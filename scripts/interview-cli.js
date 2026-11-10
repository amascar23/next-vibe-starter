#!/usr/bin/env node

/**
 * Interactive PRD Interview CLI Wizard
 * Helps Kak Han quickly formulate the initial PRD.md via terminal Q&A!
 */

const readline = require("readline");
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function runInterview() {
  console.log("\x1b[35m%s\x1b[0m", "\n================================================================");
  console.log("\x1b[36m%s\x1b[0m", "  🎙️  SESI WAWANCARA PRD VIBE CODING (INTERACTIVE INTERVIEW)");
  console.log("\x1b[35m%s\x1b[0m", "================================================================");
  console.log("Jawab pertanyaan berikut secara santai. AI akan menyusunnya ke PRD.md!\n");

  const projectName = (await ask("\x1b[33m1. Apa nama aplikasi / proyek web yang ingin dibuat?\x1b[0m\n> ")) || "Aplikasi Web Keren";
  
  const problem = (await ask("\n\x1b[33m2. Apa masalah utama yang diselesaikan oleh web ini?\x1b[0m\n> ")) || "Membantu pengguna menemukan layanan terbaik dengan mudah.";

  const targetUsers = (await ask("\n\x1b[33m3. Siapa target pengguna utamanya? (misal: Mahasiswa, Pembeli Rumah, UMKM)\x1b[0m\n> ")) || "Pengguna umum dan profesional muda.";

  const coreFeatures = (await ask("\n\x1b[33m4. Sebutkan 3-5 fitur inti mutlak (MVP) yang harus ada di versi pertama:\x1b[0m\n> ")) || "Katalog pencarian, formulir pemesanan, integrasi WhatsApp.";

  const integrations = (await ask("\n\x1b[33m5. Butuh integrasi apa saja? (misal: QRIS/Midtrans, Supabase Database, Auth Google)\x1b[0m\n> ")) || "Database Supabase, pembayaran QRIS.";

  const designStyle = (await ask("\n\x1b[33m6. Bagaimana preferensi gaya desainnya? (misal: Minimalis modern, Dark luxury, Playful)\x1b[0m\n> ")) || "Modern minimalist dengan sentuhan warna ungu/indigo dan dark mode.";

  rl.close();

  const prdContent = `# 📄 Product Requirements Document (PRD) — ${projectName}

> **Status**: Approved via Interactive Interview  
> **Pemilik Proyek**: Kak Han  
> **Waktu Dibuat**: ${new Date().toLocaleDateString("id-ID")}  

---

## 1. Visi & Ringkasan Proyek
- **Nama Aplikasi**: ${projectName}
- **Masalah Utama**: ${problem}
- **Target Pengguna**: ${targetUsers}

---

## 2. Fitur Inti (MVP Scope)
${coreFeatures
  .split(/[,;\n]/)
  .map((f) => f.trim())
  .filter(Boolean)
  .map((f) => `- [ ] **${f}**`)
  .join("\n")}

---

## 3. Integrasi & Kebutuhan Data
- ${integrations}

---

## 4. Preferensi Desain & Tampilan
- ${designStyle}

---

## 5. Langkah Selanjutnya:
Dokumen PRD ini sudah selesai disusun!
Silakan buka chat AI (Cursor / Windsurf / Antigravity) dan ketik:
> *"Saya sudah menyelesaikan wawancara PRD. Tolong bedah PRD.md menjadi daftar tugas di AGENTS.md!"*
`;

  const prdPath = path.join(__dirname, "..", "PRD.md");
  fs.writeFileSync(prdPath, prdContent, "utf8");

  console.log("\x1b[32m%s\x1b[0m", "\n================================================================");
  console.log("\x1b[32m%s\x1b[0m", "  🎉 PRD.md BERHASIL DISUSUN SECARA DETAIL!");
  console.log("\x1b[32m%s\x1b[0m", "================================================================\n");
  console.log("File \x1b[36mPRD.md\x1b[0m sudah diperbarui berdasarkan jawaban Kak Han.");
  console.log("Sekarang buka chat AI dan minta buatkan breakdown tugas di \x1b[36mAGENTS.md\x1b[0m!\n");
}

runInterview().catch(console.error);
