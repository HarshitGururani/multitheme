import type { Theme } from '../types/theme';

export const themes: Record<string, Theme> = {
  theme1: {
    id: 'theme1',
    name: 'Theme 1',
    colors: {
      primary: '#2563EB', // Blue primary
      secondary: '#4B5563', // Neutral gray
      background: '#F9FAFB', // Light gray
      surface: '#FFFFFF', // White cards
      text: '#111827', // Dark gray text
      textSecondary: '#6B7280', // Medium gray
      accent: '#10B981', // Green accent
      border: '#E5E7EB', // Light border
    },
    fonts: {
      heading: 'Inter, system-ui, sans-serif',
      body: 'Inter, system-ui, sans-serif',
    },
    layout: {
      type: 'minimal',
      spacing: '1rem',
    },
  },

  theme2: {
    id: 'theme2',
    name: 'Theme 2',
    colors: {
      primary: '#6366F1', // Indigo
      secondary: '#818CF8', // Light Indigo
      background: '#111827', // Dark navy background
      surface: '#1F2937', // Card surface
      text: '#F9FAFB', // White text
      textSecondary: '#9CA3AF', // Muted gray
      accent: '#F59E0B', // Amber for contrast
      border: '#374151', // Dark gray border
    },
    fonts: {
      heading: 'Merriweather, serif',
      body: 'Georgia, serif',
    },
    layout: {
      type: 'sidebar',
      spacing: '1.5rem',
    },
  },

  theme3: {
    id: 'theme3',
    name: 'Theme 3',
    colors: {
      primary: '#E91E63',      // Deep Pink
      secondary: '#FF5722',    // Red Orange
      background: '#FFF0F5',   // Lavender Blush
      surface: '#FFE4E1',      // Misty Rose
      text: '#2E2E2E',         // Dark Gray
      textSecondary: '#757575',// Gray
      accent: '#4CAF50',       // Green
      border: '#FFCDD2',       // Light Pink
      textGradient: 'linear-gradient(135deg, #9C27B0 0%, #E91E63 50%, #FF5722 100%)', // Softer purple to pink gradient
    },
    fonts: {
      heading: 'Pacifico, cursive',
      body: 'Open Sans, sans-serif',
    },
    layout: {
      type: 'card-grid',
      spacing: '2rem',
    },
  }
};
