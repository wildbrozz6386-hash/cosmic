import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowRight, Layers, Paintbrush, Zap, Lightbulb, Fan, CheckCircle2 } from 'lucide-react';
import { HERO_IMAGES } from '../data';

interface HeroSectionProps {
  onOpenBrief: (projectType?: string) => void;
  onSelectCategory: (categoryKey: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBrief, onSelectCategory }) => {
  const [popOpen, setPopOpen] = useState(false);
  const [activeSwatch, setActiveSwatch] = useState<'wall' | 'electrical' | 'lighting' | 'appliance'>('wall');
  const popRef = useRef<HTMLDivElement>(null);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popRef.current && !popRef.current.contains(event.target as Node)) {
        setPopOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 relative overflow-hidden bg-[#EFEDE5]" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          
          {/* Left Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow with leading rule line */}
            <div className="inline-flex items-center gap-3 font-mono-code text-xs uppercase tracking-widest text-[#FF5A33]" id="hero-eyebrow">
              <span className="w-8 h-px bg-[#FF5A33]"></span>
              <span>Wall Design · Electrical · Lighting · Appliances — Bengaluru</span>
            </div>

            {/* Main Editorial Display Heading */}
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-display uppercase tracking-tight text-[#161A26] leading-[0.92]" id="hero-title">
              We print<br />
              your walls.<br />
              <span className="text-[#1F8F82]">We power<br />your spaces.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#161A26]/70 leading-relaxed max-w-xl font-normal" id="hero-subtitle">
              From custom canvas murals &amp; wallpaper wall art to electrical distribution, smart touch switches, architectural LED lighting, and kitchen appliances. Four crafts under one studio in Bengaluru.
            </p>

            {/* Interactive Actions & Dropdown Index */}
            <div className="pt-4 flex flex-wrap items-center gap-4 relative">
              
              {/* Dropdown Services Index Button */}
              <div className="relative" ref={popRef}>
                <button
                  type="button"
                  onClick={() => setPopOpen(!popOpen)}
                  className="inline-flex items-center gap-2 bg-[#161A26] text-[#EFEDE5] hover:bg-[#FF5A33] px-6 py-4 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs border border-[#161A26]"
                  id="services-index-dropdown-btn"
                  aria-expanded={popOpen}
                >
                  <span>See Our Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${popOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Popover Menu with 4 Main Service Categories */}
                {popOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-[#EFEDE5] border border-[#161A26]/20 shadow-2xl z-40 divide-y divide-[#161A26]/10 rounded-xs overflow-hidden">
                    
                    {/* 01. Wall Design */}
                    <a
                      href="#service-group-wall"
                      onClick={() => {
                        setPopOpen(false);
                        onSelectCategory('wall-art');
                      }}
                      className="block p-4 hover:bg-[#FF5A33] hover:text-white transition-colors group"
                      id="pop-wall-design-link"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-lg uppercase group-hover:text-white">01. Wall Design</span>
                        <Paintbrush className="w-4 h-4 text-[#FF5A33] group-hover:text-white" />
                      </div>
                      <span className="block font-mono-code text-[10px] uppercase tracking-wider text-[#161A26]/60 group-hover:text-white/80 mt-1">
                        Wall Art · Wall Gallery · Printing · Wallpaper
                      </span>
                    </a>

                    {/* 02. Electrical */}
                    <a
                      href="#service-group-electrical"
                      onClick={() => {
                        setPopOpen(false);
                        onSelectCategory('elec-distribution');
                      }}
                      className="block p-4 hover:bg-[#F4B400] hover:text-[#161A26] transition-colors group"
                      id="pop-electrical-link"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-lg uppercase text-[#161A26]">02. Electrical</span>
                        <Zap className="w-4 h-4 text-[#F4B400] group-hover:text-[#161A26]" />
                      </div>
                      <span className="block font-mono-code text-[10px] uppercase tracking-wider text-[#161A26]/60 group-hover:text-[#161A26]/80 mt-1">
                        Electrical Distribution · Wiring · Switches &amp; Sockets
                      </span>
                    </a>

                    {/* 03. Lighting */}
                    <a
                      href="#service-group-lighting"
                      onClick={() => {
                        setPopOpen(false);
                        onSelectCategory('light-residential');
                      }}
                      className="block p-4 hover:bg-[#2563EB] hover:text-white transition-colors group"
                      id="pop-lighting-link"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-lg uppercase group-hover:text-white">03. Lighting</span>
                        <Lightbulb className="w-4 h-4 text-[#2563EB] group-hover:text-white" />
                      </div>
                      <span className="block font-mono-code text-[10px] uppercase tracking-wider text-[#161A26]/60 group-hover:text-white/80 mt-1">
                        Residential · Commercial · Garden · Strip Lights
                      </span>
                    </a>

                    {/* 04. Appliance */}
                    <a
                      href="#service-group-appliance"
                      onClick={() => {
                        setPopOpen(false);
                        onSelectCategory('app-fans');
                      }}
                      className="block p-4 hover:bg-[#10B981] hover:text-white transition-colors group"
                      id="pop-appliance-link"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-lg uppercase group-hover:text-white">04. Appliance</span>
                        <Fan className="w-4 h-4 text-[#10B981] group-hover:text-white" />
                      </div>
                      <span className="block font-mono-code text-[10px] uppercase tracking-wider text-[#161A26]/60 group-hover:text-white/80 mt-1">
                        Fans · Air Conditioners · Stoves &amp; Hobs · Chimneys
                      </span>
                    </a>

                  </div>
                )}
              </div>

              {/* Secondary Ghost Button */}
              <button
                type="button"
                onClick={() => onOpenBrief()}
                className="inline-flex items-center gap-2 bg-transparent text-[#161A26] hover:bg-[#161A26] hover:text-[#EFEDE5] px-6 py-4 text-xs font-semibold uppercase tracking-wider border border-[#161A26] transition-all rounded-xs"
                id="hero-get-quote-btn"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick trust badges */}
            <div className="pt-2 flex flex-wrap items-center gap-6 font-mono-code text-xs text-[#161A26]/70">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1F8F82]" />
                1:1 Design &amp; Electrical Review
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1F8F82]" />
                Certified Components
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1F8F82]" />
                Bengaluru Site Service
              </span>
            </div>

          </div>

          {/* Right Column: Four-Color Interactive Swatch Fan (Orange, Yellow, Blue, Green) */}
          <div className="lg:col-span-5">
            <div className="reg-mark tl tr bl br bg-[#E4E1D6] p-6 border border-[#161A26]/15 shadow-sm rounded-xs space-y-4">
              
              <div className="flex items-center justify-between border-b border-[#161A26]/10 pb-3">
                <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#161A26]/70 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#FF5A33]" />
                  <span>Material Index — 4 Color Craft Fan</span>
                </span>
                <span className="font-mono-code text-[10px] text-[#161A26]/50">Tap or Hover</span>
              </div>

              {/* Swatch Fan 4-Color Grid */}
              <div className="grid grid-cols-2 gap-2.5 h-80 sm:h-96" id="swatch-fan-container">
                
                {/* 1. Orange Swatch: Wall Design */}
                <div
                  onMouseEnter={() => setActiveSwatch('wall')}
                  onClick={() => {
                    setActiveSwatch('wall');
                    onSelectCategory('wall-art');
                  }}
                  className={`relative p-4 cursor-pointer rounded-xs transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                    activeSwatch === 'wall'
                      ? 'bg-[#FF5A33] text-white shadow-lg ring-2 ring-[#FF5A33]'
                      : 'bg-[#FF5A33]/85 text-white/90 hover:bg-[#FF5A33]'
                  }`}
                  id="swatch-fan-wall"
                >
                  <div className="z-10">
                    <span className="font-mono-code text-[9px] uppercase tracking-widest text-white/80 block">
                      ORANGE INDEX
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl uppercase leading-tight mt-0.5">
                      Wall Design
                    </h3>
                  </div>

                  <div className="z-10 font-mono-code text-[9px] uppercase tracking-wider space-y-0.5 pt-2 border-t border-white/20">
                    <div className="truncate">• Canvas Prints</div>
                    <div className="truncate">• Wall Gallery</div>
                    <div className="truncate">• Direct UV Ink</div>
                    <div className="truncate">• Wallpaper</div>
                  </div>

                  <img
                    src={HERO_IMAGES.wallArt}
                    alt="Wall Art Preview"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* 2. Yellow Swatch: Electrical */}
                <div
                  onMouseEnter={() => setActiveSwatch('electrical')}
                  onClick={() => {
                    setActiveSwatch('electrical');
                    onSelectCategory('wiring-materials');
                  }}
                  className={`relative p-4 cursor-pointer rounded-xs transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                    activeSwatch === 'electrical'
                      ? 'bg-[#F4B400] text-[#161A26] shadow-lg ring-2 ring-[#F4B400]'
                      : 'bg-[#F4B400]/85 text-[#161A26]/90 hover:bg-[#F4B400]'
                  }`}
                  id="swatch-fan-electrical"
                >
                  <div className="z-10">
                    <span className="font-mono-code text-[9px] uppercase tracking-widest text-[#161A26]/70 block">
                      YELLOW INDEX
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl uppercase leading-tight text-[#161A26] mt-0.5">
                      Electrical
                    </h3>
                  </div>

                  <div className="z-10 font-mono-code text-[9px] uppercase tracking-wider space-y-0.5 pt-2 border-t border-[#161A26]/20 text-[#161A26]/80">
                    <div className="truncate">• Distribution DB</div>
                    <div className="truncate">• Wiring Copper</div>
                    <div className="truncate">• Touch Switches</div>
                    <div className="truncate">• MCBs &amp; RCCB</div>
                  </div>

                  <img
                    src={HERO_IMAGES.electrical}
                    alt="Electrical Preview"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* 3. Blue Swatch: Lighting */}
                <div
                  onMouseEnter={() => setActiveSwatch('lighting')}
                  onClick={() => {
                    setActiveSwatch('lighting');
                    onSelectCategory('light-residential');
                  }}
                  className={`relative p-4 cursor-pointer rounded-xs transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                    activeSwatch === 'lighting'
                      ? 'bg-[#2563EB] text-white shadow-lg ring-2 ring-[#2563EB]'
                      : 'bg-[#2563EB]/85 text-white/90 hover:bg-[#2563EB]'
                  }`}
                  id="swatch-fan-lighting"
                >
                  <div className="z-10">
                    <span className="font-mono-code text-[9px] uppercase tracking-widest text-white/80 block">
                      BLUE INDEX
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl uppercase leading-tight text-white mt-0.5">
                      Lighting
                    </h3>
                  </div>

                  <div className="z-10 font-mono-code text-[9px] uppercase tracking-wider space-y-0.5 pt-2 border-t border-white/20 text-white/90">
                    <div className="truncate">• Residential</div>
                    <div className="truncate">• Commercial</div>
                    <div className="truncate">• Garden Lights</div>
                    <div className="truncate">• LED Strip Profiles</div>
                  </div>

                  <img
                    src={HERO_IMAGES.lighting}
                    alt="Lighting Preview"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* 4. Green Swatch: Appliance */}
                <div
                  onMouseEnter={() => setActiveSwatch('appliance')}
                  onClick={() => {
                    setActiveSwatch('appliance');
                    onSelectCategory('app-fans');
                  }}
                  className={`relative p-4 cursor-pointer rounded-xs transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                    activeSwatch === 'appliance'
                      ? 'bg-[#10B981] text-white shadow-lg ring-2 ring-[#10B981]'
                      : 'bg-[#10B981]/85 text-white/90 hover:bg-[#10B981]'
                  }`}
                  id="swatch-fan-appliance"
                >
                  <div className="z-10">
                    <span className="font-mono-code text-[9px] uppercase tracking-widest text-white/80 block">
                      GREEN INDEX
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl uppercase leading-tight text-white mt-0.5">
                      Appliance
                    </h3>
                  </div>

                  <div className="z-10 font-mono-code text-[9px] uppercase tracking-wider space-y-0.5 pt-2 border-t border-white/20 text-white/90">
                    <div className="truncate">• BLDC Fans</div>
                    <div className="truncate">• Inverter ACs</div>
                    <div className="truncate">• Stoves &amp; Hobs</div>
                    <div className="truncate">• Chimneys</div>
                  </div>

                  <img
                    src={HERO_IMAGES.appliance}
                    alt="Appliance Preview"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>

              <div className="text-center font-mono-code text-[11px] text-[#161A26]/60 pt-1">
                Studio in Bengaluru · Material Swatches &amp; On-Site Delivery
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
