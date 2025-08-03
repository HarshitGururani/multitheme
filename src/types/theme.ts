export type ThemeType = 'theme1' | 'theme2' | 'theme3';

export interface Theme {
  id: ThemeType;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    accent: string;
    border: string;
    textGradient?: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  layout: {
    type: 'minimal' | 'sidebar' | 'card-grid';
    spacing: string;
  };
}

export interface ThemeContextType {
  currentTheme: ThemeType;
  theme: Theme;
  setTheme: (theme: ThemeType) => void;
} 