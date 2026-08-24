import React, { useState, useEffect } from 'react';
import { Phone, Download, Calendar, MessageSquare, Compass, Share2 } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

interface FloatingQuickBarProps {
  onOpenBrochure?: () => void;
  onOpenVipTour: () => void;
}

export const FloatingQuickBar: React.FC<FloatingQuickBarProps> = ({ onOpenBrochure, onOpenVipTour }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating quick bar after scrolling 150px on mobile
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "The Lord's by Pristine Developers",
          text: "Discover 3 & 4.5 BHK Ultra Luxury Marble Residences on Baner-Pashan Link Road, Pune. MahaRERA: P52100078557.",
          url: "https://pristinethelords.in/"
        });
      } catch (err) {
        console.log('Share dismissed');
      }
    } else {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent("Check out The Lord's by Pristine Developers - 3 & 4.5 BHK Luxury Residences in Baner-Pashan: https://pristinethelords.in/")}`, '_blank');
    }
  };

  if (!isVisible) return null;

  return (
    <nav
      aria-label="Mobile Quick Action Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-gray-200/90 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] px-3 py-2 pb-safe transition-all duration-300 animate-slideUp font-sans uppercase"
    >
      <div className="max-w-md mx-auto grid grid-cols-4 gap-2 items-center font-google">
        {/* 1. Direct 1-Tap Call */}
        <a
          href={`tel:${PROJECT_DETAILS.phone}`}
          className="flex flex-col items-center justify-center p-2 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-200/80 text-gray-800 active:scale-95 transition-all"
          aria-label="Call Sales Desk"
        >
          <div className="w-8 h-8 rounded-full bg-orange-50 text-pristine-orange flex items-center justify-center mb-1">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight">CALL NOW</span>
        </a>

        {/* 2. Direct WhatsApp VIP Desk */}
        <a
          href={`https://wa.me/${PROJECT_DETAILS.whatsapp}?text=${encodeURIComponent("Hi Pristine Sales Team, I would like more information and brochure for The Lord's Baner-Pashan.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-2xl bg-emerald-50/70 hover:bg-emerald-100 border border-emerald-200/70 text-emerald-800 active:scale-95 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-1 shadow-sm">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight text-emerald-700">WHATSAPP</span>
        </a>

        {/* 3. Instant Brochure Download */}
        <a
          href="#download-brochure"
          onClick={(e) => {
            if (onOpenBrochure) {
              e.preventDefault();
              onOpenBrochure();
            }
          }}
          className="flex flex-col items-center justify-center p-2 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-200/80 text-gray-800 active:scale-95 transition-all"
          aria-label="Download Master Brochure"
        >
          <div className="w-8 h-8 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mb-1">
            <Download className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight">BROCHURE</span>
        </a>

        {/* 4. Enquire Now / VIP Tour */}
        <button
          onClick={onOpenVipTour}
          className="flex flex-col items-center justify-center p-2 rounded-2xl btn-pristine-orange shadow-pristine-orange text-white active:scale-95 transition-all"
          aria-label="Schedule VIP Site Visit"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center mb-1">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight">ENQUIRE</span>
        </button>
      </div>
    </nav>
  );
};
