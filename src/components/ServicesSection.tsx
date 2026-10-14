import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CategoryKey } from '../types';
import { RESIDENTIAL_FIXTURES, COMMERCIAL_FIXTURES, OUTDOOR_FIXTURES } from '../data';

interface ServicesSectionProps {
  onSelectCategory: (categoryKey: CategoryKey) => void;
  onOpenBrief: (projectType?: string, fixtureName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectCategory, onOpenBrief }) => {
  return (
    <section className="py-20 sm:py-28 bg-black text-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-white pb-6 mb-12">
          <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-tight text-white" id="services-title">
            Lighting Divisions
          </h2>
        </div>

        {/* 3 Dedicated Divisions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="services-cards-grid">
          
          {/* Division 1: Residential Lights */}
          <div
            className="bg-black border border-white p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-300 transition-all rounded-xs group cursor-pointer"
            id="service-light-residential"
            onClick={() => onSelectCategory('light-residential')}
          >
            <div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-white mb-6">
                Residential Lights
              </h3>

              {/* Direct Fixture Names List with Bullets */}
              <div className="border-t border-white/20 pt-4 mb-6">
                <div className="space-y-2 font-mono-code text-sm text-white">
                  {RESIDENTIAL_FIXTURES.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-1 px-2 rounded-xs hover:bg-white hover:text-black transition-colors flex items-center justify-between"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCategory('light-residential');
                      }}
                    >
                      <span className="flex items-center gap-2">
                        <span className="font-bold">•</span>
                        <span>{item}</span>
                      </span>
                      <span className="text-xs">→</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/20">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectCategory('light-residential');
                }}
                className="w-full inline-flex items-center justify-between bg-white text-black hover:bg-neutral-200 p-3.5 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs"
                id="res-lighting-view-cta"
              >
                <span>View Residential Lights</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Division 2: Commercial Lights */}
          <div
            className="bg-black border border-white p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-300 transition-all rounded-xs group cursor-pointer"
            id="service-light-commercial"
            onClick={() => onSelectCategory('light-commercial')}
          >
            <div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-white mb-6">
                Commercial Lights
              </h3>

              {/* Direct Fixture Names List with Bullets */}
              <div className="border-t border-white/20 pt-4 mb-6">
                <div className="space-y-2 font-mono-code text-sm text-white">
                  {COMMERCIAL_FIXTURES.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-1 px-2 rounded-xs hover:bg-white hover:text-black transition-colors flex items-center justify-between"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCategory('light-commercial');
                      }}
                    >
                      <span className="flex items-center gap-2">
                        <span className="font-bold">•</span>
                        <span>{item}</span>
                      </span>
                      <span className="text-xs">→</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/20">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectCategory('light-commercial');
                }}
                className="w-full inline-flex items-center justify-between bg-white text-black hover:bg-neutral-200 p-3.5 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs"
                id="comm-lighting-view-cta"
              >
                <span>View Commercial Lights</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Division 3: Outdoor Lights */}
          <div
            className="bg-black border border-white p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-300 transition-all rounded-xs group cursor-pointer"
            id="service-light-outdoor"
            onClick={() => onSelectCategory('light-outdoor')}
          >
            <div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-white mb-6">
                Outdoor Lights
              </h3>

              {/* Direct Fixture Names List with Bullets */}
              <div className="border-t border-white/20 pt-4 mb-6">
                <div className="space-y-2 font-mono-code text-sm text-white">
                  {OUTDOOR_FIXTURES.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-1 px-2 rounded-xs hover:bg-white hover:text-black transition-colors flex items-center justify-between"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCategory('light-outdoor');
                      }}
                    >
                      <span className="flex items-center gap-2">
                        <span className="font-bold">•</span>
                        <span>{item}</span>
                      </span>
                      <span className="text-xs">→</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/20">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectCategory('light-outdoor');
                }}
                className="w-full inline-flex items-center justify-between bg-white text-black hover:bg-neutral-200 p-3.5 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs"
                id="outdoor-lighting-view-cta"
              >
                <span>View Outdoor Lights</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
