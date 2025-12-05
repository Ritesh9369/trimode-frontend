import AOS from "aos";
import "aos/dist/aos.css";

import ServiceHero from "../../components/Services/Warehousing/ServiceHero";
import ServiceOverview from "../../components/Services/Warehousing/ServiceOverview";
import ServiceOffers from "../../components/Services/Warehousing/ServiceOffers";
import ServiceFAQ from "../../components/Services/Warehousing/ServiceFAQ";

AOS.init({
  duration: 900,
  once: true
});

const ServiceWarehousingPage = () => {
  return (
    <main className="bg-white">
      {/* NAVBAR BOTTOM CLEAN GAP */}
      <div className="h-[20px] w-full bg-white border-b border-gray-200"></div>

      <ServiceHero />
      <ServiceOverview />
      <ServiceOffers />
      <ServiceFAQ />
    </main>
  );
};

export default ServiceWarehousingPage;
