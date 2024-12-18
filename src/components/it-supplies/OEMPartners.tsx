import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    name: "Dell",
    logo: "/lovable-uploads/23e027f0-9671-41d4-984b-cf7cddb6b80e.png",
    description: "Enterprise computing solutions"
  },
  {
    name: "HP",
    logo: "/lovable-uploads/c1bd97a5-3f46-47c0-8183-8408cb4ae670.png",
    description: "Comprehensive IT hardware and solutions"
  },
  {
    name: "Lenovo",
    logo: "/lovable-uploads/92237567-af60-4fbe-88f4-5811d3d1bb8d.png",
    description: "Business computing and mobile solutions"
  },
  {
    name: "Huawei",
    logo: "/lovable-uploads/3165bf99-3180-4de4-b451-c6dca419bce3.png",
    description: "Enterprise networking and computing"
  },
  {
    name: "Samsung",
    logo: "/lovable-uploads/2a03c926-aa61-4c70-88b0-e2cb16c38535.png",
    description: "Business displays and mobile solutions"
  }
];

export const OEMPartners = () => {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our OEM Partners</h2>
        <p className="text-lg text-gray-600">
          We partner with leading hardware manufacturers to provide you with the best IT equipment
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