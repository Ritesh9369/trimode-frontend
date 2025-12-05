import about1 from "../../assets/about/about-lg-1.png";
import about2 from "../../assets/about/about-lg-2.png";
import aboutVector from "../../assets/about/about-vector.png";
import iconEfficiency from "../../assets/about/icon-efficiency.png";
import iconCustomer from "../../assets/about/icon-customer1.png";

const AboutContent = () => {
  return (
    <section
      className="max-w-7xl mx-auto px-5 md:px-6 py-20 md:py-24 grid md:grid-cols-2 gap-12 md:gap-14 items-center"
      data-aos="fade-up"
    >
      <div className="relative flex justify-center md:block" data-aos="zoom-in">
        <img
          src={about1}
          className="rounded-2xl w-[78%] md:w-[420px] shadow-2xl mx-auto"
        />
        <img
          src={about2}
          className="rounded-2xl w-[58%] md:w-[330px] absolute top-[85px] md:top-[150px] left-1/2 -translate-x-1/2 md:left-[115px] border-4 border-white shadow-2xl"
        />
        <img
          src={aboutVector}
          className="absolute -bottom-4 md:-bottom-10 left-1/2 -translate-x-1/2 md:left-[80px] w-[95px] md:w-[140px] opacity-90"
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
          technology, we empower businesses to streamline operations and enhance
          efficiency.
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
  );
};

export default AboutContent;
