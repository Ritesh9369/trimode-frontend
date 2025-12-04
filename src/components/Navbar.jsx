// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/navbarimg/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);
  const menuRef = useRef(null);
  const location = useLocation();

  // Active highlight on route change
  useEffect(() => {
    const current =
      location.pathname === "/" ? "Home" : location.pathname.slice(1);
    setActive(current.charAt(0).toUpperCase() + current.slice(1));
    setIsOpen(false);
  }, [location]);

  // Scroll hide / show navbar
  useEffect(() => {
    function handleScroll() {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current && currentScroll > 80) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScroll.current = currentScroll;
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside drawer => close
  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Insights", path: "/insights" },
    { name: "Careers", path: "/careers" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[90] bg-white/75 backdrop-blur-xl border-b-2 border-red-500 shadow-lg transition-all duration-300 ${
        show ? "translate-y-0" : "-translate-y-[110%]"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Trimode Logo"
            className="w-32 md:w-40 hover:scale-[1.04] transition"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-8 font-medium">
            {navItems.map((item) => (
              <li key={item.name} className="relative group cursor-pointer">
                <Link
                  to={item.path}
                  className={`${
                    active === item.name ? "text-red-500" : "text-gray-800"
                  } transition`}
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 ${
                    active === item.name ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* Phone */}
          <a
            href="tel:+919874561233"
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shadow">
              <i className="ri-phone-fill text-white text-lg" />
            </div>
            <span className="font-semibold whitespace-nowrap">
              +91 98 74561 233
            </span>
          </a>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="bg-red-500 hover:bg-red-600 active:scale-95 px-5 py-2 rounded-md text-white font-semibold ripple shadow transition"
          >
            Contact us ↗
          </Link>
        </div>

        {/* 🔥 Mobile Hamburger / Close (X) Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-md bg-black active:scale-95 transition"
        >
          {isOpen ? (
            // X icon when open
            <i className="ri-close-line text-white text-2xl leading-none" />
          ) : (
            // 3-line hamburger when closed
            <div className="hamburger">
              <span />
              <span />
              <span />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        ref={menuRef}
        className={`md:hidden fixed right-0 top-[72px] w-[78%] h-[calc(100vh-72px)] bg-black/95 backdrop-blur-2xl text-white text-lg p-7 space-y-6 transition-all duration-500 rounded-tl-3xl shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        {/* All nav links - white text */}
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="block text-white hover:text-red-500 transition"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}

        {/* Phone inside drawer - also white */}
        <a
          href="tel:+919874561233"
          className="flex items-center gap-3 pt-3 text-white"
        >
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
            <i className="ri-phone-fill text-white text-lg" />
          </div>
          <span className="font-semibold text-base">+91 98 74561 233</span>
        </a>

        {/* Contact Button */}
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg w-full block text-center font-semibold ripple transition"
        >
          Contact us ↗
        </Link>
      </div>
    </nav>
  );
}
