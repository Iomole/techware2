import { ServicePage } from "@/components/ServicePage";
import { Code } from "lucide-react";

const BespokeDevelopment = () => {
  const content = [
    "Our Bespoke Development service delivers tailored software solutions designed to meet your unique business requirements. We combine cutting-edge technologies with industry best practices to create scalable, maintainable, and efficient applications.",
    
    "Our expert team specializes in developing custom web applications, enterprise software, mobile applications, and system integrations. We follow an agile development methodology that ensures transparent communication and regular delivery of value throughout the project lifecycle.",
    
    "Key Features of Our Bespoke Development Service:",
    "• Custom Web Applications - Responsive, modern, and user-friendly solutions",
    "• Enterprise Software - Scalable applications that streamline business processes",
    "• System Integration - Seamless connectivity between different platforms and services",
    "• Mobile Applications - Native and cross-platform mobile solutions",
    "• API Development - Robust and secure APIs for system interconnectivity",
    
    "Our development process includes comprehensive requirements analysis, detailed system design, iterative development with regular client feedback, thorough testing, and ongoing support and maintenance. We ensure that every solution we deliver is not only technically excellent but also aligned with your business objectives.",
    
    "Technologies We Excel In:",
    "• Frontend: React, Angular, Vue.js",
    "• Backend: Node.js, Python, Java",
    "• Databases: PostgreSQL, MongoDB, MySQL",
    "• Cloud Platforms: AWS, Azure, Google Cloud",
    "• DevOps: Docker, Kubernetes, CI/CD",
    
    "Partner with us to transform your business ideas into powerful, custom-built software solutions that drive growth and efficiency."
  ];

  return (
    <ServicePage
      title="Bespoke Development"
      description="Custom software solutions tailored to your business needs"
      content={content}
      icon={<Code className="w-8 h-8 text-[#ea384c]" />}
    />
  );
};

export default BespokeDevelopment;