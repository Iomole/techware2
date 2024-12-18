import { motion } from "framer-motion";
import { Shield, Lock, Cloud, Server, Network, ShieldAlert } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { SecuritySolutions } from "@/components/cybersecurity/SecuritySolutions";
import { TechnologyPartners } from "@/components/cybersecurity/TechnologyPartners";

const Cybersecurity = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Shield className="w-12 h-12 text-[#ea384c]" />
              <h1 className="text-4xl font-bold text-gray-900">Cybersecurity Solutions</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions to protect your digital assets and infrastructure
              with industry-leading technologies and expert implementation.
            </p>
          </motion.div>

          <Tabs defaultValue="solutions" className="mb-16">
            <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
              <TabsTrigger value="solutions">Solutions</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
            </TabsList>
            <TabsContent value="solutions">
              <SecuritySolutions />
            </TabsContent>
            <TabsContent value="features">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Threat Protection</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Lock className="w-5 h-5 text-[#ea384c] mr-2" />
                        <span>Advanced Threat Prevention</span>
                      </li>
                      <li className="flex items-center">
                        <Shield className="w-5 h-5 text-[#ea384c] mr-2" />
                        <span>Zero-Day Attack Protection</span>
                      </li>
                      <li className="flex items-center">
                        <Cloud className="w-5 h-5 text-[#ea384c] mr-2" />
                        <span>Cloud Security Posture Management</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Security Services</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Server className="w-5 h-5 text-[#ea384c] mr-2" />
                        <span>24/7 Security Operations Center</span>
                      </li>
                      <li className="flex items-center">
                        <Network className="w-5 h-5 text-[#ea384c] mr-2" />
                        <span>Incident Response Team</span>
                      </li>
                      <li className="flex items-center">
                        <ShieldAlert className="w-5 h-5 text-[#ea384c] mr-2" />
                        <span>Vulnerability Assessment</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <TechnologyPartners />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cybersecurity;