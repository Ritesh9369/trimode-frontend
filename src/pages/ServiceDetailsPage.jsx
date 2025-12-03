// src/pages/ServiceDetailsPage.jsx
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ⭐ Images
import banner from "../assets/services/warehousing-banner.png";
import serviceImg from "../assets/services/warehousing-img.png";

// ⭐ Icons
import icon1 from "../assets/services/grid-icon-1.png";
import icon2 from "../assets/services/grid-icon-2.png";
import icon3 from "../assets/services/grid-icon-3.png";
import icon4 from "../assets/services/grid-icon-4.png";

AOS.init({
  duration: 900,
  once: true
});

const ServiceDetailsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faq = [
    {
      q: "01. What security measures are in place at your facilities?",
      a: "Our warehouses are designed to provide maximum security, featuring 24/7 surveillance, advanced access control systems, and strict safety protocols to ensure your goods remain fully protected."
    },
    {
      q: "02. What types of warehousing services do you offer?",
      a: "We provide short-term storage, long-term storage, fulfillment support, multimodal management, and custom warehouse solutions tailored to business needs."
    },
    {
      q: "03. How do you ensure the accuracy of inventory management?",
      a: "Our systems use real-time tracking, automated scanning, and AI-based forecasting to maintain accurate inventory performance."
    },
    {
      q: "04. Can you handle seasonal fluctuations in inventory demand?",
      a: "Yes, we offer scalable storage capacity and flexible operational planning to handle peak demand and seasonal inventory spikes."
    }
  ];

  return (
    <main className="pt-[110px]">
      {/* ================= HERO SECTION ================= */}
      <section
        className="w-full h-[420px] bg-cover bg-center flex items-center pl-[6%] relative"
        style={{ backgroundImage: `url(${banner})` }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="relative z-10">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-2">
            Warehousing & Inventory Management
          </h1>
          <p className="text-white/90 text-lg">Home &gt; Our Services</p>
        </div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
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
            Trimode provides secure, efficient, and technology-driven
            warehousing solutions designed to streamline operations and support
            end-to-end supply chain needs.
          </p>
          <p className="text-gray-600">
            Whether for seasonal demand, long-term storage or fulfillment
            support, our facilities ensure safety, visibility, and
            high-performance logistics.
          </p>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section
        className="relative bg-cover bg-center py-24 text-white"
        style={{ backgroundImage: `url(${banner})` }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-6xl mx-auto px-5 text-center">
          <p className="text-red-400 font-semibold">What We Offer</p>
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

      {/* ================= FAQ SECTION ================= */}
      <section className="max-w-5xl mx-auto px-5 py-24" data-aos="fade-up">
        <p className="text-center text-red-500 font-semibold mb-2">FAQ’s</p>
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          Your Questions About Our Warehousing Solutions
        </h2>

        <div className="space-y-4">
          {faq.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-5 cursor-pointer border rounded-xl shadow-md transition ${
                activeIndex === index ? "bg-red-500 text-white" : "bg-white"
              }`}
            >
              <div className="flex items-center justify-between font-semibold text-lg">
                {item.q}
                <span>{activeIndex === index ? "▲" : "▼"}</span>
              </div>

              {activeIndex === index && (
                <p className="mt-3 text-sm leading-relaxed">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

// ⭐ GRID CARD COMPONENT
const ServiceGridCard = ({ icon, title }) => (
  <div
    className="text-center hover:-translate-y-2 transition duration-300"
    data-aos="zoom-in"
  >
    <img src={icon} className="mx-auto w-14 mb-4" />
    <h3 className="text-lg font-semibold">{title}</h3>
  </div>
);

export default ServiceDetailsPage;
