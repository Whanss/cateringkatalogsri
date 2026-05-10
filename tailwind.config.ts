import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F0",
        charcoal: "#2D2424",
        toffee: "#E8741E",
        whatsapp: "#25D366",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0_8px_30px_rgba(0,0,0,0.04)",
        cta: "0_16px_36px_rgba(232,116,30,0.24)",
        whatsapp: "0_14px_34px_rgba(37,211,102,0.34)",
      },
    },
  },
  plugins: [],
};

export default config;
