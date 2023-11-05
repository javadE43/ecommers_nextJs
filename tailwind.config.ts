import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    containers: {
      xs: "20rem",
      sm: "24rem",
      "2sm": "26.57rem",
      md: "28rem",
      "2md": "48rem",
      lg: "32rem",
      "2lg": "62rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      "8xl": "90rem",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    fontFamily: {
      roboto: ["var(--font-roboto)"],
      yekan: ["var(--font-iranYekan)"],
      openSans: ["var(--font-openSans)"],
    },
    zIndex: {
      "9999999": "9999999",
      "999999": "999999",
      "99999": "99999",
      "9999": "9999",
      "999": "999",
      "99": "99",
      "9": "9",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        bg_base_light: "#ffffff",
        bg_banner: "#edf0ef",
        bg_base_red: "#ef4056",
        bg_base_dark: "#111111",
        base_dark_text: "#020617",
        base_text: "#f1f2f4",
        gradiant:
          "linear-gradient(76.02deg,#35a6c8 33.32%,#007295 71.55%),radial-gradient(21.29% 87.33% at 50% 50.67%,#7cf2f6 0,#35a6c8 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        boxShadow_Bottom_3: "0 1px 1px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.3)",
        boxShadow_Bottom_2: "0 1px 1px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.3)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
  ],
};
export default config;
