import aboutShip from "../assets/aboutmain/about-ship.png";

const AboutSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div>
          <p className="text-red-500 font-semibold mb-2 uppercase tracking-wide">
            About Trimode Shipping
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Digital &amp; Trusted Transport <br /> Logistic Company
          </h2>

          <p className="text-gray-600 mb-6">
            We provide digital-first logistics solutions with advanced supply
            chain visibility, real-time tracking, and dedicated support. Whether
            it’s land, sea, or air freight, we make sure your cargo reaches
            safely and on time.
          </p>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-semibold mb-1">On-time Delivery</h3>
              <p className="text-sm text-gray-600">
                Reliable schedules and optimized routing for every shipment.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-semibold mb-1">Global Coverage</h3>
              <p className="text-sm text-gray-600">
                Integrated land, sea, and air logistics across major trade
                lanes.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-semibold mb-1">Smart Tracking</h3>
              <p className="text-sm text-gray-600">
                Live cargo visibility with digital dashboards and alerts.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-semibold mb-1">24/7 Support</h3>
              <p className="text-sm text-gray-600">
                Dedicated experts available round the clock for your business.
              </p>
            </div>
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition">
            About Company →
          </button>
        </div>

        {/* Right image */}
        <div className="relative">
          <img
            src={aboutShip}
            alt="Ship logistics"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
