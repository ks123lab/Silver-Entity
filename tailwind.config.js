// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ... paths to your files
  ],
  theme: {
    extend: {
      fontFamily: {
        // You now have custom Tailwind classes based on your font variables!
        'sans': ['var(--font-dm-sans)', 'sans-serif'], // DM Sans as default sans
        'cursive': ['var(--font-edu-cursive)', 'cursive'],
        'montez': ['var(--font-montez)', 'cursive'],
        'story': ['var(--font-story-script)', 'cursive'],
        'titan': ['var(--font-titan-one)', 'sans-serif'],
      },
    },
  },
  // ... other configs
};