import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface ServicePageProps {
  title: string;
  description: string;
  content: string[];
  icon: React.ReactNode;
}

export const ServicePage = ({ title, description, content, icon }: ServicePageProps) => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="/services"
            className="inline-flex items-center text-[#ea384c] hover:text-[#d02e40] mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </a>
          
          <div className="flex items-center gap-4 mb-6">
            {icon}
            <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
          </div>
          
          <p className="text-xl text-gray-600 mb-12">{description}</p>

          <div className="prose prose-lg max-w-none">
            {content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};