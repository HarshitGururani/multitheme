import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const SkeletonMinimal: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="space-y-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-xl border-0"
            style={{
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
            }}
          >
            {/* Skeleton Image */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg animate-pulse"
                   style={{ backgroundColor: theme.colors.border }} />
            </div>

            {/* Skeleton Content */}
            <div className="flex-1 min-w-0 space-y-3">
              {/* Skeleton Title */}
              <div className="space-y-2">
                <div className="h-4 rounded animate-pulse" 
                     style={{ backgroundColor: theme.colors.border, width: '80%' }} />
                <div className="h-4 rounded animate-pulse" 
                     style={{ backgroundColor: theme.colors.border, width: '60%' }} />
              </div>
              
              {/* Skeleton Description */}
              <div className="space-y-2">
                <div className="h-3 rounded animate-pulse" 
                     style={{ backgroundColor: theme.colors.border, width: '100%' }} />
                <div className="h-3 rounded animate-pulse" 
                     style={{ backgroundColor: theme.colors.border, width: '70%' }} />
              </div>
              
              {/* Skeleton Price and Rating */}
              <div className="flex items-center justify-between">
                <div className="h-6 w-16 rounded animate-pulse" 
                     style={{ backgroundColor: theme.colors.border }} />
                <div className="h-4 w-20 rounded animate-pulse" 
                     style={{ backgroundColor: theme.colors.border }} />
              </div>
            </div>

            {/* Skeleton Arrow */}
            <div className="flex-shrink-0">
              <div className="w-4 h-4 rounded animate-pulse mt-2" 
                   style={{ backgroundColor: theme.colors.border }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonMinimal; 