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
        },


        fadeIn:{
          '0%': { opacity: '0'},
          '100%': { opacity: '1'},
        },
        fadeOut:{
          '0%': { opacity: '1'},
          '100%': { opacity: '0'},
        },


        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-5px)' },
          '100%': { opacity: '1', transform: 'translateY(calc(100%+2rem))' },
        },
        fadeOutUp: {
          '0%': { opacity: '1', transform: 'translateY(calc(100%+1rem))' },
          '100%': { opacity: '0', transform: 'translateY(-5px)' },
        },


        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(calc(100%+1rem))' },
        },
        fadeOutDown: {
          '0%': { opacity: '1', transform: 'translateY(calc(100%+1rem))' },
          '100%': { opacity: '0', transform: 'translateY(5px)' },
        },

        fadeInRight:{
          '0%': { opacity: '0', transform: 'translateX(-5px)' },
          '100%': { opacity: '1', transform: 'translateX(calc(100%+1rem))' },
        },
        fadeOutLeft:{
          '0%': { opacity: '1', transform: 'translateX(calc(100%+1rem))' },
          '100%': { opacity: '0', transform: 'translateX(-5px)' },
        },

        fadeInLeft:{
          '0%': { opacity: '0', transform: 'translateX(5px)' },
          '100%': { opacity: '1', transform: 'translateX(calc(100%+1rem))' },
        },
        fadeOutRight:{
          '0%': { opacity: '1', transform: 'translateX(calc(100%+1rem))' },
          '100%': { opacity: '0', transform: 'translateX(5px)' },
      },

      grow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
    },

      animation: {
        'spin-faster': 'spin 0.65s linear infinite',
        wiggle: 'wiggle 200ms ease-in-out',
        click: 'click 50ms linear',
        fadeInDown: 'fadeInDown 0.3s ease-out',
        fadeOutUp: 'fadeOutUp 0.3s ease-out',

        fadeIn: 'fadeIn 0.3s ease-out',
        fadeOut: 'fadeOut 0.3s ease-out',

        fadeInUp: 'fadeInUp 0.3s ease-out',
        fadeOutDown: 'fadeOutDown 0.3s ease-out',

        fadeInRight: 'fadeInRight 0.3s ease-out',
        fadeOutLeft: 'fadeOutLeft 0.3s ease-out',

        fadeInLeft: 'fadeInLeft 0.3s ease-out',
        fadeOutRight: 'fadeOutRight 0.3s ease-out',

        selectedGrow: 'grow 0.3s ease-out'
      },
      translate: {
        '-50%': '-50%',
      },
    },
  },
  plugins: [],
};
export default config;
