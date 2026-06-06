/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Menu, X, Landmark, Compass, Flame, Stars, FileText } from "lucide-react";

interface HeaderProps {
  onRSVPClick: () => void;
}

export default function Header({ onRSVPClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Invitation", href: "#hero", icon: Compass },
    { name: "Venue & Program", href: "#venue", icon: Landmark },
    { name: "Traditions", href: "#symbols", icon: Stars },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-cream-bg/90 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_4px_24px_rgba(129,81,82,0.06)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Elegant Serif Logo */}
        <div className="flex flex-col">
          <a href="#hero" className="font-gallery-script text-2xl md:text-2xl text-primary-rose italic font-medium tracking-wide hover:opacity-90 transition-opacity">
            Trisha Jia
          </a>
          <span className="font-garamond text-[10px] sm:text-xs text-gold-accent tracking-[0.18em] uppercase font-bold">
            A Spectacular Night of Grace and New Beginnings
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-garamond text-base uppercase tracking-wider text-soft-ink-variant hover:text-primary-rose border-b border-transparent hover:border-primary-rose-light/70 py-1 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onRSVPClick}
            id="rsvp-nav-btn"
            className="relative overflow-hidden bg-primary-rose text-white font-garamond text-sm uppercase tracking-[0.15em] font-semibold px-7 py-3 rounded-full hover:bg-primary-rose-light hover:text-primary-rose shadow-md hover:shadow-lg hover:shadow-primary-rose/20 active:scale-95 transition-all duration-300 group cursor-pointer"
          >
            <span className="relative z-10">Confirm RSVP</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gold-light/15 ease-out transition-transform duration-500" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-primary-rose hover:bg-cream-low rounded-full transition-colors cursor-pointer"
          aria-label="Toggle menu"
          id="menu-toggle-btn"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-cream-bg border-b border-outline-variant/40 shadow-xl flex flex-col p-6 gap-4 z-40 animate-fade-in">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 font-garamond text-lg uppercase tracking-wider text-soft-ink py-2 px-3 hover:bg-cream-low rounded-lg transition-colors"
              >
                <IconComponent size={18} className="text-primary-rose" />
                <span>{link.name}</span>
              </a>
            );
          })}
          <hr className="border-outline-variant/35 my-2" />
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onRSVPClick();
            }}
            id="rsvp-mobile-btn"
            className="w-full bg-primary-rose text-white font-garamond text-base uppercase tracking-[0.1em] font-semibold py-3 rounded-full shadow-md hover:bg-primary-rose-light active:scale-95 transition-all text-center cursor-pointer"
          >
            Confirm RSVP
          </button>
        </div>
      )}
    </header>
  );
}
