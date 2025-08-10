import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data';
import Section from './Section';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('devops');
  const skills = portfolioData.skills;

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`relative flex items-center space-x-2 px-4 py-2 font-bold transition-colors duration-300 ${activeTab === id ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
    >
      <Icon size={20} />
      <span>{label}</span>
      {activeTab === id && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />}
    </button>
  );

  return (
    <div className="bg-slate-900/50 text-white">
      <Section id="skills" title="My Skillset">
        <div className="flex justify-center border-b border-slate-700 mb-8">
          <TabButton id="devops" label={skills.devops.label} icon={skills.devops.icon} />
          <TabButton id="fullstack" label={skills.fullstack.label} icon={skills.fullstack.icon} />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-slate-300 text-lg mb-8 text-center">{skills[activeTab].description}</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {skills[activeTab].tools.map(tool => (
                <motion.div
                  key={tool}
                  whileHover={{ y: -5, scale: 1.05, boxShadow: "0px 0px 15px rgba(56, 189, 248, 0.3)" }}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg px-5 py-2 text-slate-200 cursor-default shadow-lg"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </Section>
    </div>
  );
};

export default Skills;