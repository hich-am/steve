import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col justify-end pb-32 px-8 md:px-16 overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          src="/steven.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-90"
        />
        {/* Removed white gradient overlay, added very subtle dark wash for text contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto w-full text-white">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-body text-white/80 text-sm uppercase tracking-[0.3em] mb-4"
        >
          Model & Actor
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-8xl lg:text-[10rem] text-white leading-[0.9] tracking-tight mb-12 uppercase"
        >
          Steven <span className="text-white/60 mx-2 md:mx-6 font-light">|</span> Temimi
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 md:gap-8"
        >
          <a href="#portfolio" className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-5 font-body text-xs uppercase tracking-[0.2em] hover:bg-white/80 transition-colors duration-300">
            View Portfolio
          </a>
          <a href="#contact" className="group flex items-center justify-center gap-3 border border-white/40 text-white px-8 py-5 font-body text-xs uppercase tracking-[0.2em] hover:border-white hover:bg-white/10 transition-colors duration-300">
            Contact
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <div className="w-[1px] h-20 bg-white/30 overflow-hidden relative">
          <motion.div 
            animate={{ y: [ -80, 80 ] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};
