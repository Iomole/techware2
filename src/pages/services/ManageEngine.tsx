import { Navigation } from "@/components/Navigation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ServerCog } from "lucide-react";

const ManageEngine = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/lovable-uploads/0d1f59aa-52fe-41db-af0e-18d2694e7818.png" 
                alt="ManageEngine Logo" 
                className="h-12"
              />
              <h1 className="text-4xl font-bold text-gray-900">IT Operations Management Solutions</h1>
            </div>

            <p className="text-xl text-gray-600 mb-12">
              As an authorized partner of ManageEngine, Techware provides comprehensive IT operations and service management solutions to help organizations streamline their IT infrastructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h2 className="text-2xl font-semibold mb-4">Key Solutions</h2>
                <ul className="space-y-3">
                  <li>• ServiceDesk Plus - ITSM software for incident and change management</li>
                  <li>• OpManager - Network monitoring and management</li>
                  <li>• ADManager Plus - Active Directory management and reporting</li>
                  <li>• Desktop Central - Unified endpoint management and security</li>
                  <li>• Applications Manager - Application performance monitoring</li>
                  <li>• Log360 - Integrated SIEM solution</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
                <ul className="space-y-3">
                  <li>• Comprehensive IT management from a single vendor</li>
                  <li>• Cost-effective solutions with enterprise-grade features</li>
                  <li>• Local support and implementation expertise</li>
                  <li>• Regular updates and security patches</li>
                  <li>• Flexible deployment options (Cloud/On-premise)</li>
                  <li>• Integration capabilities with existing IT tools</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-2xl font-semibold mb-4">Why Choose Techware for ManageEngine Solutions?</h2>
              <p>
                As a certified ManageEngine partner, Techware brings extensive experience in implementing and supporting ManageEngine solutions across various industries. Our team of certified professionals ensures smooth deployment, integration, and ongoing support for your IT management needs.
              </p>
              <p>
                We offer comprehensive services including:
              </p>
              <ul>
                <li>Solution consulting and requirements analysis</li>
                <li>Implementation and configuration</li>
                <li>Integration with existing systems</li>
                <li>Training and knowledge transfer</li>
                <li>Ongoing support and maintenance</li>
                <li>Regular health checks and optimization</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8"
            >
              <a
                href="https://www.manageengine.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#ea384c] hover:bg-[#d02e40] transition-colors"
              >
                Learn More About ManageEngine
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Contact />
      <Footer />
    </main>
  );
};

export default ManageEngine;