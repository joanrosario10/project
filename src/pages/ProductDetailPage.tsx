"use client";

import type React from "react";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Star, ChevronRight, Plus, Minus, Play, Pause } from "lucide-react";
import toast from "react-hot-toast";
import { products } from "../data/products";
import { Breadcrumb } from "../components/CategoryFilter";
import { productCategoryMap } from "../data/categories";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Find product from your data
  const product = products.find((p) => p.id === Number(id));
  const cartItem = cartItems.find((item) => item.product.id === Number(id));

  if (!product) return <div>Product not found</div>;

  const categoryInfo =
    productCategoryMap[product.id as keyof typeof productCategoryMap];

  const handleAddToCart = () => {
    // Add to cart multiple times for the desired quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${quantity} ${product.name} added to cart`);
  };

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 100;
      if (direction === "left") {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  // Determine if we're showing an image or video
  const isVideo = selectedImageIndex >= product.images.length;
  const mediaIndex = isVideo
    ? selectedImageIndex - product.images.length
    : selectedImageIndex;

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        category={categoryInfo?.category}
        subcategory={categoryInfo?.subcategory}
        productName={product.name}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 w-full rounded-lg overflow-hidden bg-gray-100">
            {isVideo ? (
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  src={product.videos[mediaIndex]}
                  className="w-full h-full object-cover"
                  controls={false}
                  onEnded={() => setIsPlaying(false)}
                />
                <button
                  onClick={handleVideoToggle}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity"
                >
                  {isPlaying ? (
                    <Pause className="w-16 h-16 text-white opacity-80" />
                  ) : (
                    <Play className="w-16 h-16 text-white opacity-80" />
                  )}
                </button>
              </div>
            ) : (
              <img
                src={product.images[mediaIndex] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Thumbnails */}
          <div className="relative">
            <button
              onClick={() => handleScroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md"
              aria-label="Scroll left"
            >
              <ChevronRight className="w-5 h-5 transform rotate-180" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex space-x-2 overflow-x-auto py-2 px-6 scrollbar-hide"
              style={{ scrollBehavior: "smooth" }}
            >
              {product.images.map((image, idx) => (
                <button
                  key={`img-${idx}`}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                    selectedImageIndex === idx
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}

              {product.videos.map((video, idx) => (
                <button
                  key={`video-${idx}`}
                  onClick={() =>
                    setSelectedImageIndex(product.images.length + idx)
                  }
                  className={`relative flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                    selectedImageIndex === product.images.length + idx
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <video
                    src={video}
                    className="w-full h-full object-cover"
                    muted
                  />
                </button>
              ))}
            </div>

            <button
              onClick={() => handleScroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {product.name}
          </h1>

          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  size={20}
                  className={
                    idx < product.rating ? "text-yellow-400" : "text-gray-300"
                  }
                  fill="currentColor"
                />
              ))}
            </div>
            <span className="text-gray-600">
              ({product.reviews.length} reviews)
            </span>
          </div>

          <p className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </p>

          <div className="space-y-4">
            <p className="text-gray-700">{product.description}</p>

            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 hover:bg-gray-100"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 hover:bg-gray-100"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`${
                  cartItem
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white py-3 px-6 rounded-md transition-colors flex-1 flex items-center justify-center space-x-2`}
              >
                {cartItem ? (
                  <>
                    <span>Update Cart</span>
                    <span className="bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-sm">
                      {cartItem.quantity} in cart
                    </span>
                  </>
                ) : (
                  <span>Add to Cart</span>
                )}
              </button>
            </div>
          </div>

          {/* Specifications */}
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <dl className="grid grid-cols-1 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="grid grid-cols-3 gap-4">
                  <dt className="text-gray-600">{key}</dt>
                  <dd className="col-span-2 text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
        <div className="space-y-8">
          {product.reviews.map((review) => (
            <div key={review.id} className="border-b pb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          size={16}
                          className={
                            idx < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{review.userName}</span>
                  </div>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <button className="text-sm text-gray-500 hover:text-blue-600">
                  Helpful ({review.helpful})
                </button>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
