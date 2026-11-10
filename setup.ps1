Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  ⚡ NEXT VIBE STARTER — OTOMASI SETUP LAPTOP (ANTI-SLOP)" -ForegroundColor Yellow
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Periksa Node.js
$nodeInstalled = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeInstalled) {
    Write-Host "[!] Node.js belum terdeteksi di laptop ini!" -ForegroundColor Red
    Write-Host "    Silakan unduh dan install Node.js versi 18+ (LTS) dari https://nodejs.org" -ForegroundColor White
    exit 1
}

Write-Host "[*] Node.js terdeteksi: $(node -v)" -ForegroundColor Green
Write-Host ""

# 2. Siapkan .env.local
if (-not (Test-Path ".env.local")) {
    Write-Host "[*] Menyalin .env.example menjadi .env.local..." -ForegroundColor Cyan
    Copy-Item ".env.example" ".env.local"
    Write-Host "[v] .env.local berhasil dibuat!" -ForegroundColor Green
} else {
    Write-Host "[v] .env.local sudah tersedia." -ForegroundColor DarkGray
}

# 3. Install Dependensi
Write-Host ""
Write-Host "[*] Menginstall dependensi npm..." -ForegroundColor Cyan
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "[X] Gagal menginstall dependensi." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "================================================================" -ForegroundColor Green
Write-Host "  🎉 SETUP BERHASIL! REPO SIAP DIGUNAKAN UNTUK VIBE CODING" -ForegroundColor Green
Write-Host "================================================================" -ForegroundColor Green
Write-Host ""
Write-Host "Langkah selanjutnya:" -ForegroundColor Yellow
Write-Host "1. Jalankan development server: " -NoNewline; Write-Host "npm run dev" -ForegroundColor Cyan
Write-Host "2. Buka di editor favoritmu (Cursor / Windsurf / Antigravity)" -ForegroundColor White
Write-Host "3. Buka AI Chat dan kirimkan prompt dari PROMPTS.md untuk wawancara PRD!" -ForegroundColor White
Write-Host ""
