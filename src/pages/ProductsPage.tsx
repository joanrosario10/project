import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import { Search } from 'lucide-react';
import toast from 'react-hot-toast';

const ITEMS_PER_PAGE = 6;

const ProductsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle search/filter
  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
    setCurrentPage(1); // Reset to first page when search changes
  }, [searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} added to cart!`, {
      duration: 2000,
      position: 'top-center',
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Our Products</h1>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No products found matching "{searchTerm}"</p>
          <button 
            onClick={() => setSearchTerm('')}
            className="mt-4 text-blue-600 hover:text-blue-800"
          >
            Clear search
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={() => handleAddToCart(product.name)}
              />
            ))}
          </div>
          
          {totalPages > 1 && (
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={handlePageChange} 
            />
          )}
        </>
      )}
    </div>
  );
};

export default ProductsPage;