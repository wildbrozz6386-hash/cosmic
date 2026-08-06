import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MarqueeStrip } from './components/MarqueeStrip';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { CategoryKey } from './types';
import { MessageCircle } from 'lucide-react';

export function App() {
  // Lightbox Modal State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxCategory, setLightboxCategory] = useState<CategoryKey>('wall-art');

  // Contact Brief Initial Fill State
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Wall Art');
  const [selectedMaterialName, setSelectedMaterialName] = useState<string>('');

  const WHATSAPP_NUMBER = '918686112544';

  const handleOpenLightbox = (categoryKey: CategoryKey) => {
    setLightboxCategory(categoryKey);
    setLightboxOpen(true);
  };

  const handleOpenBrief = (projectType?: string, materialName?: string) => {
    if (projectType) setSelectedProjectType(projectType);
    if (materialName !== undefined) setSelectedMaterialName(materialName);

    // Smooth scroll down to contact brief form
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromHeroOrServices = (categoryKey: string) => {
    handleOpenLightbox(categoryKey as CategoryKey);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EFEDE5] text-[#161A26] selection:bg-[#FF5A33] selection:text-white">
      
      {/* Header Navigation */}
      <Header onOpenBrief={handleOpenBrief} />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* Hero Section with Interactive Swatch Fan */}
        <HeroSection
          onOpenBrief={handleOpenBrief}
          onSelectCategory={handleSelectCategoryFromHeroOrServices}
        />

        {/* Marquee Strip */}
        <MarqueeStrip />

        {/* Services Section (01. What We Make) */}
        <ServicesSection
          onSelectCategory={handleSelectCategoryFromHeroOrServices}
          onOpenBrief={handleOpenBrief}
        />

        {/* Contact Section (02. Get In Touch & Brief Form) */}
        <ContactSection
          initialProjectType={selectedProjectType}
          initialMaterialName={selectedMaterialName}
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal for Category Reference Photos */}
      <LightboxModal
        isOpen={lightboxOpen}
        categoryKey={lightboxCategory}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Floating WhatsApp Button with Pulse Animation Ring */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20print%20project`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-15 h-18 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#1fb958] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-108 group"
        aria-label="Chat on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-wa-pulse -z-10 pointer-events-none"></div>
        <MessageCircle className="w-8 h-8 group-hover:rotate-6 transition-transform" />
      </a>

    </div>
  );
}

export default App;
