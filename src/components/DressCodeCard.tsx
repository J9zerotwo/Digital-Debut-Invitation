/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Check, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ColorSwatch {
  hex: string;
  name: string;
}

export default function DressCodeCard() {
  const swatches: ColorSwatch[] = [
    { hex: "#F7E7CE", name: "Champagne"}, 
    { hex: "#F2E9DC", name: "Cream Beige"},
    { hex: "#FFFFFF", name: "White"}
  ];

  const [selectedSwatch, setSelectedSwatch] = useState<ColorSwatch>(swatches[0]);
  const [attireRole, setAttireRole] = useState<"ladies" | "lords">("ladies");
  const [isZoomed, setIsZoomed] = useState(false); // Zoom modal state

  return (
    <div className="group relative overflow-visible rounded-3xl bg-primary-rose-light/10 border border-primary-rose-light/25 p-8 flex flex-col justify-between text-center backdrop-blur-sm h-full shadow-sm">
      
      <div>
        {/* Elegant top floral-style star grouping */}
        <div className="text-center mb-6 select-none mt-2">
          <span className="text-gold-accent text-sm tracking-widest font-serif">✦ &nbsp; ⚜ &nbsp; ✦</span>
        </div>

        <h3 className="font-playfair text-2xl text-primary-rose mb-2 italic">Paletted Dress Code</h3>
        <p className="font-playfair text-xl text-soft-ink tracking-wider font-semibold mb-4">
          "Champagne, Cream Beige & White"
        </p>
        <p className="font-garamond text-[18px] text-soft-ink-variant leading-relaxed mb-6">
          We kindly request our guests to <strong>dress strictly within the prescribed color palette.</strong> 
        </p>

        {/* Color Palette Header */}
        <div className="flex flex-col items-center bg-white/50 rounded-2xl p-4 border border-outline-variant/30 mb-6">
          <span className="font-garamond text-[14px] font-bold uppercase tracking-wider text-gold-accent mb-3 flex items-center gap-1.5"> Recommended Court Palette </span>
          
          <div className="flex gap-4">
            {swatches.map((swatch) => (
              <button
                key={swatch.name}
                onClick={() => setSelectedSwatch(swatch)}
                className={`w-10 h-10 rounded-full shadow-md border-2 transition-all relative overflow-hidden group cursor-pointer ${
                  selectedSwatch.name === swatch.name 
                    ? "border-primary-rose scale-110 shadow-lg" 
                    : "border-white/90 hover:scale-105"
                }`}
                style={{ backgroundColor: swatch.hex }}
                title={swatch.name}
              >
                {selectedSwatch.name === swatch.name && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 text-white">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="mt-4 text-xs font-garamond text-center">
            <p className="font-bold text-soft-ink text-sm">{selectedSwatch.name}</p>
          </div>
        </div>

        {/* Attire Reference Image Showcase (Tap to zoom) */}
        <div 
          onClick={() => setIsZoomed(true)}
          className="mb-6 rounded-2xl overflow-hidden border border-outline-variant/30 shadow-xs bg-white/40 p-2 select-none cursor-zoom-in relative group/img"
          title="Click to view full screen"
        >
          <p className="text-[14px] font-cinzel text-gold-accent tracking-widest uppercase mb-2 mt-1 font-bold flex items-center justify-center gap-1.5">
            Recommended Attire Guide
          </p>
          
          <div className="relative overflow-hidden rounded-xl h-48 md:h-56 w-full">
            <img 
              src="/assets/images/attire.png"
              alt="Attire Reference Guidelines"
              className="w-full h-full object-cover rounded-xl shadow-xs transition-transform duration-300 group-hover/img:scale-[1.03]"
            />
            
            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/15 group-hover/img:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover/img:opacity-100 duration-300">
              <div className="bg-white/90 p-2 rounded-full shadow text-primary-rose flex items-center gap-1 text-xs font-semibold">
                <Maximize2 size={14} />
                <span>Tap to Expand</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wardrobe recommendation planner */}
      <div className="border-t border-outline-variant/30 pt-5">
        <div className="flex justify-center gap-2 mb-4">
          <button onClick={() => setAttireRole("ladies")}
            className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold font-garamond transition-all cursor-pointer ${
              attireRole === "ladies"
                ? "bg-primary-rose text-white shadow-sm"
                : "bg-white/40 text-soft-ink-variant hover:bg-white/60"
            }`}
          > Ladies </button>
          <button onClick={() => setAttireRole("lords")}
            className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold font-garamond transition-all cursor-pointer ${
              attireRole === "lords"
                ? "bg-primary-rose text-white shadow-sm"
                : "bg-white/40 text-soft-ink-variant hover:bg-white/60"
            }`}
          > Gentlemen </button>
        </div>

        <div className="bg-white/40 p-4 rounded-xl text-left border border-outline-variant/20">
          <p className="text-[16px] font-garamond text-soft-ink-variant leading-relaxed">
            {attireRole === "ladies" ? (
              <>
                <strong>Semi-Formal:</strong> elegant dresses, blouses with skirts or trousers | <strong>Smart Casual:</strong> stylish tops, chic dresses, chinos, or slacks.
              </>
            ) : (
              <>
                <strong>Semi-Formal:</strong> polo shirts, long sleeves, slacks, or a suit | <strong>Smart Casual:</strong> stylish tops, chinos, or slacks.
              </>
            )}
            <span className="block mt-2 pt-2 border-t border-outline-variant/15 text-center text-[14px] font-semibold text-primary-rose italic">
              Kindly avoid maong pants, ripped jeans, skinny jeans, and slippers.
            </span>
          </p>
        </div>
      </div>

      {/* --- UNIFIED LIGHTBOX FULLSCREEN MODAL --- */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4 cursor-zoom-out"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsZoomed(false)}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors cursor-pointer bg-black/20 hover:bg-white/10 rounded-full"
            >
              <X size={24} />
            </button>

            {/* Main Active Image */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-full max-h-[85vh] overflow-hidden flex items-center justify-center"
            >
              <img 
                src="/assets/images/attire.png" 
                alt="Attire Reference Guidelines" 
                className="max-w-full max-h-[85vh] object-contain select-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}