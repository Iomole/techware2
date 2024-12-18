import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    name: "Oracle",
    logo: "/lovable-uploads/21ec66ce-3f76-433e-9838-9d4e43a0ae2d.png",
    description: "Enterprise software solutions"
  },
  {
    name: "Microsoft",
    logo: "/lovable-uploads/1cafee7e-e7e3-4afb-af81-867b95a3b147.png",
    description: "Business applications and cloud services"
  },
  {
    name: "Zoho",
    logo: "/lovable-uploads/c10d68fe-bdb3-495e-882e-4abeda06333c.png",
    description: "Cloud software suite"
  },
  {
    name: "Odoo",
    logo: "/lovable-uploads/915f1067-44f7-4027-9eb0-64383d2a3923.png",
    description: "Open source business apps"
  },
  {
    name: "SAP",
    logo: "/lovable-uploads/d867d8d8-f570-41ce-8e08-c179f62b9a5b.png",
    description: "Enterprise application software"
  },
  {
    name: "Salesforce",
    logo: "/lovable-uploads/0450517c-e9db-4187-a105-1470071e7107.png",
    description: "CRM and cloud solutions"
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
          We partner with leading enterprise software providers to deliver comprehensive business solutions
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