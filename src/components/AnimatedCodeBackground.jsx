import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedCodeBackground = () => {
  const codeLines = [
    "provider \"aws\" { region = \"us-east-1\" }",
    "resource \"aws_instance\" \"web\" { ... }",
    "pipeline { agent any; stages { ... } }",
    "FROM python:3.9-slim",
    "kubectl apply -f deployment.yaml",
    "const app = express();",
    "SELECT * FROM users;",
    "git commit -m \"feat: initial setup\"",
  ];
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLine = {
        id: Math.random(),
        text: codeLines[Math.floor(Math.random() * codeLines.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
      };
      setLines(prev => [...prev.slice(-10), newLine]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <AnimatePresence>
        {lines.map(line => (
          <motion.pre
            key={line.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="font-mono text-cyan-500/20 absolute whitespace-nowrap"
            style={{ top: `${line.y}%`, left: `${line.x}%` }}
          >
            {line.text}
          </motion.pre>
        ))}
      </AnimatePresence>
    </div>
  );
};


export default AnimatedCodeBackground;