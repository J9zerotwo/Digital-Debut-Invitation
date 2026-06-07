import React from "react";
import { ExternalLink, CheckCircle, Heart } from "lucide-react";

export default function RSVPSection() {
  const rsvpLink = "https://debutrsvp.vercel.app/";

  return (
    <section className="py-24 px-6 md:px-12 bg-cream-low/30 relative overflow-hidden" id="rsvp">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary-rose-light/10 blur-2xl rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 font-garamond">
        
        {/* Simplified Aesthetic Invitation Parchment */}
        <div className="relative bg-white border-2 border-gold-light rounded-3xl p-8 md:p-14 shadow-xl overflow-hidden text-center">
          
          {/* Aesthetic double-line border frames */}
          <div className="absolute inset-2 border border-outline-variant/35 rounded-2xl pointer-events-none" />
          <div className="absolute inset-3 border border-outline-variant/15 rounded-2xl pointer-events-none" />

          <span className="text-gold-accent font-bold uppercase tracking-[0.25em] text-[16px] block mb-1 mt-6">
            Registry Office of Aberdeen Court
          </span>
          <h2 className="font-dancing text-4xl md:text-5xl text-primary-rose leading-tight font-medium">
            Confirm Your Attendance
          </h2>
          <p className="text-[16px] font-garamond text-base md:text-lg text-soft-ink-variant italic mt-2 max-w-md mx-auto leading-relaxed">
            To grace this special occasion, we kindly<strong> request that you secure your seat at Trisha Jia’s 18th birthday celebration by submitting your RSVP online.</strong>
          </p>

          <hr className="border-outline-variant/30 my-6 max-w-xs mx-auto" />

          {/* Quick Guidance Box */}
          <div className="bg-[#fffbfc] border border-outline-variant/20 rounded-2xl p-6 text-left max-w-lg mx-auto mb-8 space-y-4">
            <h4 className="font-cinzel text-[16px] font-bold text-gold-accent tracking-wider text-center uppercase">
              Assembly Admission Rules
            </h4>
            
            <div className="text-[16px] space-y-3 font-garamond text-sm text-soft-ink leading-relaxed">
              <div className="flex items-start gap-3">
                <p><strong>Confirm Online:</strong> Fill out the form in the link to confirm the attendance before the deadline.</p>
              </div>
              <div className="flex items-start gap-3">
                <p><strong>Dress Beautifully:</strong> Kindly adhere strictly to the champagne, cream beige, or white semi-formal and smart-casual attire palette.</p>
              </div>
            </div>
          </div>

          {/* Action Call for External RSVP Portal */}
          <div className="space-y-4">
            <a 
              href={rsvpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary-rose hover:bg-primary-rose-light text-white font-cinzel text-xs uppercase tracking-widest font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Proceed to RSVP</span>
              <ExternalLink size={13} />
            </a>
            
            <p className="text-[20px] text-soft-ink-variant font-garamond">
            Kindly confirm your attendance no later than <strong> June 21, 2026.</strong>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
