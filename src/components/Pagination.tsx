import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // If we have 5 or fewer pages, show all
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Calculate range around current page
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're at the start or end
      if (currentPage <= 2) {
        end = Math.min(totalPages - 1, 4);
      } else if (currentPage >= totalPages - 1) {
        start = Math.max(2, totalPages - 3);
      }
      
      // Add ellipsis if needed
      if (start > 2) {
        pages.push('...');
      }
      
      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pages.push('...');
      }
      
      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <button 
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-md ${
          currentPage === 1 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-blue-600 hover:bg-blue-50'
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft size={20} />
      </button>
      
      {getPageNumbers().map((page, index) => (
        typeof page === 'number' ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 rounded-md transition-colors ${
              currentPage === page
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-blue-50'
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="text-gray-400">
            {page}
          </span>
        )
      ))}
      
      <button 
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-md ${
          currentPage === totalPages 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-blue-600 hover:bg-blue-50'
        }`}
        aria-label="Next page"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;