import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-carbon/95 backdrop-blur-md border-b border-oat/10 py-4' : 'bg-transparent py-8'}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 flex items-center justify-between">
        <a href="#home" className="font-display text-2xl tracking-[0.15em] text-oat z-50 relative uppercase">
          Temimi<span className="text-accent">.</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 font-body text-xs uppercase tracking-[0.2em] text-silver">
          {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="relative group hover:text-oat transition-colors"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-500 ease-out"></span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger toggle */}
        <button className="md:hidden text-oat z-50 relative" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <motion.div 
          className="fixed inset-0 bg-carbon z-40 flex flex-col items-center justify-center gap-12"
          initial={{ opacity: 0, pointerEvents: 'none' }}
          animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
          transition={{ duration: 0.5 }}
        >
          {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)} 
              className="font-display text-5xl tracking-widest text-oat hover:text-accent transition-colors uppercase"
            >
              {item}
            </a>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};
