import dhl from "../../assets/clients/dhl.png";
import chr from "../../assets/clients/chr.png";
import cma from "../../assets/clients/cma_cgm.png";
import schenker from "../../assets/clients/schenker.png";
import ups from "../../assets/clients/ups.png";

const ClientsSection = () => {
  const logos = [dhl, chr, cma, schenker, ups];

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h3 className="text-[#D93636] font-semibold mb-1 uppercase tracking-wide text-xs">
          Our Clients
        </h3>

        <h2 className="text-2xl md:text-3xl font-bold text-[#0A162A] mb-10">
          Serving These Great Companies
        </h2>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 place-items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Client Logo"
              className="
                h-7 md:h-9 lg:h-10 
                object-contain
                opacity-80 
                hover:opacity-100 hover:scale-105 
                transition-all duration-300
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
