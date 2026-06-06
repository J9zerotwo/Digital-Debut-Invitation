/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
import { Share2, Mail, Heart } from "lucide-react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import EventCountdown from "./components/EventCountdown"; // Imported the new component
import VenueCard from "./components/VenueCard";
import DressCodeCard from "./components/DressCodeCard";
import ProgramCard from "./components/ProgramCard";
import SymbolsSection from "./components/SymbolsSection";
import RSVPSection from "./components/RSVPSection";
import Gallery from "./components/Gallery"; // Imported the new Gallery component
import FloatingPetals from "./components/FloatingPetals"; // Imported the new FloatingPetals component
import EnvelopeExperience from "./components/EnvelopeExperience";
import GentleNoteCard from "./components/GentleNoteCard";

export default function App() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnterCelebration = () => {
    setShowEnvelope(false);
    // Play background music under active user interaction
    if (audioRef.current) {
      audioRef.current.volume = 0.35;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Audio autoplay blocked by browser policy:", err);
        });
    }
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Trisha Jia's 18th Debutante Ball",
        text: "You are invited to the grand debut at Aberdeen Court, Quezon City.",
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Address copied to clipboard! Share the court invite with companions.");
    }
  };

  return (
    <div className="bg-cream-bg text-soft-ink font-garamond min-h-screen selection:bg-primary-rose-light/20 selection:text-primary-rose transition-colors duration-300 relative">
      
      {/* 
        Global Floating Petals Overlay:
        - fixed inset-0: Keeps the overlay locked to the screen viewport as you scroll.
        - pointer-events-none: Ensures guests can still tap and interact with all elements underneath.
      */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        <FloatingPetals />
      </div>

      {/* Interactive opening sequence envelope */}
      <EnvelopeExperience onEnter={handleEnterCelebration} />

      {/* Sticky elegant navigation header */}
      <Header onRSVPClick={() => scrollToSection("rsvp")} />

      {/* Hero section featuring the overall Somerset Garden backdrop image and falling petals */}
      <HeroBanner />

      {/* Functional Event Details, Metadata & Live Countdown */}
      <EventCountdown />

      {/* Main information columns container structured beautifully */}
      <section className="px-6 md:px-12 py-20 bg-cream-low/40 border-y border-outline-variant/30" id="venue">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="font-garamond text-xs font-bold uppercase tracking-[0.2em] text-gold-accent block mb-2">
              Aberdeen Court Courtroom Assembly
            </span>
            <h2 className="font-playfair text-3xl md:text-5xl text-soft-ink italic">
              Evening Coordinates & Protocol
            </h2>
            <p className="font-garamond text-base text-soft-ink-variant italic mt-2 max-w-lg mx-auto">
              Kindly familiarize yourself with the venue details, color motif, and event guidelines as we gather to celebrate this special milestone.
            </p>
            <div className="h-[1px] w-20 bg-outline-variant/50 mx-auto mt-4" />
          </div>

          {/* Core interactive 3-card grid (ProgramCard removed from here) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Column 0: A Gentle Note for Our Guests */}
            <div className="h-full">
              <GentleNoteCard />
            </div>

            {/* Column 1: Venue Cartography & map guide */}
            <div className="h-full">
              <VenueCard />
            </div>

            {/* Column 2: Wardrobe swatch planner */}
            <div className="h-full">
              <DressCodeCard />
            </div>
          </div>

        </div>
      </section>

      {/* 
        Dedicated Program Section:
        Giving the program timeline a full width block solves the squeezed layout, 
        letting guests view all the events comfortably on both mobile and desktop.
      */}
      <section className="px-6 md:px-12 py-16 bg-[#fcedf0]" id="program">
        <div className="max-w-3xl mx-auto">
          <ProgramCard />
        </div>
      </section>

      {/* Traditional 18 Symbols/Milestones path selector */}
      <SymbolsSection />

      {/* Elegant parchment style RSVP pass generator */}
      <RSVPSection />

      {/* New asymmetrical photo gallery placed directly after RSVPSection */}
      <Gallery />

      {/* Footer styled as seen in user's layout specs */}
      <footer className="bg-white border-t border-gold-light/40 w-full py-16 text-center select-none" id="footer">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                    
          {/* Navigational informational links */}
          <div className="flex gap-8 mb-8 text-sm font-semibold uppercase tracking-wider text-soft-ink-variant select-none">
            <a href="#hero" className="hover:text-primary-rose transition-colors">Invitation</a>
            <a href="#venue" className="hover:text-primary-rose transition-colors">Venue & Program</a>
            <a href="#symbols" className="hover:text-primary-rose transition-colors">Traditions</a>
            <a href="#rsvp" className="hover:text-primary-rose transition-colors">RSVP</a>
          </div>

          {/* Trademarks and legalities */}
          <p className="font-garamond text-s text-soft-ink-variant tracking-wider">
           © 2026 Trisha Jia’s 18th Debutante Ball. All rights reserved. Created and designed by Caila Jenine Ruado. <br />Private invitation only.
          </p>
        </div>
      </footer>

      {/* Background audio loop */}
      <audio 
        ref={audioRef} 
        loop 
        playsInline
        preload="auto"
      >
        <source src="/assets/intro.mp3" type="audio/mpeg" />
      </audio>

      {/* Elegant floating theme-aligned Music Player */}
      {!showEnvelope && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => {
              if (audioRef.current) {
                if (isPlaying) {
                  audioRef.current.pause();
                  setIsPlaying(false);
                } else {
                  audioRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch((err) => {
                      console.warn("Audio playback failed or was blocked by browser:", err);
                    });
                }
              }
            }}
            className="relative flex items-center justify-center w-14 h-14 bg-white/95 border border-gold-accent/40 rounded-full hover:border-primary-rose hover:shadow-[0_4px_20px_rgba(129,81,82,0.15)] shadow-lg transition-all duration-300 scale-100 hover:scale-110 active:scale-95 cursor-pointer group backdrop-blur-xs"
            title={isPlaying ? "Mute Background Music" : "Play Background Music"}
            id="music-toggle-floating-btn"
          >
            {/* Decorative Outer Ring rotating if playing */}
            <div className={`absolute inset-0.5 border border-dashed border-gold-accent/45 rounded-full ${isPlaying ? "animate-[spin_24s_linear_infinite]" : ""}`} />
            
            {/* Center Icon */}
            {isPlaying ? (
              <div className="relative text-primary-rose animate-[pulse_2s_infinite] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                {/* Elegant music notes floating up */}
                <span className="absolute -top-1 -right-1 text-[8px] animate-bounce select-none text-gold-accent font-semibold">♫</span>
              </div>
            ) : (
              <div className="text-soft-ink-variant/60 relative flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music-4"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/><line x1="3" y1="21" x2="21" y2="3" strokeWidth="1.5"/></svg>
              </div>
            )}
          </button>
        </div>
      )}

    </div>
  );
}