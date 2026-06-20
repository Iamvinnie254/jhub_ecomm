import Link from "next/link"

type Product = {
    id: number
    name: string
    image: string
    price: string
    category: string
    description: string
}

interface ProductCardProps {
    product: Product
}

function ProductCard({ product }: ProductCardProps) {



    return (
        <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="p-5">
                <h5>{product.category}</h5>
                <h1 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{product.name}</h1>
            </div>
            <div className="relative h-56 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
                <span>{product.price}</span>
                <p>{product.description}</p>
                <Link href="#">
                    <button>
                        Add to Cart
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard