'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { FaUser, FaHeart, FaShoppingCart, FaSearch, FaBars, FaTimes, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
]

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [activeHash, setActiveHash] = useState("")

    useEffect(() => {
        const handleHashChange = () => setActiveHash(window.location.hash || "#")
        handleHashChange()
        window.addEventListener("hashchange", handleHashChange)
        return () => window.removeEventListener("hashchange", handleHashChange)
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
        setIsSearchOpen(false)
    }

    return (
        <div className="w-full text-white bg-black font-serif md:hidden sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 py-4 max-w-6xl mx-auto">
                <Link href="/"><h1 className="text-3xl font-bold">F<span className="text-green-500">oo</span>dy</h1></Link>

                <div className="flex items-center gap-4">
                    <Link href="#/"><FaUser size={20} /></Link>
                    <Link href="#/"><FaHeart size={20} /></Link>
                    <Link href="#/" className="relative">
                        <FaShoppingCart size={21} />
                        <span className="absolute -top-2 -right-2 bg-blue-500 text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
                    </Link>
                    <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
                        <FaSearch size={20} className={isSearchOpen ? "text-green-500" : ""} />
                    </button>
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {isSearchOpen && (
                <form
                    onSubmit={(e) => { e.preventDefault(); console.log("Searching for:", searchQuery) }}
                    className="px-4 pb-3 max-w-6xl mx-auto"
                >
                    <input
                        type="text"
                        placeholder="Search For More Than 10,000 Products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-sans focus:outline-none"
                    />
                </form>
            )}

            {isOpen && (
                <div className="fixed inset-0 bg-black/60 z-40" onClick={toggleMenu}>
                    <div
                        className="fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-zinc-950 p-6 flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                            <h2 className="text-2xl font-bold">F<span className="text-green-500">oo</span>dy</h2>
                            <button onClick={toggleMenu}><FaTimes size={18} /></button>
                        </div>

                        <ul className="flex-1 flex flex-col gap-2 mt-6">
                            {navLinks.map((link) => {
                                const isActive = activeHash === link.href || (link.href === "/" && activeHash === "")
                                return (
                                    <Link key={link.name} href={link.href} onClick={toggleMenu}>
                                        <li className={`text-lg py-2 px-3 rounded-lg ${isActive ? "text-green-500 font-bold bg-zinc-900" : "text-zinc-300"}`}>
                                            {link.name}
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>

                        <Link href="#products" onClick={toggleMenu} className="w-full py-3 bg-green-600 text-center font-bold rounded-lg">
                            Shop Collection
                        </Link>

                        <div className="flex items-center justify-center gap-6 mt-6 text-zinc-400">
                            <a href="#/"><FaFacebook size={20} /></a>
                            <a href="#/"><FaInstagram size={20} /></a>
                            <a href="#/"><FaTwitter size={20} /></a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}