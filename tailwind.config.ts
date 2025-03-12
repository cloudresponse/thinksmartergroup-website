import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-12': 'rotateY(12deg)',
        'x-12': 'rotateX(12deg)',
      },
      transitionProperty: {
        'transform': 'transform',
      },
    },
  },
  plugins: [],
};

export default config; 