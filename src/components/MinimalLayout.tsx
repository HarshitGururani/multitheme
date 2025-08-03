import React from 'react';
import { useTheme } from "../contexts/ThemeContext";
import { FaStar } from 'react-icons/fa';
import type { Product } from '../types/product';

interface MinimalLayoutProps {
  products: Product[];
}

const MinimalLayout: React.FC<MinimalLayoutProps> = ({ products }) => {
  const { theme } = useTheme();

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="space-y-4">
        {products.map((product) => (
          <article
            key={product.id}
            className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-xl 
                       transition-all duration-300 hover:shadow-lg hover:shadow-black/5 
                       hover:-translate-y-0.5 cursor-pointer group border-0"
            style={{
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
            }}
          >
            {/* Product Image */}
            <div className="flex-shrink-0">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={`${product.title} product image`}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain 
                             transition-transform duration-300 group-hover:scale-105"
                  style={{ 
                    border: `1px solid ${theme.colors.border}`,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                  }}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = theme.colors.border;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+PHBhdGggZD0iTTI0IDMySzQwIDQ4TDU2IDMyVjU2SDQwSDI0VjMyWiIgZmlsbD0iI0QxRDVEQiIvPjwvc3ZnPg==';
                  }}
                />
              </div>
            </div>
  
            {/* Product Details */}
            <div className="flex-1 min-w-0">
              {/* Title */}
              <h3
                className="text-base sm:text-lg font-semibold mb-2 leading-tight transition-colors duration-200 group-hover:opacity-80 text-left md:text-center"
                style={{ 
                  color: theme.colors.text,
                  fontFamily: theme.fonts.heading,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
                title={product.title}
              >
                {product.title}
              </h3>
              
              {/* Description */}
              <p
                className="text-xs sm:text-sm mb-3 leading-relaxed text-left md:text-center"
                style={{ 
                  color: theme.colors.textSecondary,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  lineHeight: '1.5'
                }}
                title={product.description}
              >
                {product.description}
              </p>
              
              {/* Price and Rating Row */}
              <div className="flex items-center justify-between">
                {/* Price */}
                <span
                  className="text-lg sm:text-xl font-bold transition-all duration-200 
                             group-hover:scale-105 transform"
                  style={{ color: theme.colors.primary }}
                >
                  ${product.price}
                </span>
                
                {/* Rating */}
                <div className="flex items-center gap-1.5">
                  <FaStar size={14} className="text-yellow-400 flex-shrink-0" />
                  <span
                    className="text-xs sm:text-sm font-medium"
                    style={{ color: theme.colors.text }}
                  >
                    {product.rating.rate}
                  </span>
                  <span
                    className="text-xs opacity-75 hidden sm:inline"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    ({product.rating.count} reviews)
                  </span>
                  <span
                    className="text-xs opacity-75 sm:hidden"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    ({product.rating.count})
                  </span>
                </div>
              </div>
            </div>
  
            {/* Subtle Arrow Indicator */}
            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 
                            transition-all duration-200 transform group-hover:translate-x-1">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none"
                className="mt-2"
                style={{ color: theme.colors.textSecondary }}
              >
                <path 
                  d="M6 12L10 8L6 4" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </article>
        ))}
      </div>
    </div>      
  );
};

export default MinimalLayout; 