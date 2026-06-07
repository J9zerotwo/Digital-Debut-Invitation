/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function HeroBanner() {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([]);

  useEffect(() => {
    // Initialize 18 lovely floating rose petals drifting gently
    const tempPetals = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage left width
      delay: Math.random() * 8, // animations trigger delay
      duration: 6 + Math.random() * 7, // seconds to fall
      size: 10 + Math.random() * 14, // pixels size
    }));
    setPetals(tempPetals);
  }, []);

  return (
    <div 
      className="relative h-[75vh] sm:h-[80vh] md:h-screen w-full overflow-hidden flex flex-col justify-start bg-[#fcedf0]" 
      id="hero"
    >
      {/* 
        Responsive Background Positioning:
        - bg-cover bg-top: Fills vertical screen boundaries nicely on mobile.
        - md:bg-contain md:bg-no-repeat md:bg-center: Prevents cropping on wide desktop monitors.
      */}
      <div 
        className="absolute inset-0 bg-cover bg-top md:bg-contain md:bg-no-repeat md:bg-center z-0"
        style={{ backgroundImage: `url('/assets/images/trish.png')` }}
      />
      
      {/* Soft, gentle bottom transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-[92%] to-[#fcedf0] pointer-events-none z-1" />

      {/* Floating Petals Layer */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-10" id="petal-container-react">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="absolute bg-primary-rose-light/45 rounded-tr-[120%] rounded-bl-[120%] shadow-sm"
            style={{
              left: `${petal.left}%`,
              width: `${petal.size}px`,
              height: `${petal.size * 0.75}px`,
              top: `-30px`,
              animation: `fall ${petal.duration}s linear infinite`,
              animationDelay: `${petal.delay}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Custom Styles Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant+Garamond:wght@600;700&display=swap');
        
        .font-cursive-banner {
          font-family: 'Alex Brush', cursive;
        }

        .font-serif-banner {
          font-family: 'Cormorant Garamond', serif;
        }

        /* Replicates the soft white outline/glow around the pink cursive text */
        .pink-text-glow {
          text-shadow: 
            -2px -2px 0px #ffffff,
             2px -2px 0px #ffffff,
            -2px  2px 0px #ffffff,
             2px  2px 0px #ffffff,
             0px  0px 10px rgba(255, 255, 255, 0.9),
             0px  4px 8px rgba(129, 81, 82, 0.15);
        }

        /* Subtle drop shadow to make the gold/sage serif text stand out */
        .gold-text-shadow {
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.45);
        }

        @keyframes fall {
          0% {
            transform: translateY(-10px) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.65;
          }
          90% {
            opacity: 0.65;
          }
          100% {
            transform: translateY(850px) rotate(360deg) translateX(45px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}