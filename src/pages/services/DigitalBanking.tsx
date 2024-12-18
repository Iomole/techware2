import { ServicePage } from "@/components/ServicePage";
import { Wallet } from "lucide-react";
import { Footer } from "@/components/Footer";
import { CoreModules } from "@/components/digital-banking/CoreModules";
import { SecurityFeatures } from "@/components/digital-banking/SecurityFeatures";
import { TechnicalSpecs } from "@/components/digital-banking/TechnicalSpecs";

const DigitalBanking = () => {
  return (
    <div className="min-h-screen bg-background">
      <ServicePage
        title="Digital Banking Solutions"
        description="FlexDib: A comprehensive core banking solution built on Fineract"
        icon={
          <div className="w-12 h-12 bg-[#ea384c] rounded-lg flex items-center justify-center text-white font-bold text-xl">
            Fx
          </div>
        }
        content={[
          "FlexDib is our flagship digital banking solution, built on the robust Apache Fineract framework. It provides a comprehensive suite of banking services designed to meet the evolving needs of modern financial institutions.",
          "• Complete Core Banking System with all essential modules",
          "• Built on Apache Fineract, a battle-tested open-source framework",
          "• Highly customizable and scalable architecture",
          "• Supports multiple deployment models (On-premise/Cloud)",
          "• Comprehensive API layer for seamless integration",
          "• Built-in compliance and regulatory reporting",
          "• Advanced security features and audit trails",
          "• 24/7 support and maintenance services"
        ]}
      />
      
      <CoreModules />
      <SecurityFeatures />
      <TechnicalSpecs />
      <Footer />
    </div>
  );
};

export default DigitalBanking;