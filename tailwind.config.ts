import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        selectedRating: 'rgb(253 224 71 / 1)', // Yellow
        unSelectedRating: 'rgb(209 213 219 / 1)' // Gray
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.stop-selected': {
          'stop-color': 'rgb(253 224 71 / 1)'
        },
        '.stop-unselected': {
          'stop-color': 'rgb(209 213 219 / 1)'
        }
      });
    })
  ]
} satisfies Config;
