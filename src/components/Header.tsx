import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenBrief: (projectType?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBrief }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/15 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Cosmic Lightings and Interior */}
        <a href="#" className="flex items-baseline gap-2 group" id="brand-logo-link">
          <span className="font-display text-2xl sm:text-3xl text-white tracking-wider group-hover:opacity-80 transition-opacity">
            COSMIC
          </span>
          <span className="text-white/60 font-mono-code text-sm">/</span>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
            <span className="font-display text-xl sm:text-2xl text-white tracking-wide group-hover:opacity-80 transition-opacity">
              LIGHTINGS
            </span>
            <span className="text-white/70 font-sans text-xs sm:text-sm font-light tracking-widest uppercase">
              &amp; INTERIOR
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest text-white/90">
          <a href="#services" className="hover:text-white transition-colors py-2 border-b-2 border-transparent hover:border-white" id="nav-link-services">
            Lighting Solutions
          </a>
          <a href="#contact" className="hover:text-white transition-colors py-2 border-b-2 border-transparent hover:border-white" id="nav-link-contact">
            Get In Touch
          </a>
        </nav>

        {/* Actions & WhatsApp CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenBrief('Residential Lights')}
            className="hidden lg:inline-flex items-center px-5 py-2.5 text-xs font-semibold tracking-wider uppercase border border-white text-white hover:bg-white hover:text-black transition-all rounded-xs"
            id="header-quote-btn"
          >
            Request Quote
          </button>
          <a
            href="https://wa.me/918686112544?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20Cosmic%20Lightings%20and%20Interior"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black hover:bg-neutral-200 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border border-white transition-all rounded-xs shadow-xs"
            id="header-whatsapp-btn"
          >
            <MessageCircle className="w-4 h-4 text-black group-hover:scale-110" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://wa.me/918686112544?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20Cosmic%20Lightings%20and%20Interior"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white text-black rounded-xs"
            aria-label="WhatsApp"
            id="mobile-header-wa-link"
          >
            <MessageCircle className="w-5 h-5 text-black" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-white/40 text-white hover:bg-white/10 rounded-xs"
            aria-label="Toggle menu"
            id="mobile-hamburger-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-white/20 px-6 py-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3 font-mono-code text-xs uppercase tracking-wider text-white">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 border-b border-white/15 flex justify-between items-center text-white"
              id="mobile-nav-services"
            >
              <span>01. Lighting Solutions</span>
              <span className="text-white">→</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 border-b border-white/15 flex justify-between items-center text-white"
              id="mobile-nav-contact"
            >
              <span>02. Get In Touch</span>
              <span className="text-white">→</span>
            </a>
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrief('Residential Lights');
              }}
              className="w-full py-3 bg-white text-black text-xs font-semibold uppercase tracking-wider rounded-xs text-center hover:bg-neutral-200 transition-colors"
              id="mobile-brief-btn"
            >
              Build Lighting Brief
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
