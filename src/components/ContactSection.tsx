import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, Clock, MapPin, Send, CheckCircle } from 'lucide-react';
import { QuoteBrief } from '../types';

interface ContactSectionProps {
  initialProjectType?: string;
  initialMaterialName?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProjectType = 'Residential Lights',
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

  useEffect(() => {
    if (initialProjectType) {
      setFormData(prev => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType]);

  useEffect(() => {
    if (initialMaterialName) {
      setFormData(prev => ({ ...prev, materialFinish: initialMaterialName }));
    }
  }, [initialMaterialName]);

  const [submitted, setSubmitted] = useState(false);

  const WHATSAPP_NUMBER = '918686112544';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message =
      `*New Architectural Lighting Brief from Website*\n` +
      `*Name:* ${formData.name || 'Not provided'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Lighting Division:* ${formData.projectType}\n` +
      `*Room Size / Profile Run:* ${formData.dimensionsWidth || '—'} ft x ${formData.dimensionsHeight || '—'} ft\n` +
      `*Selected Fixture / Kelvin:* ${formData.materialFinish || 'Standard Studio Spec'}\n` +
      `*Project Notes:* ${formData.details || 'None'}`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <section className="py-20 sm:py-28 bg-black text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/20 pb-8 mb-16 gap-6">
          <div>
            <span className="font-mono-code text-xs uppercase tracking-widest text-white/70 block mb-2" id="contact-num">
              02 — GET IN TOUCH
            </span>
            <h2 className="text-4xl sm:text-6xl font-display uppercase tracking-tight text-white leading-none" id="contact-title">
              Start Your Project
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/80 max-w-md leading-relaxed" id="contact-desc">
            Direct consultation with our Bengaluru architectural lighting studio. Fill out the project brief below to receive photometric schedules, fixture specifications, and estimates.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Brief Request Form */}
          <div className="lg:col-span-7 bg-[#0A0A0A] border border-white/20 p-8 sm:p-10 rounded-xs shadow-2xl">
            <h3 className="font-display text-2xl uppercase tracking-tight text-white mb-2">
              Lighting Project Brief
            </h3>
            <p className="font-mono-code text-xs text-white/70 mb-8">
              Submit your space parameters for residential, commercial, or outdoor lighting.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4 font-mono-code" id="contact-success-msg">
                <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl uppercase text-white">Brief Received</h4>
                <p className="text-xs text-white/80 max-w-sm mx-auto">
                  Opening WhatsApp to connect directly with our lighting engineer in Bengaluru...
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-white text-black text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-colors rounded-xs"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="lighting-brief-form">
                
                {/* Client Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="brief-name" className="block font-mono-code text-[11px] uppercase tracking-wider text-white/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="brief-name"
                      type="text"
                      required
                      placeholder="Ananya Rao"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black border-b border-white/30 focus:border-white py-2 px-1 text-sm font-medium text-white placeholder-white/30 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="brief-phone" className="block font-mono-code text-[11px] uppercase tracking-wider text-white/80 mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="brief-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black border-b border-white/30 focus:border-white py-2 px-1 text-sm font-medium text-white placeholder-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Project Category & Fixture Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="brief-ptype" className="block font-mono-code text-[11px] uppercase tracking-wider text-white/80 mb-2">
                      Lighting Division *
                    </label>
                    <select
                      id="brief-ptype"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-black border-b border-white/30 focus:border-white py-2 px-1 text-sm font-medium text-white focus:outline-none transition-colors"
                    >
                      <option value="Residential Lights">Residential Lights (12 Fixture Types)</option>
                      <option value="Commercial Lights">Commercial Lights (10 Fixture Types)</option>
                      <option value="Outdoor Lights">Outdoor Lights (12 Fixture Types)</option>
                      <option value="Complete Architectural Lighting Package">Complete Architectural Lighting Package</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="brief-material" className="block font-mono-code text-[11px] uppercase tracking-wider text-white/80 mb-2">
                      Specific Fixture / Kelvin Spec
                    </label>
                    <input
                      id="brief-material"
                      type="text"
                      placeholder="e.g. Chandeliers, 3000K, or Floodlights"
                      value={formData.materialFinish}
                      onChange={(e) => setFormData({ ...formData, materialFinish: e.target.value })}
                      className="w-full bg-black border-b border-white/30 focus:border-white py-2 px-1 text-sm font-medium text-white placeholder-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Dimensions / Run Length */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="brief-width" className="block font-mono-code text-[11px] uppercase tracking-wider text-white/80 mb-2">
                      Room Size / Area (Sq Ft)
                    </label>
                    <input
                      id="brief-width"
                      type="number"
                      step="1"
                      placeholder="e.g. 1500"
                      value={formData.dimensionsWidth}
                      onChange={(e) => setFormData({ ...formData, dimensionsWidth: e.target.value })}
                      className="w-full bg-black border-b border-white/30 focus:border-white py-2 px-1 text-sm font-medium text-white placeholder-white/30 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="brief-height" className="block font-mono-code text-[11px] uppercase tracking-wider text-white/80 mb-2">
                      Ceiling Height (Feet)
                    </label>
                    <input
                      id="brief-height"
                      type="number"
                      step="0.5"
                      placeholder="e.g. 10.5"
                      value={formData.dimensionsHeight}
                      onChange={(e) => setFormData({ ...formData, dimensionsHeight: e.target.value })}
                      className="w-full bg-black border-b border-white/30 focus:border-white py-2 px-1 text-sm font-medium text-white placeholder-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <label htmlFor="brief-details" className="block font-mono-code text-[11px] uppercase tracking-wider text-white/80 mb-2">
                    Project Details / Specific Fixtures Required
                  </label>
                  <textarea
                    id="brief-details"
                    rows={3}
                    placeholder="Mention required fixtures (e.g. Chandeliers, Recessed Downlights, Cove lighting, Landscape bollards) or site conditions..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-black border border-white/30 focus:border-white p-3 text-sm font-medium text-white placeholder-white/30 focus:outline-none transition-colors rounded-xs"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-neutral-200 py-4 px-6 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-lg"
                  id="brief-submit-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Lighting Brief via WhatsApp</span>
                </button>

              </form>
            )}
          </div>

