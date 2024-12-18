import { Navigation } from "@/components/Navigation";
import { Contact as ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <div className="pt-16">
        <ContactSection />
        <div className="w-full h-[400px] mb-16">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8454034431396!2d7.4726563!3d9.0726397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba5c5537e45%3A0x4c3a49b2a63597e3!2sTechware%20Professional%20Services%20Ltd!5e0!3m2!1sen!2sng!4v1710425106071!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Techware Office Location"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;