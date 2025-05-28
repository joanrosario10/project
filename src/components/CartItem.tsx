import React from 'react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex items-center p-4 border-b border-gray-200 last:border-b-0">
      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm">${product.price.toFixed(2)} each</p>
      </div>
      
      <div className="flex items-center mr-4">
        <button 
          onClick={() => decreaseQuantity(product.id)}
          disabled={quantity <= 1}
          className={`p-1 rounded ${quantity <= 1 ? 'text-gray-400' : 'text-gray-600 hover:bg-gray-100'}`}
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        
        <span className="mx-2 w-8 text-center">{quantity}</span>
        
        <button 
          onClick={() => increaseQuantity(product.id)}
          className="p-1 rounded text-gray-600 hover:bg-gray-100"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>
      
      <div className="text-right">
        <p className="font-semibold text-lg">${(product.price * quantity).toFixed(2)}</p>
        <button 
          onClick={() => removeFromCart(product.id)}
          className="text-red-500 p-1 hover:text-red-700 transition-colors mt-1"
          aria-label="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;