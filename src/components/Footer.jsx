import logo from "../assets/logo.png";
import bg from "../assets/footer-bg.png";

const Footer = () => {
  return (
    <footer
      className="relative text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* 🔥 HALKA DARK OVERLAY + BLUR (PERFECT UI) */}
      <div className="bg-black/65 backdrop-blur-[2px] py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-14">
          {/* Logo + Info */}
          <div>
            {/* Logo Glow */}
            <div className="relative w-fit mb-6">
              <div className="absolute inset-0 bg-white/40 blur-2xl rounded-full scale-125 opacity-70"></div>
              <img
                src={logo}
                alt="Trimode Shipping"
                className="relative h-14 drop-shadow-[0_0_25px_rgba(0,0,0,.8)]"
              />
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Trimode Shipping provides smart, reliable logistics solutions
              across ocean, air and road with a strong focus on innovation and
              customer satisfaction.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-5 mt-6">
              <i className="ri-facebook-fill footer-icon"></i>
              <i className="ri-instagram-fill footer-icon"></i>
              <i className="ri-twitter-fill footer-icon"></i>
              <i className="ri-linkedin-fill footer-icon"></i>
            </div>
          </div>

          {/* Quick Link */}
          <div>
            <h4 className="footer-title underline-red">Quick Link</h4>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Services</li>
              <li>Insights</li>
              <li>Gallery</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="footer-title underline-red">Our Services</h4>
            <ul className="footer-list">
              <li>Warehousing & Inventory Management</li>
              <li>Custom Logistics Solutions</li>
              <li>Freight Transportation</li>
              <li>Last-Mile Delivery</li>
              <li>Cross-Docking & Transloading</li>
              <li>Supply Chain Consulting</li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="footer-title underline-red">Company Information</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              <span className="font-semibold text-white">Trimode Shipping</span>
              <br />
              Lorem Ipsum is simply dummy text of the printing and industry.
            </p>
            <p className="flex items-center gap-2 text-gray-300 text-sm mb-2">
              <i className="ri-phone-fill text-red-400"></i>
              +91 987 456 1233
            </p>
            <p className="flex items-center gap-2 text-gray-300 text-sm">
              <i className="ri-mail-line text-red-400"></i>
              info@trimodeshipping.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-14 pt-4 text-center text-gray-400 text-xs">
          Terms & Agreements <span className="mx-3">|</span>© 2025 Trimode
          Shipping. All Rights Reserved
          <span className="mx-3">|</span>
          Designed & Developed by{" "}
          <span className="text-red-400 font-semibold">G-Ordinateur</span> 🚀
        </div>
      </div>
    </footer>
  );
};

export default Footer;
