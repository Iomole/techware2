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

export const CoreModules = () => {
  return (
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
  );
};