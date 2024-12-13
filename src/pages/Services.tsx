import { Navigation } from "@/components/Navigation";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

const ServicesPage = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <div className="pt-16">
        <Services />
        <Contact />
      </div>
    </main>
  );
};

export default ServicesPage;