import React, { useEffect, useState } from 'react';
import { useTheme } from "../contexts/ThemeContext"
import SkeletonMinimal from '../components/SkeletonMinimal';
import SkeletonSidebar from '../components/SkeletonSidebar';
import SkeletonCardGrid from '../components/SkeletonCardGrid';
import MinimalLayout from '../components/MinimalLayout';
import SidebarLayout from '../components/SidebarLayout';
import CardGridLayout from '../components/CardGridLayout';
import type { Product } from '../types/product';

const Home: React.FC = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderContent = () => {
    if (loading) {
      switch (theme.layout.type) {
        case 'minimal':
          return <SkeletonMinimal />;
        case 'sidebar':
          return <SkeletonSidebar />;
        case 'card-grid':
          return <SkeletonCardGrid />;
        default:
          return <SkeletonMinimal />;
      }
    }

    if (error) {
      return (
        <div className="flex items-center justify-center min-h-64">
          <div
            className="text-lg text-center"
            style={{ color: theme.colors.textSecondary }}
          >
            Error: {error}
          </div>
        </div>
      );
    }

    switch (theme.layout.type) {
      case 'minimal':
        return <MinimalLayout products={products} />;
      case 'sidebar':
        return <SidebarLayout products={products} />;
      case 'card-grid':
        return <CardGridLayout products={products} />;
      default:
        return <MinimalLayout products={products} />;
    }
  };

  return (
    <div 
      className="min-h-screen transition-all duration-300 ease-in-out px-4 sm:px-6 lg:px-8 pt-24 pb-8"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.fonts.body,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ 
              color: theme.colors.textGradient ? 'transparent' : theme.colors.text,
              background: theme.colors.textGradient || 'none',
              backgroundClip: theme.colors.textGradient ? 'text' : 'border-box',
              WebkitBackgroundClip: theme.colors.textGradient ? 'text' : 'border-box',
              WebkitTextFillColor: theme.colors.textGradient ? 'transparent' : 'currentColor', 
              fontFamily: theme.fonts.heading 
            }}
          >
            Welcome to MultiTheme
          </h1>
          <p
            className="text-xl"
            style={{ color: theme.colors.textSecondary }}
          >
            Discover amazing products with our beautiful themes
          </p>
        </div>
        
        {renderContent()}
      </div>
    </div>
  );
};

export default Home; 