import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },

      backgroundImage: {
        roadmapBG: "linear-gradient(90deg, #69F5FF 0%, #7098FF 100%)",
        roadmapLineBG:
          "linear-gradient(90deg, #6EA8FF 0%, rgba(66, 101, 153, 0) 62.82%)",
        borderGradient:
          "linear-gradient(90deg, rgba(107, 209, 255, 0) 0%, #6BD1FF 50.07%, rgba(107, 209, 255, 0) 100%)",
      },
      container: {
        center: true,
        padding: "16px",
      },
      fontFamily: {
        ClashGrotesk: ["ClashGrotesk"],
        Nueu: ["Nueu"],
        Brico: ["Brico"],
        Roboto: ["Roboto"],
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
