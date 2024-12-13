import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const features = [
  "Enterprise Solutions",
  "Professional Services",
  "Technology Resourcing",
  "NOTAP Certificate Processing",
  "Technology Training",
  "24/7 Support",
];

export const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Techware?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We provide comprehensive technology solutions that help businesses thrive in the digital age.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg"
                alt="Technology Solutions"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};