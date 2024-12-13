import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const links = [
    { href: "/", text: "Home" },
    { href: "/solutions", text: "Solutions" },
    { href: "/services", text: "Services" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-xl font-bold text-[#ea384c]">
            Techware
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="relative text-gray-900 hover:text-[#ea384c] transition-colors"
                onMouseEnter={() => setIsHovered(link.text)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {link.text}
                {isHovered === link.text && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-[#ea384c] bottom-0"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-gray-900 hover:text-[#ea384c] transition-colors px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};