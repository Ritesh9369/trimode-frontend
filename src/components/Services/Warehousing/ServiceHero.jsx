// import banner from "../../assets/services/warehousing-banner.png";
import banner from "../../../assets/services/warehousing-banner.png";

const ServiceHero = () => {
  return (
    <section
      className="w-full h-[430px] bg-cover bg-center flex items-center pl-[6%] relative shadow-lg"
      style={{ backgroundImage: `url(${banner})` }}
      data-aos="fade-up"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-xl">
          Warehousing & Inventory Management
        </h1>
        <p className="text-white/90 text-lg tracking-wide">
          Home &gt; Our Services
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
