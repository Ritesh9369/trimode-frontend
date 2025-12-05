import containerImg from "../../assets/strength/strength-container.png";
import iconReliability from "../../assets/strength/icon-reliability.png";
import iconQuality from "../../assets/strength/icon-quality.png";
import iconExpertise from "../../assets/strength/icon-expertise.png";
import iconSupport from "../../assets/strength/icon-support.png";

const WhyChooseSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
      {/* LEFT IMAGE */}
      <div data-aos="fade-right">
        <img src={containerImg} alt="strength container" className="w-full" />
      </div>

      {/* RIGHT CONTENT */}
      <div data-aos="fade-left">
        <p className="text-red-600 font-semibold uppercase mb-2">
          Why Choose Us
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Delivering Value Beyond Logistics
        </h2>

        <StrengthItem
          icon={iconReliability}
          title="Built for Reliability"
          desc="We manufacture high-strength containers that meet international ISO standards for performance and safety."
          active
        />
        <StrengthItem
          icon={iconQuality}
          title="100% Quality Assurance"
          desc="High-strength container construction using ISO-standard materials."
        />
        <StrengthItem
          icon={iconExpertise}
          title="Industry-Leading Expertise"
          desc="Decades of specialized experience in shipping infrastructure and logistics."
        />
        <StrengthItem
          icon={iconSupport}
          title="Support You Can Count On"
          desc="Dedicated support before, during, and after delivery — anytime you need us."
        />
      </div>
    </section>
  );
};

const StrengthItem = ({ icon, title, desc, active }) => (
  <div
    className={`flex items-start gap-4 p-4 rounded-lg mb-4 ${
      active ? "bg-red-600 text-white" : "bg-white shadow"
    }`}
  >
    <img src={icon} className="w-10 h-10" />
    <div>
      <h4 className="font-bold mb-1">{title}</h4>
      <p className="text-sm">{desc}</p>
    </div>
  </div>
);

export default WhyChooseSection;
