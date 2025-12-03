import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const location = useLocation();

  // Set active nav based on URL
  useEffect(() => {
    const current =
      location.pathname === "/" ? "Home" : location.pathname.slice(1);
    setActive(current.charAt(0).toUpperCase() + current.slice(1));
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Insights", path: "/insights" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b-2 border-red-500 transition-all">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <img src={logo} alt="Trimode Logo" className="w-32 md:w-40" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 font-medium">
          {navItems.map((item) => (
            <li key={item.name} className="relative group cursor-pointer">
              <Link
                to={item.path}
                className={`${
                  active === item.name ? "text-red-500" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>

              {/* Underline Animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 ${
                  active === item.name ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Contact button */}
        <Link
          to="/contact"
          className="hidden md:block ripple bg-red-500 hover:bg-red-600 px-5 py-2 rounded-md text-white font-semibold transition"
        >
          Contact Us
        </Link>

        {/* Mobile menu icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 text-3xl md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white p-6 space-y-6 text-lg transition">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block hover:text-red-500"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-md w-full text-white block text-center font-semibold ripple transition"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
