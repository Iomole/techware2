import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">Get in touch with our team of experts</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: Phone, 
              title: "Call Us", 
              content: [
                "+234 905 220 3335",
                "+234 803 246 4859",
                "+234 811 110 1484"
              ]
            },
            { 
              icon: Mail, 
              title: "Email Us", 
              content: [
                "info@techware.ng",
                "marketing@techware.ng",
                "www.techware.ng"
              ]
            },
            { 
              icon: MapPin, 
              title: "Visit Us", 
              content: [
                "Abuja: 1, Anthony Enahoro Street, Utako, Abuja",
                "Lagos: 10th Floor, Standard Chartered Building, Plot 142, Ahmadu Bello Way, VI, Lagos"
              ]
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <CardHeader>
                  <item.icon className="h-12 w-12 mx-auto text-[#ea384c] mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {item.content.map((line, i) => (
                    <p key={i} className="text-gray-600 mb-2">{line}</p>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.facebook.com/Officialtechware.ng/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#ea384c] hover:text-[#d02e3f] transition-colors"
            >
              <Facebook className="h-8 w-8" />
            </a>
            <a 
              href="https://www.instagram.com/officialtechware.ng/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#ea384c] hover:text-[#d02e3f] transition-colors"
            >
              <Instagram className="h-8 w-8" />
            </a>
            <a 
              href="https://ng.linkedin.com/company/techware-professional-services-ltd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#ea384c] hover:text-[#d02e3f] transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
          <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e3f] text-white">
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
};