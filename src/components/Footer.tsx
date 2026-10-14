import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-xl text-white tracking-wider">COSMIC</span>
          <span className="text-white/60 font-mono-code text-xs">/</span>
          <span className="font-display text-lg text-white tracking-wide">LIGHTINGS</span>
          <span className="text-white/70 font-sans text-xs tracking-widest uppercase ml-1">&amp; INTERIOR</span>
        </div>
        <div className="text-xs text-white/60 font-mono-code text-center sm:text-right">
          © 2026 Cosmic Lightings &amp; Interior — Architectural Lighting &amp; Interior Studio, Bengaluru. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
