/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

// Path to your scenic background image
const TIMELINE_BACKGROUND_IMAGE = "/assets/images/flwr.png";

export default function ProgramCard() {
  const programSteps = [
    "Guest Registration",
    "Welcoming Remarks",
    "Grand Entrance",
    "Cotillion de Honor",
    "18 Treasures",
    "18 Bills",
    "Dinner",
    "18 Roses",
    "18 Candles",
    "18 Shots",
    "Blowing of Candles",
  ];

  return (
    <div 
      className="group relative overflow-hidden bg-cover bg-center border border-outline-variant/30 p-4 sm:p-8 md:p-12 rounded-[1.5rem] w-full flex flex-col items-center shadow-lg min-h-[900px] md:min-h-[1050px]"
      style={{ backgroundImage: `url(${TIMELINE_BACKGROUND_IMAGE})` }}
    >
      {/* All transparent/filter overlays have been completely removed from this background */}

      {/* Import elegant scripts dynamically */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
        
        .font-timeline-script {
          font-family: 'Alex Brush', cursive;
        }

        .gold-line-glow {
          box-shadow: 0 0 8px rgba(196, 152, 88, 0.4);
        }
      `}</style>

      {/* Premium Elegant Inset Border Design */}
      <div className="absolute inset-3 border border-gold-accent/20 rounded-2xl pointer-events-none z-10" />
      <div className="absolute inset-4 border border-gold-accent/5 rounded-2xl pointer-events-none z-10" />

      <div className="relative z-10 w-full flex flex-col items-center py-2">
        
        {/* Top Header Group */}
        <div className="text-center mb-8 select-none">
          <span className="text-gold-accent text-xs tracking-widest font-serif block mb-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">✦ &nbsp; ⚜ &nbsp; ✦</span>
          <h2 className="font-timeline-script text-5xl md:text-6xl text-primary-rose leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Debut Timeline</h2> <p>Emcee: Richard Fabella</p>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold-accent/40 to-transparent mx-auto mt-2" />
        </div>

        {/* Timeline Content Area */}
        <div className="relative w-full max-w-2xl flex flex-col items-center my-2 pb-10">
          
          {/* Central Vertical Spine Line (Always centered on all viewports) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-rose-light/40 via-primary-rose/30 to-primary-rose-light/40 -translate-x-1/2 z-0" />

          {/* List of Timeline Steps */}
          <div className="w-full space-y-8 md:space-y-12">
            {programSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx}
                  className="relative w-full grid grid-cols-2 gap-x-4 sm:gap-x-8 md:gap-x-12 items-center justify-center z-10"
                >
                  {/* Central Node Pin */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#fbf9f5] border-2 border-primary-rose shadow-sm flex items-center justify-center z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-rose" />
                  </div>

                  {/* Left Column (Even indexes render here, right-aligned) */}
                  <div className="text-right pr-4 sm:pr-8 md:pr-10 col-start-1">
                    {isEven && (
                      <span className="font-playfair text-xs sm:text-base text-[18px] text-primary-rose italic font-bold transition-colors select-none leading-tight block drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                        {step}
                      </span>
                    )}
                  </div>

                  {/* Right Column (Odd indexes render here, left-aligned) */}
                  <div className="text-left pl-4 sm:pr-8 md:pl-10 col-start-2">
                    {!isEven && (
                      <span className="font-playfair text-xs sm:text-base text-[18px] text-primary-rose italic font-bold transition-colors select-none leading-tight block drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                        {step}
                      </span>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}