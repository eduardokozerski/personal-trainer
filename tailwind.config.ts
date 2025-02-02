import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-image': "url('/images/hero-background.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBlue: "#002130",
        lighterDarkBlue: "#006796"
      },
    },
  },
  plugins: [],
} satisfies Config;
