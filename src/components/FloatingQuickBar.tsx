import React from 'react';
import { Phone, MessageCircle, Download, Calendar } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

interface FloatingQuickBarProps {
  onOpenBrochure?: () => void;
  onOpenVipTour: () => void;
}

export const FloatingQuickBar: React.FC<FloatingQuickBarProps> = ({ onOpenVipTour }) => {
  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex items-center space-x-2.5 font-google">
      <div className="flex items-center space-x-2 p-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-gray-200 shadow-xl">
        {/* WhatsApp Direct */}
        <a
          href={`https://wa.me/${PROJECT_DETAILS.whatsapp}?text=${encodeURIComponent('Hello Pristine Team, I am interested in The Lord\'s Pashan (3 & 4.5 BHK Luxury Residences).')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center transition-transform hover:scale-105 shadow-md"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
        </a>

        {/* Call Desk */}
        <a
          href={`tel:${PROJECT_DETAILS.phone}`}
          className="w-10 h-10 rounded-full bg-[#f8f9fa] hover:bg-gray-100 text-pristine-orange border border-gray-200 flex items-center justify-center transition-transform hover:scale-105 shadow-sm"
          title="Call Sales Desk"
        >
          <Phone className="w-4 h-4" />
        </a>

        {/* Brochure Button */}
        <a
          href="#download-brochure"
          className="hidden sm:flex items-center space-x-1.5 px-3.5 py-2 rounded-full text-xs uppercase tracking-wider text-gray-800 bg-[#f8f9fa] hover:bg-gray-100 border border-gray-200 transition-colors font-bold shadow-sm"
        >
          <Download className="w-3.5 h-3.5 text-pristine-orange" />
          <span>BROCHURE</span>
        </a>

        {/* Enquire Now CTA */}
        <button
          onClick={onOpenVipTour}
          className="btn-pristine-orange flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs uppercase tracking-wider shadow-pristine-orange font-bold"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>ENQUIRE</span>
        </button>
      </div>
    </div>
  );
};
