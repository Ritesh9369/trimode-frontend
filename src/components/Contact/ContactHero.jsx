// src/components/Contact/ContactHero.jsx
import banner from "../../assets/contact/contact-banner.png";

const ContactHero = () => {
  return (
    <section
      className="w-full h-[430px] bg-cover bg-center flex items-center pl-[6%] relative shadow-lg"
      style={{ backgroundImage: `url(${banner})` }}
      data-aos="fade-up"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Text */}
      <div className="relative z-10">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">
          Contact us
        </h1>
        <p className="text-white/90 text-lg tracking-wide">
          Home &gt; Contact us
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
