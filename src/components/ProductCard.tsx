import React from "react";
import { Product } from "../types";
import { useCart } from "../context/CartContext";
import { Plus, Check } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { addToCart, cartItems } = useCart();
  const cartItem = cartItems.find((item) => item.product.id === product.id);

  // Handle the add to cart action
  const handleAddToCart = () => {
    addToCart(product);
    if (onAddToCart) {
      onAddToCart();
    }
  };

  // Default image fallback
  const productImage =
    product.images && product.images.length > 0
      ? product.images[0]
      : "https://placehold.co/400x300?text=No+Image";

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link
        to={`/product/${product.id}`}
        className="block h-48 overflow-hidden"
      >
        <img
          src={productImage || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 h-10 overflow-hidden">
          {product.description && product.description.length > 60
            ? `${product.description.substring(0, 60)}...`
            : product.description || "No description available"}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className={`${
              cartItem
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white px-3 py-1 rounded-full flex items-center space-x-1 transition-colors duration-300`}
          >
            {cartItem ? (
              <>
                <Check size={16} />
                <span>Added ({cartItem.quantity})</span>
              </>
            ) : (
              <>
                <Plus size={16} />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
