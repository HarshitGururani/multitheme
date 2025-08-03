import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const SkeletonCardGrid: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-xl"
          style={{
            backgroundColor: theme.colors.surface,
            border: `2px solid ${theme.colors.border}`,
          }}
        >
          <div className="p-4">
            {/* Skeleton Image Container */}
            <div className="relative mb-4">
              <div className="w-full h-32 sm:h-40 md:h-48 rounded-lg animate-pulse"
                   style={{ backgroundColor: theme.colors.border }} />
              
              {/* Skeleton Category Badge */}
              <div className="absolute top-2 right-2 w-16 h-6 rounded-full animate-pulse"
                   style={{ backgroundColor: theme.colors.border }} />
            </div>
            
            {/* Skeleton Title */}
            <div className="space-y-2 mb-2">
              <div className="h-5 w-full rounded animate-pulse" 
                   style={{ backgroundColor: theme.colors.border }} />
              <div className="h-5 w-3/4 rounded animate-pulse" 
                   style={{ backgroundColor: theme.colors.border }} />
            </div>
            
            {/* Skeleton Description */}
            <div className="space-y-1 mb-3">
              <div className="h-3 w-full rounded animate-pulse" 
                   style={{ backgroundColor: theme.colors.border }} />
              <div className="h-3 w-full rounded animate-pulse" 
                   style={{ backgroundColor: theme.colors.border }} />
              <div className="h-3 w-2/3 rounded animate-pulse" 
                   style={{ backgroundColor: theme.colors.border }} />
            </div>
            
            {/* Skeleton Price and Rating */}
            <div className="flex items-center justify-between">
              <div className="h-6 w-16 rounded animate-pulse" 
                   style={{ backgroundColor: theme.colors.border }} />
              <div className="flex items-center space-x-1">
                <div className="h-4 w-8 rounded animate-pulse" 
                     style={{ backgroundColor: theme.colors.border }} />
                <div className="h-3 w-8 rounded animate-pulse" 
                     style={{ backgroundColor: theme.colors.border }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCardGrid; 