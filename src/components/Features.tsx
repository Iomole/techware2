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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ea384c] to-[#f97316]">
              Why Choose Techware?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
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
                  className="flex items-center space-x-3 group"
                >
                  <CheckCircle className="h-6 w-6 text-[#ea384c] transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-[#ea384c]">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ea384c] to-[#f97316] rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300" />
            <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl transition-all duration-300 group-hover:shadow-2xl transform group-hover:-translate-y-1">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Technology Solutions"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};