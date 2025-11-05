export interface Theme {
  name: string;
  colors: {
    [key: string]: string;
  };
}

export const themes: Theme[] = [
  {
    name: 'dark',
    colors: {
      'background': '#111827', // Gray 900
      'card': '#1f2937',       // Gray 800
      'border': '#374151',     // Gray 700
      'text-primary': '#f9fafb', // Gray 50
      'text-secondary': '#d1d5db', // Gray 300
      'accent': '#38bdf8',       // Sky 400
      'accent-hover': '#7dd3fc', // Sky 300
      'tag-bg': '#374151',       // Gray 700
      'tag-text': '#d1d5db',     // Gray 300
      'tag-bg-active': '#38bdf8', // Sky 400
      'tag-text-active': '#111827', // Gray 900
      'error': '#f87171',        // Red 400
      'success': '#4ade80',      // Green 400
      'button-bg': '#374151',    // Gray 700
      'code-bg': 'rgba(249, 250, 251, 0.1)',
      'pre-bg': '#0d1117'
    },
  },
  {
    name: 'light',
    colors: {
      'background': '#f9fafb', // Gray 50
      'card': '#ffffff',       // White
      'border': '#e5e7eb',     // Gray 200
      'text-primary': '#111827', // Gray 900
      'text-secondary': '#4b5563', // Gray 600
      'accent': '#0ea5e9',       // Sky 600
      'accent-hover': '#0284c7', // Sky 700
      'tag-bg': '#e5e7eb',       // Gray 200
      'tag-text': '#4b5563',     // Gray 600
      'tag-bg-active': '#0ea5e9', // Sky 600
      'tag-text-active': '#ffffff', // White
      'error': '#ef4444',        // Red 500
      'success': '#22c55e',      // Green 500
      'button-bg': '#f3f4f6',    // Gray 100
      'code-bg': 'rgba(0, 0, 0, 0.05)',
      'pre-bg': '#f3f4f6'
    },
  },
  {
    name: 'sepia',
    colors: {
      'background': '#f1e7d0',
      'card': '#fbf3e3',
      'border': '#e4d8c5',
      'text-primary': '#433422',
      'text-secondary': '#5f4e3a',
      'accent': '#b45309',       // Amber 700
      'accent-hover': '#92400e', // Amber 800
      'tag-bg': '#e4d8c5',
      'tag-text': '#5f4e3a',
      'tag-bg-active': '#b45309',
      'tag-text-active': '#fbf3e3',
      'error': '#c0392b',
      'success': '#16a34a',
      'button-bg': '#e4d8c5',
      'code-bg': 'rgba(0, 0, 0, 0.05)',
      'pre-bg': '#e0d5c1'
    },
  },
  {
    name: 'retro',
    colors: {
      'background': '#3D2B1F', // Dark Brown
      'card': '#6F4E37',       // Coffee
      'border': '#964B00',     // Brown
      'text-primary': '#F5F5DC', // Beige
      'text-secondary': '#A0522D', // Sienna
      'accent': '#CC5500',       // Burnt Orange
      'accent-hover': '#E66100', // Brighter Burnt Orange
      'tag-bg': '#568203',       // Avocado
      'tag-text': '#F5F5DC',     // Beige
      'tag-bg-active': '#CC5500', // Burnt Orange
      'tag-text-active': '#F5F5DC', // Beige
      'error': '#C04000',        // Mahogany
      'success': '#568203',      // Avocado
      'button-bg': '#964B00',    // Brown
      'code-bg': 'rgba(111, 78, 55, 0.2)',
      'pre-bg': '#2A1D13'
    },
  }
];