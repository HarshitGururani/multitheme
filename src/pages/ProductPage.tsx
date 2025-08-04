import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Star, Minus, Plus, Check } from 'lucide-react';
import type { Product } from '../types/product';

const ProductPage: React.FC = () => {
  const { theme } = useTheme();
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  // Fetch product data from API
  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        
        if (!response.ok) {
          throw new Error('Product not found');
        }
        
        const productData = await response.json();
        setProduct(productData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);



  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-5 h-5 text-yellow-400 fill-current opacity-50" />
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      );
    }

    return stars;
  };

  // Loading state
  if (loading) {
    return (
      <div 
        className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
        style={{ backgroundColor: theme.colors.background }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: theme.colors.primary }}></div>
          <p style={{ color: theme.colors.textSecondary }}>Loading product...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !product) {
    return (
      <div 
        className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
        style={{ backgroundColor: theme.colors.background }}
      >
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: theme.colors.text }}>
            {error || 'Product not found'}
          </h2>
          <p style={{ color: theme.colors.textSecondary }} className="mb-4">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <a 
            href="/"
            className="inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            style={{ 
              backgroundColor: theme.colors.primary,
              color: '#FFFFFF'
            }}
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <a 
                href="/" 
                className="hover:underline"
                style={{ color: theme.colors.textSecondary }}
              >
                Home
              </a>
            </li>
            <li>
              <span style={{ color: theme.colors.textSecondary }}>/</span>
            </li>
            <li style={{ color: theme.colors.text }}>
              {product.title}
            </li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                     {/* Product Images */}
           <div className="flex justify-center">
             {/* Main Image */}
             <div 
               className="aspect-square rounded-2xl overflow-hidden shadow-lg w-full max-w-md mx-auto"
               style={{ backgroundColor: theme.colors.surface }}
             >
              <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
             </div>
           </div>

                     {/* Product Info */}
           <div className="space-y-6 text-left">
             {/* Title and Category */}
             <div>
               <span 
                 className="text-sm font-medium capitalize tracking-wide"
                 style={{ color: theme.colors.primary }}
               >
                 {product.category}
               </span>
               <h1 
                 className="mt-2 text-3xl font-bold tracking-tight"
                 style={{ color: theme.colors.text }}
               >
                 {product.title}
               </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center ">
                 {renderStars(product.rating.rate)}
               </div>
               <span 
                 className="text-sm font-medium"
                 style={{ color: theme.colors.textSecondary }}
               >
                 {product.rating.rate} out of 5
               </span>
               <span 
                 className="text-sm"
                 style={{ color: theme.colors.textSecondary }}
               >
                 ({product.rating.count} reviews)
               </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline space-x-3">
               <span 
                 className="text-3xl font-bold"
                 style={{ color: theme.colors.text }}
               >
                 ${product.price}
               </span>
               <span 
                 className="text-md line-through"
                 style={{ color: theme.colors.textSecondary }}
               >
                 ${(product.price * 1.2).toFixed(2)}
               </span>
              <span 
                className="text-sm font-medium px-2 py-1 rounded-full"
                style={{ 
                  backgroundColor: theme.colors.accent,
                  color: '#FFFFFF'
                }}
              >
                20% OFF
              </span>
            </div>

            {/* Description */}
            <div>
              <h3 
                className="text-lg font-semibold mb-2"
                style={{ color: theme.colors.text }}
              >
                Description
              </h3>
               <p 
                 className="text-sm leading-relaxed"
                 style={{ color: theme.colors.textSecondary }}
               >
                 {product.description}
               </p>
            </div>

            {/* Quantity Selector */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: theme.colors.text }}
              >
                Quantity
              </label>
              <div className="flex items-center space-x-2">
                  <button
                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
                   className="w-10 h-10 rounded-lg border flex items-center justify-center transition-colors duration-200 hover:bg-gray-50"
                   style={{ 
                     borderColor: theme.colors.border,
                     color: theme.colors.text
                   }}
                 >
                   <Minus className="w-5 h-5" />
                 </button>
                <span 
                  className="w-10 text-center text-lg font-medium"
                  style={{ color: theme.colors.text }}
                >
                  {quantity}
                </span>
                    <button
                   onClick={() => setQuantity(quantity + 1)}
                   className="w-10 h-10 rounded-lg border flex items-center justify-center transition-colors duration-200 hover:bg-gray-50"
                   style={{ 
                     borderColor: theme.colors.border,
                     color: theme.colors.text
                   }}
                 >
                   <Plus className="w-5 h-5" />
                 </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-6">
              <button
                className="w-full py-3 px-4 rounded-xl font-semibold text-md transition-all duration-200 hover:shadow-lg"
                style={{ 
                  backgroundColor: theme.colors.primary,
                  color: '#FFFFFF'
                }}
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
              <button
                className="w-full py-3 px-4 rounded-xl font-semibold text-md border-2 transition-all duration-200 hover:bg-gray-50"
                style={{ 
                  borderColor: theme.colors.primary,
                  color: theme.colors.primary
                }}
              >
                Buy Now
              </button>
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t space-y-2" style={{ borderColor: theme.colors.border }}>
                <div className="flex items-center space-x-2">
                 <Check className="w-5 h-5" style={{ color: theme.colors.accent }} />
                 <span style={{ color: theme.colors.textSecondary }}>Free shipping on orders over $50</span>
               </div>
               <div className="flex items-center space-x-2">
                 <Check className="w-5 h-5" style={{ color: theme.colors.accent }} />
                 <span style={{ color: theme.colors.textSecondary }}>30-day money-back guarantee</span>
               </div>
               <div className="flex items-center space-x-2">
                 <Check className="w-5 h-5" style={{ color: theme.colors.accent }} />
                 <span style={{ color: theme.colors.textSecondary }}>2-year warranty included</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 