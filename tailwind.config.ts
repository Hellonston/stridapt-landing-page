const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0A0A0B",
        foreground: "#e5e2e3",
        primary: {
          DEFAULT: "#ffb690",
          foreground: "#552100",
        },
        secondary: {
          DEFAULT: "#b9c8de",
          foreground: "#233143",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#201f20",
          foreground: "#a78b7d",
        },
        accent: {
          DEFAULT: "#353436",
          foreground: "#e5e2e3",
        },
        popover: {
          DEFAULT: "#131314",
          foreground: "#e5e2e3",
        },
        card: {
          DEFAULT: "#201f20",
          foreground: "#e5e2e3",
        },
        // New design tokens
        "error": "#ffb4ab",
        "primary-fixed-dim": "#ffb690",
        "surface-dim": "#131314",
        "secondary-fixed-dim": "#b9c8de",
        "inverse-on-surface": "#313031",
        "surface-variant": "#353436",
        "on-tertiary-container": "#2d3339",
        "on-primary-container": "#582200",
        "on-secondary-fixed": "#0d1c2d",
        "tertiary-fixed-dim": "#c1c7cf",
        "tertiary": "#c1c7cf",
        "on-tertiary-fixed-variant": "#41474e",
        "on-primary-fixed-variant": "#783200",
        "secondary-fixed": "#d4e4fa",
        "surface-tint": "#ffb690",
        "inverse-primary": "#9d4300",
        "surface-bright": "#3a393a",
        "outline-variant": "#584237",
        "on-secondary-container": "#a7b6cc",
        "on-tertiary-fixed": "#161c22",
        "on-primary": "#552100",
        "inverse-surface": "#e5e2e3",
        "on-error": "#690005",
        "on-secondary-fixed-variant": "#39485a",
        "on-tertiary": "#2b3137",
        "on-error-container": "#ffdad6",
        "secondary-container": "#39485a",
        "surface": "#131314",
        "on-surface": "#e5e2e3",
        "surface-container-lowest": "#0e0e0f",
        "surface-container-high": "#2a2a2b",
        "surface-container-highest": "#353436",
        "error-container": "#93000a",
        "surface-container": "#201f20",
        "outline": "#a78b7d",
        "tertiary-container": "#959ba2",
        "primary-fixed": "#ffdbca",
        "on-surface-variant": "#e0c0b1",
        "primary-container": "#f97316",
        "tertiary-fixed": "#dde3eb",
        "on-primary-fixed": "#341100",
        "on-background": "#e5e2e3",
        "surface-container-low": "#1c1b1c",
      },
      fontFamily: {
        headline: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        label: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px",
        md: "0px",
        sm: "0px",
      },
      keyframes: {
        scan: {
          "0%": { top: "0" },
          "100%": { top: "100%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        scan: "scan 4s linear infinite",
        marquee: "marquee 15s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
};
