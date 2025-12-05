import banner from "../../../assets/services/warehousing-banner.png";
import icon1 from "../../../assets/services/grid-icon-1.png";
import icon2 from "../../../assets/services/grid-icon-2.png";
import icon3 from "../../../assets/services/grid-icon-3.png";
import icon4 from "../../../assets/services/grid-icon-4.png";

const ServiceGridCard = ({ icon, title }) => (
  <div
    className="text-center hover:-translate-y-2 transition duration-300"
    data-aos="zoom-in"
  >
    <img src={icon} className="mx-auto w-14 mb-4" alt="" />
    <h3 className="text-lg font-semibold">{title}</h3>
  </div>
);

const ServiceOffers = () => {
  return (
    <section
      className="relative bg-cover bg-center py-24 text-white"
      style={{ backgroundImage: `url(${banner})` }}
      data-aos="fade-up"
    >
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative max-w-6xl mx-auto px-5 text-center">
        <p className="text-red-400 font-semibold uppercase">What We Offer</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          The Trimode Shipping Advantage
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          <ServiceGridCard icon={icon1} title="Cost-Effective Solution" />
          <ServiceGridCard icon={icon2} title="Tailored Solutions" />
          <ServiceGridCard icon={icon3} title="Global Reach" />
          <ServiceGridCard icon={icon4} title="Commitment to Quality" />
        </div>
      </div>
    </section>
  );
};

export default ServiceOffers;
