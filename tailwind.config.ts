import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    // Hard-restrict the type ramp to discourage proliferation.
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.4rem" }],
      base: ["1rem", { lineHeight: "1.65rem" }],
      lg: ["1.125rem", { lineHeight: "1.7rem" }],
      xl: ["1.375rem", { lineHeight: "1.8rem" }],
      "2xl": ["1.75rem", { lineHeight: "2.1rem" }],
      "3xl": ["2.25rem", { lineHeight: "2.6rem" }],
      "4xl": ["3rem", { lineHeight: "3.3rem", letterSpacing: "-0.01em" }],
      "5xl": ["3.75rem", { lineHeight: "4rem", letterSpacing: "-0.02em" }]
    },
    extend: {
      colors: {
        cream: "#FDFBF7",
        sand: "#F0EEEA",
        line: "#E2DFD9",
        ink: "#1E1E1E",
        mute: "#5E5A55",
        accent: {
          DEFAULT: "#3A6B5E",
          dark: "#2E5448",
          soft: "#E7EFEC"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 1px 2px rgba(30, 30, 30, 0.04), 0 8px 24px rgba(30, 30, 30, 0.06)"
      },
      maxWidth: {
        prose: "65ch",
        content: "72rem"
      }
    }
  },
  plugins: []
};

export default config;
