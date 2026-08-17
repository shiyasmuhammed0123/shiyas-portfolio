import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#000000",
          secondary: "#0A0A0A",
        },
        accent: {
          DEFAULT: "#F01D4A",
          light: "#FF4568",
          glow: "rgba(240,29,74,0.4)",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A1A1AA",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
        },
        card: {
          DEFAULT: "rgba(255,255,255,0.04)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at center, rgba(240,29,74,0.35), transparent 70%)",
        "grid-fade":
          "linear-gradient(to bottom, transparent, #000000)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "radar-sweep": "radar-sweep 4s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "radar-sweep": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
