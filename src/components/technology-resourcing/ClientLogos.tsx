import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const clients = [
  {
    name: "FCMB",
    logo: "/lovable-uploads/83b5a48b-8e09-4c21-9a87-c960c85c1eb3.png",
    description: "First City Monument Bank"
  },
  {
    name: "Coronation Merchant Bank",
    logo: "/lovable-uploads/4093d6cb-abbf-4e61-95aa-2fafed8b06f6.png",
    description: "Leading Merchant Banking Institution"
  }
];

export const ClientLogos = () => {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
        <p className="text-lg text-gray-600">
          Trusted by leading financial institutions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-[3/2] relative mb-4 bg-white rounded-lg overflow-hidden p-4 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
                <p className="text-gray-600">{client.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};