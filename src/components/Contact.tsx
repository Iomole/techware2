import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

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
            { icon: Phone, title: "Call Us", content: "+1 (234) 567-8900" },
            { icon: Mail, title: "Email Us", content: "contact@techware.com" },
            { icon: MapPin, title: "Visit Us", content: "123 Tech Street, City" },
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
                  <item.icon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.content}</p>
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
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
};