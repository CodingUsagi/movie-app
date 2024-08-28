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
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba(30, 37, 65, 0.9) 0%, rgba(3, 37, 65, 0) 100%), url('https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg')",
        "movie-hero":
          "linear-gradient(to right bottom, rgba(30, 37, 65, 0.9) 0%, rgba(3, 37, 65, 0) 100%), url('https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
