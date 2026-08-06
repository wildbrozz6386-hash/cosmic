import React, { useState } from 'react';
import { MessageCircle, Mail, Clock, MapPin, Send, CheckCircle } from 'lucide-react';
import { QuoteBrief } from '../types';

interface ContactSectionProps {
  initialProjectType?: string;
  initialMaterialName?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProjectType = 'Wall Art',
  initialMaterialName = ''
}) => {
  const [formData, setFormData] = useState<QuoteBrief>({
    name: '',
    phone: '',
    projectType: initialProjectType,
    dimensionsWidth: '',
    dimensionsHeight: '',
    materialFinish: initialMaterialName,
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const WHATSAPP_NUMBER = '918686112544';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message =
      `*New Project Brief from Website*\n` +
      `*Name:* ${formData.name || 'Not provided'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Project Category:* ${formData.projectType}\n` +
      `*Dimensions / Specs:* ${formData.dimensionsWidth || '—'} ft x ${formData.dimensionsHeight || '—'} ft\n` +
      `*Material / Preferred Item:* ${formData.materialFinish || 'Standard Studio Spec'}\n` +
      `*Details:* ${formData.details || 'None'}`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Brief delay then open WhatsApp with prefilled message
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#EFEDE5]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#161A26]/20 pb-8 mb-16 gap-6">
          <div>
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#161A26]/60 block mb-2" id="contact-num">
              02 — GET IN TOUCH
            </span>
            <h2 className="text-4xl sm:text-6xl font-display uppercase tracking-tight text-[#161A26] leading-none" id="contact-title">
              Start Your Project
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#161A26]/70 max-w-md leading-relaxed" id="contact-desc">
            Fastest way to reach us is WhatsApp — or send your project brief below for Wall Design, Electrical, Lighting, or Appliance requirements.
          </p>
        </div>

        {/* Contact Grid: Form on Left, Dark Direct Panel on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[#161A26]/20 border border-[#161A26]/20 shadow-md rounded-xs overflow-hidden" id="contact-grid">
          
          {/* Left Panel: Brief Form */}
          <div className="lg:col-span-7 bg-[#EFEDE5] p-8 sm:p-12">
            <h3 className="font-display text-2xl sm:text-3xl uppercase text-[#161A26] mb-2">
              Send Project Brief
            </h3>
            <p className="font-mono-code text-xs text-[#161A26]/60 uppercase tracking-wider mb-8">
              Fill in your specifications — opens directly in WhatsApp
            </p>

            {submitted ? (
              <div className="bg-[#1F8F82]/10 border border-[#1F8F82] p-8 rounded-xs space-y-4 text-center">
                <CheckCircle className="w-12 h-12 text-[#1F8F82] mx-auto" />
                <h4 className="font-display text-2xl uppercase text-[#161A26]">
                  Brief Generated!
                </h4>
                <p className="text-sm text-[#161A26]/80 leading-relaxed font-normal">
                  Opening WhatsApp to send your specifications directly to our studio team in Bengaluru.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="font-mono-code text-xs text-[#FF5A33] uppercase underline underline-offset-4 tracking-wider"
                  id="reset-brief-form-btn"
                >
                  Edit Brief Information
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="brief-form">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="brief-name" className="block font-mono-code text-[11px] uppercase tracking-wider text-[#161A26]/70 mb-2">
                      Your Name *
                    </label>
                    <input
                      id="brief-name"
                      type="text"
                      required
                      placeholder="Ananya Rao"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-[#161A26]/30 focus:border-[#FF5A33] py-2 px-1 text-sm font-medium text-[#161A26] placeholder-[#161A26]/30 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="brief-phone" className="block font-mono-code text-[11px] uppercase tracking-wider text-[#161A26]/70 mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="brief-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-[#161A26]/30 focus:border-[#FF5A33] py-2 px-1 text-sm font-medium text-[#161A26] placeholder-[#161A26]/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Project Category & Material Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="brief-ptype" className="block font-mono-code text-[11px] uppercase tracking-wider text-[#161A26]/70 mb-2">
                      Project Category
                    </label>
                    <select
                      id="brief-ptype"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-transparent border-b border-[#161A26]/30 focus:border-[#FF5A33] py-2 px-1 text-sm font-medium text-[#161A26] focus:outline-none transition-colors"
                    >
                      {/* Wall Design */}
                      <optgroup label="ORANGE — WALL DESIGN">
                        <option value="Wall Art">Wall Art (Canvas Prints &amp; Frames)</option>
                        <option value="Wall Gallery Layout">Wall Gallery Layout (Photo Grids)</option>
                        <option value="Direct Wall Printing">Direct Wall Printing (Direct UV)</option>
                        <option value="Wallpaper Wall Art">Wallpaper Wall Art (Murals)</option>
                      </optgroup>

                      {/* Electrical */}
                      <optgroup label="YELLOW — ELECTRICAL">
                        <option value="Electrical Distribution">Electrical Distribution (DB &amp; Panels)</option>
                        <option value="Wiring Materials">Wiring Materials (FR Copper Cables)</option>
                        <option value="Switches & Sockets">Switches &amp; Sockets (Modular Touch)</option>
                        <option value="Circuit Protection">Circuit Protection &amp; MCBs</option>
                      </optgroup>

                      {/* Lighting */}
                      <optgroup label="BLUE — LIGHTING">
                        <option value="Residential Lighting">Residential Lighting (Downlights/Pendants)</option>
                        <option value="Commercial Lighting">Commercial Lighting (Linear Profiles)</option>
                        <option value="Garden & Landscape Lighting">Garden &amp; Landscape Lighting (IP67)</option>
                        <option value="Architectural & Strip Lights">Architectural &amp; COB Strip Lights</option>
                      </optgroup>

                      {/* Appliance */}
                      <optgroup label="GREEN — APPLIANCE">
                        <option value="Ceiling Fans">Ceiling &amp; Exhaust Fans (BLDC)</option>
                        <option value="Air Conditioners">Air Conditioners &amp; Coolers</option>
                        <option value="Gas Stoves & Hobs">Gas Stoves &amp; Glass Hobs</option>
                        <option value="Kitchen Chimneys">Kitchen Chimneys (Auto-Clean)</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="brief-material" className="block font-mono-code text-[11px] uppercase tracking-wider text-[#161A26]/70 mb-2">
                      Preferred Material / Item Spec
                    </label>
                    <input
                      id="brief-material"
                      type="text"
                      placeholder="e.g. 380 GSM Canvas or Touch Glass Plate"
                      value={formData.materialFinish}
                      onChange={(e) => setFormData({ ...formData, materialFinish: e.target.value })}
                      className="w-full bg-transparent border-b border-[#161A26]/30 focus:border-[#FF5A33] py-2 px-1 text-sm font-medium text-[#161A26] placeholder-[#161A26]/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Dimensions / Quantity */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="brief-width" className="block font-mono-code text-[11px] uppercase tracking-wider text-[#161A26]/70 mb-2">
                      Wall Width / Length (Feet)
                    </label>
                    <input
                      id="brief-width"
                      type="number"
                      step="0.5"
                      placeholder="e.g. 10"
                      value={formData.dimensionsWidth}
                      onChange={(e) => setFormData({ ...formData, dimensionsWidth: e.target.value })}
                      className="w-full bg-transparent border-b border-[#161A26]/30 focus:border-[#FF5A33] py-2 px-1 text-sm font-medium text-[#161A26] placeholder-[#161A26]/30 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="brief-height" className="block font-mono-code text-[11px] uppercase tracking-wider text-[#161A26]/70 mb-2">
                      Wall Height / Units
                    </label>
                    <input
                      id="brief-height"
                      type="number"
                      step="0.5"
                      placeholder="e.g. 8"
                      value={formData.dimensionsHeight}
                      onChange={(e) => setFormData({ ...formData, dimensionsHeight: e.target.value })}
                      className="w-full bg-transparent border-b border-[#161A26]/30 focus:border-[#FF5A33] py-2 px-1 text-sm font-medium text-[#161A26] placeholder-[#161A26]/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Brief Details Textarea */}
                <div>
                  <label htmlFor="brief-details" className="block font-mono-code text-[11px] uppercase tracking-wider text-[#161A26]/70 mb-2">
                    Project Brief &amp; Location Details
                  </label>
                  <textarea
                    id="brief-details"
                    rows={3}
                    placeholder="Wall surface, load capacity, lighting warmness, or installation address in Bengaluru..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-transparent border-b border-[#161A26]/30 focus:border-[#FF5A33] py-2 px-1 text-sm font-medium text-[#161A26] placeholder-[#161A26]/30 focus:outline-none transition-colors resize-y"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#161A26] text-[#EFEDE5] hover:bg-[#FF5A33] px-8 py-4 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs shadow-md"
                    id="submit-brief-btn"
                  >
                    <span>Send Brief via WhatsApp</span>
                    <Send className="w-4 h-4 text-[#25D366]" />
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Panel: Direct Contact Details & WhatsApp Big Icon */}
          <div className="lg:col-span-5 bg-[#1F8F82] text-[#EFEDE5] p-8 sm:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-display text-3xl sm:text-4xl uppercase text-white">
                Prefer to Just Chat?
              </h3>
              <p className="text-sm leading-relaxed text-[#EFEDE5]/90 font-normal">
                Tap the WhatsApp button below to message our studio directly — send a photo of your wall, electrical layout, or kitchen site and we’ll recommend the best solution.
              </p>

              {/* Big WhatsApp CTA Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20my%20project`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-18 h-18 bg-[#25D366] hover:bg-[#1fb958] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-105 group"
                  aria-label="Chat on WhatsApp"
                  id="contact-big-wa-btn"
                >
                  <MessageCircle className="w-10 h-10 group-hover:rotate-6 transition-transform" />
                </a>
              </div>
            </div>

            {/* Studio Meta Information */}
            <div className="pt-8 border-t border-white/20 font-mono-code text-xs space-y-3 text-white/90">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#F4B400] shrink-0" />
                <span>STUDIO — Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#F4B400] shrink-0" />
                <span>HOURS — Mon–Sat, 10:00 AM – 7:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F4B400] shrink-0" />
                <span>EMAIL — cosmicelectricals9@gmail.com</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
