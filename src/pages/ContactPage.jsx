import AOS from "aos";
import "aos/dist/aos.css";

import banner from "../assets/contact/contact-banner.png";
import infoBg from "../assets/contact/contact-info-bg.png";
import iconLocation from "../assets/contact/icon-location.png";
import iconEmail from "../assets/contact/icon-email.png";
import iconPhone from "../assets/contact/icon-phone.png";
import map from "../assets/contact/map.png";

AOS.init({ duration: 900, once: true });

const ContactPage = () => {
  return (
    <main className="pt-[110px] bg-white">
      {/* 🔥 HERO BANNER */}
      <section
        className="w-full h-[430px] bg-cover bg-center flex items-center pl-[6%] relative border-b-4 border-red-500"
        style={{ backgroundImage: `url(${banner})` }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-2">
            Contact us
          </h1>
          <p className="text-white/90 text-lg">Home &gt; Contact us</p>
        </div>
      </section>

      {/* 🔥 FORM + INFO */}
      <section
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 py-20"
        data-aos="fade-up"
      >
        {/* FORM */}
        <div className="bg-white p-10 shadow-lg rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold mb-8">Get A Quote</h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Enter Your Name*"
              className="inputBox"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="inputBox"
            />
            <input type="tel" placeholder="Phone Number" className="inputBox" />

            <select className="inputBox">
              <option>Enquiry For</option>
              <option>Warehousing</option>
              <option>Shipping</option>
              <option>Logistics Service</option>
            </select>

            <textarea
              rows="4"
              placeholder="Message"
              className="inputBox"
            ></textarea>

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-semibold transition"
            >
              Submit →
            </button>
          </form>
        </div>

        {/* CONTACT INFORMATION (RIGHT BOX) */}
        <div
          className="p-10 rounded-2xl shadow-xl text-white bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: `url(${infoBg})` }}
          data-aos="fade-left"
        >
          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/55"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-8">
              Contact Information
            </h2>

            <InfoCard
              icon={iconLocation}
              title="Office Location"
              subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <InfoCard
              icon={iconEmail}
              title="Email Address"
              subtitle="info@trimodeshipping.com"
            />

            <InfoCard
              icon={iconPhone}
              title="Contact Information"
              subtitle="+91 98 74561 233"
              subtitle2="+91 98 74561 233"
            />
          </div>
        </div>
      </section>

      {/* 🔥 MAP */}
      <section data-aos="fade-up" className="w-full py-10">
        <img
          src={map}
          className="w-full h-[450px] object-cover rounded-xl shadow-lg"
        />
      </section>
    </main>
  );
};

/* 🔥 Info Card — White box exactly like Figma */
const InfoCard = ({ icon, title, subtitle, subtitle2 }) => (
  <div className="bg-white text-black rounded-xl p-6 flex gap-5 mb-6 items-start shadow-xl">
    <div className="bg-red-500 p-3 rounded-md shadow-md">
      <img src={icon} className="w-7 h-7" />
    </div>
    <div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      <p className="text-sm leading-relaxed">{subtitle}</p>
      {subtitle2 && <p className="text-sm leading-relaxed">{subtitle2}</p>}
    </div>
  </div>
);

export default ContactPage;
