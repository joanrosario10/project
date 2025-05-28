import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const CartPage: React.FC = () => {
  const { cartItems, totalItems, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    setIsProcessing(true);
    toast.loading('Processing your order...', { id: 'checkout' });
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Order processed successfully!', { id: 'checkout' });
    clearCart();
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex flex-col items-center justify-center">
          <ShoppingBag size={64} className="text-gray-300 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
          <Link 
            to="/"
            className="text-blue-600 hover:text-blue-800 flex items-center justify-center sm:justify-start bg-white sm:bg-transparent border border-blue-600 sm:border-0 py-2 sm:py-0 rounded-md sm:rounded-none"
          >
            <ArrowLeft size={18} className="mr-1" />
            Continue Shopping
          </Link>
          <button 
            onClick={clearCart}
            className="text-red-500 hover:text-red-700 bg-white sm:bg-transparent border border-red-500 sm:border-0 py-2 sm:py-0 rounded-md sm:rounded-none"
          >
            Clear Cart
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {cartItems.map(item => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Items ({totalItems})</span>
                <span className="text-gray-800">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-800">Free</span>
              </div>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={handleCheckout}
              disabled={isProcessing}
              className={`w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center ${isProcessing ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isProcessing ? (
                <>
                  <Loader2 size={20} className="animate-spin mr-2" />
                  Processing...
                </>
              ) : (
                'Proceed to Checkout'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;