import React from 'react';
import { motion } from 'framer-motion';

export const PortfolioHighlight: React.FC = () => {
  return (
    <section className="relative h-screen bg-carbon flex items-center justify-center overflow-hidden border-t border-charcoal">
      <div className="absolute inset-0 bg-charcoal">
        {/* Placeholder for video/reel background */}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-carbon/40 opacity-90 z-0 text-center flex items-center justify-center text-silver/20 font-display text-4xl">
           Reel Video Placeholder
        </div>
        <div className="absolute inset-0 bg-carbon/40" />
      </div>
      
      <div className="relative z-10 text-center">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-silver/30 flex items-center justify-center backdrop-blur-sm group hover:border-oat transition-colors duration-500 mx-auto mb-8 cursor-pointer"
        >
          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-oat border-b-[8px] border-b-transparent ml-2 group-hover:border-l-ice transition-colors duration-300"></div>
        </motion.button>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-3xl lg:text-4xl text-oat tracking-wide group-hover:text-ice transition-colors duration-300"
        >
          Watch Highlights
        </motion.p>
      </div>
    </section>
  );
};
