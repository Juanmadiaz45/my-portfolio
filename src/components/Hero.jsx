import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { portfolioData } from '../data';
import HeroBackground from './HeroBackground';

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center text-white relative">
    <HeroBackground />
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        className="max-w-4xl"
      >
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          className="text-xl md:text-2xl text-cyan-400 font-bold mb-2 tracking-widest"
        >
          HI THERE!, IM
        </motion.p>
        <motion.h1 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } } }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4"
        >
          {portfolioData.name}
        </motion.h1>
        <motion.h2 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } } }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-400 tracking-tight mb-8"
        >
          DevOps & Software Engineer
        </motion.h2>
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } } }}
          className="flex flex-wrap gap-4"
        >
          {/* <motion.a 
            href={portfolioData.contact.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-cyan-500 text-slate-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-cyan-400 transition-all duration-300"
          >
            <Download size={20} className="mr-2" /> Download CV
          </motion.a> */}
          <div className="flex space-x-4 items-center">
            <motion.a whileHover={{scale: 1.1, y: -3}} href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400"><Github size={28} /></motion.a>
            <motion.a whileHover={{scale: 1.1, y: -3}} href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400"><Linkedin size={28} /></motion.a>
            <motion.a whileHover={{scale: 1.1, y: -3}} href={`mailto:${portfolioData.contact.email}`} className="text-slate-400 hover:text-cyan-400"><Mail size={28} /></motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Hero;