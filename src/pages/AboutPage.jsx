import AboutHero from "../components/About/AboutHero";
import AboutContent from "../components/About/AboutContent";
import AboutVisionMission from "../components/About/AboutVisionMission";
import AboutCoreValues from "../components/About/AboutCoreValues";

const AboutPage = () => (
  <main className="pt-0 overflow-x-hidden">
    <AboutHero />
    <AboutContent />
    <AboutVisionMission />
    <AboutCoreValues />
  </main>
);

export default AboutPage;