          {/* Right Column: Studio Contact & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0A0A0A] border border-white/20 p-8 rounded-xs space-y-6">
              <h3 className="font-display text-2xl uppercase tracking-tight text-white border-b border-white/15 pb-4">
                Studio Headquarters
              </h3>

              <div className="space-y-5 font-mono-code text-xs text-white/85">
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white uppercase mb-1">Cosmic Lightings & Interior Studio</span>
                    <span className="text-white/80 leading-relaxed block">
                      Architectural Lighting Gallery, Bengaluru, Karnataka, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white uppercase mb-1">WhatsApp Direct</span>
                    <a
                      href="https://wa.me/918686112544"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline block"
                    >
                      +91 86861 12544
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white uppercase mb-1">Project Inquiries</span>
                    <span className="text-white/80 block">projects@cosmiclightings.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white uppercase mb-1">Studio Hours</span>
                    <span className="text-white/80 block">Monday – Saturday: 10:00 AM – 8:00 PM</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Consultation Callout */}
            <div className="border border-white/20 bg-black p-6 rounded-xs space-y-3">
              <span className="font-mono-code text-[11px] uppercase tracking-wider text-white/60 block">
                On-Site Light Measurement
              </span>
              <h4 className="font-display text-lg uppercase text-white">
                Site Lux Audit &amp; Fixture Mockups
              </h4>
              <p className="text-xs text-white/80 leading-relaxed font-mono-code">
                Our lighting engineers conduct on-site lux measurements in Bengaluru villas and commercial buildings with live sample demonstrations.
              </p>
              <a
                href="https://wa.me/918686112544?text=Hi%2C%20I%20would%20like%20to%20book%20a%20site%20lux%20audit%20and%20fixture%20mockup%20in%20Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono-code uppercase font-semibold text-white hover:underline pt-1"
              >
                <span>Book Site Audit on WhatsApp →</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
