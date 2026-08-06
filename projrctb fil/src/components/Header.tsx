import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenBrief: (projectType?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBrief }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#EFEDE5]/90 backdrop-blur-md border-b border-[#161A26]/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-baseline gap-1.5 group" id="brand-logo-link">
          <span className="font-display text-xl sm:text-2xl text-[#161A26] tracking-tight group-hover:text-[#FF5A33] transition-colors">
            COSMIC
          </span>
          <span className="text-[#F4B400] font-display text-xl sm:text-2xl">+</span>
          <span className="font-display text-xl sm:text-2xl text-[#161A26] tracking-tight group-hover:text-[#FF5A33] transition-colors">
            ELECTRICALS &amp; LIGHTINGS
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest text-[#161A26]/80">
          <a href="#services" className="hover:text-[#FF5A33] transition-colors py-2" id="nav-link-services">
            Services
          </a>
        </nav>

        {/* Actions & WhatsApp CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenBrief()}
            className="hidden lg:inline-flex items-center px-4 py-2.5 text-xs font-semibold tracking-wider uppercase border border-[#161A26] text-[#161A26] hover:bg-[#161A26] hover:text-[#EFEDE5] transition-all rounded-xs"
            id="header-quote-btn"
          >
            Get a Quote
          </button>

          <a
            href="https://wa.me/918686112544?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20print%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#161A26] text-[#EFEDE5] hover:bg-[#FF5A33] hover:border-[#FF5A33] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border border-[#161A26] transition-all rounded-xs shadow-xs"
            id="header-whatsapp-btn"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://wa.me/918686112544?text=Hi%2C%20I%27d%20like%20a%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#25D366] text-white rounded-xs"
            aria-label="WhatsApp"
            id="mobile-header-wa-link"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-[#161A26]/30 text-[#161A26] hover:bg-[#161A26]/5 rounded-xs"
            aria-label="Toggle menu"
            id="mobile-hamburger-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#EFEDE5] border-b border-[#161A26]/20 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 font-mono-code text-xs uppercase tracking-wider text-[#161A26]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#161A26]/10 flex justify-between items-center"
              id="mobile-nav-services"
            >
              <span>01. Services</span>
              <span className="text-[#FF5A33]">→</span>
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrief();
              }}
              className="w-full py-3 bg-[#161A26] text-[#EFEDE5] text-xs font-semibold uppercase tracking-wider rounded-xs text-center"
              id="mobile-brief-btn"
            >
              Build Project Brief
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
