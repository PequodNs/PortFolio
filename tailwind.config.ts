import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",  // App Router
    "./pages/**/*.{ts,tsx}", // si todavía usas Pages Router
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#b6bac0fc",
        darkBg: "#131424",
      },
      backgroundImage: {
        "gradient-cover": "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
      }
    },
  },
  plugins: [],
};

export default config;