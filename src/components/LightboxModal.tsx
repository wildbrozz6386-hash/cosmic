import React, { useState } from 'react';
import { X, MessageCircle, ArrowRight } from 'lucide-react';
import { CATEGORY_LABELS, SERVICE_CATEGORIES } from '../data';
import { CategoryKey } from '../types';

interface LightboxModalProps {
  isOpen: boolean;
  categoryKey: CategoryKey;
  onClose: () => void;
  onSelectCategory?: (key: CategoryKey) => void;
  onOpenBrief?: (projectType?: string, fixtureName?: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  categoryKey,
  onClose,
  onSelectCategory,
  onOpenBrief
}) => {
  if (!isOpen) return null;

  const currentCategoryKey = categoryKey || 'light-residential';
  const category = SERVICE_CATEGORIES.find(c => c.id === currentCategoryKey) || SERVICE_CATEGORIES[0];
  const label = CATEGORY_LABELS[currentCategoryKey] || category?.title || 'Residential Lights';
  const WHATSAPP_NUMBER = '918686112544';

  const [selectedFixture, setSelectedFixture] = useState<string | null>(null);

  const handleRequestQuote = (fixture?: string) => {
    onClose();
    if (onOpenBrief) {
      onOpenBrief(category.title, fixture || selectedFixture || undefined);
    }
  };

  const handleWhatsApp = (fixture?: string) => {
    const text = fixture
      ? `Hi Cosmic Lightings and Interior, I am interested in ${fixture} for ${category.title}.`
      : `Hi Cosmic Lightings and Interior, I would like to inquire about ${category.title}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6 text-white overflow-y-auto animate-fade-in"
      onClick={onClose}
      id="lightbox-overlay"
    >
      <div
        className="bg-black border border-white max-w-2xl w-full my-auto flex flex-col rounded-xs shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
        id="lightbox-panel"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-white flex items-center justify-between bg-black text-white">
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white" id="lightbox-title">
            {label}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 border border-white bg-black text-white hover:bg-white hover:text-black transition-colors rounded-xs flex items-center justify-center shrink-0"
            aria-label="Close"
            id="lightbox-close-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Division Selector Tabs */}
        <div className="flex border-b border-white bg-black" id="lightbox-tabs">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setSelectedFixture(null);
                if (onSelectCategory) {
                  onSelectCategory(cat.id);
                }
              }}
              className={`flex-1 py-3 px-2 font-mono-code text-xs uppercase tracking-wider text-center border-r border-white last:border-r-0 transition-colors ${
                cat.id === currentCategoryKey
                  ? 'bg-white text-black font-bold'
                  : 'bg-black text-white hover:bg-neutral-900'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Lighting Names List Only */}
        <div className="p-6 bg-black text-white space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2" id="fixture-names-list">
            {category.fixtures.map((item, idx) => {
              const isSelected = selectedFixture === item;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedFixture(isSelected ? null : item)}
                  className={`p-3 text-left border rounded-xs transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-white text-black border-white font-bold'
                      : 'bg-black border-white/30 text-white hover:border-white hover:bg-neutral-950'
                  }`}
                >
                  <span className="flex items-center gap-2 text-sm sm:text-base font-normal">
                    <span className="font-bold">•</span>
                    <span>{item}</span>
                  </span>
                  {isSelected && <span className="font-mono-code text-xs">✓</span>}
                </button>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => handleWhatsApp(selectedFixture || undefined)}
              className="w-full sm:w-auto px-5 py-3 bg-[#25D366] text-white hover:bg-[#20b858] font-mono-code text-xs uppercase tracking-wider font-bold rounded-xs flex items-center justify-center gap-2 transition-colors border border-white/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </button>

            <button
              type="button"
              onClick={() => handleRequestQuote(selectedFixture || undefined)}
              className="w-full sm:w-auto px-5 py-3 bg-white text-black hover:bg-neutral-200 font-mono-code text-xs uppercase tracking-wider font-bold rounded-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
