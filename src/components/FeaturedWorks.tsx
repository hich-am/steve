import React from 'react';
import { motion } from 'framer-motion';

const MOCK_WORKS = [
  { id: 1, title: 'Editorial 01', type: 'Fashion' },
  { id: 2, title: 'Commercial', type: 'Beauty' },
  { id: 3, title: 'Cinematic', type: 'Film' },
];

export const FeaturedWorks: React.FC = () => {
  return (
    <section className="py-32 bg-carbon border-t border-charcoal">
      <div className="px-8 md:px-16 mb-16">
        <h3 className="text-silver text-xs tracking-[0.2em] uppercase font-body">[ Selected Works ]</h3>
      </div>
      
      <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {MOCK_WORKS.map((work, index) => (
          <motion.div 
            key={work.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            viewport={{ once: true, margin: "-100px" }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] bg-charcoal mb-6 overflow-hidden relative border border-white/5">
              <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/20 transition-colors duration-700 z-10" />
              {/* Image Placeholder */}
            </div>
            <div className="flex justify-between items-baseline">
              <p className="font-display text-oat text-2xl group-hover:text-ice transition-colors duration-500">{work.title}</p>
              <p className="font-body text-silver text-xs uppercase tracking-wider">{work.type}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
