import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      colors: {
        color1: '#E31E23',
        color2: '#2899F3',
     
      },
    },
  },
  plugins: [],
};

export default config;
