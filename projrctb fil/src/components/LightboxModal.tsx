import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { CATEGORY_LABELS, SERVICE_CATEGORIES } from '../data';
import { CategoryKey } from '../types';

interface LightboxModalProps {
  isOpen: boolean;
  categoryKey: CategoryKey;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  categoryKey,
  onClose
}) => {
  if (!isOpen) return null;

  const category = SERVICE_CATEGORIES.find(c => c.id === categoryKey);
  const images = category?.images || [];
  const label = CATEGORY_LABELS[categoryKey] || categoryKey;

  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex(activeImageIndex === 0 ? images.length - 1 : activeImageIndex - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex(activeImageIndex === images.length - 1 ? 0 : activeImageIndex + 1);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#161A26]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      id="lightbox-overlay"
    >
      <div
        className="bg-[#EFEDE5] border border-[#161A26]/30 max-w-5xl w-full max-h-[90vh] flex flex-col rounded-xs shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        id="lightbox-panel"
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#161A26]/20 bg-[#EFEDE5] sticky top-0 z-10">
          <div>
            <div className="font-mono-code text-[11px] uppercase tracking-widest text-[#FF5A33]">
              Reference Installation Samples
            </div>
            <h3 className="font-display text-2xl uppercase text-[#161A26]" id="lightbox-title">
              {label}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 border border-[#161A26] bg-transparent text-[#161A26] hover:bg-[#161A26] hover:text-[#EFEDE5] transition-colors rounded-xs flex items-center justify-center font-mono-code text-sm font-semibold"
            aria-label="Close modal"
            id="lightbox-close-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Category description & materials */}
          {category && (
            <div className="bg-[#E4E1D6] p-4 rounded-xs border border-[#161A26]/10 font-mono-code text-xs space-y-2 text-[#161A26]/80">
              <p className="font-sans text-sm text-[#161A26] font-normal leading-relaxed">
                {category.fullDesc}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#161A26]/10">
                <span className="font-semibold text-[#161A26]">Recommended Substrates:</span>
                {category.recommendedMaterials.map((mat, i) => (
                  <span key={i} className="bg-[#EFEDE5] border border-[#161A26]/20 px-2.5 py-0.5 rounded-xs text-[10px]">
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Enlarge Image Single View */}
          {activeImageIndex !== null ? (
            <div className="relative bg-[#161A26] p-2 rounded-xs flex flex-col items-center">
              <button
                type="button"
                onClick={() => setActiveImageIndex(null)}
                className="absolute top-4 right-4 z-10 bg-black/60 text-white p-2 rounded-xs hover:bg-[#FF5A33] transition-colors"
                title="Back to grid"
                id="lightbox-back-grid-btn"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative w-full max-h-[60vh] flex items-center justify-center overflow-hidden">
                <img
                  src={images[activeImageIndex].url}
                  alt={images[activeImageIndex].caption}
                  referrerPolicy="no-referrer"
                  className="max-h-[60vh] object-contain rounded-xs"
                />

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-xs hover:bg-[#FF5A33] transition-colors"
                      id="lightbox-prev-btn"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-xs hover:bg-[#FF5A33] transition-colors"
                      id="lightbox-next-btn"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              <p className="font-mono-code text-xs text-[#EFEDE5] py-3 px-4 text-center">
                {images[activeImageIndex].caption}
              </p>
            </div>
          ) : (
            /* Grid View */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" id="lightbox-image-grid">
              {images.map((imgObj, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className="relative group cursor-pointer bg-[#161A26] rounded-xs overflow-hidden border border-[#161A26]/20"
                >
                  <img
                    src={imgObj.url}
                    alt={imgObj.caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="font-mono-code text-xs text-white uppercase tracking-wider flex items-center gap-1 bg-[#FF5A33] px-3 py-1.5 rounded-xs">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Enlarge</span>
                    </span>
                  </div>
                  <div className="p-3 bg-[#161A26] text-[#EFEDE5] font-mono-code text-[11px] truncate">
                    {imgObj.caption}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
