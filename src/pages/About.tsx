import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

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
            className="space-y-12"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
              <div className="prose prose-lg max-w-none">
                <p>
                  We are an IT consulting company committed to providing our clients with cutting-edge and 
                  effective data solutions and strategies. We Consult, Develop, Implement, and Manage Integrated 
                  IT solutions that reshape the productivity of our customers in the private and public sector.
                </p>
                <p>
                  With experience cutting across Enterprise Digital Technology Infrastructures, IT Security, 
                  Enterprise Software Solutions, IT Training, Technology Resourcing and Bespoke software
                  development, we are positioned to provide a better ROI than our competitor. Our approach is 
                  completely customer centric.
                </p>
                <p>
                  We make it a point to listen and understand the needs of our clients, their objectives and we use 
                  all our endeavor and efforts to find solutions for specific business expectations. We are committed 
                  to providing innovative, cost-effective solutions that meet our clients' security and digital 
                  infrastructure needs.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To become the platform of choice for ICT Professionals and Businesses in West Africa by 2030.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                Solving real life problems using IT openly and transparently.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
                <li>Customer centricity</li>
                <li>Relationship and Teamwork</li>
                <li>Innovation</li>
                <li>Partnership</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
};

export default About;