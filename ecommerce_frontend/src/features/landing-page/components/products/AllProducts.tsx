"use client";

import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { products, getNumericPrice } from "../../../../../data/products";
import {
  FaSearch,
  FaFilter,
  FaTimes,
  FaUndo,
  FaSlidersH,
} from "react-icons/fa";

function AllProducts() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(200);
  const [sortBy, setSortBy] = useState("default");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const categories = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.category)));
  }, []);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setMaxPrice(200);
    setSortBy("default");
  };

  const processedProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query),
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    result = result.filter((p) => getNumericPrice(p.price) <= maxPrice);

    if (sortBy === "price-low-high") {
      result.sort(
        (a, b) => getNumericPrice(a.price) - getNumericPrice(b.price),
      );
    } else if (sortBy === "price-high-low") {
      result.sort(
        (a, b) => getNumericPrice(b.price) - getNumericPrice(a.price),
      );
    } else if (sortBy === "name-a-z") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-z-a") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [searchQuery, selectedCategories, maxPrice, sortBy]);

  const FilterContent = () => (
    <div className="flex flex-col gap-6">
      <div className="hidden md:block">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3">
          Search Products
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-green-500 transition-colors"
          />
          <FaSearch className="absolute left-3.5 top-3.5 text-gray-400 text-sm" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3">
          Categories
        </h3>
        <div className="flex flex-col gap-2.5">
          {categories.map((category) => {
            const isChecked = selectedCategories.includes(category);
            return (
              <label
                key={category}
                className="flex items-center gap-3 cursor-pointer group text-sm text-gray-600 hover:text-black transition-colors"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCategoryToggle(category)}
                  className="w-4 h-4 rounded text-green-600 border-gray-300 focus:ring-green-500 cursor-pointer accent-green-600"
                />
                <span
                  className={isChecked ? "font-semibold text-green-600" : ""}
                >
                  {category}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
            Max Price
          </h3>
          <span className="text-sm font-bold text-green-600">
            KSh {maxPrice}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="200"
          step="10"
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
          className="w-full h-1.5 bg-gray-250 rounded-lg appearance-none cursor-pointer accent-green-600"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>KSh 0</span>
          <span>KSh 200</span>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3">
          Sort By
        </h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-green-500 cursor-pointer text-gray-700"
        >
          <option value="default">Default</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="name-a-z">Name: A to Z</option>
          <option value="name-z-a">Name: Z to A</option>
        </select>
      </div>

      <button
        onClick={handleResetFilters}
        className="w-full border border-red-200 hover:border-red-500 text-red-500 hover:text-red-600 font-bold py-2.5 rounded-lg text-sm flex items-center justify-center gap-2 cursor-pointer bg-red-50/20 hover:bg-red-50/50 transition-colors"
      >
        <FaUndo size={12} /> Clear Filters
      </button>
    </div>
  );

  return (
    <div className="bg-white text-black w-full min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center py-6 gap-3 mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif capitalize">
            Our Full <span className="text-green-500">Products</span> Catalogue
          </h1>
          <p className="text-gray-550 text-base max-w-lg">
            Discover the best organic products, freshly harvested and delivered
            directly to your doorstep.
          </p>
        </div>

        <div className="flex md:hidden gap-3 mb-6 items-center">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors"
            />
            <FaSearch className="absolute left-3.5 top-4 text-gray-400 text-sm" />
          </div>
          <button
            onClick={() => setShowMobileFilters(true)}
            className="bg-black text-white p-3 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors"
            aria-label="Toggle Filters"
          >
            <FaFilter size={18} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <aside className="hidden md:block w-64 lg:w-72 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm sticky top-28">
            <FilterContent />
          </aside>

          <div className="flex-1 w-full">
            {processedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {processedProducts.map((product) => (
                  <div key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200 p-6">
                <div className="bg-red-50 text-red-500 p-4 rounded-full mb-4">
                  <FaSlidersH size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  No products match your filters
                </h3>
                <p className="text-gray-500 text-sm mb-6 max-w-sm">
                  Try adjusting your search criteria, raising your price
                  ceiling, or selecting different categories.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="bg-black hover:bg-gray-800 text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showMobileFilters && (
        <div className="fixed inset-0 z-110 flex md:hidden">
          <div
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={() => setShowMobileFilters(false)}
          />

          <div className="relative flex w-full max-w-xs flex-col bg-white py-6 px-5 shadow-xl transition-all duration-300 ml-auto h-full overflow-y-auto">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <FaFilter className="text-green-500" size={16} /> Filters
              </h2>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="text-gray-400 hover:text-black p-1 transition-colors cursor-pointer"
                aria-label="Close filters"
              >
                <FaTimes size={18} />
              </button>
            </div>

            <FilterContent />
          </div>
        </div>
      )}
    </div>
  );
}

export default AllProducts;
