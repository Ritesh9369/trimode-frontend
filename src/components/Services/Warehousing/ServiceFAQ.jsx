import { useState } from "react";

const ServiceFAQ = () => {
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
    <section className="max-w-5xl mx-auto px-5 py-24" data-aos="fade-up">
      <p className="text-center text-red-500 font-semibold mb-2 uppercase">
        FAQ’s
      </p>
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
  );
};

export default ServiceFAQ;
