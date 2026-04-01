import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const MOCK_IMAGES = [
  { id: 1, title: 'Editorial / 01', src: '/GettyImages-110716559.webp' },
  { id: 2, title: 'Editorial / 02', src: '/pic2.jpg' },
  { id: 3, title: 'Commercial / 01', src: '/pic20.jpg' },
  { id: 4, title: 'Cinematic / 01', src: '/pic3.jpg' },
  { id: 5, title: 'Lookbook / 01', src: '/pic4.jpg' },
  { id: 6, title: 'Campaign / 01', src: '/pic7.jpg' },
];

export const PortfolioCarousel = () => {
  // Setup infinite scrolling (loop: true) with embla
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', dragFree: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="portfolio" className="py-32 md:py-48 bg-charcoal relative overflow-hidden">
      <div className="px-8 md:px-16 mb-16 max-w-screen-2xl mx-auto flex justify-between items-end relative z-10">
        <h2 className="font-display text-5xl md:text-7xl text-oat uppercase tracking-tight">Selected <br/> Works</h2>
        
        <div className="flex gap-4 items-center">
          <p className="font-body text-silver text-xs uppercase tracking-[0.3em] pb-1 mr-4 hidden md:block">Scroll to explore</p>
          <button onClick={scrollPrev} className="w-12 h-12 flex items-center justify-center border border-silver/30 rounded-full hover:border-oat hover:bg-black/5 transition-colors text-oat">
            <ChevronLeft size={20} strokeWidth={1} />
          </button>
          <button onClick={scrollNext} className="w-12 h-12 flex items-center justify-center border border-silver/30 rounded-full hover:border-oat hover:bg-black/5 transition-colors text-oat">
            <ChevronRight size={20} strokeWidth={1} />
          </button>
        </div>
      </div>

      {/* Embla Viewport */}
      <div 
        className="overflow-hidden w-full px-8 md:px-16 cursor-grab active:cursor-grabbing" 
        ref={emblaRef}
      >
        <div className="flex touch-pan-y" style={{ marginLeft: '-2rem' }}>
          {MOCK_IMAGES.map((item, index) => (
            <motion.div 
              key={`${item.id}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex-[0_0_85vw] md:flex-[0_0_40vw] lg:flex-[0_0_30vw] min-w-0 aspect-[3/4] relative group pl-[2rem]"
            >
              <div className="w-full h-full overflow-hidden bg-carbon relative">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  draggable={false}
                />
                
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 flex justify-between items-center pointer-events-none drop-shadow-md">
                  <span className="font-body text-white text-xs uppercase tracking-widest bg-black/40 px-3 py-1 backdrop-blur-sm rounded-sm">{item.title}</span>
                  <span className="font-body text-white text-xs tracking-widest bg-black/40 px-3 py-1 backdrop-blur-sm rounded-sm">[ + ]</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
