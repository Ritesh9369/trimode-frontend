import strengthImg from "../assets/srenthmainimg/strength-img.png";

const features = [
  {
    title: "Built for Reliability",
    desc: "We manufacture high-strength containers that maximize security & performance even under extreme conditions."
  },
  {
    title: "Cost Efficient Solutions",
    desc: "Optimized logistics to minimize operational costs while ensuring quality service across all routes."
  },
  {
    title: "Timely Delivery",
    desc: "Advanced supply chain planning ensures your cargo arrives exactly when promised."
  },
  {
    title: "Global Network Support",
    desc: "Worldwide logistics connectivity with 24/7 dedicated customer support."
  }
];

const StrengthSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Text */}
        <div>
          <h3 className="text-red-600 font-medium uppercase mb-2">
            Why Choose Us
          </h3>

          <h2 className="text-4xl font-bold leading-tight mb-6">
            Strength. Speed.
            <br /> Satisfaction Delivered.
          </h2>

          {features.map((item, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}

          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 mt-3 rounded-md text-white font-medium">
            Learn More →
          </button>
        </div>

        {/* Right Side Image */}
        <div>
          <img
            src={strengthImg}
            alt="Strength"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default StrengthSection;
