import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["about", "skills", "projects", "contact"];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-xl' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-black text-white tracking-wider">JMD<span className="text-cyan-400"></span></a>
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a key={link} href={`#${link}`} className="capitalize text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              {link}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <motion.button whileTap={{ scale: 0.8 }} onClick={() => setIsOpen(!isOpen)} className="text-slate-300">
            <Menu size={28} />
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-slate-900 flex flex-col items-center justify-center space-y-8"
          >
            <motion.button whileTap={{ scale: 0.8 }} onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-slate-300"><X size={32} /></motion.button>
            {navLinks.map((link, i) => (
              <motion.a 
                key={link}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                href={`#${link}`} 
                onClick={() => setIsOpen(false)} 
                className="capitalize text-4xl text-slate-100 font-bold hover:text-cyan-400"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;