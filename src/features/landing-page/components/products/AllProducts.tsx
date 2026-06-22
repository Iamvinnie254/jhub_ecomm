'use client'
import ProductCard from "./ProductCard"
import { products } from "../../../../../data/products"

function AllProducts() {
    return (
        <div className="bg-white text-black w-full p-6 ">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center py-10 gap-3">
                    <h1 className="text-4xl font-bold capitalize ">Our Full <span className="text-green-500">Products</span> Catalogue</h1>
                    <p>Discover the best products we have to offer</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        products.map((product) => (
                            <div key={product.id}>
                                <ProductCard product={product} />
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default AllProducts;