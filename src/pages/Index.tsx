import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <Contact />
    </main>
  );
};

export default Index;