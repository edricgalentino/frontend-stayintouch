import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        "reverse-spin": "reverse-spin 1s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
      colors: {
        base: {
          // white
          primary: "#ffffff",
        },
        primary: {
          // cream
          DEFAULT: "#F5EDE3",
        },
        secondary: {
          // maroon
          DEFAULT: "#BA2025",
        },
        tertiary: {
          // black-ish
          DEFAULT: "#222222",
        },
        quaternary: {
          // gray-ish
          DEFAULT: "#828282",
        },
      },
      fontFamily: {
        quicksand: ["var(--font-quicksand)"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f5ede3",
          secondary: "#ba2025",
          tertiary: "#222222",
          quaternary: "#828282",
          info: "#222222",
          base: "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#f5ede3",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
