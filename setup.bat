@echo off
setlocal enabledelayedexpansion

echo ================================================================
echo   ⚡ NEXT VIBE STARTER — OTOMASI SETUP LAPTOP (ANTI-SLOP)
echo ================================================================
echo.

:: 1. Periksa ketersediaan Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] PERINGATAN: Node.js belum terdeteksi di laptop ini!
    echo     Silakan unduh dan install Node.js versi 18+ (LTS) dari:
    echo     https://nodejs.org
    echo.
    echo     Setelah install selesai, jalankan kembali skrip ini.
    pause
    exit /b 1
)

echo [*] Node.js terdeteksi:
node --version
echo.

:: 2. Siapkan file .env.local jika belum ada
if not exist .env.local (
    echo [*] Membuat file .env.local dari .env.example...
    copy .env.example .env.local >nul
    echo [v] File .env.local berhasil dibuat!
) else (
    echo [v] File .env.local sudah ada.
)

:: 3. Install Dependensi
echo.
echo [*] Menginstall paket dependensi (Next.js 15, Tailwind, shadcn)...
call npm install

if %errorlevel% neq 0 (
    echo.
    echo [X] Gagal menginstall dependensi npm. Cek koneksi internet kamu.
    pause
    exit /b 1
)

echo.
echo ================================================================
echo   🎉 SETUP SELESAI! REPO SIAP DIGUNAKAN UNTUK VIBE CODING
echo ================================================================
echo.
echo   Langkah selanjutnya:
echo   1. Buka folder ini di Cursor / Windsurf / VS Code / Antigravity
echo   2. Jalankan server lokal: npm run dev
echo   3. Buka chat AI dan ketik salah satu:
echo      - "Mulai proyek baru: [ide kamu]"  (AI akan langsung mewawancarai PRD)
echo      - Atau jalankan CLI: npm run interview
echo.
echo ================================================================
pause
