import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    name: "Fortinet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg",
    description: "Complete security fabric architecture"
  },
  {
    name: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png",
    description: "Network security solutions"
  },
  {
    name: "Sophos",
    logo: "/lovable-uploads/b32e64ad-7a52-4af8-b573-2dd53c8af9e0.png",
    description: "Next-generation cybersecurity"
  },
  {
    name: "Forcepoint",
    logo: "/lovable-uploads/d3dac53e-b953-47ce-a156-9913ccd0686d.png",
    description: "Human-centric cybersecurity"
  },
  {
    name: "Trend Micro",
    logo: "/lovable-uploads/002279cc-0468-4237-8e75-ad76591926d7.png",
    description: "Hybrid cloud security"
  },
  {
    name: "Check Point",
    logo: "/lovable-uploads/0450517c-e9db-4187-a105-1470071e7107.png",
    description: "Advanced threat prevention"
  },
  {
    name: "Palo Alto Networks",
    logo: "/lovable-uploads/89459d06-e917-48b7-9cae-6c56da1edd94.png",
    description: "Next-generation security"
  },
  {
    name: "Kaspersky",
    logo: "/lovable-uploads/596ae45d-3991-4643-93b9-3f7700c4732a.png",
    description: "Endpoint security solutions"
  },
  {
    name: "Ghangor Cloud",
    logo: "/lovable-uploads/e894ef9f-fa46-4132-b8c1-b76e606e7b18.png",
    description: "Cloud security solutions"
  }
];

export const TechnologyPartners = () => {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Partners</h2>
        <p className="text-lg text-gray-600">
          We partner with world-class security providers to deliver comprehensive cybersecurity solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
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
  );
};