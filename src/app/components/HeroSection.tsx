import React, { useState } from 'react';
import { MapPin, Calendar, Users, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import heroPoster from 'figma:asset/e45f5ddea19acf5a60e8b84ad7ba16c1b9bea172.png';
import { GradientText } from './ui/gradient-text';

export function HeroSection() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="hero" className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 overflow-hidden">
      {/* Background abstract decoration */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-white to-zinc-50 -z-10" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10 pr-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-zinc-200 rounded-full text-[11px] font-semibold uppercase tracking-wider text-zinc-600 mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
            Invite-only gathering
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 mb-4 leading-[1.1] font-sans uppercase">
            Thank You For <GradientText className="px-1 -mx-1">Joining</GradientText>
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-zinc-500 mb-8 sm:mb-10 leading-relaxed max-w-xl font-normal">A gathering of NIT Warangal entrepreneurs focused on building stronger connections, mentorship, and long-term support within the alumni founder community.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full border-t border-zinc-200 pt-6 sm:pt-8 mt-2">
            <div className="flex flex-col gap-1.5">
              <span className="text-zinc-400 text-[11px] uppercase tracking-widest font-semibold">Date</span>
              <div className="flex items-center gap-2 text-zinc-900 font-medium text-sm">
                <Calendar className="w-4 h-4 text-zinc-400" />
                <span>March 6, 2026</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <span className="text-zinc-400 text-[11px] uppercase tracking-widest font-semibold">Location</span>
              <div className="flex items-center gap-2 text-zinc-900 font-medium text-sm">
                <MapPin className="w-4 h-4 text-zinc-400" />
                <span>Shifu Ventures, HSR Layout</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center lg:justify-start lg:pl-3 xl:pl-0">
          <div className="w-full max-w-md lg:max-w-[480px] rounded-none overflow-hidden shadow-xl shadow-zinc-900/10 relative z-10 cursor-pointer transition-transform hover:scale-[1.02]" onClick={() => setIsZoomed(true)}>
            <img 
              src={heroPoster} 
              alt="Backed By Alumni Event Hero" 
              className="w-full h-auto object-contain border-[6px] border-stone-100 ring-1 ring-stone-300 shadow-sm"
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isZoomed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 p-4 sm:p-8 backdrop-blur-sm cursor-pointer"
            onClick={() => setIsZoomed(false)}
          >
            <button 
              className="absolute top-6 right-6 lg:top-8 lg:right-8 p-3 bg-zinc-900 text-white hover:bg-white hover:text-zinc-900 transition-colors z-[60]"
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(false);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-h-full max-w-5xl w-full flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={heroPoster} 
                alt="Backed By Alumni Event Hero (Zoomed)" 
                className="max-h-[85vh] w-auto object-contain border-[8px] border-stone-100 ring-1 ring-stone-300 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}