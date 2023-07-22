/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lgxl': '850px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      'animation': {
        'text':'text 5s ease infinite',
        'cake-1': 'cake-1 5s ease infinite',
        'cake-2': 'cake-1 5s ease infinite',
    },
    'keyframes': {
        'text': {
            '0%, 100%': {
               'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
               'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
        'cake-1': {
          '0%, 100%': {
            'fill':'darksalmon',
          },
          '25%': {
            'fill':'orchid',
          },
          '50%': {
            'fill':'lightpink',
          },
          '75%': {
            'fill':'plum',
          }
        },
        'cake-2': {
          '0%, 100%': {
            'fill':'lightpink',
          },
          '25%': {
            'fill':'plum',
          },
          '50%': {
            'fill':'darksalmon',
          },
          '75%': {
            'fill':'orchid',
          }
        }
    },
    },
  },
  plugins: [],
};
