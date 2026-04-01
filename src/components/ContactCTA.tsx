import React from 'react';
import { motion } from 'framer-motion';

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-oat text-carbon">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.9]"
        >
          Let's create something real.
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24"
        >
          <a href="#" className="group inline-flex items-center gap-6 border-b-2 border-carbon/20 hover:border-carbon pb-3 text-xl md:text-2xl font-body uppercase tracking-widest transition-colors duration-500">
            Book Steven
            <span className="transform group-hover:translate-x-3 transition-transform duration-500">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
