import React from 'react';

export const MarqueeStrip: React.FC = () => {
  const items = [
    'WALL ART & CANVAS',
    'ELECTRICAL DISTRIBUTION',
    'RESIDENTIAL LIGHTING',
    'BLDC FANS & ACs',
    'DIRECT WALL PRINTING',
    'SWITCHES & SOCKETS',
    'GARDEN LIGHTING',
    'STOVES & HOBS',
    'WALLPAPER ART',
    'MCB CIRCUIT PROTECTION',
    'LED STRIP PROFILES',
    'KITCHEN CHIMNEYS',
    'BENGALURU STUDIO & SITE VISIT'
  ];

  return (
    <div className="border-t border-b border-[#161A26]/20 bg-[#161A26] text-[#EFEDE5] py-3.5 overflow-hidden select-none">
      <div className="flex animate-marquee font-mono-code text-xs sm:text-sm tracking-widest uppercase">
        {/* First Loop */}
        <div className="flex items-center space-x-8 shrink-0 pr-8">
          {items.map((item, idx) => (
            <React.Fragment key={`marquee-1-${idx}`}>
              <span className="hover:text-[#FF5A33] transition-colors">{item}</span>
              <span className="text-[#FF5A33] text-sm">•</span>
            </React.Fragment>
          ))}
        </div>

        {/* Second Duplicate Loop for Smooth Seamless Animation */}
        <div className="flex items-center space-x-8 shrink-0 pr-8" aria-hidden="true">
          {items.map((item, idx) => (
            <React.Fragment key={`marquee-2-${idx}`}>
              <span className="hover:text-[#FF5A33] transition-colors">{item}</span>
              <span className="text-[#FF5A33] text-sm">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
