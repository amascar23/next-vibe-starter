# Claude Code & Cline Guidelines — Next Vibe Starter

## Project Summary
Next Vibe Starter is an anti-slop, PRD-first Next.js 15 + Tailwind CSS boilerplate designed for disciplined vibe coding.

## Build and Dev Commands
- Install: `npm install` (or `pnpm install` / `bun install`)
- Dev server: `npm run dev` (runs on http://localhost:3000)
- Build: `npm run build`
- Lint: `npm run lint`
- Setup assistant: `node scripts/setup.js`
- Interactive PRD interview CLI: `npm run interview`

## Core Directives for Claude / Cline
1. **Mandatory Interview Before Code**:
   When asked to build a new feature or project, DO NOT start writing code immediately. Interview the user thoroughly across target personas, core features, database schema, payment gateways, and visual preferences.
2. **Progressive Workflow**:
   - Step 1: Write and refine `PRD.md`.
   - Step 2: Break down into atomic tasks in `AGENTS.md`.
   - Step 3: Implement one task at a time and update `[x]` status.
3. **Coding Standards**:
   - Next.js 15 App Router (React Server Components by default).
   - Component isolation: atomic UI in `src/components/ui/`, modular composition.
   - Styling: Tailwind CSS using CSS variables and `cn()` utility.
   - TypeScript: Strict types, zero `any`.
4. **Commits**: Follow Conventional Commits format (`feat`, `fix`, `docs`, `refactor`).
