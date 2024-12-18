import { ServicePage } from "@/components/ServicePage";
import { Server } from "lucide-react";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const partnerOEMs = [
  {
    name: "Dell EMC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png",
    description: "Enterprise storage and data center solutions"
  },
  {
    name: "HPE",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png",
    description: "Servers and networking infrastructure"
  },
  {
    name: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png",
    description: "Networking and security solutions"
  },
  {
    name: "NetApp",
    logo: "/lovable-uploads/a8099269-90f1-4821-a267-7a2e9bfbd365.png",
    description: "Data storage and management"
  },
  {
    name: "VMware",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/2560px-Vmware.svg.png",
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

export default DataCenter;