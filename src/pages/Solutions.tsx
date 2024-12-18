import { Navigation } from "@/components/Navigation";
import { Solutions } from "@/components/Solutions";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const SolutionsPage = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <div className="pt-16">
        <Solutions />
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default SolutionsPage;