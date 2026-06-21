'use client'
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter, FaMapMarkerAlt, } from "react-icons/fa";

function ContactForm() {
    return (
        <div id="contact" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">
                    <span className="text-green-600 font-semibold uppercase tracking-widest">
                        Contact Us
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
                        We'd Love To Hear From You
                    </h2>

                    <p className="max-w-2xl mx-auto mt-4 text-gray-600">
                        Have questions about our products, delivery services, or need help
                        finding the perfect groceries? Our team is ready to assist you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">

                    {/* Form */}
                    <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 shadow-lg">

                        <h3 className="text-3xl font-bold text-gray-900 mb-3">
                            Send Us a Message
                        </h3>

                        <p className="text-gray-600 mb-8">
                            Fill out the form below and we'll get back to you shortly.
                        </p>

                        <form className="space-y-6">

                            <div className="grid md:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                                />

                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                                />

                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                            />

                            <textarea
                                rows={6}
                                placeholder="Write your message..."
                                className="w-full px-5 py-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            />

                            <button
                                type="submit"
                                className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Card */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 text-white shadow-xl">

                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

                        <h3 className="text-3xl font-bold mb-3">
                            Need Quick Help?
                        </h3>

                        <p className="text-green-100 mb-8">
                            Reach us through any of the channels below.
                        </p>

                        <div className="space-y-5">

                            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                                <FaPhoneAlt className="text-xl" />
                                <div>
                                    <p className="text-sm text-green-100">Call Us</p>
                                    <p className="font-semibold">
                                        +254 700 123 456
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                                <FaWhatsapp className="text-xl" />
                                <div>
                                    <p className="text-sm text-green-100">
                                        WhatsApp
                                    </p>
                                    <p className="font-semibold">
                                        +254 700 123 456
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                                <FaEnvelope className="text-xl" />
                                <div>
                                    <p className="text-sm text-green-100">
                                        Email
                                    </p>
                                    <p className="font-semibold">
                                        support@freshbasket.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                                <FaMapMarkerAlt className="text-xl" />
                                <div>
                                    <p className="text-sm text-green-100">
                                        Location
                                    </p>
                                    <p className="font-semibold">
                                        Nairobi, Kenya
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="mt-10 pt-8 border-t border-white/20">

                            <p className="font-medium mb-4">
                                Follow Us
                            </p>

                            <div className="flex gap-4">

                                <a
                                    href="#"
                                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-green-700 transition-all"
                                >
                                    <FaInstagram />
                                </a>

                                <a
                                    href="#"
                                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-green-700 transition-all"
                                >
                                    <FaFacebookF />
                                </a>

                                <a
                                    href="#"
                                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-green-700 transition-all"
                                >
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactForm