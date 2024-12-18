import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  index: number;
}

export const ServiceCard = ({ title, description, icon: Icon, href, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-2 border-transparent hover:border-[#ea384c]/20">
        <CardHeader>
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#ea384c] to-[#f97316] opacity-0 blur transition duration-300 group-hover:opacity-20" />
            <Icon className="h-12 w-12 text-[#ea384c] transition-transform duration-300 group-hover:scale-110 relative" />
          </div>
          <CardTitle className="mt-4 text-xl font-semibold transition-colors duration-300 group-hover:text-[#ea384c]">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <a 
            href={href}
            className="inline-flex items-center text-[#ea384c] hover:text-[#d02e40] font-medium transition-all duration-300 group-hover:translate-x-1"
          >
            Learn more →
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
};