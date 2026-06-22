import Link from "next/link"
import { FaFacebook, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"


function Footer() {
    return (
        <div className="bg-green-900/50">
            <div className="flex flex-col md:flex-row gap-5 p-5 py-10 md:gap-8 font-serif max-w-7xl mx-auto  justify-between">
                <div>
                    <h1 className="text-3xl font-bold ">F<span className="text-green-500">oo</span>dy</h1>
                    <p className="text-gray-800 text-lg leading-relaxed p-3">Fresh Groceries at your convenience</p>
                    <div className="flex gap-4 p-3 text-black/80">
                        <span><FaFacebook size={25} /></span>
                        <span><FaInstagram size={25} /></span>
                        <span><FaTwitter size={25} /></span>
                    </div>
                </div>
                <div >
                    <h2 className="text-2xl font-bold ">Useful Links</h2>
                    <ul className="text-gray-800 text-lg leading-relaxed p-3">
                        <Link href="/"><li>Home</li></Link>
                        <Link href="#products"><li>Products</li></Link>
                        <Link href="#about"><li>About</li></Link>
                        <Link href="#why-us"><li>Why Us</li></Link>
                        <Link href="#contact"><li>Contact</li></Link>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold ">Contact Us</h2>
                    <ul className="text-gray-800 text-lg leading-relaxed p-3 ">
                        <span className="flex gap-2 items-center pb-3"><FaPhone /> <li className="">(+254)700-000-000</li></span>
                        <span className="flex gap-2 items-center pb-3"><FaMailBulk /> <li className="">info@foody.co.ke</li></span>
                        <span className="flex gap-2 items-center"><FaLocationDot /> <li className="">Gachororo, Juja, Kenya</li></span>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center py-5 border-t border-gray-300 ">
                <p className="text-gray-800 text-lg leading-relaxed font-semibold text-sm md:text-md"> &copy; 2026 All copy rights reserved @Foody</p>
            </div>
        </div>
    )
}

export default Footer