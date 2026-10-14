import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowRight, Lightbulb, CheckCircle2, Sliders, ExternalLink } from 'lucide-react';
import { HERO_IMAGES, RESIDENTIAL_FIXTURES, COMMERCIAL_FIXTURES, OUTDOOR_FIXTURES } from '../data';
import { CategoryKey } from '../types';

interface HeroSectionProps {
  onOpenBrief: (projectType?: string, fixtureName?: string) => void;
  onSelectCategory: (categoryKey: CategoryKey) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBrief, onSelectCategory }) => {
  const [popOpen, setPopOpen] = useState(false);
  const [activeDivision, setActiveDivision] = useState<'residential' | 'commercial' | 'outdoor'>('residential');
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
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 relative overflow-hidden bg-black text-white" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow with leading rule line */}
            <div className="inline-flex items-center gap-3 font-mono-code text-xs uppercase tracking-widest text-white" id="hero-eyebrow">
              <span className="w-8 h-px bg-white"></span>
              <span>Architectural · Residential · Commercial · Outdoor — Bengaluru</span>
            </div>

            {/* Main Editorial Display Heading with Image Background at 80% Opacity */}
            <div className="relative rounded-xs overflow-hidden border border-white/20 p-6 sm:p-8 md:p-10 bg-black shadow-2xl group" id="hero-heading-banner">
              {/* Background image set to 80% opacity */}
              <img
                src={HERO_IMAGES.headingBg}
                alt="Architectural lighting studio"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none transition-transform duration-700 group-hover:scale-105"
                style={{ opacity: 0.8 }}
              />
              {/* Architectural dark gradient overlay ensuring pristine contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/60 pointer-events-none" />

              <h1 className="relative z-10 text-5xl sm:text-7xl xl:text-8xl font-display uppercase tracking-tight text-white leading-[0.92] drop-shadow-md" id="hero-title">
                We illuminate<br />
                your spaces.<br />
                <span className="text-neutral-200">Architectural<br />lighting studio.</span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl font-normal" id="hero-subtitle">
              High CRI (&gt;95) architectural downlights, statement chandeliers, continuous linear office suspended profiles, and IP68 landscape fixtures. Tailored lighting design, lux calculations, and supply in Bengaluru.
            </p>

            {/* Interactive Actions & Dropdown Index */}
            <div className="pt-4 flex flex-wrap items-center gap-4 relative">
              
              {/* Dropdown Services Index Button */}
              <div className="relative" ref={popRef}>
                <button
                  type="button"
                  onClick={() => setPopOpen(!popOpen)}
                  className="inline-flex items-center gap-2 bg-white text-black hover:bg-neutral-200 px-6 py-4 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs border border-white"
                  id="services-index-dropdown-btn"
                  aria-expanded={popOpen}
                >
                  <span>Explore 3 Lighting Divisions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${popOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Popover Menu with the 3 Lighting Categories */}
                {popOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-black border border-white/30 shadow-2xl z-40 divide-y divide-white/15 rounded-xs overflow-hidden">
                    
                    {/* 01. Residential */}
                    <button
                      type="button"
                      onClick={() => {
                        setPopOpen(false);
                        onSelectCategory('light-residential');
                      }}
                      className="w-full text-left p-4 hover:bg-white hover:text-black transition-colors group"
                      id="pop-residential-link"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-lg uppercase text-white group-hover:text-black">01. Residential Lights</span>
                        <Lightbulb className="w-4 h-4 text-white group-hover:text-black" />
                      </div>
                      <span className="block font-mono-code text-[10px] uppercase tracking-wider text-white/70 group-hover:text-black mt-1">
                        12 Types: Chandeliers, Downlights, Pendants, Sconces
                      </span>
                    </button>

                    {/* 02. Commercial */}
                    <button
                      type="button"
                      onClick={() => {
                        setPopOpen(false);
                        onSelectCategory('light-commercial');
                      }}
                      className="w-full text-left p-4 hover:bg-white hover:text-black transition-colors group"
                      id="pop-commercial-link"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-lg uppercase text-white group-hover:text-black">02. Commercial Lights</span>
                        <Lightbulb className="w-4 h-4 text-white group-hover:text-black" />
                      </div>
                      <span className="block font-mono-code text-[10px] uppercase tracking-wider text-white/70 group-hover:text-black mt-1">
                        10 Types: LED Troffers, Linear Suspended, High Bay
                      </span>
                    </button>

                    {/* 03. Outdoor */}
                    <button
                      type="button"
                      onClick={() => {
                        setPopOpen(false);
                        onSelectCategory('light-outdoor');
                      }}
                      className="w-full text-left p-4 hover:bg-white hover:text-black transition-colors group"
                      id="pop-outdoor-link"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-lg uppercase text-white group-hover:text-black">03. Outdoor Lights</span>
                        <Lightbulb className="w-4 h-4 text-white group-hover:text-black" />
                      </div>
                      <span className="block font-mono-code text-[10px] uppercase tracking-wider text-white/70 group-hover:text-black mt-1">
                        12 Types: Floodlights, Bollards, Step Lights, Spotlights
                      </span>
                    </button>

                  </div>
                )}
              </div>

              {/* Secondary Ghost Button */}
              <button
                type="button"
                onClick={() => onOpenBrief('Residential Lights')}
                className="inline-flex items-center gap-2 bg-transparent text-white hover:bg-white hover:text-black px-6 py-4 text-xs font-semibold uppercase tracking-wider border border-white transition-all rounded-xs"
                id="hero-get-quote-btn"
              >
                <span>Request Lighting Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick trust badges */}
            <div className="pt-2 flex flex-wrap items-center gap-6 font-mono-code text-xs text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                High CRI &gt; 95 Light Quality
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                Dialux Lux Simulation
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                Bengaluru On-Site Service
              </span>
            </div>

          </div>

          {/* Right Column: Lighting Architecture Portfolio (3 Divisions) */}
          <div className="lg:col-span-5">
            <div className="reg-mark tl tr bl br bg-[#0A0A0A] p-5 sm:p-6 border border-white/20 shadow-2xl rounded-xs space-y-4">
              
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="font-mono-code text-[11px] uppercase tracking-wider text-white flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-white" />
                  <span>Lighting Architecture Portfolio</span>
                </span>
                <span className="font-mono-code text-[10px] text-white/70 border border-white/30 px-2 py-0.5 rounded-xs">
                  Click Box to View All Fixtures
                </span>
              </div>

              {/* 3 Divisions Interactive Stack */}
              <div className="space-y-3" id="lighting-portfolio-divisions">
                
                {/* 1. Residential Lights Box */}
                <div
                  onClick={() => onSelectCategory('light-residential')}
                  onMouseEnter={() => setActiveDivision('residential')}
                  className={`relative p-4 cursor-pointer rounded-xs transition-all duration-300 border flex flex-col justify-between overflow-hidden group ${
                    activeDivision === 'residential'
                      ? 'border-white bg-[#141414] ring-1 ring-white'
                      : 'border-white/20 bg-black/70 hover:border-white'
                  }`}
                  id="portfolio-box-residential"
                >
                  <div className="relative z-10 flex items-start justify-between gap-2">
                    <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-white group-hover:text-neutral-200">
                      Residential Lights
                    </h3>
                    <span className="font-mono-code text-xs text-white group-hover:text-white flex items-center gap-1 shrink-0 bg-white/10 px-2.5 py-1 rounded-xs border border-white/20">
                      <span>View All</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Complete Fixture List with Bullets */}
                  <div className="relative z-10 mt-3 pt-2.5 border-t border-white/20 grid grid-cols-2 gap-x-2 gap-y-1 font-mono-code text-xs text-white">
                    {RESIDENTIAL_FIXTURES.map((fixture, idx) => (
                      <div key={idx} className="truncate">
                        • {fixture}
                      </div>
                    ))}
                  </div>

                  {/* Background Photo */}
                  <img
                    src={HERO_IMAGES.residential}
                    alt="Residential Lights"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  />
                </div>

                {/* 2. Commercial Lights Box */}
                <div
                  onClick={() => onSelectCategory('light-commercial')}
                  onMouseEnter={() => setActiveDivision('commercial')}
                  className={`relative p-4 cursor-pointer rounded-xs transition-all duration-300 border flex flex-col justify-between overflow-hidden group ${
                    activeDivision === 'commercial'
                      ? 'border-white bg-[#141414] ring-1 ring-white'
                      : 'border-white/20 bg-black/70 hover:border-white'
                  }`}
                  id="portfolio-box-commercial"
                >
                  <div className="relative z-10 flex items-start justify-between gap-2">
                    <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-white group-hover:text-neutral-200">
                      Commercial Lights
                    </h3>
                    <span className="font-mono-code text-xs text-white group-hover:text-white flex items-center gap-1 shrink-0 bg-white/10 px-2.5 py-1 rounded-xs border border-white/20">
                      <span>View All</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Complete Fixture List with Bullets */}
                  <div className="relative z-10 mt-3 pt-2.5 border-t border-white/20 grid grid-cols-2 gap-x-2 gap-y-1 font-mono-code text-xs text-white">
                    {COMMERCIAL_FIXTURES.map((fixture, idx) => (
                      <div key={idx} className="truncate">
                        • {fixture}
                      </div>
                    ))}
                  </div>

                  <img
                    src={HERO_IMAGES.commercial}
                    alt="Commercial Lights"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  />
                </div>

                {/* 3. Outdoor Lights Box */}
                <div
                  onClick={() => onSelectCategory('light-outdoor')}
                  onMouseEnter={() => setActiveDivision('outdoor')}
                  className={`relative p-4 cursor-pointer rounded-xs transition-all duration-300 border flex flex-col justify-between overflow-hidden group ${
                    activeDivision === 'outdoor'
                      ? 'border-white bg-[#141414] ring-1 ring-white'
                      : 'border-white/20 bg-black/70 hover:border-white'
                  }`}
                  id="portfolio-box-outdoor"
                >
                  <div className="relative z-10 flex items-start justify-between gap-2">
                    <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-white group-hover:text-neutral-200">
                      Outdoor Lights
                    </h3>
                    <span className="font-mono-code text-xs text-white group-hover:text-white flex items-center gap-1 shrink-0 bg-white/10 px-2.5 py-1 rounded-xs border border-white/20">
                      <span>View All</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Complete Fixture List with Bullets */}
                  <div className="relative z-10 mt-3 pt-2.5 border-t border-white/20 grid grid-cols-2 gap-x-2 gap-y-1 font-mono-code text-xs text-white">
                    {OUTDOOR_FIXTURES.map((fixture, idx) => (
                      <div key={idx} className="truncate">
                        • {fixture}
                      </div>
                    ))}
                  </div>

                  <img
                    src={HERO_IMAGES.outdoor}
                    alt="Outdoor Lights"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  />
                </div>

              </div>

              <div className="text-center font-mono-code text-[11px] text-white/60 pt-1">
                Click any division box above to view all fixtures
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
