import React from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-48 px-8 md:px-16 bg-carbon relative border-t border-charcoal">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-24 lg:gap-32">
        
        {/* Left Side: Text and CTA */}
        <div className="w-full lg:w-[45%]">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl lg:text-[7rem] text-oat leading-[0.9] tracking-tight uppercase"
          >
            Ready <br />
            <span className="text-silver">to create.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 space-y-12"
          >
            <div>
              <p className="font-body text-silver text-xs uppercase tracking-[0.2em] mb-4">Representation / Booking</p>
              <a href="mailto:booking@steventemimi.com" className="font-display text-2xl md:text-4xl text-oat hover:text-accent transition-colors">
                booking@steventemimi.com
              </a>
            </div>

            <div>
              <p className="font-body text-silver text-xs uppercase tracking-[0.2em] mb-4">Socials</p>
              <div className="flex gap-8 flex-wrap">
                {[
                  { name: 'Instagram', url: 'https://www.instagram.com/steventemimi/#' },
                  { name: 'TikTok', url: 'https://www.tiktok.com/@steventemimi' },
                  { name: 'Facebook', url: 'https://www.facebook.com/stephentemimi' }
                ].map(link => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="font-body text-oat text-sm uppercase tracking-widest hover:text-accent transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Minimal Form */}
        <div className="w-full lg:w-[55%] flex flex-col justify-end">
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 w-full max-w-xl lg:ml-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative group">
              <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-oat/20 pb-4 text-oat font-body text-sm uppercase tracking-widest focus:outline-none focus:border-oat transition-colors placeholder-silver/60" />
            </div>
            
            <div className="relative group mt-6">
              <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-oat/20 pb-4 text-oat font-body text-sm uppercase tracking-widest focus:outline-none focus:border-oat transition-colors placeholder-silver/60" />
            </div>

            <div className="relative group mt-6">
              <select className="w-full bg-transparent border-b border-oat/20 pb-4 text-oat font-body text-sm uppercase tracking-widest focus:outline-none focus:border-oat transition-colors appearance-none cursor-pointer">
                <option value="" disabled selected className="text-carbon bg-oat">Project Type</option>
                <option value="modeling" className="text-carbon bg-oat">Modeling / Editorial</option>
                <option value="acting" className="text-carbon bg-oat">Acting / Film</option>
                <option value="commercial" className="text-carbon bg-oat">Commercial / Branding</option>
              </select>
            </div>

            <div className="relative group mt-6">
              <textarea placeholder="Message" rows={4} className="w-full bg-transparent border-b border-oat/20 pb-4 text-oat font-body text-sm tracking-widest focus:outline-none focus:border-oat transition-colors placeholder-silver/60 resize-none"></textarea>
            </div>

            <button type="submit" className="mt-8 flex justify-between items-center group w-full text-left">
              <span className="font-display text-3xl md:text-5xl text-oat group-hover:text-accent transition-colors uppercase tracking-tight">Submit Inquiry</span>
              <span className="font-display text-3xl md:text-5xl text-oat group-hover:translate-x-4 transition-transform duration-500">→</span>
            </button>
          </motion.form>
        </div>

      </div>
    </section>
  );
};
