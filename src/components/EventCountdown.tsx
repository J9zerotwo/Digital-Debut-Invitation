/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function EventCountdown() {
  // Event Date: July 5, 2026 at 18:30 (6:30 PM)
  const eventDate = new Date("2026-07-05T18:30:00").getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    // Solid background matches the blush pink (#fcedf0) perfectly
    <div className="relative z-20 w-full flex flex-col items-center py-12 px-6 bg-[#fcedf0]">
      
      {/* Elegant Date Divider */}
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="flex items-center gap-4 mb-10 w-full max-w-xs md:max-w-sm justify-center"
      >
        <div className="h-[1px] flex-1 bg-outline-variant/60" />
        <span className="font-playfair text-gold-accent italic text-lg font-medium">2026</span>
        <div className="h-[1px] flex-1 bg-outline-variant/60" />
      </motion.div>

      {/* Direct Event Metadata */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-x-8 gap-y-3 justify-center items-center text-soft-ink-variant font-garamond text-base md:text-lg mb-12 text-center"
      >
        <span className="flex items-center gap-2">
          <Calendar size={18} className="text-primary-rose shrink-0" />
          <strong>Sunday, July 5, 2026</strong>
        </span>
        <span className="hidden sm:inline text-outline-variant">|</span>
        <span className="flex items-center gap-2">
          <MapPin size={18} className="text-primary-rose shrink-0" />
          <strong>Great Eastern Hotel - Aberdeen Court, Quezon City</strong>
        </span>
      </motion.div>

      {/* Countdown Box */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="w-full max-w-3xl mx-auto"
      >
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-outline-variant/40 p-6 md:p-8 shadow-[0_12px_40px_rgba(129,81,82,0.06)] flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-lg text-primary-rose italic font-medium">The Hour Approaches</h3>
            <p className="font-garamond text-sm text-soft-ink-variant mt-1">Countdown to the grand entry</p>
          </div>

          {/* Time units */}
          <div className="grid grid-cols-4 gap-3 md:gap-4 w-full md:w-auto">
            {[
              { val: timeLeft.days, unit: "Days" },
              { val: timeLeft.hours, unit: "Hours" },
              { val: timeLeft.minutes, unit: "Mins" },
              { val: timeLeft.seconds, unit: "Secs" },
            ].map((cell, idx) => (
              <div 
                key={idx}
                className="bg-primary-rose-light/10 border border-primary-rose-light/20 p-2 md:p-3 rounded-xl text-center flex flex-col justify-center min-w-[64px] sm:min-w-[76px]"
              >
                <div className="font-playfair text-xl md:text-2xl font-bold text-primary-rose">
                  {cell.val.toString().padStart(2, "0")}
                </div>
                <div className="font-garamond text-xs uppercase tracking-wider text-soft-ink-variant font-bold mt-1">
                  {cell.unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  );
}