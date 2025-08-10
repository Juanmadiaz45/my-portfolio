import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import Section from './Section';

const Contact = () => (
    <div className="bg-slate-900 text-white">
        <Section id="contact" title="What's Next?">
            <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-4xl font-black text-white mb-4">Get In Touch</h3>
                <p className="text-lg text-slate-400 mb-8">
                    I'm actively looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <motion.a 
                    href={`mailto:${portfolioData.contact.email}`} 
                    whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 0px 30px rgba(56, 189, 248, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-cyan-500 text-slate-900 font-bold py-4 px-8 rounded-lg text-lg hover:bg-cyan-400 transition-all duration-300 shadow-2xl shadow-cyan-500/20"
                >
                    Say Hello
                </motion.a>
            </div>
        </Section>
    </div>
);

export default Contact;