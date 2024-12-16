import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-900">
              Techware
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-900 hover:text-[#ea384c]">
              Home
            </Link>
            <Link to="/solutions" className="text-gray-900 hover:text-[#ea384c]">
              Solutions
            </Link>
            <Link to="/services" className="text-gray-900 hover:text-[#ea384c]">
              Services
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-[#ea384c]">
              About
            </Link>
            <Link to="/contact" className="text-gray-900 hover:text-[#ea384c]">
              Contact
            </Link>
            <ThemeToggle />
          </div>

          <div className="flex md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-900 hover:text-[#ea384c]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/solutions"
              className="block px-3 py-2 text-gray-900 hover:text-[#ea384c]"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-900 hover:text-[#ea384c]"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-900 hover:text-[#ea384c]"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-900 hover:text-[#ea384c]"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};