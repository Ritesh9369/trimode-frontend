import mto from "../../assets/certifications/mto.png";
import iso from "../../assets/certifications/iso.png";
import crisil from "../../assets/certifications/crisil.png";
import iata from "../../assets/certifications/iata.png";
import aeo from "../../assets/certifications/aeo.png";

const CertificationsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-10" data-aos="fade-up">
        <p className="text-red-600 font-semibold uppercase mb-1">
          Certification
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Trusted Certifications & Compliance
        </h2>
      </div>

      <div
        className="flex flex-wrap justify-center gap-16 px-6 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        {[mto, iso, crisil, iata, aeo].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="certification"
            className="w-32 h-auto opacity-90 hover:opacity-100 transition"
          />
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
