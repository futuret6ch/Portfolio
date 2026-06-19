import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#040409",
        "bg-secondary": "#0a0a16",
        "card-glass": "rgba(15, 15, 35, 0.7)",
        "glow-blue": "#3b82f6",
        "glow-purple": "#8b5cf6",
        "glow-accent": "#a855f7",
        "text-primary": "#ffffff",
        "text-secondary": "#b0b8c5",
        "border-glass": "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 10s ease-in-out infinite",
        "pulse-slow": "pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "grid-move": "grid-move 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(1deg)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)", filter: "blur(80px)" },
          "50%": { opacity: "0.6", transform: "scale(1.1)", filter: "blur(100px)" },
        },
        "grid-move": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(50px)" },
        }
      },
    },
  },
  plugins: [],
};
export default config;
