/**
 * Tailwind CSS Config for af-components
 * This config ensures all necessary utilities are available for the components
 */
module.exports = {
  content: [
    './src/library/**/*.{js,ts,jsx,tsx}',
    './src/exports.ts',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffde00',
        'primary-hover': '#e8c800',
        'dark-yellow': '#a59000',
        'primary-dark': '#131313',
        'primary-dark-hover': '#393939',
        'soft-white': '#fafafa',
        'neutral-gray': '#44474c',
        danger: '#de1848',
        'danger-dark': '#d3093a',
      },
      screens: {
        'xxs': '360px',
        'xs': '420px',
        's': '640px',
        'm': '709px',
        'ml': '768px',
        'xl': '1062px',
        'xxl': '1092px',
        'xxxl': '1339px',
        'md_lg': '998px',
      },
    },
  },
  plugins: [
    // Container queries plugin
    require('@tailwindcss/container-queries'),
  ],
  // Safelist important classes to ensure they're included in the build
  safelist: [
    // Custom utility classes
    'flex-cc',
    'flex-c',
    'flex-b',
    'flex-cb',
    'responsive-pad',
    'block-shadow',
    'link-anim',
    'cta-shadow',
    // Container query classes
    '@container',
    '@[640px]:text-left',
    '@[768px]:flex-row',
    '@[768px]:flex-b',
    '@[768px]:space-y-0',
    '@[768px]:w-[70%]',
    '@[640px]:h-[500px]',
    '@[1280px]:h-[380px]',
    // Color classes
    'bg-primary',
    'text-primary',
    'hover:bg-primary-hover',
    // Layout classes
    'max-w-[1540px]',
  ],
};
