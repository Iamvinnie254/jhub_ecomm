"use client";
import ProductCard from "./ProductCard";
import { products } from "../../../../../data/products";
import Link from "next/link";

function ProductPreview() {
  const featured = products.filter((p) => p.featured).slice(0, 6);
  return (
    <div id="products" className="bg-white text-black w-full ">
      <div className="max-w-7xl mx-auto pt-10">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
          className="flex flex-col items-center justify-center py-10 gap-3"
        >
          <h1 className="text-4xl font-bold capitalize ">
            Featured <span className="text-green-500">Products</span>
          </h1>
          <p>Discover the best products we have to offer</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featured.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center py-10 gap-3">
        <Link href="/products">
          <button className="bg-green-600 hover:bg-green-700 transition ease-in-out duration-300 text-white font-bold px-4 py-2 rounded-lg cursor-pointer">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductPreview;
