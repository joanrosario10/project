"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { Search } from "lucide-react";
import toast from "react-hot-toast";
import { FilterDropdown, Breadcrumb } from "../components/CategoryFilter";
import { categories, productCategoryMap } from "../data/categories";

const ITEMS_PER_PAGE = 6;

const ProductsPage: React.FC = () => {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    category
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<
    string | undefined
  >(subcategory);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle category/subcategory changes from URL params
  useEffect(() => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
  }, [category, subcategory]);

  // Handle search/filter
  useEffect(() => {
    let results = [...products];

    // Filter by search term
    if (searchTerm) {
      results = results.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category and subcategory
    if (selectedCategory) {
      results = results.filter((product) => {
        const productCategory =
          productCategoryMap[product.id as keyof typeof productCategoryMap];
        if (!productCategory) return false;

        if (selectedSubcategory) {
          return (
            productCategory.category === selectedCategory &&
            productCategory.subcategory === selectedSubcategory
          );
        }

        return productCategory.category === selectedCategory;
      });
    }

    setFilteredProducts(results);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCategory, selectedSubcategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} added to cart!`, {
      duration: 2000,
      position: "top-center",
    });
  };

  const handleCategoryChange = (category: string, subcategory?: string) => {
    if (subcategory) {
      navigate(`/category/${category}/${subcategory}`);
    } else {
      navigate(`/category/${category}`);
    }

    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
  };

  const handleClearFilters = () => {
    navigate("/");
    setSelectedCategory(undefined);
    setSelectedSubcategory(undefined);
  };

  return (
    <div className="container mx-auto px-16 py-16">
      {/* Breadcrumb */}
      <Breadcrumb
        category={selectedCategory}
        subcategory={selectedSubcategory}
      />

      {/* Header Section */}
      <div className="mb-8">
        {/* Title and Results Count */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {selectedSubcategory || selectedCategory || "All Products"}
          </h1>
          <div className="text-sm text-gray-600">
            {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""} found
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="flex  mb-6">
          <div className="flex items-center gap-3 w-full max-w-2xl">
            {/* Search Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-shadow hover:shadow-md"
              />
            </div>

            {/* Filter Button */}
            <FilterDropdown
              categories={categories}
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              onCategoryChange={handleCategoryChange}
              onClearFilters={handleClearFilters}
            />
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedCategory || selectedSubcategory) && (
          <div className="flex justify-center">
            <div className="flex items-center gap-2 text-sm bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
              <span className="text-blue-700 font-medium">Active filter:</span>
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                {selectedCategory}
                {selectedSubcategory && (
                  <span className="ml-1">→ {selectedSubcategory}</span>
                )}
              </span>
              <button
                onClick={handleClearFilters}
                className="text-blue-600 hover:text-blue-800 ml-2 font-medium"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              No products found
            </h3>
            {searchTerm && (
              <p className="text-gray-500 mb-4">
                No products match your search for "{searchTerm}"
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-4 py-2 text-blue-600 hover:text-blue-800 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                >
                  Clear search
                </button>
              )}
              {(selectedCategory || selectedSubcategory) && (
                <button
                  onClick={handleClearFilters}
                  className="px-4 py-2 text-blue-600 hover:text-blue-800 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
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
