import { useState } from 'react';
import { motion } from 'framer-motion';

export const Navigation = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const links = [
    { href: "#", text: "Work" },
    { href: "#", text: "About" },
    { href: "#", text: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-medium">
            Studio
          </a>
          <div className="flex space-x-8">
            {links.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="relative text-gray-900 hover:text-gray-900 transition-colors"
                onMouseEnter={() => setIsHovered(link.text)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {link.text}
                {isHovered === link.text && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-px bg-black bottom-0"
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
        </div>
      </div>
    </nav>
  );
};