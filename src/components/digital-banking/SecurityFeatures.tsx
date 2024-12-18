import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const securityFeatures = [
  {
    title: "Regulatory Compliance & Risk Management",
    features: [
      "Digital Customer Onboarding",
      "Identity Verification",
      "Document Management",
      "Risk Profiling",
      "Customer Due Diligence",
      "Enhanced Due Diligence",
      "Periodic KYC Updates",
      "Automated Approval Workflows"
    ]
  },
  {
    title: "Financial Crime Prevention",
    features: [
      "Transaction Monitoring",
      "Suspicious Activity Detection",
      "Sanctions Screening",
      "PEP Screening",
      "Regulatory Reporting",
      "Case Management",
      "Risk Scoring",
      "Compliance Dashboard"
    ]
  }
];

export const SecurityFeatures = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Risk & Compliance Management</h2>
        <p className="text-lg text-gray-600">
          Comprehensive regulatory compliance and financial crime prevention
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {securityFeatures.map((section, sectionIndex) => (
          <Card key={section.title} className="h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">{section.title}</h3>
              <div className="space-y-4">
                {section.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (sectionIndex * 8 + index) * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-[#ea384c] rounded-full" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};