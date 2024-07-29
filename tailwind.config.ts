import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.ts"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: {
          solid: '#3FA2F6',
          hover: '#2563eb',
          text: '#ffffff',
        },
        gray: {
          solid: '#6b7280',
          hover: '#4b5563',
          text: '#ffffff',
        },
        red: {
          solid: '#dc2626',
          hover: '#b91c1c',
          text: '#ffffff',
        },
        green: {
          solid: '#10b981',
          hover: '#059669',
          text: '#ffffff',
        },
        purple: {
          solid: '#6b21a8',
          hover: '#7e22ce',
          text: '#ffffff',
        },
        orange: {
          solid: '#ea580c',
          hover: '#f97316',
          text: '#ffffff',
        },
        teal: {
          solid: '#14b8a6',
          hover: '#0d9488',
          text: '#ffffff',
        },
        pink: {
          solid: '#ec4899',
          hover: '#db2777',
          text: '#ffffff',
        },
        indigo: {
          solid: '#4f46e5',
          hover: '#4338ca',
          text: '#ffffff',
        },
        yellow: {
          solid: '#eab308',
          hover: '#facc15',
          text: '#000000',
        },
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-7deg)" },
          "50%": { transform: "rotate(5deg)" }
        },
        click: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.96)' }
        }
      },

      animation: {
        'spin-faster': 'spin 0.65s linear infinite',
        'wiggle': 'wiggle 200ms ease-in-out',
        'click': 'click 50ms linear'
      },
    },
  },
  plugins: [],
};
export default config;
