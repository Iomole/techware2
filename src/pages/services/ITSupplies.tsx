import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCategories } from "@/components/it-supplies/ProductCategories";
import { FeaturedProducts } from "@/components/it-supplies/FeaturedProducts";
import { ConsumablesSection } from "@/components/it-supplies/ConsumablesSection";
import { motion } from "framer-motion";
import { Package } from "lucide-react";

const ITSupplies = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Package className="w-16 h-16 text-[#ea384c]" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              IT Supplies & Equipment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete range of IT hardware, equipment, and consumables to power your business operations.
              From enterprise-grade workstations to essential office supplies.
            </p>
          </motion.div>

          <ProductCategories />
          <FeaturedProducts />
          <ConsumablesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ITSupplies;