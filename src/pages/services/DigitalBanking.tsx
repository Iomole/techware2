import { ServicePage } from "@/components/ServicePage";
import { Wallet } from "lucide-react";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const modules = [
  {
    name: "Core Banking",
    features: [
      "Customer Management",
      "Account Management",
      "Transaction Processing",
      "Interest Calculation",
      "Loan Management",
      "Fixed Deposits",
      "Current Accounts",
      "Savings Accounts"
    ]
  },
  {
    name: "Digital Channels",
    features: [
      "Mobile Banking",
      "Internet Banking",
      "USSD Banking",
      "ATM Integration",
      "POS Integration",
      "Agency Banking",
      "QR Payments",
      "Digital Wallet"
    ]
  },
  {
    name: "Payment Systems",
    features: [
      "RTGS Integration",
      "NIBSS Integration",
      "SWIFT Integration",
      "Card Processing",
      "Bill Payments",
      "Bulk Payments",
      "Direct Debits",
      "Standing Orders"
    ]
  },
  {
    name: "Risk & Compliance",
    features: [
      "AML/CFT Monitoring",
      "KYC Management",
      "Fraud Detection",
      "Regulatory Reporting",
      "Audit Trail",
      "Compliance Monitoring",
      "Risk Assessment",
      "Document Management"
    ]
  }
];

const DigitalBanking = () => {
  return (
    <div className="min-h-screen bg-background">
      <ServicePage
        title="Digital Banking Solutions"
        description="FlexDib: A comprehensive core banking solution built on Fineract"
        icon={
          <div className="w-12 h-12 bg-[#ea384c] rounded-lg flex items-center justify-center text-white font-bold text-xl">
            Fx
          </div>
        }
        content={[
          "FlexDib is our flagship digital banking solution, built on the robust Apache Fineract framework. It provides a comprehensive suite of banking services designed to meet the evolving needs of modern financial institutions.",
          "• Complete Core Banking System with all essential modules",
          "• Built on Apache Fineract, a battle-tested open-source framework",
          "• Highly customizable and scalable architecture",
          "• Supports multiple deployment models (On-premise/Cloud)",
          "• Comprehensive API layer for seamless integration",
          "• Built-in compliance and regulatory reporting",
          "• Advanced security features and audit trails",
          "• 24/7 support and maintenance services"
        ]}
      />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Banking Modules</h2>
          <p className="text-lg text-gray-600">
            Comprehensive banking modules designed for modern financial institutions
          </p>
        </motion.div>

        <Tabs defaultValue="Core Banking" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            {modules.map((module) => (
              <TabsTrigger key={module.name} value={module.name}>
                {module.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {modules.map((module) => (
            <TabsContent key={module.name} value={module.name}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{module.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {module.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                      >
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
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

      <Footer />
    </div>
  );
};

export default DigitalBanking;