import React from 'react';

export const MarqueeStrip: React.FC = () => {
  const items = [
    'RESIDENTIAL LIGHTS: CHANDELIERS · FLUSH MOUNTS · PENDANTS · DOWNLIGHTS · COVE',
    'COMMERCIAL LIGHTS: LED TROFFERS · LINEAR SUSPENDED · HIGH BAYS · FLAT PANELS',
    'OUTDOOR LIGHTS: FLOODLIGHTS · SPOTLIGHTS · BOLLARDS · WALL LANTERNS · STEP LIGHTS',
    'HIGH CRI >95 NATURAL COLOR RENDERING',
    '3 DEDICATED LIGHTING DIVISIONS',
    'BENGALURU LIGHTING CONSULTATIONS & SITE VISITS'
  ];

  return (
    <div className="border-t border-b border-white/20 bg-black text-white py-4 overflow-hidden select-none">
      <div className="flex animate-marquee font-mono-code text-xs sm:text-sm tracking-widest uppercase text-white">
        {/* First Loop */}
        <div className="flex items-center space-x-8 shrink-0 pr-8">
          {items.map((item, idx) => (
            <React.Fragment key={`marquee-1-${idx}`}>
              <span className="text-white hover:text-neutral-300 transition-colors">{item}</span>
              <span className="text-white/40 text-sm">•</span>
            </React.Fragment>
          ))}
        </div>

        {/* Second Duplicate Loop for Smooth Seamless Animation */}
        <div className="flex items-center space-x-8 shrink-0 pr-8" aria-hidden="true">
          {items.map((item, idx) => (
            <React.Fragment key={`marquee-2-${idx}`}>
              <span className="text-white hover:text-neutral-300 transition-colors">{item}</span>
              <span className="text-white/40 text-sm">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
