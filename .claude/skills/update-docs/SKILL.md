# Update Docs Skill

Analyze the repository and generate/update the AGENTS.md file.

## Prompt

Analyze this repository and create (or update) the AGENTS.md file in the project root.

AGENTS.md is a universal documentation file for AI coding agents (Claude Code, GitHub Copilot, Cursor, Gemini CLI, Windsurf, etc.). It serves as a "README for agents" — concise, accurate, and actionable.

## Analysis Procedure

Proceed step by step:

1. **Explore structure** — traverse the directory tree, identify entry points, config files, and key modules
2. **Determine tech stack** — read package.json, tsconfig, vite.config, eslint.config and other config files; note exact versions
3. **Understand architecture** — trace data flow from entry point through components to output; identify patterns and design decisions
4. **Document commands** — verify all npm scripts and document what they do exactly
5. **Note conventions** — extract coding style from ESLint config, TypeScript settings, and existing code
6. **Assemble output** — synthesize findings into the resulting AGENTS.md

## Required Sections

The output AGENTS.md must contain these sections (in this order):

### 1. Project Overview
- One sentence describing project purpose
- Tech stack with exact versions (e.g., "React 19.2, TypeScript 6, Vite 8")
- Application type (SPA, SSR, API, library...)

### 2. Commands
- Table with all available npm scripts
- Format: `command` | what it does | when to use

### 3. Project Structure
- Tree of key directories and files (max 15-20 items)
- Brief description of purpose for each item

### 4. Architecture
- Data flow from entry point to rendering
- Key design decisions (why NO routing, why NO state management...)
- Patterns used in code

### 5. Conventions
- TypeScript rules (strict mode, import type...)
- CSS approach (framework, custom properties, nesting...)
- One short code snippet showing preferred style

### 6. Boundaries
Three levels:
- ✅ Always do (required steps before commit, tests...)
- ⚠️ Ask first (config changes, new dependencies...)
- 🚫 Never do (commit secrets, delete vendor files...)

## Output Rules

- Maximum 120 lines — conciseness is priority
- No duplication with existing CLAUDE.md — AGENTS.md complements, doesn't replace
- If CLAUDE.md exists, read it and skip information it already contains
- Only facts derived from code — no assumptions or invented information
- Mark assumptions as "Note:"
- Use paths relative to repo root (src/main.tsx, not ./src/main.tsx)
- Write in English (AGENTS.md is for international AI agents)

## Update CLAUDE.md

After creating/updating AGENTS.md, check CLAUDE.md and ensure it contains this reference at the beginning (before the first section):

```
@AGENTS.md
```

This @ reference ensures Claude Code automatically loads AGENTS.md content as part of the context.

## When to Update

- After adding new dependencies or tools
- After architecture changes (adding router, state management...)
- After build pipeline or deployment process changes
- After convention changes (new ESLint rules, TypeScript config...)
