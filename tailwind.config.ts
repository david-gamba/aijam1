import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System Colors from Stitch
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-on-primary)",
          container: "var(--color-primary-container)",
          "container-foreground": "var(--color-on-primary-container)",
          fixed: "var(--color-primary-fixed)",
          "fixed-dim": "var(--color-primary-fixed-dim)",
          dim: "var(--color-primary-dim)",
        },
        
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-on-secondary)",
          container: "var(--color-secondary-container)",
          "container-foreground": "var(--color-on-secondary-container)",
          fixed: "var(--color-secondary-fixed)",
          "fixed-dim": "var(--color-secondary-fixed-dim)",
          dim: "var(--color-secondary-dim)",
        },
        
        tertiary: {
          DEFAULT: "var(--color-tertiary)",
          foreground: "var(--color-on-tertiary)",
          container: "var(--color-tertiary-container)",
          "container-foreground": "var(--color-on-tertiary-container)",
          fixed: "var(--color-tertiary-fixed)",
          "fixed-dim": "var(--color-tertiary-fixed-dim)",
          dim: "var(--color-tertiary-dim)",
        },
        
        error: {
          DEFAULT: "var(--color-error)",
          foreground: "var(--color-on-error)",
          container: "var(--color-error-container)",
          "container-foreground": "var(--color-on-error-container)",
          dim: "var(--color-error-dim)",
        },
        
        surface: {
          DEFAULT: "var(--color-surface)",
          dim: "var(--color-surface-dim)",
          bright: "var(--color-surface-bright)",
          container: "var(--color-surface-container)",
          "container-low": "var(--color-surface-container-low)",
          "container-lowest": "var(--color-surface-container-lowest)",
          "container-high": "var(--color-surface-container-high)",
          "container-highest": "var(--color-surface-container-highest)",
          variant: "var(--color-surface-variant)",
          tint: "var(--color-surface-tint)",
        },
        
        "on-background": "var(--color-on-background)",
        "on-surface": "var(--color-on-surface)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        
        outline: "var(--color-outline)",
        "outline-variant": "var(--color-outline-variant)",
        
        card: "var(--color-card)",
        "card-foreground": "var(--color-card-foreground)",
        
        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",
        
        accent: "var(--color-accent)",
        "accent-foreground": "var(--color-accent-foreground)",
        
        destructive: "var(--color-destructive)",
        "destructive-foreground": "var(--color-destructive-foreground)",
        
        input: "var(--color-input)",
        ring: "var(--color-ring)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        "jakarta": ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1.5rem",
      },
      boxShadow: {
        ambient: "0px 12px 32px rgba(0, 51, 69, 0.06)",
      },
    },
  },
  plugins: [],
} satisfies Config
