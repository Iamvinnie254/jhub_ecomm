import Link from "next/link";
import Groceries from "../../../../../../public/images/hero_groceries.png"

function Hero() {
    return (
        <div id="hero" className="bg-green-900/50 md:h-[70vh] h-[80vh] items-center ">
            <div className=" flex flex-col md:flex-row items-center max-w-7xl mx-auto md:pt-24 p-6">
                <div className="md:gap-10 gap-6 flex flex-col h-full ">
                    <h2 className="capitalize font-bold text-3xl md:text-5xl ">Go organic and indulge in a healthier life</h2>
                    <p className="text-sm md:text-xl">At Foody we are commited to providing fresh groceries and cereals to facilitate your healthy lifestyle with the best prices and quality</p>
                    <div className="flex gap-5 text-black ">
                        <Link href="#/"> <button className="bg-white px-5 py-3 font-bold rounded-lg cursor-pointer">Shop Now</button></Link>
                        <Link href="#products"><button className="bg-black text-white px-5 py-3 font-bold rounded-lg cursor-pointer">Explore Products</button></Link>
                    </div>

                </div>
                <div>
                    <img src={Groceries.src} alt="Groceries at the store" width={900} className="md:py-9 py-0" />
                </div>
            </div>
        </div>
    )
}

export default Hero;