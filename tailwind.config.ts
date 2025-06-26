import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "yekan-bold": ["var(--font-yekan-bold)"],
        "yekan-fat": ["var(--font-yekan-fat)"],
        "yekan-heavy": ["var(--font-yekan-heavy)"],
        "yekan-medium": ["var(--font-yekan-medium)"],
        "yekan-regular": ["var(--font-yekan-regular)"],
      },
      colors: {
        customeBlueDeep: "#b9cfff",
        customepink: "#ffd9dc",
        customeblue: "#d5effc",
        customeGreen: "#d1f5c9",
        customeYellow: "#fcf5a4",
        customeBlack: "#373435",
      },

      screens: {
        xxs: { max: "374px" },
        xxs1: { min: "375px", max: "424px" },
        xxs2: { min: "320px", max: "374px" },
        xxs3: { max: "400px" },

        xs: { min: "320px", max: "424px" },
        xs1: { min: "425px", max: "549px" },
        xs2: { min: "550px", max: "639px" },
        xs3: { min: "375px", max: "639px" },

        custome2xl: { min: "1536px", max: "1999px" },
        custome2xl1: { min: "2000px" },
      },
      keyframes: {
        floatUpDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        floatUpDown: "floatUpDown 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
