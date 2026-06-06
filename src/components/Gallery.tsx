/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Path to your scenic background image
const GALLERY_BACKGROUND = "/assets/images/flwr.png";

// Customizable gallery image paths (8 slots)
const GALLERY_IMAGES = [
  "/assets/images/top_left.jpg",      
  "/assets/images/top_right.jpg",      
  "/assets/images/middle.jpg",         
  "/assets/images/middle_left.jpg",    
  "/assets/images/middle_right.jpg",   
  "/assets/images/bot_mid.jpg",       
  "/assets/images/bot_left.jpg",  
  "/assets/images/bot_right.jpg"  
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < GALLERY_IMAGES.length - 1 ? prev + 1 : 0));
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_IMAGES.length - 1));
    }
  };

  return (
    <section 
      className="py-20 px-6 md:px-12 relative overflow-hidden bg-cover bg-center" 
      id="gallery"
      style={{ backgroundImage: `url(${GALLERY_BACKGROUND})` }}
    >
      
      {/* Cursive Font and Custom Styling Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
        
        .font-gallery-script {
          font-family: 'Alex Brush', cursive;
        }
      `}</style>

      {/* Decorative background ambient details */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary-rose-light/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gold-light/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 animate-none">
        
        {/* Section Header */}
        <div className="text-center mb-12 select-none">
          {/* Soft shadow added behind the title for perfect readability over the background image */}
          <h2 className="font-gallery-script text-5xl md:text-7xl text-primary-rose leading-none mb-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
            Gallery
          </h2>
          {/* Filigree ornamental border matching the photo */}
          <div className="flex items-center justify-center gap-3 text-gold-accent opacity-70 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            <span className="text-[14px]">❧</span>
            <div className="h-[1px] w-12 bg-gold-accent/40" />
            <span className="text-[14px] transform rotate-180">❧</span>
          </div>
        </div>

        {/* Asymmetrical 2-1-2-1-2 Masonry Grid (Perfectly handles 8 images) */}
        <div className="space-y-4">
          
          {/* Row 1: Two Vertical Portrait Images (Index 0, 1) */}
          <div className="grid grid-cols-2 gap-4">
            {GALLERY_IMAGES.slice(0, 2).map((src, idx) => (
              <div 
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="overflow-hidden border border-white/40 bg-white/20 shadow-md cursor-pointer hover:shadow-lg hover:scale-[1.01] transition-all duration-300 aspect-[3/4] flex items-center justify-center"
              >
                <img 
                  src={src} 
                  alt={`Trisha Jia Gallery ${idx + 1}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Row 2: One Landscape Wide Banner Image (Index 2) */}
          <div 
            onClick={() => setLightboxIndex(2)}
            className="w-full overflow-hidden border border-white/40 bg-white/20 shadow-md cursor-pointer hover:shadow-lg hover:scale-[1.01] transition-all duration-300 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center"
          >
            <img 
              src={GALLERY_IMAGES[2]} 
              alt="Trisha Jia Gallery 3" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Row 3: Two Vertical Portrait Images (Index 3, 4) */}
          <div className="grid grid-cols-2 gap-4">
            {GALLERY_IMAGES.slice(3, 5).map((src, idx) => {
              const actualIndex = idx + 3;
              return (
                <div 
                  key={actualIndex}
                  onClick={() => setLightboxIndex(actualIndex)}
                  className="overflow-hidden border border-white/40 bg-white/20 shadow-md cursor-pointer hover:shadow-lg hover:scale-[1.01] transition-all duration-300 aspect-[3/4] flex items-center justify-center"
                >
                  <img 
                    src={src} 
                    alt={`Trisha Jia Gallery ${actualIndex + 1}`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>

          {/* Row 4: One Landscape Wide Banner Image (Index 5) */}
          <div 
            onClick={() => setLightboxIndex(5)}
            className="w-full overflow-hidden border border-white/40 bg-white/20 shadow-md cursor-pointer hover:shadow-lg hover:scale-[1.01] transition-all duration-300 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center"
          >
            <img 
              src={GALLERY_IMAGES[5]} 
              alt="Trisha Jia Gallery 6" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Row 5: Two Vertical Portrait Images (Index 6, 7) */}
          <div className="grid grid-cols-2 gap-4">
            {GALLERY_IMAGES.slice(6, 8).map((src, idx) => {
              const actualIndex = idx + 6;
              return (
                <div 
                  key={actualIndex}
                  onClick={() => setLightboxIndex(actualIndex)}
                  className="overflow-hidden border border-white/40 bg-white/20 shadow-md cursor-pointer hover:shadow-lg hover:scale-[1.01] transition-all duration-300 aspect-[3/4] flex items-center justify-center"
                >
                  <img 
                    src={src} 
                    alt={`Trisha Jia Gallery ${actualIndex + 1}`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* --- LIGHTBOX FULLSCREEN MODAL --- */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4 cursor-zoom-out"
          >
            {/* Close Button */}
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors cursor-pointer bg-black/20 hover:bg-white/10 rounded-full"
            >
              <X size={24} />
            </button>

            {/* Left Control */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 p-3 text-white/70 hover:text-white transition-colors cursor-pointer bg-white/5 hover:bg-white/10 rounded-full"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Main Active Image */}
            <motion.div 
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-full max-h-[85vh] overflow-hidden flex items-center justify-center"
            >
              <img 
                src={GALLERY_IMAGES[lightboxIndex]} 
                alt="Active Gallery" 
                className="max-w-full max-h-[85vh] object-contain select-none"
              />
            </motion.div>

            {/* Right Control */}
            <button 
              onClick={handleNext}
              className="absolute right-4 p-3 text-white/70 hover:text-white transition-colors cursor-pointer bg-white/5 hover:bg-white/10 rounded-full"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}