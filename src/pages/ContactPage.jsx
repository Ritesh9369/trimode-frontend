// src/pages/ContactPage.jsx
import AOS from "aos";
import "aos/dist/aos.css";

import ContactHero from "../components/Contact/ContactHero";
import ContactFormInfo from "../components/Contact/ContactFormInfo";
import ContactMap from "../components/Contact/ContactMap";

AOS.init({ duration: 900, once: true });

const ContactPage = () => {
  return (
    <main className="bg-white">
      {/* NAVBAR BOTTOM WHITE CLEAN SEPARATOR */}
      <div className="h-[20px] w-full bg-white border-b border-gray-200"></div>

      <ContactHero />
      <ContactFormInfo />
      <ContactMap />
    </main>
  );
};

export default ContactPage;
