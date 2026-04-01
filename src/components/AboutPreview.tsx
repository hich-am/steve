import React from 'react';
import { motion } from 'framer-motion';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-40 md:py-64 bg-charcoal flex items-center justify-center text-center px-8 relative overflow-hidden">
      {/* Decorative large text behind */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
        <h2 className="text-[20vw] font-display whitespace-nowrap text-oat">TEMIMI</h2>
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-150px" }}
        className="max-w-5xl text-3xl md:text-5xl lg:text-7xl font-display text-oat leading-[1.2] relative z-10"
      >
        <span className="text-silver">Algerian-American talent bridging fashion and film with </span>
        <span className="text-oat inline-block ml-2">raw, authentic presence.</span>
      </motion.h2>
    </section>
  );
};
