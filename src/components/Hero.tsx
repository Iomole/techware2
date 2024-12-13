import { motion } from 'framer-motion';
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-gray-50 to-gray-100"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8"
        >
          Enterprise Technology
          <br />
          <span className="text-blue-600">Solutions</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto mb-8"
        >
          Empowering businesses with cutting-edge technology solutions for digital transformation and growth.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};