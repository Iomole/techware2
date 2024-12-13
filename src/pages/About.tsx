import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Contact } from "@/components/Contact";

const About = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <section className="py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
            <div className="prose prose-lg max-w-none">
              <p>
                Techware is a leading provider of enterprise technology solutions,
                dedicated to helping businesses transform and thrive in the digital
                age. With years of experience and a team of expert professionals,
                we deliver innovative solutions that drive growth and efficiency.
              </p>
              <p>
                Our comprehensive range of services spans from data center
                solutions to digital banking, cybersecurity, and professional
                services. We pride ourselves on our ability to understand and meet
                the unique needs of each client, delivering tailored solutions that
                make a real difference.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default About;