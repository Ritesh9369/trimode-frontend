import { Link } from "react-router-dom";
import service1 from "../assets/service-1.png";
import service2 from "../assets/service-2.png";
import service3 from "../assets/service-3.png";
import service4 from "../assets/service-4.png";

const services = [
  {
    title: "Freight Transportation",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    image: service1,
    link: "/services" // abhi details page nahi hai
  },
  {
    title: "Warehousing & Inventory Management",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    image: service2,
    link: "/services/warehousing" // ⭐ details page exists
  },
  {
    title: "Custom Logistics Solutions",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    image: service3,
    link: "/services" // abhi details page nahi hai
  },
  {
    title: "Last-Mile Delivery",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    image: service4,
    link: "/services" // abhi details page nahi hai
  }
];

const ServicesSection = () => {
  return (
    <section className="bg-[#231F20] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-red-500 font-medium uppercase mb-2">
          Services We Offer
        </h3>
        <h2 className="text-4xl font-bold mb-10">
          World’s Leading Contract Logistics Provider.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link to={service.link} key={index}>
              <div className="bg-white text-black rounded-md shadow hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-t-md"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <button className="text-red-600 font-medium hover:underline">
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
