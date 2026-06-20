import Navbar from "./features/landing-page/components/navbar/page"
import Hero from "./features/landing-page/components/hero-section/page"
import ProductPreview from "./features/landing-page/components/products/ProductPreview"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductPreview />
    </>
  );
}
