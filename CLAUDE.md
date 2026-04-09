# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Quiet Authority** is a React-based financial dashboard application ("Portfolio Velocity") built with modern web technologies. It's a front-end focused project showcasing financial metrics, portfolio analysis, transaction history, and risk mitigation features.

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server (http://localhost:5173) with hot reload |
| `npm run build` | Type-check with TypeScript then build optimized production bundle |
| `npm run lint` | Run ESLint to check code quality across TypeScript/TSX files |
| `npm run preview` | Preview production build locally |

## Tech Stack

- **Framework**: React 19.2.4 with TypeScript
- **Build Tool**: Vite 8.0.4
- **Styling**: Tailwind CSS 4.2 + @tailwindcss/vite
- **Components**: shadcn/ui (Radix UI), Recharts for charts, Lucide React for icons
- **Compiler**: React Compiler via Babel (automatic optimization)
- **Linting**: ESLint 9 with TypeScript ESLint, React Hooks, and React Refresh plugins
- **Bundler**: Rolldown with Babel plugin

## Key Configuration Details

**TypeScript (`tsconfig.app.json`)**:
- Target: ES2023
- Module resolution: bundler mode
- Strict mode enabled: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
- Path alias: `@/*` maps to `src/*`

**Vite (`vite.config.ts`)**:
- Base path: `/aijam1/` (configured for GitHub Pages deployment)
- React plugin with React Compiler preset enabled
- Tailwind CSS Vite integration
- Resolve alias: `@` → `src`

**ESLint (`eslint.config.js`)**:
- Uses flat config format
- Extends: JS recommended, TypeScript ESLint recommended, React Hooks rules, React Refresh rules
- Ignores: `/dist` directory

## Project Structure

```
src/
├── main.tsx                 # App entry point
├── App.tsx                  # Root component
├── index.css               # Global Tailwind styles
├── pages/
│   └── FinancialDashboard.tsx    # Main dashboard page with tabs
├── components/
│   ├── ui/                 # Reusable shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── tabs.tsx
│   │   └── badge.tsx
│   ├── MetricCardShadcn.tsx      # Financial metric display
│   ├── CashFlowChartShadcn.tsx   # Cash flow visualization
│   ├── TransactionHistoryListShadcn.tsx
│   ├── PortfolioHeaderShadcn.tsx
│   ├── RiskMitigationShadcn.tsx
│   └── [other dashboard components]
├── lib/                    # Utility functions and helpers
└── tailwind.config.ts      # Tailwind configuration
```

## Important Architectural Notes

1. **Component Organization**: The dashboard uses shadcn/ui-based components with names ending in "Shadcn" to distinguish them from earlier component versions. When adding new components, follow this naming pattern if using shadcn/ui.

2. **Styling Approach**: All styling uses Tailwind CSS classes directly in components. There are no separate CSS modules or styled-components. The Tailwind config includes Material Design color tokens (e.g., `bg-surface`, `text-on-surface`, `border-outline-variant`).

3. **State Management**: The dashboard uses React's built-in `useState` hook for local component state (e.g., tab selection). There's no global state management library currently in use.

4. **Data**: Currently uses hardcoded sample data. No API integration or backend connection yet.

5. **GitHub Pages Deployment**: The Vite base path is set to `/aijam1/`, indicating deployment to GitHub Pages under a specific subdirectory. Ensure this path is maintained when deploying.

## Development Notes

- **React Compiler**: The Babel React Compiler is enabled in the build, which automatically optimizes component rendering. This is transparent to development but impacts code generation.
- **Strict TypeScript**: The project enforces strict TypeScript rules including unused variable detection. Imports used only in type contexts should use `import type` to avoid bloating the bundle.
- **Tab Navigation**: The main dashboard uses Radix UI Tabs for organizing Overview, Analytics, and Transactions sections.
- **Chart Library**: Recharts is used for the AreaChart and cash flow visualizations. Charts are responsive and use custom gradient fills.

## Linting & Type Checking

Before committing:
- `npm run lint` must pass (ESLint)
- `npm run build` type-checks with TypeScript (if this fails, the build will fail)

Common issues:
- Unused imports or variables: Remove them or prefix with `_` to explicitly mark as intentionally unused
- React Hook rules: Ensure hooks are called unconditionally and at the top level of components
- Type mismatches: Check TypeScript error output for specific type issues

## Related Documentation

- **Setup guides** (in Czech): See `docs/guides/` for tool setup instructions
- **Project examples**: See `docs/projects/` for example prompts and use cases
- **Skills**: Custom skills available in `docs/skills/`
