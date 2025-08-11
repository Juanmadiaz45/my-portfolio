import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import Section from './Section';
import { portfolioData } from '../data';

const Projects = () => (
    <div className="bg-slate-900 text-white border-t border-b border-slate-800">
        <Section id="projects" title="Featured Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-slate-800/20 backdrop-blur-md border border-slate-700 rounded-xl overflow-hidden group shadow-2xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-400/10 flex flex-col"
                    >
                        <div className="relative h-56 w-full overflow-hidden">
                            <img src={project.imageUrl} alt={project.title} className="absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                            <p className="text-slate-400 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
                        </div>
                        <div className="p-6 pt-0 mt-auto">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>)}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-400 font-bold hover:text-cyan-300 transition-colors duration-300 group-hover:text-cyan-300">
                                View Project <ArrowUpRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-16">
                <motion.a
                    href={portfolioData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center bg-transparent border-2 border-slate-700 text-slate-300 font-bold py-3 px-6 rounded-lg hover:bg-slate-800 hover:border-slate-600 transition-all duration-300"
                >
                    <Github size={20} className="mr-2" />
                    View More Projects on GitHub
                </motion.a>
            </div>            
        </Section>
    </div>
);

export default Projects;