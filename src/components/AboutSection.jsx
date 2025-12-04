import aboutShip from "../assets/aboutmain/about-ship.png";
import tracingIcon1 from "../assets/aboutmain/tracing-icon1.png";
import tracingIcon2 from "../assets/aboutmain/tracing-icon2.png";
import experienceBadge from "../assets/aboutmain/experience-badge.png";

const AboutSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-14 items-center">
        {/* Left side */}
        <div>
          <p className="text-red-600 font-semibold mb-3 uppercase tracking-wide">
            About Trimode Shipping
          </p>

          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
            Digital &amp; Trusted Transport <br /> Logistic Company
          </h2>

          <p className="text-gray-600 mb-10 leading-relaxed">
            We provide digital-first logistics solutions with advanced supply
            chain visibility, real-time tracking, and dedicated support.
          </p>

          {/* Feature Blocks */}
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            {/* Block 1 */}
            <div className="flex gap-4">
              <img
                src={tracingIcon1}
                className="w-12 h-12"
                alt="Online Tracing"
              />
              <div>
                <h3 className="font-semibold text-red-600">Online Tracing</h3>
                <p className="text-gray-600 text-sm">
                  The is a long established fact that a reader.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex gap-4">
              <img
                src={tracingIcon1}
                className="w-12 h-12"
                alt="Online Tracing"
              />
              <div>
                <h3 className="font-semibold text-red-600">Online Tracing</h3>
                <p className="text-gray-600 text-sm">
                  The is a long established fact that a reader.
                </p>
              </div>
            </div>
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition">
            About Company →
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          {/* Badge */}
          <img
            src={experienceBadge}
            className="absolute top-6 right-6 w-32"
            alt="25 Years of Experience"
          />

          <img
            src={aboutShip}
            alt="Ship logistics"
            className="w-full rounded-xl shadow-xl border-b-[4px] border-red-500 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
