// src/App.jsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
// ⭐ Service Details import

import { Routes, Route } from "react-router-dom";
import InsightsPage from "./pages/InsightsPage";
import CareersPage from "./pages/CareersPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* ⭐ NEW — Warehousing Details Page Route */}
        <Route path="/services/warehousing" element={<ServiceDetailsPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
