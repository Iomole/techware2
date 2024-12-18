import { Navigation } from "@/components/Navigation";
import { BusinessSolutions } from "@/components/enterprise/BusinessSolutions";
import { TechnologyPartners } from "@/components/enterprise/TechnologyPartners";
import { motion } from "framer-motion";
import { Building } from "lucide-react";

const EnterpriseApplications = () => {
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
              <Building className="w-16 h-16 text-[#ea384c]" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Enterprise Business Applications
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of enterprise applications. 
              We deliver scalable, integrated solutions that streamline operations and drive growth.
            </p>
          </motion.div>

          <BusinessSolutions />
          <TechnologyPartners />
        </div>
      </main>
    </div>
  );
};

export default EnterpriseApplications;