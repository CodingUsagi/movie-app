import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    keyframes: {
      "carousel-move": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
    animation: {
      "carousel-move": "carousel-move var(--duration, 80s) infinite",
      "play-state": "paused",
    },
    extend: {
      screens: {
        "2xl": "1400px",
        "3xl": "1500px",
        "hover-hover": { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
};
export default config;
