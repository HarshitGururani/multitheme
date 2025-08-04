import React, { useState } from 'react';
import { useTheme } from "../contexts/ThemeContext";
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import type { Product } from '../types/product';

interface SidebarLayoutProps {
  products: Product[];
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ products }) => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full  w-64 p-6 z-50 lg:z-auto transform transition-transform duration-300 ease-in-out lg:transform-none lg:sticky lg:top-20 lg:h-fit rounded-lg ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
        style={{
          backgroundColor: theme.colors.surface,
          borderRight: `1px solid ${theme.colors.border}`,
        }}
      >
        {/* Mobile Close Button */}
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <h3 
            className="text-lg font-semibold"
            style={{ color: theme.colors.text }}
          >
            Categories
          </h3>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-lg hover:bg-opacity-80 transition-colors"
            style={{ 
              backgroundColor: theme.colors.background,
              color: theme.colors.text 
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        
        {/* Active Category - Dashboard Style */}
        <div
          className="flex items-center justify-between px-4 py-3 rounded-lg mb-6 cursor-pointer"
          style={{
            backgroundColor: selectedCategory === 'all' ? theme.colors.primary : theme.colors.background,
            color: selectedCategory === 'all' ? 'white' : theme.colors.text,
            border: `1px solid ${selectedCategory === 'all' ? theme.colors.primary : theme.colors.border}`,
          }}
          onClick={() => {
            setSelectedCategory('all');
            setIsSidebarOpen(false);
          }}
        >
          <span className="font-medium">All Products</span>
          {selectedCategory === 'all' && <FaChevronRight className="w-4 h-4" />} 
        </div>

        {/* Category Navigation */}
        <div className="space-y-2">
          {Array.from(new Set(products.map(p => p.category))).map((category) => (
            <div
              key={category}
              className="flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-opacity-80"
              style={{
                backgroundColor: selectedCategory === category ? theme.colors.primary : theme.colors.background,
                color: selectedCategory === category ? 'white' : theme.colors.text,
                border: `1px solid ${selectedCategory === category ? theme.colors.primary : theme.colors.border}`,
              }}
              onClick={() => {
                setSelectedCategory(category);
                setIsSidebarOpen(false);
              }}
            >
              {/* Category Name */}
              <span className="font-medium text-sm">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
             
              {/* Product Count and Arrow */}
              <div className="flex items-center gap-2">
                <span
                  className="text-xs px-2 py-1 rounded-full font-medium"
                  style={{ 
                    backgroundColor: selectedCategory === category ? 'rgba(255, 255, 255, 0.2)' : theme.colors.primary + '15',
                    color: selectedCategory === category ? 'white' : theme.colors.primary 
                  }}
                >
                  {products.filter(p => p.category === category).length}
                </span>
                {selectedCategory === category && (
                  <FaChevronRight className="w-4 h-4" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 pt-6 border-t" style={{ borderColor: theme.colors.border }}>
          <div className="text-center">
            <div
              className="text-2xl font-bold mb-1"
              style={{ color: theme.colors.primary }}
            >
              {filteredProducts.length}
            </div>
            <div
              className="text-xs"
              style={{ color: theme.colors.textSecondary }}
            >
              {selectedCategory === 'all' ? 'Total Products' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products`}
            </div>
          </div>
        </div>
      </aside>
      
      <main className="flex-1 lg:ml-6">
        {/* Mobile Toggle Button - Sticky */}
        <div className="lg:hidden sticky top-20 z-30 mb-6">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
              color: theme.colors.text,
              backdropFilter: 'blur(10px)',
              boxShadow: `0 4px 6px -1px ${theme.colors.border}20`
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="font-medium">Categories</span>
            <span 
              className="text-xs px-2 py-1 rounded-full"
              style={{ 
                backgroundColor: theme.colors.primary + '15',
                color: theme.colors.primary 
              }}
            >
              {selectedCategory === 'all' ? products.length : products.filter(p => p.category === selectedCategory).length}
            </span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="p-4 rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer"
              style={{
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 sm:h-40 md:h-48 object-contain mb-4 rounded"
                style={{ border: `1px solid ${theme.colors.border}` }}
              />
              <h3
                className="font-bold mb-2"
                style={{ 
                  color: theme.colors.text,
                  fontFamily: theme.fonts.heading 
                }}
              >
                {product.title}
              </h3>
              <p
                className="text-sm mb-2"
                style={{ color: theme.colors.textSecondary }}
              >
                {product.description.substring(0, 80)}...
              </p>
              <div className="flex items-center justify-between">
                <span
                  className="font-bold"
                  style={{ color: theme.colors.primary }}
                >
                  ${product.price}
                </span>
                <span
                  className="text-sm"
                  style={{ color: theme.colors.textSecondary }}
                >
                  ⭐ {product.rating.rate}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SidebarLayout; 