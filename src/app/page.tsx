import Hero from "@/features/landing-page/components/hero-section/Hero"
import ProductPreview from "@/features/landing-page/components/products/ProductPreview"
import About from "@/features/landing-page/components/about/About"
import WhyUs from "@/features/landing-page/components/why-us/page"
import ContactForm from "@/features/landing-page/components/contact/ContactForm"

export default function Home() {
  return (
    <>
     
      <Hero />
      <ProductPreview />
      <About />
      <WhyUs />
      <ContactForm />
    </>
  );
}
