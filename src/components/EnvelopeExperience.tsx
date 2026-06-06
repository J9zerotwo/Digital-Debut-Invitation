/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

interface EnvelopeExperienceProps {
  onEnter: () => void;
}

// Set your background and wax seal image paths here
const BACKROUND_SCENE_IMAGE = "/assets/images/bridgerton.png";
const WAX_SEAL_IMAGE = "/assets/images/seal.png";

export default function EnvelopeExperience({ onEnter }: EnvelopeExperienceProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCardUp, setIsCardUp] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isFading, setIsFading] = useState(false);

  // Simple particle system for the landing overlay
  const [bgPetals, setBgPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([]);

  useEffect(() => {
    // Generate beautiful landing particles
    const tempPetals = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 6,
      size: 10 + Math.random() * 12,
    }));
    setBgPetals(tempPetals);
  }, []);

  const handleOpenFlap = () => {
    if (isOpen) return;
    setIsOpen(true);
    
    // After flap starts rotating, raise the card
    setTimeout(() => {
      setIsCardUp(true);
    }, 650);
  };

  const handleEnterCelebration = () => {
    // Start fade output transition
    setIsFading(true);
    
    setTimeout(() => {
      setIsDismissed(true);
      onEnter(); // notify parent to initialize general scene elements
    }, 950);
  };

  if (isDismissed) return null;

  return (
    <>
      {/* Styled block injection */}
      <style>{`
        /* Envelope design and keyframe animations compiled cleanly in component style block */
        #envelope-wrapper {
          --rose:        #e8a0b4;
          --rose-light:  #f2c4d0;
          --rose-pale:   #fdeef3;
          --rose-deep:   #c4607a;
          --rose-dark:   #8b3a52;
          --petal:       #fff5f8;
          --petal2:      #fad8e5;
          --petal3:      #f7c8d8;
          --gold:        #c9a878;
          --gold-light:  #e8d4a8;
          --cream:       #fffbfc;
          --ink:         #3d1a26;
          --ink-mid:     #7a3f55;
          --ink-soft:    #b07888;
          --blush:       #f9e0e8;
          --blush2:      #f4c8d8;
          --warm:        #fef0e0;
        }

        .env-scene {
          position: relative;
          width: min(320px, 90vw);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 20;
        }

        /* Envelope core sizing and relative styles */
        .envelope-container {
          position: relative;
          width: min(320px, 90vw);
          height: 190px;
          background: linear-gradient(160deg, #fffbfd, #fef5f8);
          border: 1.5px solid rgba(196,96,122,0.2);
          border-radius: 6px;
          box-shadow: 
            0 14px 40px rgba(139,58,82,0.15),
            0 0 0 4px rgba(242,196,208,0.12);
          overflow: hidden;
          z-index: 10;
        }

        .env-flap-wrap {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 0;
          transform-origin: top center;
          transform-style: preserve-3d;
          transition: transform 0.75s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 15;
        }

        .env-flap-wrap.open {
          transform: rotateX(-180deg);
          z-index: 5; /* push back when opened to let card peek out */
        }

        .env-flap {
          width: 0; height: 0;
          border-left: calc(min(320px, 90vw) / 2) solid transparent;
          border-right: calc(min(320px, 90vw) / 2) solid transparent;
          border-top: calc(min(320px, 90vw) * 0.42) solid #fff8fa;
          filter: drop-shadow(0 2px 4px rgba(196,96,122,0.15));
        }

        .env-pocket {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 96px;
          background: linear-gradient(160deg, #fff8fa, #fef5f8);
          border-top: 1px solid rgba(196,96,122,0.1);
          padding: 16px 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 12;
        }

        /* Sealed Button Interaction */
        .seal-btn {
          position: absolute;
          top: calc(min(320px, 90vw) * 0.22);
          left: 50%;
          transform: translateX(-50%);
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 21;
          transition: opacity 0.4s ease, transform 0.3s ease;
        }

        .seal-btn:hover {
          transform: translateX(-50%) scale(1.08);
        }

        .seal-btn.hide {
          opacity: 0;
          pointer-events: none;
        }

        /* Styles for the Wax Seal Image */
        .seal-img {
          display: block;
          width: 64px; 
          height: 64px;
          object-fit: contain;
          filter: drop-shadow(0 4px 12px rgba(139,58,82,0.4));
          animation: heartbeat 2.2s ease-in-out infinite;
        }

        .seal-hint {
          font-family: 'Cinzel', serif;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #8b3a52;
          background: rgba(255,255,255,0.85);
          padding: 3px 8px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(139,58,82,0.08);
          margin-top: 8px;
          animation: pulse-hint 2s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          12% { transform: scale(1.15); }
          26% { transform: scale(1); }
          38% { transform: scale(1.08); }
          50% { transform: scale(1); }
        }

        @keyframes pulse-hint {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.95; }
        }

        /* Invitation card rising and hover values */
        .inv-card {
          position: fixed;
          top: 50%; left: 50%;
          width: min(310px, 86vw);
          height: 440px;
          z-index: 30;
          opacity: 0;
          visibility: hidden;
          transform: translate(-50%, 60%);
          transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease 0.2s, visibility 0s 0.2s;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: visible;
        }

        .inv-card.up {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, -50%);
          transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease, visibility 0s;
        }

        .inv-card-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, #fffbfd 0%, #fef5f8 60%, #fdeef3 100%);
          border: 1px solid rgba(196,96,122,0.18);
          border-radius: 12px;
          box-shadow:
            0 24px 60px rgba(139,58,82,0.22),
            inset 0 0 0 5px rgba(248,196,216,0.1),
            inset 0 0 0 6px rgba(196,96,122,0.07);
          z-index: 0;
        }

        /* Flower Clusters on invitation card */
        .inv-card-flowers-top {
          position: absolute;
          top: -30px; left: -24px;
          width: 104px; height: 104px;
          pointer-events: none;
          z-index: 40;
        }

        .inv-card-flowers-bottom {
          position: absolute;
          bottom: -32px; right: -24px;
          width: 104px; height: 104px;
          pointer-events: none;
          z-index: 40;
          transform: scale(-1);
        }

        .inv-inner {
          position: relative;
          z-index: 10;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          text-align: center;
          width: 100%;
          height: 100%;
        }

        /* Twinkle & float elements */
        .twinkle-overlay::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image:
            radial-gradient(circle 3px at 30% 25%, rgba(255,255,255,0.95) 0%, transparent 100%),
            radial-gradient(circle 2px at 55% 18%, rgba(255,255,255,0.85) 0%, transparent 100%),
            radial-gradient(circle 4px at 72% 30%, rgba(255,255,255,0.72) 0%, transparent 100%),
            radial-gradient(circle 2px at 18% 40%, rgba(255,255,255,0.78) 0%, transparent 100%),
            radial-gradient(circle 3px at 85% 22%, rgba(255,255,255,0.92) 0%, transparent 100%),
            radial-gradient(circle 6px at 50% 48%, rgba(255,225,170,0.85) 0%, transparent 100%),
            radial-gradient(circle 3px at 25% 60%, rgba(255,205,175,0.68) 0%, transparent 100%),
            radial-gradient(circle 2px at 78% 55%, rgba(255,205,175,0.68) 0%, transparent 100%),
            radial-gradient(circle 4px at 12% 75%, rgba(255,255,255,0.72) 0%, transparent 100%),
            radial-gradient(circle 3px at 90% 70%, rgba(255,255,255,0.72) 0%, transparent 100%);
          animation: overlayTwinkle 4s ease-in-out infinite alternate;
        }

        @keyframes overlayTwinkle {
          0% { opacity: 0.45; }
          100% { opacity: 1; }
        }

        /* Overlay floating petals fall */
        .overlay-petal {
          position: absolute;
          top: -30px;
          opacity: 0;
          background: radial-gradient(ellipse at 40% 30%, #fdeef3, #f2c4d0bb);
          border-radius: 60% 40% 70% 30% / 50% 60% 40% 70%;
          animation: petalFall linear infinite;
          pointer-events: none;
        }

        @keyframes petalFall {
          0% {
            opacity: 0;
            transform: translateY(0) rotate(0deg) translateX(0);
          }
          8% {
            opacity: 0.85;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            opacity: 0;
            transform: translateY(110vh) rotate(640deg) translateX(70px);
          }
        }
      `}</style>

      {/* Primary Overlay screen loading your scenic painting as a full backdrop */}
      <div 
        id="envelope-wrapper"
        className={`fixed inset-0 flex items-center justify-center p-6 z-[9999] overflow-hidden select-none transition-opacity duration-1000 ease-in-out twinkle-overlay ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={{
          backgroundImage: `url(${BACKROUND_SCENE_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
        {/* Falling petals inside overlay view */}
        {bgPetals.map((petal) => (
          <div 
            key={petal.id}
            className="overlay-petal z-10"
            style={{
              left: `${petal.left}%`,
              width: `${petal.size}px`,
              height: `${petal.size * 1.3}px`,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}

        <div className="env-scene">
          
          {/* THE INVITE CARD (Rises dramatically out of the envelope) */}
          <div className={`inv-card ${isCardUp ? 'up' : ''}`}>
            <div className="inv-card-bg" />
            <img src="/assets/images/top_flower.png" alt="Floral Decoration" className="inv-card-flowers-top" />
            <img src="/assets/images/bot_flower.png" alt="Floral Decoration" className="inv-card-flowers-bottom" />
            <div className="inv-inner py-8 px-6">
              <span className="text-gold-accent font-serif text-[18px]">❧</span>
              
              <div>
                <span className="font-cinzel text-[10px] tracking-[0.24em] text-primary-rose/80 uppercase block mb-1">
                  You are invited to
                </span>
                <span className="h-[1px] w-12 bg-gold-accent/40 mx-auto block mb-3" />
                <h1 className="font-dancing text-4xl md:text-5xl text-primary-rose leading-tight font-medium">
                  Trisha Jia's <br/>
                  <span className="font-playfair text-xl md:text-2xl text-soft-ink italic block mt-1">A Decade & Eight</span>
                </h1>
              </div>

              <span className="text-gold-accent text-xs tracking-[0.3em] font-medium my-1">✦ &nbsp; ✦ &nbsp; ✦</span>
              
              <p className="font-garamond text-base md:text-lg text-soft-ink-variant leading-relaxed italic max-w-xs px-2">
                Join us for a magical evening as we celebrate a remarkable milestone in her eighteenth birthday and the beginning of a beautiful new chapter.
              </p>

              <button 
                id="enterBtn"
                onClick={handleEnterCelebration}
                className="font-cinzel text-[10px] tracking-[0.2em] uppercase py-3 px-6 border border-primary-rose-light/40 rounded-full bg-linear-to-b from-[#fff5f8] to-[#fad8e5] text-primary-rose hover:text-white hover:bg-linear-to-b hover:from-primary-rose-light hover:to-primary-rose cursor-pointer transition-all duration-300 shadow-xs hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 mt-4 outline-none"
              >
                ✦ Enter the Celebration ✦
              </button>

              <span className="text-gold-accent font-serif text-[18px] transform rotate-180 block">❧</span>
            </div>
          </div>

          {/* Elegant header above the envelope */}
          {!isOpen && (
            <div className="text-center mb-6 max-w-[280px] select-none animate-pulse relative z-20">
              <span className="font-cinzel text-xs tracking-[0.32em] text-[#8b3a52] font-bold uppercase block">
                To our Dearest Guest
              </span>
              <div className="h-[1px] w-12 bg-gold-accent/50 mx-auto mt-2" />
            </div>
          )}

          {/* THE ENVELOPE (Includes the interactive seal & flaps) */}
          <div className="envelope-container flex flex-col justify-end relative">
            
            {/* The Top Flap (rotates back 180 degrees) */}
            <div className={`env-flap-wrap ${isOpen ? 'open' : ''}`}>
              <div className="env-flap" />
            </div>
 
            {/* The Front Pocket / Liner overlay */}
            <div className="env-pocket border-t border-primary-rose-light/10 flex items-center justify-center">
              <div className="w-12 h-[1px] bg-gold-accent/25" />
              <span className="mx-3 text-[10px] text-gold-accent/40">✦</span>
              <div className="w-12 h-[1px] bg-gold-accent/25" />
            </div>
 
            {/* WAX SEAL BUTTON */}
            <button 
              onClick={handleOpenFlap}
              className={`seal-btn ${isOpen ? 'hide' : ''}`}
            >
              {/* Replaced the heart emoji with the custom wax-seal.png image */}
              <img src={WAX_SEAL_IMAGE} alt="Wax Seal" className="seal-img" />
              <span className="seal-hint">tap to open</span>
            </button>
 
          </div>

        </div>
      </div>
    </>
  );
}