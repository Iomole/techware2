import { ServicePage } from "@/components/ServicePage";
import { Server } from "lucide-react";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const partnerOEMs = [
  {
    name: "Dell EMC",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
    description: "Enterprise storage and data center solutions"
  },
  {
    name: "HPE",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=100&fit=crop",
    description: "Servers and networking infrastructure"
  },
  {
    name: "Cisco",
    logo: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=200&h=100&fit=crop",
    description: "Networking and security solutions"
  },
  {
    name: "NetApp",
    logo: "https://images.unsplash.com/photo-1560732488-6b0df240254a?w=200&h=100&fit=crop",
    description: "Data storage and management"
  },
  {
    name: "VMware",
    logo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=100&fit=crop",
    description: "Virtualization and cloud infrastructure"
  }
];

const DataCenter = () => {
  return (
    <div className="min-h-screen bg-background">
      <ServicePage
        title="Data Center Solutions"
        description="Comprehensive data center infrastructure design and maintenance services"
        icon={<Server className="w-12 h-12 text-[#ea384c]" />}
        content={[
          "Our Data Center Solutions provide cutting-edge infrastructure designed to meet the demanding needs of modern enterprises. We offer comprehensive services including:",
          "• State-of-the-art Data Center Design and Implementation",
          "• High-performance Computing Solutions",
          "• Enterprise Storage Systems",
          "• Backup and Disaster Recovery",
          "• Data Center Consolidation and Optimization",
          "• Power and Cooling Solutions",
          "• Network Infrastructure",
          "• 24/7 Monitoring and Support Services"
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
            We collaborate with world-class technology providers to deliver exceptional data center solutions
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
                  <div className="aspect-[2/1] relative mb-4 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="object-cover w-full h-full"
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

export default DataCenter;