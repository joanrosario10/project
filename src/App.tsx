import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 2000,
        }}
      />
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/cart" element={<CartPage />} />
                {/* Placeholder routes for header links */}
                
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <footer className="bg-white py-6 border-t border-gray-200">
              <div className="container mx-auto px-4 text-center text-gray-500">
                <p>© 2025 E-Shop. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;