import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#468f9b",
        secondary: "#002b35",
        dark: "#A2A79E",
        accent: "#ff8d3d",
        light: "#e6f4f1",
      },
      fontFamily: {
        heading: '"Encode Sans Condensed", sans-serif',
      },
      fontSize: {
        base: "calc(16px + 0.2vw)", // Custom base font size
      },
    },
  },
  plugins: [],
} satisfies Config;
