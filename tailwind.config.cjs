/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {},
    fontFamily: {
      sans: [
        '"Baloo Thambi 2"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
      ],
      serif: [
        '"Baloo Thambi 2"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
      ],
    },
  },

  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  daisyui: {
    styled: true,
    themes: [
      {
        neulight: {
          primary: '#3742fa',
          secondary: '#ff6b81',
          accent: '#ff6348',
          neutral: '#57606f',
          'base-100': '#dfe4ea',
          info: '#1e90ff',
          success: '#2ed573',
          warning: '#ffa502',
          error: '#ff4757',

          /* base */
          '.shadow-flat': {
            'box-shadow': '20px 20px 60px #bec2c7, -20px -20px 60px #ffffff',
          },

          '.shadow-pressed': {
            'box-shadow':
              'inset 20px 20px 60px #bec2c7, inset -20px -20px 60px #ffffff',
          },

          /* neutral */
          '.shadow-flat-neutral': {
            background: '#57606f',
            'box-shadow': '20px 20px 60px #4a525e, -20px -20px 60px #646e80',
          },

          '.shadow-concave-neutral': {
            background: 'linear-gradient(145deg, #4e5664, #5d6777)',
            'box-shadow': '20px 20px 60px #4a525e, -20px -20px 60px #646e80',
          },

          '.shadow-convex-neutral': {
            background: 'linear-gradient(145deg, #5d6777, #4e5664)',
            'box-shadow': '20px 20px 60px #4a525e, -20px -20px 60px #646e80',
          },

          '.shadow-pressed-neutral': {
            background: '#57606f',
            'box-shadow':
              'inset 20px 20px 60px #4a525e, inset -20px -20px 60px #646e80',
          },

          /* base-100 */
          '.shadow-flat-base-100': {
            background: '#dfe4ea',
            'box-shadow': '20px 20px 60px #bec2c7, -20px -20px 60px #ffffff',
          },

          '.shadow-concave-base-100': {
            background: 'linear-gradient(145deg, #c9cdd3, #eff4fa)',
            'box-shadow': '20px 20px 60px #bec2c7, -20px -20px 60px #ffffff',
          },

          '.shadow-convex-base-100': {
            background: 'linear-gradient(145deg, #eff4fa, #c9cdd3)',
            'box-shadow': '20px 20px 60px #bec2c7, -20px -20px 60px #ffffff',
          },

          '.shadow-pressed-base-100': {
            background: '#dfe4ea',
            'box-shadow':
              'inset 20px 20px 60px #bec2c7, inset -20px -20px 60px #ffffff',
          },

          /* base-200 */
          '.shadow-flat-base-200': {
            background: '#c3cdd8',
            'box-shadow': '20px 20px 60px #a6aeb8, -20px -20px 60px #e0ecf8',
          },

          '.shadow-concave-base-200': {
            background: 'linear-gradient(145deg, #b0b9c2, #d1dbe7)',
            'box-shadow': '20px 20px 60px #a6aeb8, -20px -20px 60px #e0ecf8',
          },

          '.shadow-convex-base-200': {
            background: 'linear-gradient(145deg, #d1dbe7, #b0b9c2)',
            'box-shadow': '20px 20px 60px #a6aeb8, -20px -20px 60px #e0ecf8',
          },

          '.shadow-pressed-base-200': {
            background: '#c3cdd8',
            'box-shadow':
              'inset 20px 20px 60px #a6aeb8, inset -20px -20px 60px #e0ecf8',
          },

          /* base-300 */
          '.shadow-flat-base-300': {
            background: '#abb8c8',
            'box-shadow': '20px 20px 60px #919caa, -20px -20px 60px #c5d4e6',
          },

          '.shadow-concave-base-300': {
            background: 'linear-gradient(145deg, #9aa6b4, #b7c5d6)',
            'box-shadow': '20px 20px 60px #919caa, -20px -20px 60px #c5d4e6',
          },

          '.shadow-convex-base-300': {
            background: 'linear-gradient(145deg, #b7c5d6, #9aa6b4)',
            'box-shadow': '20px 20px 60px #919caa, -20px -20px 60px #c5d4e6',
          },

          '.shadow-pressed-base-300': {
            background: '#abb8c8',
            'box-shadow':
              'inset 20px 20px 60px #919caa, inset -20px -20px 60px #c5d4e6',
          },
        },

        neudark: {
          primary: '#3742fa',
          secondary: '#ff6b81',
          accent: '#ff6348',
          neutral: '#dfe4ea',
          'base-100': '#2f3542',
          info: '#1e90ff',
          success: '#2ed573',
          warning: '#ffa502',
          error: '#ff4757',

          /* base */
          '.shadow-flat': {
            'box-shadow': '20px 20px 60px #282d38, -20px -20px 60px #363d4c',
          },

          '.shadow-pressed': {
            'box-shadow':
              'inset 20px 20px 60px #282d38, inset -20px -20px 60px #363d4c',
          },

          /* neutral */
          '.shadow-flat-neutral': {
            background: '#dfe4ea',
            'box-shadow': '20px 20px 60px #bec2c7, -20px -20px 60px #ffffff',
          },

          '.shadow-concave-neutral': {
            background: 'linear-gradient(145deg, #c9cdd3, #eff4fa)',
            'box-shadow': '20px 20px 60px #bec2c7, -20px -20px 60px #ffffff',
          },

          '.shadow-convex-neutral': {
            background: 'linear-gradient(145deg, #eff4fa, #c9cdd3)',
            'box-shadow': '20px 20px 60px #bec2c7, -20px -20px 60px #ffffff',
          },

          '.shadow-pressed-neutral': {
            background: '#dfe4ea',
            'box-shadow':
              'inset 20px 20px 60px #bec2c7, inset -20px -20px 60px #ffffff',
          },

          /* base-100 */
          '.shadow-flat-base-100': {
            background: '#2f3542',
            'box-shadow': '20px 20px 60px #282d38, -20px -20px 60px #363d4c',
          },

          '.shadow-concave-base-100': {
            background: 'linear-gradient(145deg, #2a303b, #323947)',
            'box-shadow': '20px 20px 60px #282d38, -20px -20px 60px #363d4c',
          },

          '.shadow-convex-base-100': {
            background: 'linear-gradient(145deg, #323947, #2a303b)',
            'box-shadow': '20px 20px 60px #282d38, -20px -20px 60px #363d4c',
          },

          '.shadow-pressed-base-100': {
            background: '#2f3542',
            'box-shadow':
              'inset 20px 20px 60px #282d38, inset -20px -20px 60px #363d4c',
          },

          /* base-200 */
          '.shadow-flat-base-200': {
            background: '#2a303b',
            'box-shadow': '20px 20px 60px #242932, -20px -20px 60px #303744',
          },

          '.shadow-concave-base-200': {
            background: 'linear-gradient(145deg, #262b35, #2d333f)',
            'box-shadow': '20px 20px 60px #242932, -20px -20px 60px #303744',
          },

          '.shadow-convex-base-200': {
            background: 'linear-gradient(145deg, #2d333f, #262b35)',
            'box-shadow': '20px 20px 60px #242932, -20px -20px 60px #303744',
          },

          '.shadow-pressed-base-200': {
            background: '#2a303b',
            'box-shadow':
              'inset 20px 20px 60px #242932, inset -20px -20px 60px #303744',
          },

          /* base-300 */
          '.shadow-flat-base-300': {
            background: '#262b35',
            'box-shadow': '20px 20px 60px #20252d, -20px -20px 60px #2c313d',
          },

          '.shadow-concave-base-300': {
            background: 'linear-gradient(145deg, #222730, #292e39)',
            'box-shadow': '20px 20px 60px #20252d, -20px -20px 60px #2c313d',
          },

          '.shadow-convex-base-300': {
            background: 'linear-gradient(145deg, #292e39, #222730)',
            'box-shadow': '20px 20px 60px #20252d, -20px -20px 60px #2c313d',
          },

          '.shadow-pressed-base-300': {
            background: '#262b35',
            'box-shadow':
              'inset 20px 20px 60px #20252d, inset -20px -20px 60px #2c313d',
          },
        },
      },
    ],
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    darkTheme: 'neudark',
  },
}
