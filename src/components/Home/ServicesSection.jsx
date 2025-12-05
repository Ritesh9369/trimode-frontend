import { Link } from "react-router-dom";
import service1 from "../../assets/servicesmain/service-1.png";
import service2 from "../../assets/servicesmain/service-2.png";
import service3 from "../../assets/servicesmain/service-3.png";
import service4 from "../../assets/servicesmain/service-4.png";

const services = [
  {
    title: "Freight Transportation",
    desc: "Safe and fast freight transport to deliver goods globally using road, air & sea networks.",
    image: service1,
    link: "/services/freight"
  },
  {
    title: "Warehousing & Inventory Management",
    desc: "High-security storage, smart distribution & real-time inventory tracking for enterprises.",
    image: service2,
    link: "/services/warehousing"
  },
  {
    title: "Custom Logistics Solutions",
    desc: "Personalized supply-chain strategies to optimize logistics efficiency for businesses.",
    image: service3,
    link: "/services/custom"
  },
  {
    title: "Last-Mile Delivery",
    desc: "Fast and reliable last-mile delivery with real-time tracking and doorstep drop-offs.",
    image: service4,
    link: "/services/last-mile"
  }
];

const ServicesSection = () => {
  return (
    <section className="bg-[#231F20] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-red-500 font-medium uppercase mb-2">
          Services We Offer
        </h3>
        <h2 className="text-4xl font-bold mb-14 max-w-3xl leading-tight">
          World’s Leading Contract Logistics Provider.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <Link to={service.link} key={idx}>
              <div className="bg-white text-black rounded-xl shadow-xl overflow-hidden group transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl flex flex-col h-full cursor-pointer">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {service.desc}
                  </p>
                  <button className="text-red-600 font-medium group-hover:underline transition mt-auto">
                    Read More →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
