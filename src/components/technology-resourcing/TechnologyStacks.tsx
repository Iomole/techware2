import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const stacks = [
  {
    name: "Frontend Development",
    technologies: [
      { name: "React", logo: "/lovable-uploads/ca92ba81-089e-426e-8dcb-736762f9d29f.png" },
      { name: "Angular", logo: "/lovable-uploads/ea8e4c4a-1ce6-4a7d-a3cd-2d2db31e5053.png" },
      { name: "Vue.js", logo: "/lovable-uploads/a8099269-90f1-4821-a267-7a2e9bfbd365.png" }
    ]
  },
  {
    name: "Backend Development",
    technologies: [
      { name: "Node.js", logo: "/lovable-uploads/21ec66ce-3f76-433e-9838-9d4e43a0ae2d.png" },
      { name: "Python", logo: "/lovable-uploads/1cafee7e-e7e3-4afb-af81-867b95a3b147.png" },
      { name: "Java", logo: "/lovable-uploads/c10d68fe-bdb3-495e-882e-4abeda06333c.png" }
    ]
  },
  {
    name: "Database",
    technologies: [
      { name: "MongoDB", logo: "/lovable-uploads/915f1067-44f7-4027-9eb0-64383d2a3923.png" },
      { name: "PostgreSQL", logo: "/lovable-uploads/d867d8d8-f570-41ce-8e08-c179f62b9a5b.png" },
      { name: "MySQL", logo: "/lovable-uploads/809d7d2c-543b-4395-a955-6ad557bfded0.png" }
    ]
  }
];

export const TechnologyStacks = () => {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stacks</h2>
        <p className="text-lg text-gray-600">
          Our expertise spans across various modern technology stacks
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stacks.map((stack, stackIndex) => (
          <motion.div
            key={stack.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: stackIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{stack.name}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {stack.technologies.map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center"
                    >
                      <div className="w-16 h-16 mb-2 flex items-center justify-center">
                        <img
                          src={tech.logo}
                          alt={`${tech.name} logo`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <span className="text-sm text-gray-600">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};