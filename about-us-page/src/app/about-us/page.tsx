import Header from "./Header";
import StatsSection from "./StatsSection";
import TeamSection from "./TeamSection";
import HeroSection from "./HeroSection";

function AboutUsPage() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <div className="bg-white p-4 rounded-md">
        <HeroSection />
        <StatsSection />
        <TeamSection />
        <ContactUsSection />
      </div>
    </div>
  );
}

function ContactUsSection() {
  return <section>contact us section</section>;
}

export default AboutUsPage;
