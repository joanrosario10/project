import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;  // Added onAddToCart prop as optional
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    onAddToCart?.(); // Call onAddToCart if provided
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 h-10 overflow-hidden">
          {product.description.length > 60 
            ? `${product.description.substring(0, 60)}...` 
            : product.description
          }
        </p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">${product.price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full flex items-center space-x-1 transition-colors duration-300"
          >
            <Plus size={16} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;