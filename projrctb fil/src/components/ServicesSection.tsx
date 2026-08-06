import React from 'react';
import { ArrowUpRight, Image as ImageIcon, Paintbrush, Zap, Lightbulb, Fan } from 'lucide-react';
import { CategoryKey } from '../types';

interface ServicesSectionProps {
  onSelectCategory: (categoryKey: CategoryKey) => void;
  onOpenBrief: (projectType?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectCategory, onOpenBrief }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#EFEDE5]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#161A26]/20 pb-8 mb-16 gap-6">
          <div>
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#161A26]/60 block mb-2" id="services-num">
              01 — WHAT WE PROVIDE
            </span>
            <h2 className="text-4xl sm:text-6xl font-display uppercase tracking-tight text-[#161A26] leading-none" id="services-title">
              Four Craft<br />Specialties
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#161A26]/70 max-w-md leading-relaxed" id="services-desc">
            Explore our four core verticals — Wall Design, Electrical, Lighting, and Appliances. Click any sub-item to view material specs, installation samples &amp; photo references.
          </p>
        </div>

        {/* Services Grid: 4 Cards (Wall Design, Electrical, Lighting, Appliance) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" id="services-cards-grid">
          
          {/* Card 1: Wall Design */}
          <div
            className="reg-mark tl tr bl br bg-[#EFEDE5] border border-[#161A26]/20 p-8 lg:p-10 flex flex-col justify-between hover:border-[#FF5A33] transition-colors shadow-sm rounded-xs group"
            id="service-group-wall"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono-code text-[11px] uppercase tracking-widest text-[#FF5A33] border border-[#FF5A33] px-3 py-1 rounded-xs flex items-center gap-1.5">
                  <Paintbrush className="w-3.5 h-3.5" />
                  <span>Orange Category</span>
                </span>
                <span className="font-mono-code text-xs text-[#161A26]/40">CRAFT_01</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl uppercase text-[#161A26] mb-3 group-hover:text-[#FF5A33] transition-colors">
                Wall Design
              </h3>
              
              <p className="text-sm text-[#161A26]/70 leading-relaxed mb-6">
                Turn a blank wall into a room’s centerpiece — canvas prints, photo gallery grids, direct UV wall murals, and textured wallpapers.
              </p>

              {/* Service Sub-items */}
              <div className="border-t border-[#161A26]/15 divide-y divide-[#161A26]/10 mb-8 font-medium text-sm text-[#161A26]">
                
                <button
                  type="button"
                  onClick={() => onSelectCategory('wall-art')}
                  className="w-full py-3.5 flex items-center justify-between hover:px-2 hover:text-[#FF5A33] transition-all text-left group/item"
                  id="service-item-wall-art"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-[#FF5A33] opacity-0 group-hover/item:opacity-100 transition-opacity">01.</span>
                    <span>Wall Art (Canvas Prints &amp; Frames)</span>
                  </span>
                  <span className="font-mono-code text-xs text-[#161A26]/40 group-hover/item:text-[#FF5A33] transition-colors">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCategory('wall-gallery')}
                  className="w-full py-3.5 flex items-center justify-between hover:px-2 hover:text-[#FF5A33] transition-all text-left group/item"
                  id="service-item-wall-gallery"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-[#FF5A33] opacity-0 group-hover/item:opacity-100 transition-opacity">02.</span>
                    <span>Wall Gallery Layouts</span>
                  </span>
                  <span className="font-mono-code text-xs text-[#161A26]/40 group-hover/item:text-[#FF5A33] transition-colors">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCategory('wall-printing')}
                  className="w-full py-3.5 flex items-center justify-between hover:px-2 hover:text-[#FF5A33] transition-all text-left group/item"
                  id="service-item-wall-printing"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-[#FF5A33] opacity-0 group-hover/item:opacity-100 transition-opacity">03.</span>
                    <span>Direct Wall Printing</span>
                  </span>
                  <span className="font-mono-code text-xs text-[#161A26]/40 group-hover/item:text-[#FF5A33] transition-colors">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCategory('wallpaper')}
                  className="w-full py-3.5 flex items-center justify-between hover:px-2 hover:text-[#FF5A33] transition-all text-left group/item"
                  id="service-item-wallpaper"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-[#FF5A33] opacity-0 group-hover/item:opacity-100 transition-opacity">04.</span>
                    <span>Wallpaper Wall Art</span>
                  </span>
                  <span className="font-mono-code text-xs text-[#161A26]/40 group-hover/item:text-[#FF5A33] transition-colors">
                    →
                  </span>
                </button>

              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenBrief('Wall Art')}
              className="w-full inline-flex items-center justify-between bg-[#161A26] text-[#EFEDE5] hover:bg-[#FF5A33] p-4 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs"
              id="wall-brief-cta"
            >
              <span>Build Wall Design Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Electrical */}
          <div
            className="reg-mark tl tr bl br bg-[#EFEDE5] border border-[#161A26]/20 p-8 lg:p-10 flex flex-col justify-between hover:border-[#F4B400] transition-colors shadow-sm rounded-xs group"
            id="service-group-electrical"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <button
                  type="button"
                  onClick={() => onSelectCategory('wiring-materials')}
                  className="font-mono-code text-[11px] uppercase tracking-widest text-[#161A26] bg-[#F4B400] hover:bg-[#e0a500] transition-colors px-3 py-1 rounded-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
                  title="Click to view Yellow Index Electrical Photos"
                  id="electrical-yellow-badge-btn"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Yellow Category</span>
                </button>
                <span className="font-mono-code text-xs text-[#161A26]/40">CRAFT_02</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl uppercase text-[#161A26] mb-3 group-hover:text-[#F4B400] transition-colors">
                Electrical
              </h3>

              <p className="text-sm text-[#161A26]/70 leading-relaxed mb-6">
                Safe, certified electrical distribution boards, copper wiring materials, modular touch glass switches, sockets, and MCB protection.
              </p>

              {/* Service Sub-items */}
              <div className="border-t border-[#161A26]/15 divide-y divide-[#161A26]/10 mb-8 font-medium text-sm text-[#161A26]">
                
                <button
                  type="button"
                  onClick={() => onSelectCategory('elec-distribution')}
                  className="w-full py-3.5 flex items-center justify-between hover:px-2 hover:text-[#F4B400] transition-all text-left group/item"
                  id="service-item-elec-dist"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-[#F4B400] opacity-0 group-hover/item:opacity-100 transition-opacity">01.</span>
                    <span>Electrical Distribution</span>
                  </span>
                  <span className="font-mono-code text-xs text-[#161A26]/40 group-hover/item:text-[#161A26] transition-colors">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCategory('wiring-materials')}
                  className="w-full py-3.5 flex items-center justify-between hover:px-2 hover:text-[#F4B400] transition-all text-left group/item"
                  id="service-item-wiring-mat"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-[#F4B400] opacity-0 group-hover/item:opacity-100 transition-opacity">02.</span>
                    <span>Wiring Materials</span>
                  </span>
                  <span className="font-mono-code text-xs text-[#161A26]/40 group-hover/item:text-[#161A26] transition-colors">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCategory('switches-sockets')}
                  className="w-full py-3.5 flex items-center justify-between hover:px-2 hover:text-[#F4B400] transition-all text-left group/item"
                  id="service-item-switches"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-[#F4B400] opacity-0 group-hover/item:opacity-100 transition-opacity">03.</span>
                    <span>Switches &amp; Sockets</span>
                  </span>
                  <span className="font-mono-code text-xs text-[#161A26]/40 group-hover/item:text-[#161A26] transition-colors">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCategory('circuit-protection')}
                  className="w-full py-3.5 flex items-center justify-between hover:px-2 hover:text-[#F4B400] transition-all text-left group/item"
                  id="service-item-protection"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-[#F4B400] opacity-0 group-hover/item:opacity-100 transition-opacity">04.</span>
                    <span>Circuit Protection &amp; MCBs</span>
                  </span>
                  <span className="font-mono-code text-xs text-[#161A26]/40 group-hover/item:text-[#161A26] transition-colors">
                    →
                  </span>
                </button>

              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenBrief('Electrical Distribution')}
              className="w-full inline-flex items-center justify-between bg-[#161A26] text-[#EFEDE5] hover:bg-[#F4B400] hover:text-[#161A26] p-4 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs"
              id="electrical-brief-cta"
            >
              <span>Build Electrical Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Lighting */}
          <div
            className="reg-mark tl tr bl br bg-[#EFEDE5] border border-[#161A26]/20 p-8 lg:p-10 flex flex-col justify-between hover:border-[#2563EB] transition-colors shadow-sm rounded-xs group"
            id="service-group-lighting"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono-code text-[11px] uppercase tracking-widest text-white bg-[#2563EB] px-3 py-1 rounded-xs flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Blue Category</span>
                </span>
                <span className="font-mono-code text-xs text-[#161A26]/40">CRAFT_03</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl uppercase text-[#161A26] mb-3 group-hover:text-[#2563EB] transition-colors">
                Lighting
              </h3>

              <p className="text-sm text-[#161A26]/70 leading-relaxed mb-6">
                Illumination solutions for luxury homes &amp; offices — residential downlights, commercial profiles, IP67 garden lights, and dotless COB LED strip channels.
              </p>

              {/* Service Sub-items */}
              <div className="border-t border-[#161A26]/15 divide-y divide-[#161A26]/10 mb-8 font-medium text-sm text-[#161A26]">
                
                <button
                  type="button"
                  onClick={() => onSelectCategory('light-residential')}
                  className="w-full py-3.5 flex items-center justify-between hover:px-2 hover:text-[#2563EB] transition-all text-left group/item"
                  id="service-item-light-res"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-[#2563EB] opacity-0 group-hover/item:opacity-100 transition-opacity">01.</span>
                    <span>Residential Lighting</span>
                  </span>
                  <span className="font-mono-code text-xs text-[#161A26]/40 group-hover/item:text-[#2563EB] transition-colors">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCategory('light-commercial')}
                  className="w-full py-3.5 flex items-center justify-between hover:px-2 hover:text-[#2563EB] transition-all text-left group/item"
                  id="service-item-light-comm"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-[#2563EB] opacity-0 group-hover/item:opacity-100 transition-opacity">02.</span>
                    <span>Commercial Lighting</span>
                  </span>
                  <span className="font-mono-code text-xs text-[#161A26]/40 group-hover/item:text-[#2563EB] transition-colors">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCategory('light-garden')}
                  className="w-full py-3.5 flex items-center justify-between hover:px-2 hover:text-[#2563EB] transition-all text-left group/item"
                  id="service-item-light-garden"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-[#2563EB] opacity-0 group-hover/item:opacity-100 transition-opacity">03.</span>
                    <span>Garden &amp; Landscape Lighting</span>
                  </span>
                  <span className="font-mono-code text-xs text-[#161A26]/40 group-hover/item:text-[#2563EB] transition-colors">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCategory('light-strip')}
                  className="w-full py-3.5 flex items-center justify-between hover:px-2 hover:text-[#2563EB] transition-all text-left group/item"
                  id="service-item-light-strip"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-[#2563EB] opacity-0 group-hover/item:opacity-100 transition-opacity">04.</span>
                    <span>Architectural &amp; Strip Lights</span>
                  </span>
                  <span className="font-mono-code text-xs text-[#161A26]/40 group-hover/item:text-[#2563EB] transition-colors">
                    →
                  </span>
                </button>

              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenBrief('Residential Lighting')}
              className="w-full inline-flex items-center justify-between bg-[#161A26] text-[#EFEDE5] hover:bg-[#2563EB] p-4 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs"
              id="lighting-brief-cta"
            >
              <span>Build Lighting Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 4: Appliance */}
          <div
            className="reg-mark tl tr bl br bg-[#EFEDE5] border border-[#161A26]/20 p-8 lg:p-10 flex flex-col justify-between hover:border-[#10B981] transition-colors shadow-sm rounded-xs group"
            id="service-group-appliance"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono-code text-[11px] uppercase tracking-widest text-white bg-[#10B981] px-3 py-1 rounded-xs flex items-center gap-1.5">
                  <Fan className="w-3.5 h-3.5" />
                  <span>Green Category</span>
                </span>
                <span className="font-mono-code text-xs text-[#161A26]/40">CRAFT_04</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl uppercase text-[#161A26] mb-3 group-hover:text-[#10B981] transition-colors">
                Appliance
              </h3>

              <p className="text-sm text-[#161A26]/70 leading-relaxed mb-6">
                Modern home &amp; kitchen appliances — 5-star energy saving BLDC ceiling fans, inverter split ACs, toughened glass hobs, and auto-clean chimneys.
              </p>

              {/* Service Sub-items */}
              <div className="border-t border-[#161A26]/15 divide-y divide-[#161A26]/10 mb-8 font-medium text-sm text-[#161A26]">
                
                <button
                  type="button"
                  onClick={() => onSelectCategory('app-fans')}
                  className="w-full py-3.5 flex items-center justify-between hover:px-2 hover:text-[#10B981] transition-all text-left group/item"
                  id="service-item-app-fans"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-[#10B981] opacity-0 group-hover/item:opacity-100 transition-opacity">01.</span>
                    <span>Ceiling &amp; Exhaust Fans (BLDC)</span>
                  </span>
                  <span className="font-mono-code text-xs text-[#161A26]/40 group-hover/item:text-[#10B981] transition-colors">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCategory('app-ac')}
                  className="w-full py-3.5 flex items-center justify-between hover:px-2 hover:text-[#10B981] transition-all text-left group/item"
                  id="service-item-app-ac"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-[#10B981] opacity-0 group-hover/item:opacity-100 transition-opacity">02.</span>
                    <span>Air Conditioners &amp; Coolers</span>
                  </span>
                  <span className="font-mono-code text-xs text-[#161A26]/40 group-hover/item:text-[#10B981] transition-colors">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCategory('app-stoves')}
                  className="w-full py-3.5 flex items-center justify-between hover:px-2 hover:text-[#10B981] transition-all text-left group/item"
                  id="service-item-app-stoves"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-[#10B981] opacity-0 group-hover/item:opacity-100 transition-opacity">03.</span>
                    <span>Gas Stoves &amp; Glass Hobs</span>
                  </span>
                  <span className="font-mono-code text-xs text-[#161A26]/40 group-hover/item:text-[#10B981] transition-colors">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCategory('app-chimneys')}
                  className="w-full py-3.5 flex items-center justify-between hover:px-2 hover:text-[#10B981] transition-all text-left group/item"
                  id="service-item-app-chimneys"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-[#10B981] opacity-0 group-hover/item:opacity-100 transition-opacity">04.</span>
                    <span>Kitchen Chimneys (Auto-Clean)</span>
                  </span>
                  <span className="font-mono-code text-xs text-[#161A26]/40 group-hover/item:text-[#10B981] transition-colors">
                    →
                  </span>
                </button>

              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenBrief('Ceiling Fans')}
              className="w-full inline-flex items-center justify-between bg-[#161A26] text-[#EFEDE5] hover:bg-[#10B981] p-4 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs"
              id="appliance-brief-cta"
            >
              <span>Build Appliance Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
