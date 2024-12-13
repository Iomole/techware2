import { Navigation } from "@/components/Navigation";
import { Contact as ContactSection } from "@/components/Contact";

const Contact = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <div className="pt-16">
        <ContactSection />
      </div>
    </main>
  );
};

export default Contact;