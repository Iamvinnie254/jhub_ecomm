"use client"
import { FaLeaf, FaTruck, FaAward } from "react-icons/fa"

function WhyUs() {
    const features = [
        {
            icon: <FaLeaf size={40} />,
            title: "Fresh & Organic",
            description:
                "We source farm-fresh fruits, vegetables, and groceries directly from trusted farmers to ensure quality and freshness.",
        },
        {
            icon: <FaTruck size={40} />,
            title: "Fast Delivery",
            description:
                "Get your groceries delivered right to your doorstep quickly and conveniently with our reliable delivery service.",
        },
        {
            icon: <FaAward size={40} />,
            title: "Quality Guaranteed",
            description:
                "Every product is carefully selected and inspected to meet the highest standards of quality and customer satisfaction.",
        },
    ]
    return (
        <section id="why-us" className="bg-green-900/50 py-20 px-6 font-serif">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="uppercase tracking-widest text-lg font-semibold text-green-800">Why Choose Us</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 capitalize">Fresh Groceries at your convenience</h2>
                </div>

                {/* features section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                    {
                        features.map((item, index) => (
                            <div key={index} className="group hover:shadow-xl rounded-lg p-5 md:m-3 cursor-pointer bg-green-500 transition-all duration-300">
                                <div className="mb-6 text-black transition-transform duration-300group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-black mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-black/80 text-lg leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default WhyUs;