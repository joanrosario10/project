import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        // Increase quantity if item already exists
        return prevItems.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Add new item
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const increaseQuantity = (productId: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total items in cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity, 
    0
  );

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalItems,
    totalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};