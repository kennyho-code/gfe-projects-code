import ContactSection from "./ContactSection";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import Header from "./Header";

function ContactUsPage() {
  return (
    <div>
      <Header />
      <div className="bg-white p-4 rounded-md">
        <ContactSection />
        <FaqSection />
        <Footer />
      </div>
    </div>
  );
}

export default ContactUsPage;
