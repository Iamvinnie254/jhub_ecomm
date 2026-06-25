import Link from "next/link";
import { Product } from "../../../../../data/products";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 m-2 flex flex-col justify-between h-[550px]">
      <div>
        <div className="px-5 py-3">
          <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1 block">
            {product.category}
          </span>
          <Link href={`/products/${product.id}`}>
            <h1 className="text-lg font-bold text-gray-900 hover:text-green-600 transition-colors line-clamp-1">
              {product.name}
            </h1>
          </Link>
        </div>
        <Link
          href={`/products/${product.id}`}
          className="block relative h-52 overflow-hidden bg-gray-50"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
          />
        </Link>
        <div className="px-5 py-4">
          <p className="text-gray-550 text-sm line-clamp-2 h-10 mb-2">
            {product.description}
          </p>
        </div>
      </div>

      <div className="px-5 pb-1 pt-0">
        <div className="flex items-center justify-between mb-4">
          <span className="font-extrabold text-xl text-green-600">
            {product.price}
          </span>
          <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 font-bold rounded-lg text-sm transition-colors cursor-pointer">
            Add to Cart
          </button>
        </div>
        <Link href={`/products/${product.id}`} className="block w-full pb-6">
          <button className="w-full text-center border border-gray-200 hover:border-black text-gray-600 hover:text-black font-bold py-4  rounded-lg text-sm transition-colors cursor-pointer bg-gray-50 hover:bg-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
