import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const SkeletonSidebar: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="flex">
      {/* Skeleton Sidebar */}
      <aside
        className="fixed top-0 left-0 h-full w-64 p-6 z-50 lg:z-auto transform transition-transform duration-300 ease-in-out lg:transform-none lg:sticky lg:top-20 lg:h-fit rounded-lg"
        style={{
          backgroundColor: theme.colors.surface,
          borderRight: `1px solid ${theme.colors.border}`,
        }}
      >
        {/* Skeleton Mobile Close Button */}
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <div className="h-6 w-20 rounded animate-pulse" 
               style={{ backgroundColor: theme.colors.border }} />
          <div className="w-8 h-8 rounded animate-pulse" 
               style={{ backgroundColor: theme.colors.border }} />
        </div>
        
        {/* Skeleton Active Category */}
        <div className="flex items-center justify-between px-4 py-3 rounded-lg mb-6">
          <div className="h-5 w-24 rounded animate-pulse" 
               style={{ backgroundColor: theme.colors.border }} />
          <div className="w-4 h-4 rounded animate-pulse" 
               style={{ backgroundColor: theme.colors.border }} />
        </div>

        {/* Skeleton Category Navigation */}
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 rounded-lg"
            >
              {/* Skeleton Category Name */}
              <div className="h-4 w-20 rounded animate-pulse" 
                   style={{ backgroundColor: theme.colors.border }} />
             
              {/* Skeleton Product Count and Arrow */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-5 rounded-full animate-pulse" 
                     style={{ backgroundColor: theme.colors.border }} />
                <div className="w-4 h-4 rounded animate-pulse" 
                     style={{ backgroundColor: theme.colors.border }} />
              </div>
            </div>
          ))}
        </div>

        {/* Skeleton Quick Stats */}
        <div className="mt-8 pt-6 border-t" style={{ borderColor: theme.colors.border }}>
          <div className="text-center">
            <div className="h-8 w-12 rounded animate-pulse mb-2 mx-auto" 
                 style={{ backgroundColor: theme.colors.border }} />
            <div className="h-3 w-20 rounded animate-pulse mx-auto" 
                 style={{ backgroundColor: theme.colors.border }} />
          </div>
        </div>
      </aside>
      
      {/* Skeleton Main Content */}
      <main className="flex-1 lg:ml-6">
        {/* Skeleton Mobile Toggle Button */}
        <div className="lg:hidden sticky top-20 z-30 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg"
               style={{
                 backgroundColor: theme.colors.surface,
                 border: `1px solid ${theme.colors.border}`,
               }}>
            <div className="w-5 h-5 rounded animate-pulse" 
                 style={{ backgroundColor: theme.colors.border }} />
            <div className="h-4 w-20 rounded animate-pulse" 
                 style={{ backgroundColor: theme.colors.border }} />
            <div className="w-6 h-5 rounded-full animate-pulse" 
                 style={{ backgroundColor: theme.colors.border }} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="p-4 rounded-lg transition-all duration-300"
              style={{
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              {/* Skeleton Image */}
              <div className="w-full h-32 sm:h-40 md:h-48 rounded mb-4 animate-pulse"
                   style={{ backgroundColor: theme.colors.border }} />
              
              {/* Skeleton Title */}
              <div className="h-5 w-3/4 rounded animate-pulse mb-2" 
                   style={{ backgroundColor: theme.colors.border }} />
              
              {/* Skeleton Description */}
              <div className="space-y-1 mb-2">
                <div className="h-3 w-full rounded animate-pulse" 
                     style={{ backgroundColor: theme.colors.border }} />
                <div className="h-3 w-2/3 rounded animate-pulse" 
                     style={{ backgroundColor: theme.colors.border }} />
              </div>
              
              {/* Skeleton Price and Rating */}
              <div className="flex items-center justify-between">
                <div className="h-5 w-16 rounded animate-pulse" 
                     style={{ backgroundColor: theme.colors.border }} />
                <div className="h-4 w-12 rounded animate-pulse" 
                     style={{ backgroundColor: theme.colors.border }} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SkeletonSidebar; 