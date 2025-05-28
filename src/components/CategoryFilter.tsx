"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Filter, X, Check } from "lucide-react";

interface Category {
  id: string;
  name: string;
  subcategories?: Category[];
}

interface FilterDropdownProps {
  categories: Category[];
  selectedCategory?: string;
  selectedSubcategory?: string;
  onCategoryChange: (category: string, subcategory?: string) => void;
  onClearFilters: () => void;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  categories,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onClearFilters,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    selectedCategory || null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hasActiveFilters = selectedCategory || selectedSubcategory;

  const handleCategorySelect = (category: string, subcategory?: string) => {
    onCategoryChange(category, subcategory);
    setIsOpen(false);
  };

  const handleClearAll = () => {
    onClearFilters();
    setExpandedCategory(null);
    setIsOpen(false);
  };

  return (
    <div className="relative flex-shrink-0" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-4 py-3 border rounded-full transition-all duration-200 shadow-sm hover:shadow-md ${
          hasActiveFilters
            ? "bg-blue-600 text-white border-blue-600 shadow-blue-200"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
        }`}
      >
        <Filter size={20} />
        <span className="font-medium">
          {hasActiveFilters ? "Filtered" : "Filter"}
        </span>
        {hasActiveFilters && (
          <span className="bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-xs font-semibold">
            {selectedSubcategory ? 2 : 1}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-10 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border z-50 max-h-96 overflow-hidden">
            <div className="p-4 border-b bg-gray-50">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">
                  Filter by Category
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={handleClearAll}
                    className="text-sm text-red-600 hover:text-red-800 flex items-center space-x-1 transition-colors"
                  >
                    <X size={14} />
                    <span>Clear all</span>
                  </button>
                )}
              </div>
            </div>

            <div className="p-2 overflow-y-auto max-h-80">
              {categories.map((category) => (
                <div key={category.id} className="mb-1">
                  <div className="flex items-center">
                    <button
                      onClick={() => {
                        if (
                          selectedCategory === category.name &&
                          !selectedSubcategory
                        ) {
                          handleClearAll();
                        } else {
                          handleCategorySelect(category.name);
                        }
                      }}
                      className={`flex-1 text-left px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between ${
                        selectedCategory === category.name &&
                        !selectedSubcategory
                          ? "bg-blue-100 text-blue-700 font-medium"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <span>{category.name}</span>
                      {selectedCategory === category.name &&
                        !selectedSubcategory && (
                          <Check size={16} className="text-blue-600" />
                        )}
                    </button>

                    {category.subcategories && (
                      <button
                        onClick={() =>
                          setExpandedCategory(
                            expandedCategory === category.name
                              ? null
                              : category.name
                          )
                        }
                        className="p-2 hover:bg-gray-100 rounded-lg ml-1 transition-colors"
                      >
                        <ChevronRight
                          size={16}
                          className={`transition-transform duration-200 ${
                            expandedCategory === category.name
                              ? "rotate-90"
                              : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {expandedCategory === category.name &&
                    category.subcategories && (
                      <div className="ml-4 mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                        {category.subcategories.map((subcategory) => (
                          <button
                            key={subcategory.id}
                            onClick={() => {
                              if (
                                selectedCategory === category.name &&
                                selectedSubcategory === subcategory.name
                              ) {
                                handleCategorySelect(category.name);
                              } else {
                                handleCategorySelect(
                                  category.name,
                                  subcategory.name
                                );
                              }
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                              selectedCategory === category.name &&
                              selectedSubcategory === subcategory.name
                                ? "bg-blue-50 text-blue-700 font-medium"
                                : "hover:bg-gray-50"
                            }`}
                          >
                            <span>{subcategory.name}</span>
                            {selectedCategory === category.name &&
                              selectedSubcategory === subcategory.name && (
                                <Check size={14} className="text-blue-600" />
                              )}
                          </button>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>

            {hasActiveFilters && (
              <div className="p-4 border-t bg-blue-50">
                <div className="text-sm text-blue-700 font-medium mb-2">
                  Active filters:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory && (
                    <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                      {selectedCategory}
                      {selectedSubcategory && (
                        <span className="ml-1">→ {selectedSubcategory}</span>
                      )}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export const Breadcrumb: React.FC<{
  category?: string;
  subcategory?: string;
  productName?: string;
}> = ({ category, subcategory, productName }) => {
  return (
    <nav className="flex items-center text-sm text-gray-600 mb-6 overflow-x-auto whitespace-nowrap pb-2">
      <Link to="/" className="hover:text-blue-600 transition-colors">
        Home
      </Link>

      {category && (
        <>
          <ChevronRight size={16} className="mx-2" />
          <Link
            to={`/category/${category}`}
            className="hover:text-blue-600 transition-colors"
          >
            {category}
          </Link>
        </>
      )}

      {subcategory && (
        <>
          <ChevronRight size={16} className="mx-2" />
          <Link
            to={`/category/${category}/${subcategory}`}
            className="hover:text-blue-600 transition-colors"
          >
            {subcategory}
          </Link>
        </>
      )}

      {productName && (
        <>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-gray-900 font-medium">{productName}</span>
        </>
      )}
    </nav>
  );
};
