// src/components/Contact/ContactMap.jsx
import map from "../../assets/contact/map.png";

const ContactMap = () => {
  return (
    <section data-aos="fade-up" className="w-full py-10">
      <img
        src={map}
        className="w-full h-[450px] object-cover rounded-xl shadow-xl"
        alt="Google Map"
      />
    </section>
  );
};

export default ContactMap;
