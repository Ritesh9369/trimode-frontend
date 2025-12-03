// ================= Imports =================
import aboutHero from "../assets/about/about-hero.png";
import about1 from "../assets/about/about-lg-1.png";
import about2 from "../assets/about/about-lg-2.png";
import aboutVector from "../assets/about/about-vector.png";
import aboutBgDark from "../assets/about/about-bg-dark.png";

// Icons
import iconEfficiency from "../assets/about/icon-efficiency.png";
import iconCustomer from "../assets/about/icon-customer1.png";
import iconCustomerWhite from "../assets/about/icon-customer-white.png";
import iconIdea from "../assets/about/icon-idea.png";
import iconTarget from "../assets/about/icon-target.png";
import iconIntegrity from "../assets/about/icon-integrity.png";
import iconInnovation from "../assets/about/icon-innovation.png";
import iconSustainable from "../assets/about/icon-sustainable.png";
import iconExcellence from "../assets/about/icon-excellence.png";

const AboutPage = () => {
  return (
    <main className="pt-0 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section
        className="w-full min-h-[350px] md:h-[420px] bg-cover bg-center flex items-end pl-[6%] pb-[40px] md:pb-[65px] relative bg-fixed"
        style={{ backgroundImage: `url(${aboutHero})` }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative z-10">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-xl mb-2 md:mb-3">
            About us
          </h1>
          <p className="text-white/90 text-base md:text-lg font-medium tracking-wide drop-shadow">
            Home &gt; About us
          </p>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section
        className="max-w-7xl mx-auto px-5 md:px-6 py-20 md:py-24 grid md:grid-cols-2 gap-12 md:gap-14 items-center"
        data-aos="fade-up"
      >
        <div
          className="relative flex justify-center md:block"
          data-aos="zoom-in"
        >
          <img
            src={about1}
            className="rounded-2xl w-[78%] md:w-[420px] shadow-2xl mx-auto"
          />

          <img
            src={about2}
            className="rounded-2xl w-[58%] md:w-[330px] absolute top-[85px] md:top-[150px] left-1/2 -translate-x-1/2 md:left-[115px] md:translate-x-0 border-4 border-white shadow-2xl"
          />

          <img
            src={aboutVector}
            className="absolute -bottom-4 md:-bottom-10 left-1/2 -translate-x-1/2 md:left-[80px] md:translate-x-0 w-[95px] md:w-[140px] opacity-90"
          />
        </div>

        <div>
          <p className="text-red-500 font-semibold mb-2">
            About Trimode Shipping
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Digital & Trusted Transport Logistic Company
          </h2>
          <p className="text-gray-600 mb-4">
            With deep global logistics expertise and advanced supply chain
            technology, we empower businesses to streamline operations and
            enhance efficiency.
          </p>
          <p className="text-gray-600 mb-10">
            We provide tailored logistics strategies that improve performance,
            reduce costs and create measurable success.
          </p>

          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            <div className="flex items-center gap-3" data-aos="fade-right">
              <img src={iconEfficiency} className="w-12" />
              <p className="font-semibold text-gray-700">
                Efficiency Through Multimodal Integration
              </p>
            </div>

            <div className="flex items-center gap-3" data-aos="fade-left">
              <img src={iconCustomer} className="w-12" />
              <p className="font-semibold text-gray-700">
                Customer-Centric and Innovative
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION + MISSION ================= */}
      <section
        className="relative bg-cover bg-center bg-fixed py-24 text-white"
        style={{ backgroundImage: `url(${aboutBgDark})` }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-14 items-center">
          <img
            src={about1}
            className="rounded-2xl w-[90%] md:w-[480px] border-[6px] border-red-500 shadow-2xl mx-auto"
            data-aos="zoom-in"
          />

          <div>
            <p className="text-center uppercase text-sm tracking-wide text-red-300">
              Our Vision & Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Defining Our Path Forward
            </h2>

            <div className="flex gap-3 mb-8" data-aos="fade-right">
              <img src={iconIdea} className="w-12" />
              <div>
                <h3 className="text-red-400 text-xl font-semibold mb-1">
                  Our Vision
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  Become a global leader in smart, reliable & sustainable
                  shipping solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-3" data-aos="fade-left">
              <img src={iconTarget} className="w-12" />
              <div>
                <h3 className="text-red-400 text-xl font-semibold mb-1">
                  Our Mission
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  Deliver safe, cost-effective logistics with innovation &
                  technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section
        className="max-w-7xl mx-auto px-5 md:px-6 py-24 text-center"
        data-aos="fade-up"
      >
        <p className="text-red-500 font-semibold mb-3">Our Core Values</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Guiding principles that define who we are.
        </h2>

        <div className="grid md:grid-cols-3 gap-16">
          <ValueCard
            icon={iconIntegrity}
            title="Integrity First"
            text="We act with honesty & transparency."
          />
          <ValueCardRed />
          <ValueCard
            icon={iconInnovation}
            title="Innovation Driven"
            text="We work with modern logistics technology."
          />
          <ValueCard
            icon={iconSustainable}
            title="Sustainable Practices"
            text="We protect the planet responsibly."
          />
          <ValueCard
            icon={iconExcellence}
            title="Excellence Always"
            text="We deliver quality every time."
          />
          <ValueCard
            icon={iconCustomer}
            title="Customer Commitment"
            text="We build trusted long-term partnerships."
          />
        </div>
      </section>
    </main>
  );
};

// ================= Reusable Cards =================
const ValueCard = ({ icon, title, text }) => (
  <div
    className="hover:-translate-y-2 transition duration-300"
    data-aos="zoom-in-up"
  >
    <img src={icon} className="mx-auto w-16" />
    <h3 className="font-semibold text-xl mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

const ValueCardRed = () => (
  <div
    className="bg-red-500 text-white p-12 rounded-2xl shadow-2xl scale-105 hover:scale-110 transition duration-300 hover:shadow-[0_0_35px_rgba(255,0,0,0.6)]"
    data-aos="zoom-in"
  >
    <img src={iconCustomerWhite} className="mx-auto w-16" />
    <h3 className="font-semibold text-xl mt-4 mb-2">Customer Commitment</h3>
    <p>We go above and beyond for every client, every time.</p>
  </div>
);

export default AboutPage;
