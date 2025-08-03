import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes/themes';
import type { ThemeType } from '../types/theme';

const Header: React.FC = () => {
  const { theme, currentTheme, setTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme as ThemeType);
    setIsDropdownOpen(false); 
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: theme.colors.surface,
        borderBottom: `1px solid ${theme.colors.border}`,
        fontFamily: theme.fonts.body,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 transition-all duration-300 hover:opacity-80"
            style={{ color: theme.colors.text }}
          >
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white"
              style={{ backgroundColor: theme.colors.primary }}
            >
              MT
            </div>
            <span 
              className="text-xl font-bold"
              style={{ 
                fontFamily: theme.fonts.heading,
                color: theme.colors.text 
              }}
            >
              MultiTheme
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/contact', label: 'Contact' },
            ].map((item) => (
                             <Link
                 key={item.path}
                 to={item.path}
                 className={`transition-all duration-300 hover:opacity-80 ${
                   isActive(item.path) ? 'font-semibold' : ''
                 }`}
                 style={{
                   color: isActive(item.path) ? theme.colors.primary : theme.colors.text,
                   borderBottom: isActive(item.path) ? `2px solid ${theme.colors.primary}` : 'none',
                 }}
               >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side controls - Theme Switcher and Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Theme Switcher - Always Visible */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:opacity-80"
                style={{
                  backgroundColor: theme.colors.background,
                  color: theme.colors.text,
                  border: `1px solid ${theme.colors.border}`,
                }}
              >
                <span className="text-sm hidden sm:block">{themes[currentTheme].name}</span>
                <span className="text-sm sm:hidden">🎨</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg transition-all duration-500 z-50 animate-in fade-in-0 slide-in-from-top-2"
                  style={{
                    backgroundColor: theme.colors.surface,
                    border: `1px solid ${theme.colors.border}`,
                  }}
                >
                  <div className="py-1">
                    {Object.values(themes).map((themeOption) => (
                      <button
                        key={themeOption.id}
                        onClick={() => handleThemeChange(themeOption.id)}
                        className={`block w-full text-left px-4 py-2 text-sm transition-all duration-300 hover:opacity-80 ${
                          currentTheme === themeOption.id ? 'font-semibold' : ''
                        }`}
                        style={{
                          color: currentTheme === themeOption.id ? theme.colors.primary : theme.colors.text,
                          backgroundColor: currentTheme === themeOption.id ? theme.colors.background : 'transparent',
                        }}
                      >
                        {themeOption.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 hover:opacity-80"
                style={{
                  backgroundColor: theme.colors.background,
                  color: theme.colors.text,
                  border: `1px solid ${theme.colors.border}`,
                }}
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isMobileMenuOpen ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden absolute top-16 left-0 right-0 transition-all duration-300 ease-in-out"
          style={{
            backgroundColor: theme.colors.surface,
            borderBottom: `1px solid ${theme.colors.border}`,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
        >
                     <div className="px-4 py-4">
             {/* Navigation Links */}
             <div className="space-y-2">
               {[
                 { path: '/', label: 'Home' },
                 { path: '/about', label: 'About' },
                 { path: '/contact', label: 'Contact' },
               ].map((item) => (
                 <Link
                   key={item.path}
                   to={item.path}
                   onClick={() => setIsMobileMenuOpen(false)}
                   className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                     isActive(item.path) ? 'font-semibold' : ''
                   }`}
                   style={{
                     color: isActive(item.path) ? theme.colors.primary : theme.colors.text,
                     backgroundColor: isActive(item.path) ? theme.colors.background : 'transparent',
                   }}
                 >
                   {item.label}
                 </Link>
               ))}
             </div>
           </div>
        </div>
      )}
    </header>
  );
};

export default Header; 