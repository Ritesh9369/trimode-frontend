import serviceImg from "../../../assets/services/warehousing-img.png";

const ServiceOverview = () => {
  return (
    <section
      className="max-w-7xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-12 items-center"
      data-aos="fade-up"
    >
      <img
        src={serviceImg}
        className="rounded-2xl w-full max-w-[520px] border-[5px] border-red-500 shadow-xl mx-auto"
        alt="Warehousing"
      />

      <div>
        <p className="text-red-500 font-semibold mb-2">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Warehousing & Inventory Management
        </h2>
        <p className="text-gray-600 mb-4">
          Trimode provides secure, efficient, and technology-driven warehousing
          solutions designed to streamline operations and support end-to-end
          supply chain needs.
        </p>
        <p className="text-gray-600">
          Whether for seasonal demand, long-term storage or fulfillment support,
          our facilities ensure safety, visibility, and high-performance
          logistics.
        </p>
      </div>
    </section>
  );
};

export default ServiceOverview;
