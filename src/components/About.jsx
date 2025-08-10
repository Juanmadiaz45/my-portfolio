import React from 'react';
import { portfolioData } from '../data';
import Section from './Section';

const About = () => (
  <div className="bg-slate-900 text-white border-t border-b border-slate-800">
    <Section id="about" title="About Me">
      <p className="max-w-3xl text-lg md:text-xl text-slate-300 leading-relaxed">
        {portfolioData.about}
      </p>
    </Section>
  </div>
);

export default About;