import { Navigation } from "@/components/Navigation";
import { TechnologyStacks } from "@/components/technology-resourcing/TechnologyStacks";
import { ClientLogos } from "@/components/technology-resourcing/ClientLogos";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

const TechnologyResourcing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Code className="w-16 h-16 text-[#ea384c]" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Technology Resourcing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide expert IT staffing solutions across various technology stacks, 
              helping organizations build high-performing technical teams.
            </p>
          </motion.div>

          <TechnologyStacks />
          <ClientLogos />
        </div>
      </main>
    </div>
  );
};

export default TechnologyResourcing;