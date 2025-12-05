import aboutHero from "../../assets/about/about-hero.png";

const AboutHero = () => {
  return (
    <section
      className="w-full min-h-[350px] md:h-[420px] bg-cover bg-center flex items-end pl-[6%] pb-[40px] md:pb-[65px] relative bg-fixed"
      style={{ backgroundImage: `url(${aboutHero})` }}
      data-aos="fade-up"
    >
      <div className="absolute inset-0 bg-black/35"></div>
      <div className="relative z-10">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-xl mb-2 md:mb-3">
          About us
        </h1>
        <p className="text-white/90 text-base md:text-lg font-medium tracking-wide drop-shadow">
          Home &gt; About us
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
