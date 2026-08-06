import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161A26] text-[#EFEDE5]/60 py-8 border-t border-white/10 font-mono-code text-xs uppercase tracking-wider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          © 2026 Cosmic Electricals and Lightings — All Rights Reserved.
        </div>
        <div className="flex items-center space-x-6 text-[11px]">
          <a href="#services" className="hover:text-[#FF5A33] transition-colors" id="footer-link-services">Services</a>
          <a
            href="https://wa.me/918686112544"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:underline"
            id="footer-link-whatsapp"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};
