import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data';

const Footer = () => (
  <footer className="bg-slate-900 text-center py-8 border-t border-slate-800">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex justify-center space-x-6 mb-6">
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${portfolioData.contact.email}`} className="text-slate-500 hover:text-cyan-400 transition-colors duration-300">
            <Mail size={24} />
          </a>
      </div>
      <div className="text-slate-500 text-sm space-y-2">
        <p>Designed & Built by {portfolioData.name}</p>
        <p>
          Built with <span className="font-semibold text-slate-400">React</span>, <span className="font-semibold text-slate-400">Tailwind CSS</span>, and <span className="font-semibold text-slate-400">Framer Motion</span>.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;