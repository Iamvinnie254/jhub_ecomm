'use client'
import Link from "next/link"
import { FaUser, FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa"
import MobileNav from "./mobileNav"

function Navbar() {
    return (
        <>
            <div className=" w-full text-white px-3 py-5 mx-auto bg-black font-serif top-0 sticky z-100 hidden md:block ">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <div>
                        <Link href="/"><h1 className="text-4xl font-bold">F<span className="text-green-500">oo</span>dy</h1></Link>
                    </div>
                    <div>
                        <ul className="flex gap-7 ">
                            <Link href="/"><li className="text-xl font-bold">Home</li></Link>
                            <Link href="#products"><li className="text-xl font-bold">Products</li></Link>
                            <Link href="#about"><li className="text-xl font-bold">About</li></Link>
                            <Link href="#why-us"><li className="text-xl font-bold">Why Us</li></Link>
                            <Link href="#contact"><li className="text-xl font-bold">Contact</li></Link>
                        </ul>
                    </div>
                    <div className="flex gap-4">
                        <Link href="#/"><li className="list-none"><FaUser size={20} /></li></Link>
                        <Link href="#/"><li className="list-none"><FaHeart size={20} /></li></Link>
                        <Link href="#/" className="relative">
                            <FaShoppingCart size={21} />
                            <span className="absolute -top-2 -right-2 bg-blue-500 text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
                        </Link>
                    </div>
                </div>
            </div>
            <MobileNav />
        </>
    )
}

export default Navbar