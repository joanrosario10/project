import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import Header from "./components/Header";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Toaster } from "react-hot-toast";
import ProductDetailPage from "./pages/ProductDetailPage";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailPage from "./pages/OrderDetailPage";

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
        <OrderProvider>
          <Router>
            <div className="min-h-screen bg-gray-50 flex flex-col">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<ProductsPage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route
                    path="/category/:category"
                    element={<ProductsPage />}
                  />
                  <Route
                    path="/category/:category/:subcategory"
                    element={<ProductsPage />}
                  />
                  <Route path="/product/:id" element={<ProductDetailPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/orders" element={<OrdersPage />} />
                  <Route path="/order/:orderId" element={<OrderDetailPage />} />
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
        </OrderProvider>
      </CartProvider>
    </>
  );
}

export default App;
