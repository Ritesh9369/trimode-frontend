import { useState } from "react";
import hero1 from "../assets/hero-bg-1.png";
import hero2 from "../assets/hero-bg-2.png";
import hero3 from "../assets/hero-bg-3.png";
import hero4 from "../assets/hero-bg-4.png";
import hero5 from "../assets/hero-bg-5.png";

const Hero = () => {
  const images = [hero1, hero2, hero3, hero4, hero5];
  const [index, setIndex] = useState(0);

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const handleNext = () =>
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section
      className="w-full min-h-[100vh] bg-cover bg-center relative flex items-center pt-[110px]"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 md:px-12">
        <h3 className="text-white text-lg mb-2 tracking-wide">
          Innovation Logistics
        </h3>

        <h1 className="text-white font-bold leading-tight text-4xl md:text-6xl mb-4">
          Logistics Simplified, <br /> Success Amplified
        </h1>

        <p className="text-gray-200 max-w-2xl text-lg mb-6">
          We take the complexity out of logistics with smart, scalable solutions
          so your business can grow faster, operate smoother, and deliver
          better.
        </p>

        <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-md text-white font-medium text-lg">
          Explore Services →
        </button>
      </div>

      {/* Slider arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 bottom-10 text-white text-4xl font-bold hover:text-red-500 transition"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute left-16 bottom-10 text-white text-4xl font-bold hover:text-red-500 transition"
      >
        ›
      </button>
    </section>
  );
};

export default Hero;
