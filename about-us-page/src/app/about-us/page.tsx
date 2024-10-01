import Header from "./Header";
import StatsSection from "./StatsSection";
import TeamSection from "./TeamSection";
import HeroSection from "./HeroSection";
import ContactUsSection from "./ContactSection";
import Footer from "./Footer";

function AboutUsPage() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <div className="bg-white p-4 rounded-md">
        <HeroSection />
        <StatsSection />
        <TeamSection />
        <ContactUsSection />
        <Footer />
      </div>
    </div>
  );
}

export default AboutUsPage;
