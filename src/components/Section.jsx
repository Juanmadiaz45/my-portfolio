import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="py-20 md:py-28"
  >
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
        <div className="h-px flex-grow bg-slate-700"></div>
      </div>
      {children}
    </div>
  </motion.section>
);

export default Section;