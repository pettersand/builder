// tailwind.config.ts

// Use this file to define design tokens and tailwind configuration

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.svelte", "./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        // Theme Colors
        bg: "var(--bg)",
        bg2: "var(--bg2)",
        accent: "var(--accent)",
        accent2: "var(--accent2)",
        contrast: "var(--contrast)",
        contrast2: "var(--contrast2)",
        card: "var(--card)",
        card2: "var(--card2)",
        headline: "var(--headline)",
        paragraph: "var(--paragraph)",

        // Dark Mode
        "dark-bg": "rgb(1, 5, 12)",
        "dark-bg2": "rgb(23, 39, 62)",
        "dark-header": "rgb(10, 19, 31)",
        "dark-text": "rgb(210, 168, 80)",
        "dark-card": "rgb(12, 21, 34)",
        "dark-card2": "rgb(20, 33, 52)",
        "dark-primary": "rgb(20, 78, 108)",
        "dark-primary2": "rgb(18, 70, 97)",
        "dark-primary3": "rgb(91, 131, 152)",

        // Light Mode
        "light-bg": "rgb(236, 244, 245)",
        "light-bg2": "rgb(225, 243, 248)",
        "light-accent": "rgb(68, 155, 189)",
        "light-bg3": "rgb(204, 203, 225)",
        "light-header": "rgb(150, 197, 235)",
        "light-text": "rgb(4, 11, 22)",
        "light-card": "rgb(254, 253, 253)",
        "light-card2": "rgb(220, 234, 239)",
        "light-primary": "rgb(80, 106, 148)",
        "light-primary2": "rgb(85, 124, 169)",
        "light-primary3": "rgb(112, 153, 194)",

        // Additional Colors
        "secondary-500": "rgb(209, 203, 184)",
        "tertiary-500": "rgb(202, 164, 93)",
        "success-500": "rgb(15, 102, 76)",
        "warning-500": "rgb(212, 127, 0)",
        "error-500": "rgb(139, 0, 0)",
        "surface-500": "rgb(0, 31, 63)",
      },
    },
  },
  plugins: [],
};

export default config;
