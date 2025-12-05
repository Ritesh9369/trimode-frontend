import { useState, useEffect } from "react";

import hero2 from "../../assets/hero/hero-bg-7.png";
import hero1 from "../../assets/hero/hero-bg-3.png";


const HeroSection = () => {
  
  const images = [hero1, hero2];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(false);
    }, 400);
  };

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setFade(false);
    }, 400);
  };

  // Auto slide every 5 sec
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-[100vh] relative flex items-center pt-[110px] px-6 md:px-16 overflow-hidden">
      {/* BACKGROUND – Layer 1 */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-[900ms]"
        style={{
          backgroundImage: `url(${images[index]})`,
          opacity: fade ? 0 : 1
        }}
      ></div>

      {/* BACKGROUND – Layer 2 (preload next image for smooth cross-fade) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-[900ms]"
        style={{
          backgroundImage: `url(${images[index]})`,
          opacity: fade ? 1 : 0
        }}
      ></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 max-w-3xl text-left">
        <h3 className="text-white text-sm sm:text-base md:text-lg mb-3 tracking-wide uppercase">
          Innovation Logistics
        </h3>

        <h1 className="text-white font-bold leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          Logistics Simplified, <br className="hidden sm:block" /> Success
          Amplified
        </h1>

        <p className="text-gray-200 max-w-2xl text-base sm:text-lg md:text-xl mb-8">
          We take the complexity out of logistics with smart, scalable solutions
          so your business can grow faster, operate smoother, and deliver
          better.
        </p>

        <button className="bg-red-600 hover:bg-red-700 active:scale-95 shadow-lg transition px-7 py-3 rounded-md text-white font-semibold text-base sm:text-lg">
          Explore Services →
        </button>
      </div>

      {/* SLIDER ARROWS */}
      <button
        onClick={handlePrev}
        className="absolute bottom-8 left-6 md:left-14 text-white text-3xl sm:text-4xl font-bold hover:text-red-500 transition select-none"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute bottom-8 left-16 md:left-24 text-white text-3xl sm:text-4xl font-bold hover:text-red-500 transition select-none"
      >
        ›
      </button>
    </section>
  );
};

export default HeroSection;
