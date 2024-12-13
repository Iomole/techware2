import { ServicePage } from "@/components/ServicePage";
import { Server } from "lucide-react";

const DataCenter = () => {
  return (
    <ServicePage
      title="Data Center Solutions"
      description="Comprehensive data center infrastructure design and maintenance services"
      icon={<Server className="w-12 h-12 text-[#ea384c]" />}
      content={[
        "We provide an extensive range of products and services necessary for creating and maintaining data centers. This includes designing data center infrastructure, supplying high-performance servers and storage solutions, implementing efficient cooling and power systems, and ensuring seamless integration and scalability.",
        "Our services ensure your data center operates at optimal efficiency and reliability.",
        "Key Features:",
        "• Infrastructure Design and Planning",
        "• High-Performance Server Solutions",
        "• Storage Solutions",
        "• Cooling Systems",
        "• Power Management",
        "• Scalability Planning",
        "• 24/7 Monitoring and Support"
      ]}
    />
  );
};

export default DataCenter;