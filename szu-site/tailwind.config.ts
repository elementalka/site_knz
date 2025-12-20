import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B1220",
        card: "rgba(255,255,255,0.06)",
        border: "rgba(255,255,255,0.10)",
        text: "rgba(255,255,255,0.92)",
        muted: "rgba(255,255,255,0.70)",
        soft: "rgba(255,255,255,0.04)",
        accent: "#2DD4BF",
        accent2: "#60A5FA",
        warn: "#F59E0B",
        danger: "#FB7185"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 18px 60px rgba(0,0,0,0.55)"
      }
    }
  },
  plugins: []
} satisfies Config;
