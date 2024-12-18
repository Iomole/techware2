import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Target, ArrowRight, Brain, Code, Database, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const trainingCategories = [
  {
    title: "Software Development",
    description: "Learn modern programming languages and frameworks",
    icon: Code,
    courses: ["Web Development", "Mobile App Development", "Python Programming", "Java Programming"]
  },
  {
    title: "Database Management",
    description: "Master database administration and optimization",
    icon: Database,
    courses: ["SQL Server", "Oracle Database", "MongoDB", "PostgreSQL"]
  },
  {
    title: "Cybersecurity",
    description: "Understand security principles and best practices",
    icon: Shield,
    courses: ["Network Security", "Ethical Hacking", "Security Operations", "Incident Response"]
  },
  {
    title: "Cloud Computing",
    description: "Explore cloud platforms and services",
    icon: Brain,
    courses: ["AWS", "Azure", "Google Cloud", "Cloud Security"]
  }
];

const TechnologyTraining = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <GraduationCap className="w-16 h-16 text-[#ea384c]" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Technology Training Academy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Empower your team with cutting-edge technology skills through our comprehensive training programs
            </p>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-[#ea384c]" />
                <span className="text-gray-700">Expert Instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-6 h-6 text-[#ea384c]" />
                <span className="text-gray-700">Practical Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#ea384c]" />
                <span className="text-gray-700">Comprehensive Curriculum</span>
              </div>
            </div>
            <Button
              className="bg-[#ea384c] hover:bg-[#d02e40] text-white"
              onClick={() => window.open("https://academy.techware.ng", "_blank")}
            >
              Explore Our Academy <ArrowRight className="ml-2" />
            </Button>
          </motion.div>

          {/* Training Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {trainingCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <category.icon className="w-12 h-12 text-[#ea384c] mb-4" />
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.courses.map((course) => (
                        <li key={course} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#ea384c]" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center bg-gray-50 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to enhance your technology skills?
            </h2>
            <p className="text-gray-600 mb-6">
              Visit our academy website to explore our full range of courses and start your learning journey today.
            </p>
            <Button
              className="bg-[#ea384c] hover:bg-[#d02e40] text-white"
              onClick={() => window.open("https://academy.techware.ng", "_blank")}
            >
              Visit Academy Website <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyTraining;