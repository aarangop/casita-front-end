import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B7D62",
        secondary: "#77BFA3",
        tertiary: "#BFD8BD",
        third: "#BFd19d",
        warning: "#F1D697",
        error: "#EE5E67",
        "light-1": "#E8F3F1",
        "light-2": "#CFDBD9",
        "light-3": "#A2ADAB",
        "light-4": "#818A89",
        "dark-1": "#1D2321",
        "dark-2": "#282C2A",
        "dark-3": "#3C413F",
        "dark-4": "#4B4F4D",
      },
    },
  },
  plugins: [],
};
export default config;
