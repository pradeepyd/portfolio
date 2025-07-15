import type { Config } from "tailwindcss";

const config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
          sans: ["var(--font-sans)"],
          ubuntu: "var(--font-ubuntu)",
          dank: "var(--font-dank)",
          geist: ['var(--font-geist-sans)', 'sans-serif'],
        },
      typography: {
        DEFAULT: {
          css: {
            color: "rgb(var(--foreground))",
            a: {
              color: "#00adb5",
              "&:hover": {
                color: "#008c96",
              },
            },
            blockquote: {
              borderLeftColor: "#00adb5",
              color: "rgb(var(--muted-foreground))",
            },
            "h1,h2,h3,h4,h5,h6": {
              color: "rgb(var(--foreground))",
            },
            hr: {
              borderColor: "rgb(var(--border))",
            },
            code: {
              color: "rgb(var(--foreground))",
              backgroundColor: "rgb(var(--muted))",
            },
            pre: {
              backgroundColor: "rgb(var(--muted))",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

export default config;