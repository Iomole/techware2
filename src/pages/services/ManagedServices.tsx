import { ServicePage } from "@/components/ServicePage";
import { Cog } from "lucide-react";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const partnerOEMs = [
  {
    name: "Evernex",
    logo: "/lovable-uploads/ca92ba81-089e-426e-8dcb-736762f9d29f.png",
    description: "Global provider of IT life services and multi-vendor maintenance"
  }
];

const ManagedServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <ServicePage
        title="Managed Services"
        description="Comprehensive IT infrastructure management and support services"
        icon={<Cog className="w-12 h-12 text-[#ea384c]" />}
        content={[
          "Our Managed Services, powered by our partnership with Evernex, provide comprehensive IT infrastructure support and maintenance solutions that help organizations optimize their technology investments. Our services include:",
          "• Third Party Maintenance (TPM) services for servers, storage, and networking equipment",
          "• Global coverage with local expertise in over 165 countries",
          "• 24/7/365 technical support with multi-vendor expertise",
          "• Spare parts management and logistics",
          "• Hardware support for data center equipment beyond OEM warranty",
          "• Cost-effective alternatives to traditional OEM maintenance",
          "• Environmental commitment through IT lifecycle management",
          "• Flexible SLAs tailored to business needs",
          "Through our partnership with Evernex, we deliver sustainable and cost-effective IT maintenance solutions that extend the life of your IT assets while reducing environmental impact. Our services help organizations maintain high availability of their IT infrastructure while significantly reducing maintenance costs."
        ]}
      />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Partners</h2>
          <p className="text-lg text-gray-600">
            We collaborate with world-class technology providers to deliver exceptional managed services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerOEMs.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="aspect-[3/1] relative mb-4 bg-white rounded-lg overflow-hidden p-4 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                  <p className="text-gray-600">{partner.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManagedServices;