import Link from "next/link";

type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  category: string;
  description: string;
};

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer m-2">
      <div className="px-5 py-2">
        <h5 className="text-sm text-gray-600">{product.category}</h5>
        <h1 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
          {product.name}
        </h1>
      </div>
      <div className="relative h-70 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex justify-between p-2">
        <div className="px-4 py-6 ">
          <span className="font-bold">{product.price}</span>
          <p className="text-gray-600 text-sm line-clamp-1 max-w-36">
            {product.description}
          </p>
        </div>
        <div className="md:px-4 px-0 py-6">
          <Link href="#" className="flex justify-end">
            <button className="bg-black text-white px-5 py-3 font-bold rounded-lg cursor-pointer">
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
