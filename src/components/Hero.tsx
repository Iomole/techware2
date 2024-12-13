import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight"
        >
          Creative
          <br />
          Studio
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto"
        >
          We create beautiful digital experiences that inspire and connect.
        </motion.p>
      </div>
    </motion.div>
  );
};