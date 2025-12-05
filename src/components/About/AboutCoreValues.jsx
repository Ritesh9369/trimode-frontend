import iconIntegrity from "../../assets/about/icon-integrity.png";
import iconInnovation from "../../assets/about/icon-innovation.png";
import iconSustainable from "../../assets/about/icon-sustainable.png";
import iconExcellence from "../../assets/about/icon-excellence.png";
import iconCustomer from "../../assets/about/icon-customer1.png";
import iconCustomerWhite from "../../assets/about/icon-customer-white.png";

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

const AboutCoreValues = () => {
  return (
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
  );
};

export default AboutCoreValues;
