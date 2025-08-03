import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Palette, Moon, Sparkles, Code, Database, Globe, Zap, Compass } from 'lucide-react';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div 
      className="min-h-screen transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.fonts.body,
        padding: `${theme.layout.spacing} ${theme.layout.spacing} ${theme.layout.spacing} ${theme.layout.spacing}`,
        paddingTop: `calc(4rem + ${theme.layout.spacing})`,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ 
              color: theme.colors.text,
              fontFamily: theme.fonts.heading 
            }}
          >
            About MultiTheme
          </h1>
          <p
            className="text-xl"
            style={{ color: theme.colors.textSecondary }}
          >
            A beautiful demonstration of dynamic theming in React
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div
            className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
            }}
          >
            <div className="flex items-center mb-4">
              <Compass 
                className="mr-3" 
                size={24}
                style={{ color: theme.colors.primary }}
              />
              <h2
                className="text-2xl font-bold"
                style={{ 
                  color: theme.colors.primary,
                  fontFamily: theme.fonts.heading 
                }}
              >
                Our Mission
              </h2>
            </div>
            <p
              className="leading-relaxed text-left"
              style={{ color: theme.colors.textSecondary }}
            >
              We believe that user experience should be personalized and beautiful. 
              Our multi-theme application demonstrates how modern web applications 
              can adapt to different user preferences while maintaining functionality 
              and accessibility.
            </p>
          </div>

          <div
            className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
            }}
          >
            <div className="flex items-center mb-4">
              <Code 
                className="mr-3" 
                size={24}
                style={{ color: theme.colors.primary }}
              />
              <h2
                className="text-2xl font-bold"
                style={{ 
                  color: theme.colors.primary,
                  fontFamily: theme.fonts.heading 
                }}
              >
                Technology Stack
              </h2>
            </div>
            <ul
              className="space-y-2"
              style={{ color: theme.colors.textSecondary }}
            >
              <li className="flex items-center">
                <Zap className="mr-2" size={16} />
                React 19 with TypeScript
              </li>
              <li className="flex items-center">
                <Globe className="mr-2" size={16} />
                React Router for navigation
              </li>
              <li className="flex items-center">
                <Database className="mr-2" size={16} />
                Context API for state management
              </li>
              <li className="flex items-center">
                <Code className="mr-2" size={16} />
                Tailwind CSS for styling
              </li>
              <li className="flex items-center">
                <Database className="mr-2" size={16} />
                FakeStore API for product data
              </li>
              <li className="flex items-center">
                <Zap className="mr-2" size={16} />
                LocalStorage for theme persistence
              </li>
            </ul>
          </div>
        </div>

        <div
          className="p-8 rounded-lg transition-all duration-300 hover:shadow-lg"
          style={{
            backgroundColor: theme.colors.surface,
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          <h2
            className="text-3xl font-bold mb-6 text-center"
            style={{ 
              color: theme.colors.text,
              fontFamily: theme.fonts.heading 
            }}
          >
            Theme Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: theme.colors.primary, color: 'white' }}
              >
                <Palette size={32} />
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ 
                  color: theme.colors.text,
                  fontFamily: theme.fonts.heading 
                }}
              >
                Theme 1 - Minimal
              </h3>
              <p
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                Clean, light design with simple sans-serif fonts and minimalist layout
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: theme.colors.primary, color: 'white' }}
              >
                <Moon size={32} />
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ 
                  color: theme.colors.text,
                  fontFamily: theme.fonts.heading 
                }}
              >
                Theme 2 - Dark
              </h3>
              <p
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                Dark mode with sidebar layout and elegant serif typography
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: theme.colors.primary, color: 'white' }}
              >
                <Sparkles size={32} />
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ 
                  color: theme.colors.text,
                  fontFamily: theme.fonts.heading 
                }}
              >
                Theme 3 - Colorful
              </h3>
              <p
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                Vibrant colors with card-based grid layout and playful fonts
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p
            className="text-lg"
            style={{ color: theme.colors.textSecondary }}
          >
            Experience the power of dynamic theming by switching between themes using the dropdown in the header!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 