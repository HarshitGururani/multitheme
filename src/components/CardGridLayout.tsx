import React from 'react';
import { useTheme } from "../contexts/ThemeContext";
import { Link } from 'react-router-dom';
import type { Product } from '../types/product';

interface CardGridLayoutProps {
  products: Product[];
}

const CardGridLayout: React.FC<CardGridLayoutProps> = ({ products }) => {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="group relative overflow-hidden rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-101 hover:shadow-md cursor-pointer"
          style={{
            backgroundColor: theme.colors.surface,
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          <div className="p-3 sm:p-4">
            <div className="relative mb-3 sm:mb-4">
              <div className="aspect-square bg-gray-50 rounded-md sm:rounded-lg overflow-hidden flex items-center justify-center" style={{ border: `1px solid ${theme.colors.border}` }}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[80%] md:w-full md:h-full object-contain p-2 transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div
                className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold text-white shadow-sm"
                style={{ backgroundColor: theme.colors.accent }}
              >
                {product.category.split(" ")[0]}
              </div>
            </div>
            <h3
              className="text-lg font-bold mb-2 line-clamp-2"
              style={{ 
                color: theme.colors.text,
                fontFamily: theme.fonts.heading 
              }}
            >
              {product.title}
            </h3>
            <p
              className="text-xs sm:text-sm mb-3 line-clamp-2 sm:line-clamp-3"
              style={{ color: theme.colors.textSecondary }}
            >
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <span
                className="text-lg sm:text-xl font-bold"
                style={{ color: theme.colors.primary }}
              >
                ${product.price}
              </span>
              <div className="flex items-center space-x-1">
                <span
                  className="text-xs sm:text-sm"
                  style={{ color: theme.colors.textSecondary }}
                >
                  ⭐ {product.rating.rate}
                </span>
                <span
                  className="text-xs"
                  style={{ color: theme.colors.textSecondary }}
                >
                  ({product.rating.count})
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardGridLayout; 