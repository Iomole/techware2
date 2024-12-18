import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const TechnicalSpecs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
        <p className="text-lg text-gray-600">
          Built on modern technology stack for reliability and scalability
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="h-full hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Architecture</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Microservices-based architecture</li>
              <li>• RESTful API interfaces</li>
              <li>• Event-driven design</li>
              <li>• Containerized deployment</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="h-full hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Security</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Role-based access control</li>
              <li>• End-to-end encryption</li>
              <li>• Multi-factor authentication</li>
              <li>• Security audit logging</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="h-full hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Integration</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Open API standards</li>
              <li>• Webhook support</li>
              <li>• Message queuing</li>
              <li>• Third-party connectors</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};