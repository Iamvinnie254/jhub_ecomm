import AboutImg from "../../../../../public/images/about_us.png";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row max-w-7xl mx-auto py-5 md:py-10 md:items-center md:gap-10 gap-3  font-serif"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-delay="100"
        className="md:max-w-[50%] pt-6 px-6 md:p-10"
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold capitalize py-4 md:py-6 ">
          About <span className="text-green-500">Us</span>
        </h1>
        <p className="py-3 text-gray-800 text-lg leading-relaxed  ">
          Foody is a one-stop online store for all your grocery needs. We
          provide fresh organic groceries and cereals to facilitate your healthy
          lifestyle with the best prices and quality. We started our journey in
          2023 with a vision to provide quality products to our customers.{" "}
        </p>
        <p className=" text-lg text-gray-800 leading-relaxed">
          Today, we have a wide range of products to choose from, including
          fresh organic groceries and cereals. We are committed to providing our
          customers with the best possible products and services.{" "}
        </p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-delay="200"
        className="rounded-2xl "
      >
        <img
          src={AboutImg.src}
          alt="An online store"
          width={800}
          className="md:h-[60vh] h-[40vh] md:p-10 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
        />
      </div>
    </div>
  );
}

export default About;
