/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        'light-bg': '#ffffff',
        'light-text': '#1f2937',
        'light-primary': '#3b82f6',
        'light-secondary': '#6b7280',
        'light-accent': '#f59e0b',
        
        // Dark theme colors
        'dark-bg': '#111827',
        'dark-text': '#f9fafb',
        'dark-primary': '#60a5fa',
        'dark-secondary': '#9ca3af',
        'dark-accent': '#fbbf24',
        
        // Custom theme colors
        'custom-bg': '#fef3c7',
        'custom-text': '#92400e',
        'custom-primary': '#d97706',
        'custom-secondary': '#f59e0b',
        'custom-accent': '#dc2626',
      },
    },
  },
  plugins: [],
} 