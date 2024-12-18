import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const stacks = [
  {
    name: "Frontend Development",
    technologies: [
      { name: "React", logo: "/lovable-uploads/956bc86b-db66-4483-9fc7-d14f57230f84.png" },
      { name: "Angular", logo: "/lovable-uploads/060f72f5-5c02-45cd-b9c5-309b5db908a7.png" },
      { name: "Vue.js", logo: "/lovable-uploads/306fae6b-88c9-40f7-8107-9988c52b6bd1.png" }
    ]
  },
  {
    name: "Backend Development",
    technologies: [
      { name: "Node.js", logo: "/lovable-uploads/fa622015-07b9-4cac-8717-a10204534e89.png" },
      { name: "Python", logo: "/lovable-uploads/df827ad4-75a6-4fc5-a995-ab2b47be6e25.png" },
      { name: "Java", logo: "/lovable-uploads/e6d5ba3c-7d74-44b9-9cb3-1cfea0053a96.png" },
      { name: ".NET", logo: "/lovable-uploads/a1620261-7e25-403f-83f7-547af67f0acd.png" }
    ]
  },
  {
    name: "Database",
    technologies: [
      { name: "MongoDB", logo: "/lovable-uploads/12225dfd-9ed9-4f0b-86c8-e65adc69557f.png" },
      { name: "PostgreSQL", logo: "/lovable-uploads/10709485-e391-483c-b5df-4dc61f241923.png" },
      { name: "MySQL", logo: "/lovable-uploads/15cd7a03-06af-42dc-89e5-fbf7385d4d02.png" }
    ]
  },
  {
    name: "Architecture",
    technologies: [
      { 
        name: "Microservices", 
        logo: "/lovable-uploads/bd1b4a56-bdd4-4135-8cdd-ed8e87dbf173.png",
        description: "Scalable distributed systems"
      }
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className={`grid ${stack.technologies.length === 1 ? 'grid-cols-1' : 'grid-cols-3'} gap-4`}>
                  {stack.technologies.map((tech) => (
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
                      <span className="text-sm text-gray-600 text-center">{tech.name}</span>
                      {tech.description && (
                        <span className="text-xs text-gray-500 text-center mt-1">
                          {tech.description}
                        </span>
                      )}
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