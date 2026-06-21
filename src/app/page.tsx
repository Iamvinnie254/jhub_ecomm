import Navbar from "./features/landing-page/components/navbar/page"
import Hero from "./features/landing-page/components/hero-section/page"
import ProductPreview from "./features/landing-page/components/products/ProductPreview"
import About from "./features/landing-page/components/about/page"
import WhyUs from "./features/landing-page/components/why-us/page"
import Footer from "./features/landing-page/components/footer/page"
import ContactForm from "./features/landing-page/components/contact/page"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductPreview />
      <About />
      <WhyUs />
      <ContactForm />
      <Footer />
    </>
  );
}
