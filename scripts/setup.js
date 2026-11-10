#!/usr/bin/env node

/**
 * Cross-platform Setup Script for Next Vibe Starter
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("\x1b[35m%s\x1b[0m", "================================================================");
console.log("\x1b[36m%s\x1b[0m", "  ⚡ NEXT VIBE STARTER — AUTOMATED ONBOARDING");
console.log("\x1b[35m%s\x1b[0m", "================================================================\n");

// 1. Check or copy .env.local
const envLocalPath = path.join(__dirname, "..", ".env.local");
const envExamplePath = path.join(__dirname, "..", ".env.example");

if (!fs.existsSync(envLocalPath) && fs.existsSync(envExamplePath)) {
  fs.copyFileSync(envExamplePath, envLocalPath);
  console.log("\x1b[32m%s\x1b[0m", "✔ Created .env.local from .env.example");
} else {
  console.log("\x1b[90m%s\x1b[0m", "✔ .env.local already exists");
}

// 2. Summary
console.log("\n\x1b[33m%s\x1b[0m", "🚀 Next Steps:");
console.log("  1. Run \x1b[36mnpm run dev\x1b[0m to test the starter website.");
console.log("  2. Open this folder in \x1b[36mCursor\x1b[0m or \x1b[36mWindsurf\x1b[0m.");
console.log("  3. Ask the AI: \x1b[32m\"Mulai proyek baru: [ide kamu]\"\x1b[0m to start the PRD interview.");
console.log("  4. Or run \x1b[36mnpm run interview\x1b[0m to formulate your PRD in the CLI directly!\n");
