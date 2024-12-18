import { motion } from "framer-motion";
import { Database, Globe, Building, Users, Briefcase, Computer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const solutions = [
  {
    title: "Enterprise Resource Planning (ERP)",
    description: "Integrated management of main business processes in real-time.",
    icon: Building,
    features: [
      "Financial Management",
      "Supply Chain Management",
      "Manufacturing",
      "Human Resources",
      "Inventory Management",
      "Business Intelligence"
    ]
  },
  {
    title: "Customer Relationship Management (CRM)",
    description: "Manage and analyze customer interactions throughout the customer lifecycle.",
    icon: Users,
    features: [
      "Contact Management",
      "Sales Automation",
      "Marketing Automation",
      "Customer Service",
      "Analytics & Reporting",
      "Pipeline Management"
    ]
  },
  {
    title: "Business Intelligence & Analytics",
    description: "Transform data into actionable insights for informed decision-making.",
    icon: Globe,
    features: [
      "Data Visualization",
      "Predictive Analytics",
      "Performance Metrics",
      "Custom Reporting",
      "Real-time Analytics",
      "Data Mining"
    ]
  },
  {
    title: "Enterprise Content Management",
    description: "Organize, manage, and distribute content across the enterprise.",
    icon: Database,
    features: [
      "Document Management",
      "Records Management",
      "Workflow Automation",
      "Content Security",
      "Version Control",
      "Collaboration Tools"
    ]
  },
  {
    title: "Project Portfolio Management",
    description: "Centralized management of processes, methods, and technologies.",
    icon: Briefcase,
    features: [
      "Project Planning",
      "Resource Management",
      "Time Tracking",
      "Budget Management",
      "Risk Assessment",
      "Portfolio Analytics"
    ]
  },
  {
    title: "Enterprise Integration",
    description: "Seamless integration of business applications and data flows.",
    icon: Computer,
    features: [
      "API Management",
      "Data Integration",
      "Process Automation",
      "Cloud Integration",
      "Legacy Systems",
      "Real-time Sync"
    ]
  }
];

export const BusinessSolutions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {solutions.map((solution, index) => (
        <motion.div
          key={solution.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <solution.icon className="w-12 h-12 text-[#ea384c] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-[#ea384c] rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};