import { StrikethroughIcon } from "lucide-react";
import React from "react";

export default function GentleNoteCard() {
  return (
    <div className="group relative overflow-visible rounded-3xl bg-white border border-outline-variant/30 p-8 flex flex-col justify-between text-center transition-all hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(129,81,82,0.08)] duration-300 h-full shadow-lg">
      
      {/* Dynamic Font Import and Styling */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Garamond:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap');
        
        .font-garamond {
          font-family: 'Garamond', serif;
        }
      `}</style>

      {/* Premium Elegant Inset Border Design */}
      <div className="absolute inset-3 border border-gold-accent/20 rounded-2xl pointer-events-none" />
      <div className="absolute inset-4 border border-gold-accent/5 rounded-2xl pointer-events-none" />

      <div className="relative z-10 py-2">
        {/* Elegant top floral-style star grouping */}
        <div className="text-center mb-4 select-none">
          <span className="text-gold-accent text-sm tracking-widest font-serif">✦ &nbsp; ⚜ &nbsp; ✦</span>
        </div>

        <span className="text-gold-accent font-garamond text-[10px] tracking-[0.25em] uppercase block mb-1 font-bold">
          Court Etiquette & Guide
        </span>
        
        <h3 className="font-garamond text-2xl text-primary-rose mb-3 italic font-semibold">
          A Gentle Note for Our Guests
        </h3>
        
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-gold-accent/40 to-transparent mx-auto mb-6" />

        {/* Notes body styled entirely in the clean Garamond font */}
        <div className="space-y-4 text-left text-l text-soft-ink leading-relaxed px-1 font-garamond">
          <p className="border-b border-outline-variant/10 pb-3 text-center text-soft-ink-variant font-medium">
            Please <strong>answer the RSVP</strong> to confirm your <strong>attendance and secure your seat</strong> for this special celebration.
          </p>

          <p className="border-b border-outline-variant/10 pb-3 text-center text-soft-ink-variant font-medium">
            <strong>Please avoid arriving late, especially those who are part of the 18 traditions.</strong>
          </p>
          
         <p className="border-b border-outline-variant/10 pb-3 text-center text-soft-ink-variant font-medium">
            <strong>Guests are graciously requested to arrive at 5:30 PM</strong>
          </p>
          
          <p className="border-b border-outline-variant/10 pb-3 text-center text-soft-ink-variant font-medium">
            This celebration is prepared with care for our invited guests only. <strong>We are unable to accommodate additional guests or +1s.</strong>
          </p>
          
          <p className="border-b border-outline-variant/10 pb-3 text-center text-soft-ink-variant font-medium">
            We kindly request guests to adhere to the <strong>prescribed dress code</strong> and <strong>arrive on time</strong> to honor the program.
          </p>

          <p className="border-b border-outline-variant/10 pb-3 text-center text-soft-ink-variant font-medium">
            Your presence is truly appreciated. <strong>If you wish to give a gift, let it be something that carries a reminder of the debutant, Trisha Jia, </strong> in your thoughts and comes from the heart.
          </p>
          
          <p className="pt-2 text-center text-primary-rose tracking-wider uppercase font-garamond text-[12px]">
            <strong>We look forward to celebrating this special day with you!</strong>
          </p>
        </div>
      </div>
    </div>
  );
}