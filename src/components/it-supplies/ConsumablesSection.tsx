import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const consumables = [
  {
    category: "Printer Supplies",
    items: ["Toner Cartridges", "Ink Cartridges", "Drum Units", "Maintenance Kits"]
  },
  {
    category: "Storage Media",
    items: ["USB Drives", "External HDDs", "SD Cards", "Backup Tapes"]
  },
  {
    category: "Accessories",
    items: ["Keyboards", "Mice", "Webcams", "Headsets"]
  },
  {
    category: "Networking",
    items: ["Cables", "Adapters", "Network Cards", "Switches"]
  }
];

export const ConsumablesSection = () => {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold text-center mb-12">Consumables & Accessories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {consumables.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};