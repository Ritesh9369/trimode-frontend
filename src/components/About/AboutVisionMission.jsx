import aboutBgDark from "../../assets/about/about-bg-dark.png";
import about1 from "../../assets/about/about-lg-1.png";
import iconIdea from "../../assets/about/icon-idea.png";
import iconTarget from "../../assets/about/icon-target.png";

const AboutVisionMission = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-24 text-white"
      style={{ backgroundImage: `url(${aboutBgDark})` }}
      data-aos="fade-up"
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-14 items-center">
        <img
          src={about1}
          className="rounded-2xl w-[90%] md:w-[480px] border-[6px] border-red-500 shadow-2xl mx-auto"
          data-aos="zoom-in"
        />

        <div>
          <p className="text-center uppercase text-sm tracking-wide text-red-300">
            Our Vision & Mission
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Defining Our Path Forward
          </h2>

          <div className="flex gap-3 mb-8" data-aos="fade-right">
            <img src={iconIdea} className="w-12" />
            <div>
              <h3 className="text-red-400 text-xl font-semibold mb-1">
                Our Vision
              </h3>
              <p className="leading-relaxed text-gray-200">
                Become a global leader in smart, reliable & sustainable shipping
                solutions.
              </p>
            </div>
          </div>

          <div className="flex gap-3" data-aos="fade-left">
            <img src={iconTarget} className="w-12" />
            <div>
              <h3 className="text-red-400 text-xl font-semibold mb-1">
                Our Mission
              </h3>
              <p className="leading-relaxed text-gray-200">
                Deliver safe, cost-effective logistics with innovation &
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
