import AboutImg from "../../../../../public/images/about_us.png";

const team = [
  { name: "John Doe", role: "Founder & CEO" },
  { name: "Jane Smith", role: "Marketing Manager" },
  { name: "Mark Wilson", role: "Sales Manager" },
];

const milestones = [
  "2023 • Foody was founded to simplify grocery shopping.",
  "2024 • Expanded partnerships with local farmers and suppliers.",
  "2025 • Introduced faster delivery across multiple regions.",
];

export default function AboutUsPage() {
  return (
    <main className="max-w-7xl mx-auto font-serif">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center gap-10 py-1 md:py-1">
        <div
          className="md:w-1/2 px-6 md:px-10"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-green-500">Foody</span>
          </h1>

          <p className="text-lg text-gray-700 leading-8 mb-4">
            Foody is an online grocery platform providing fresh produce,
            cereals, pantry essentials and household groceries through a
            convenient shopping experience.
          </p>

          <p className="text-lg text-gray-700 leading-8">
            We partner with trusted farmers and suppliers to deliver quality
            products at fair prices while promoting sustainable agriculture and
            supporting local communities.
          </p>
        </div>

        <div
          className="md:w-1/2"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
        >
          <img
            src={AboutImg.src}
            alt="About Foody"
            className="md:h-[60vh] h-[40vh] md:p-10 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
          />
        </div>
      </section>

      {/* What We Do */}
      <section
        className="px-6 md:px-10 py-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="100">
            <h3 className="text-xl font-semibold mb-3 text-green-500">
              Our Services
            </h3>
            <p className="text-gray-700 leading-7">
              Fresh groceries, cereals, vegetables, fruits and everyday
              household essentials delivered directly to customers.
            </p>
          </div>

          <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-3 text-green-500">
              Where We Operate
            </h3>
            <p className="text-gray-700 leading-7">
              We currently serve customers across major cities while
              continuously expanding our delivery network into new communities.
            </p>
          </div>

          <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-3 text-green-500">
              Why Choose Us
            </h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Freshly sourced products</li>
              <li>Affordable pricing</li>
              <li>Trusted suppliers</li>
              <li>Reliable delivery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        className="px-6 md:px-10 py-10 bg-gray-50 rounded-xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Meet Our Team</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="border rounded-xl p-6 bg-white hover:shadow-md transition"
              data-aos="flip-left"
              data-aos-duration="900"
              data-aos-delay={index * 150}
            >
              <div className="w-20 h-20 rounded-full bg-green-100 mb-4" />

              <h3 className="text-xl font-semibold">{member.name}</h3>

              <p className="text-green-600 mb-3">{member.role}</p>

              <p className="text-gray-700">
                Responsible for driving innovation, maintaining quality, and
                ensuring customers receive the best shopping experience.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section
        className="px-6 md:px-10 py-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Journey</h2>

        <div className="border-l-4 border-green-500 pl-6 space-y-6">
          {milestones.map((item, index) => (
            <div
              key={item}
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay={index * 200}
            >
              <p className="text-lg text-gray-700">{item}</p>
            </div>
          ))}
        </div>

        {/* CTA & Newsletter */}
        <div
          className="px-6 md:px-10 py-16"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="bg-green-50 rounded-2xl p-8 md:p-12 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Join the <span className="text-green-500">Foody</span> Community
            </h2>

            <p className="text-gray-700 text-lg mt-4 max-w-2xl mx-auto leading-8">
              Discover fresh groceries, exclusive offers, healthy living tips,
              and updates delivered straight to your inbox. Become part of a
              growing community that values quality, convenience, and
              sustainability.
            </p>

            {/* Call to Action */}
            <div
              className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <button className="bg-green-700 hover:bg-green-600 text-white px-8 py-3 rounded-md transition-all duration-300">
                Shop Now
              </button>

              <button className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-3 rounded-md transition-all duration-300">
                Contact Us
              </button>
            </div>

            {/* Newsletter */}
            <div
              className="mt-12 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <h3 className="text-2xl font-semibold mb-3">
                Subscribe to Our Newsletter
              </h3>

              <p className="text-gray-600 mb-6">
                Stay informed about seasonal products, exclusive discounts,
                healthy recipes, and company updates.
              </p>

              <form
                className="flex flex-col sm:flex-row gap-3"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-green-500"
                />

                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-md transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
