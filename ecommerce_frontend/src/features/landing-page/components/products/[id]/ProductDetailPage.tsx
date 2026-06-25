"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaHeart,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";
import { products, Product } from "../../../../../../data/products";
import ProductCard from "../ProductCard";

interface ProductDetailPageProps {
  id: string;
}

export default function ProductDetailPage({ id }: ProductDetailPageProps) {
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white text-black p-6">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">
          The product you are looking for does not exist or has been removed.
        </p>
        <Link href="/products">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 cursor-pointer transition-colors">
            <FaArrowLeft /> Back to Products
          </button>
        </Link>
      </div>
    );
  }
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);
  const fallbackProducts =
    relatedProducts.length > 0
      ? relatedProducts
      : products.filter((p) => p.id !== product.id).slice(0, 3);

  // Carousel handlers
  const handlePrevImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1,
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Quantity handlers
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  return (
    <div className="bg-white min-h-screen text-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="flex flex-col gap-4">
            {/* Main Active Image Box */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 group">
              <img
                src={product.images[activeImageIndex]}
                alt={`${product.name} - View ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />

              {/* Previous product image */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-green-600 hover:text-white text-gray-800 p-3 rounded-full shadow-md transition-all cursor-pointer opacity-100 lg:opacity-0 lg:group-hover:opacity-100 focus:outline-none animate-fade-in"
                aria-label="Previous image"
              >
                <FaChevronLeft size={16} />
              </button>

              {/* Next button */}
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-green-600 hover:text-white text-gray-800 p-3 rounded-full shadow-md transition-all cursor-pointer opacity-100 lg:opacity-0 lg:group-hover:opacity-100 focus:outline-none animate-fade-in"
                aria-label="Next image"
              >
                <FaChevronRight size={16} />
              </button>

              {/* Index Tag */}
              <span className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                {activeImageIndex + 1} / {product.images.length}
              </span>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-gray-50 border-2 cursor-pointer transition-all duration-200 ${
                    idx === activeImageIndex
                      ? "border-green-500 scale-102 shadow-sm"
                      : "border-transparent opacity-70 hover:opacity-100 hover:border-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Details Info Panel */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-50 text-green-700 text-xs px-3 py-1 font-semibold rounded-full uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              {/* Product Title */}
              <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-gray-900 mb-2">
                {product.name}
              </h1>

              {/* Reviews rating placeholder */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <span className="text-sm text-gray-500 font-medium">
                  4.5 (24 reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-green-600">
                  {product.price}
                </span>
                <span className="text-sm text-gray-400 font-normal ml-2">
                  / Pack
                </span>
              </div>

              {/* Description */}
              <div className="border-t border-gray-100 pt-6 mb-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2">
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              {/* Quantity selector */}
              <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 sm:w-36">
                <button
                  onClick={handleDecreaseQuantity}
                  className="text-gray-500 hover:text-green-600 p-1 cursor-pointer transition-colors"
                  aria-label="Decrease quantity"
                >
                  <FaMinus size={14} />
                </button>
                <span className="font-bold text-lg w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={handleIncreaseQuantity}
                  className="text-gray-500 hover:text-green-600 p-1 cursor-pointer transition-colors"
                  aria-label="Increase quantity"
                >
                  <FaPlus size={14} />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className={`flex-1 relative overflow-hidden font-bold py-4 px-6 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center gap-3 shadow-sm ${
                  addedToCart
                    ? "bg-green-600 hover:bg-green-700 text-white scale-102"
                    : "bg-black hover:bg-gray-900 text-white"
                }`}
              >
                {addedToCart ? (
                  <>
                    <FaCheckCircle size={18} />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <FaShoppingCart size={18} />
                    Add to Cart
                  </>
                )}
              </button>

              {/* Wishlist Button */}
              <button className="border border-gray-200 hover:border-red-500 text-gray-500 hover:text-red-500 p-4 rounded-xl cursor-pointer transition-all bg-white flex items-center justify-center">
                <FaHeart size={18} />
              </button>
            </div>

            {/* Features Row */}
            <div className="flex items-center gap-6 mt-8 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                100% Secure Checkout
              </span>
              <span className="flex items-center gap-1.5">Fresh & Organic</span>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <div className="flex flex-col items-start mb-8 gap-1">
            <h2 className="text-2xl font-bold font-serif text-gray-900">
              Related <span className="text-green-500">Products</span>
            </h2>
            <p className="text-sm text-gray-500">
              Customers who bought this also bought these fresh selections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fallbackProducts.map((relProduct) => (
              <div key={relProduct.id}>
                <ProductCard product={relProduct} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
