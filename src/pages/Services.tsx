import { Navigation } from "@/components/Navigation";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const ServicesPage = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <div className="pt-16">
        <Services />
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default ServicesPage;