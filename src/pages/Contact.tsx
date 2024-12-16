import { Navigation } from "@/components/Navigation";
import { Contact as ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

export default Contact;