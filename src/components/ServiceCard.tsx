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
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <Icon className="h-12 w-12 text-[#ea384c] mb-4" />
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <a 
            href={href}
            className="text-[#ea384c] hover:text-[#d02e40] font-medium"
          >
            Learn more →
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
};