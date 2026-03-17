import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#0a0f0f",
        accent: "#00f0ff",
        accentPurple: "#a020f0"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "system-ui", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 25px rgba(0,240,255,0.6)"
      },
      backdropBlur: {
        xs: "2px"
      },
      animation: {
        "pulse-soft": "pulse-soft 3s ease-in-out infinite"
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 }
        }
      }
    }
  },
  plugins: []
};

export default config;

