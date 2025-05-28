import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
          E-Shop
        </Link>
        
        <div className="flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Products
                </Link>
              </li>
             
            </ul>
          </nav>
          
          <Link to="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;