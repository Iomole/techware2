import { Navigation } from "@/components/Navigation";
import { ServicePage } from "@/components/ServicePage";
import { FileCheck, ClipboardCheck, Building2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const NOTAPCertificate = () => {
  const features = [
    {
      title: "Documentation Preparation",
      description: "Expert assistance in preparing all required documentation for NOTAP certification.",
      icon: ClipboardCheck,
    },
    {
      title: "Application Submission",
      description: "Seamless handling of the application submission process.",
      icon: FileCheck,
    },
    {
      title: "Liaison with NOTAP",
      description: "Direct communication and coordination with NOTAP officials.",
      icon: Building2,
    },
    {
      title: "Compliance Assurance",
      description: "Ongoing support to ensure continued compliance with NOTAP regulations.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ServicePage
        title="NOTAP Certificate Processing"
        description="Comprehensive services for NOTAP certification and compliance"
        content={[
          "In compliance with the National Office for Technology Acquisition and Promotion (NOTAP) mandate, we offer comprehensive services to help your business adhere to government regulations related to transfer of foreign technology agreements.",
          "Our specialized team handles the entire process of obtaining NOTAP certificate, ensuring a smooth and efficient certification process while you focus on your core business operations.",
        ]}
        icon={<FileCheck className="w-12 h-12 text-[#ea384c]" />}
      />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
            <p className="mt-4 text-lg text-gray-600">
              A comprehensive approach to NOTAP certification
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-[#ea384c] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              By entrusting us with your NOTAP certificate processing, you can focus on the strategic and operational
              aspects of your business, confident that your compliance needs are being expertly managed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NOTAPCertificate;