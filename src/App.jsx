// ================== GLOBAL COMPONENTS ==================
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ================== MAIN PAGES ==================
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import InsightsPage from "./pages/InsightsPage";
import CareersPage from "./pages/CareersPage";

// ================== SERVICE DETAIL PAGES (CARDS) ==================
import ServiceWarehousingPage from "./pages/ServicesCardPages/ServiceWarehousingPage";
import ServiceFreightPage from "./pages/ServicesCardPages/ServiceFreightPage";
import ServiceCustomPage from "./pages/ServicesCardPages/ServiceCustomPage";
import ServiceLastMilePage from "./pages/ServicesCardPages/ServiceLastMilePage";

// ================== ROUTER ==================
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* ⬆️ Navbar हर पेज पर ऊपर रहेगा */}
      <Navbar />

      {/* 🔥 अब सभी पेज रूटिंग यहाँ से लोड होंगे */}
      <Routes>
        {/* 📌 BASIC ROUTES */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/careers" element={<CareersPage />} />

        {/* 📌 SERVICES DETAILS ROUTES (CARD CLICK पर OPEN होने वाले) */}
        <Route
          path="/services/warehousing"
          element={<ServiceWarehousingPage />}
        />
        <Route path="/services/freight" element={<ServiceFreightPage />} />
        <Route path="/services/custom" element={<ServiceCustomPage />} />
        <Route path="/services/last-mile" element={<ServiceLastMilePage />} />
      </Routes>

      {/* ⬇️ Footer हर पेज पर नीचे रहेगा */}
      <Footer />
    </>
  );
}

export default App;
