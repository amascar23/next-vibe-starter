import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    framework: "Next.js 15 App Router",
    architecture: "Anti-Slop Vibe Starter",
    timestamp: new Date().toISOString(),
  });
}
