import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { Separator } from "./ui/separator";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About Us</h3>
            <p className="text-gray-600 text-sm">
              Techware is a leading provider of enterprise technology solutions, dedicated to helping businesses transform and thrive in the digital age.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/data-center" className="text-gray-600 hover:text-[#ea384c]">Data Center Solutions</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-[#ea384c]">Managed Services</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-[#ea384c]">Digital Banking</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-[#ea384c]">Cybersecurity</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="text-gray-600 hover:text-[#ea384c]">Professional Services</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-[#ea384c]">Technology Training</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-[#ea384c]">NOTAP Processing</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-[#ea384c]">IT Supplies</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">Lagos, Nigeria</li>
              <li><a href="tel:+2348000000000" className="text-gray-600 hover:text-[#ea384c]">+234 800 000 0000</a></li>
              <li><a href="mailto:info@techware.com" className="text-gray-600 hover:text-[#ea384c]">info@techware.com</a></li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-[#ea384c]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ea384c]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ea384c]">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ea384c]">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-gray-600">
          <p>&copy; {currentYear} Techware. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};