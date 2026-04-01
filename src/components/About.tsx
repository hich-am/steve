import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-32 md:py-48 px-8 md:px-16 bg-carbon relative">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 items-center">
        
        {/* Portrait Image */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-[45%] lg:w-[40%]"
        >
          <div className="aspect-[3/4] relative overflow-hidden bg-charcoal group">
            <img 
              src="/aboutmepicture.jpg" 
              alt="Steven Temimi Portrait" 
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
            {/* Elegant overlay frame */}
            <div className="absolute inset-4 border border-oat/10 pointer-events-none" />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="w-full md:w-[55%] lg:w-[50%]">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-7xl text-oat mb-12 uppercase tracking-tight"
          >
            Raw truth <br />
            <span className="text-silver">in every frame.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 font-body text-silver text-sm md:text-base leading-relaxed tracking-wide font-light max-w-xl"
          >
            <p>
              Steven Temimi is an Algerian-American talent working at the intersection of high fashion and cinematic narrative. Known for bringing an intense, authentic presence to every project, he bridges the gap between commercial allure and artistic depth.
            </p>
            <p>
              Splitting his time between international markets—with roots deeply established in Algiers and Oran—Steven offers a distinctly global, versatile aesthetic. He approaches the lens as a collaborator, dedicated to executing visionary creative direction with precision and quiet power.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col sm:flex-row gap-6"
          >
            <a href="#" className="flex justify-center items-center px-8 py-4 border border-silver/50 text-oat font-body text-xs uppercase tracking-[0.2em] hover:bg-black/5 transition-colors w-max">
               Download CV
            </a>
            <a href="#contact" className="flex justify-center items-center px-8 py-4 bg-oat text-carbon font-body text-xs uppercase tracking-[0.2em] hover:bg-silver transition-colors w-max group">
              Let's Work Together 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
