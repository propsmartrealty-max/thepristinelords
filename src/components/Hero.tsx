import React, { useState } from 'react';
import { Download, Calendar, ArrowRight, Waves, ShieldCheck, Volume2, VolumeX, Video, Image as ImageIcon } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';

interface HeroProps {
  onOpenBrochure?: () => void;
  onOpenVipTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVipTour }) => {
  const [viewMode, setViewMode] = useState<'video' | 'gallery'>('video');
  const [isMuted, setIsMuted] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      id: 'tower-elevation',
      title: 'ICONIC 34-STOREY ELEVATION',
      url: 'https://static.wixstatic.com/media/53bf92_cdbaa9ee5fbd4fed9806a57c489a8aec~mv2.jpg/v1/fit/w_1800,h_1100,q_95,enc_avif,quality_auto/53bf92_cdbaa9ee5fbd4fed9806a57c489a8aec~mv2.jpg',
      tag: 'TOWER ELEVATION'
    },
    {
      id: 'living-hall',
      title: 'GRAND MARBLE LIVING SUITES',
      url: 'https://static.wixstatic.com/media/53bf92_022879ec03124281a554ebb14133da5e~mv2.jpg/v1/fit/w_1800,h_1100,q_95,enc_avif,quality_auto/53bf92_022879ec03124281a554ebb14133da5e~mv2.jpg',
      tag: 'MARBLE INTERIORS'
    },
    {
      id: 'sky-lounge',
      title: 'LEVEL 34 SKY LOUNGE & DECK',
      url: 'https://static.wixstatic.com/media/53bf92_a732dc7d5fc64454b3fa7e982e4834ac~mv2.jpg/v1/fit/w_1800,h_1100,q_95,enc_avif,quality_auto/53bf92_a732dc7d5fc64454b3fa7e982e4834ac~mv2.jpg',
      tag: 'SKY DECK'
    }
  ];

  // Official YouTube Walkthrough Video
  const youtubeVideoId = "MAA4n_Z8nWE";
  const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1`;

  return (
    <section className="relative min-h-[96vh] flex items-center justify-center pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-sky-50/20 to-white">
      {/* Morphing Water Fluid Blobs */}
      <AmbientWaterBlobs />

      {/* 🎬 DYNAMIC FULL-BLEED BACKGROUND VIDEO SITTING BEHIND WITH BALANCED SOFT BLUR & ELEGANT VISIBILITY */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {viewMode === 'video' ? (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
            {/* 16:9 Full-bleed cover container */}
            <div className="relative w-[180vw] h-[180vh] min-w-full min-h-full">
              <iframe
                title="The Lord's by Pristine Developers Official Walkthrough"
                src={embedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-full absolute inset-0 object-cover pointer-events-none filter brightness-[1.02] contrast-[1.05] saturate-[1.1]"
                style={{ border: 0 }}
              />
            </div>
          </div>
        ) : (
          heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.04] scale-105 transition-transform duration-1000"
              />
            </div>
          ))
        )}

        {/* 🌟 Soft Glass Luxury Overlay: Balances Video Motion with Crisp Typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Project Subtitle Pill */}
        <div className="inline-flex items-center space-x-2 px-5 py-1.5 rounded-full colorful-chip mb-5 shadow-sm font-google">
          <Waves className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-pristine-orange">
            THE LORD'S BY PRISTINE DEVELOPER
          </span>
        </div>

        {/* Location & Key Meta Pill Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 text-xs sm:text-sm font-google">
          <div className="px-5 py-2 rounded-full glass-card-luxe border border-white/85 text-gray-800 shadow-glass-luxury flex items-center space-x-1.5">
            <span className="text-gray-500">LOCATION:</span>
            <strong className="text-gray-900 font-bold">{PROJECT_DETAILS.location}</strong>
          </div>
          <div className="px-5 py-2 rounded-full bg-gradient-to-r from-pristine-orange/20 via-amber-100/40 to-sky-100/40 border border-pristine-orange/40 text-pristine-orange font-bold shadow-sm">
            {PROJECT_DETAILS.units}
          </div>
          <div className="px-5 py-2 rounded-full glass-card-luxe border border-white/85 text-gray-800 shadow-glass-luxury flex items-center space-x-1.5 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-pristine-orange" />
            <span className="text-gray-500">MAHA RERA:</span>
            <strong className="text-gray-900">{PROJECT_DETAILS.reraNumber}</strong>
          </div>
        </div>

        {/* Official Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6 drop-shadow-sm">
          WHERE ELEGANCE MEETS LEGACY
        </h1>

        {/* Official Verbatim Narrative */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-700 font-normal leading-relaxed mb-8 font-google">
          THE LORDS BY PRISTINE DEVELOPERS SETS NEW STANDARDS IN LUXURY AND GRANDEUR. DESIGNED FOR THOSE WHO SEEK THE FINEST, THE LORDS SEAMLESSLY BLENDS TIMELESS ARCHITECTURE WITH MODERN COMFORTS. A MASTERPIECE OF EXCLUSIVITY AND REFINEMENT, THE LORDS REDEFINES SOPHISTICATED LIVING WITH EVERY DETAIL CRAFTED TO PERFECTION.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none mb-10 font-google">
          <a
            href="#download-brochure"
            className="btn-pristine-outline w-full sm:w-auto px-8 py-3.5 rounded-full text-xs tracking-wider flex items-center justify-center space-x-2 shadow-glass-luxury border border-white/90"
          >
            <Download className="w-4 h-4 text-pristine-orange" />
            <span>DOWNLOAD BROCHURE</span>
          </a>

          <button
            onClick={onOpenVipTour}
            className="btn-pristine-orange w-full sm:w-auto px-8 py-3.5 rounded-full text-xs tracking-wider flex items-center justify-center space-x-2 shadow-pristine-orange group"
          >
            <Calendar className="w-4 h-4" />
            <span>ENQUIRE NOW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* 🌟 HERO PERSPECTIVE & AUDIO CONTROLLER PILL */}
        <div className="w-full max-w-xl mx-auto mb-6">
          <div className="p-1.5 rounded-full glass-card-luxe border border-white/95 shadow-glass-luxury flex items-center justify-between font-google">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setViewMode('video')}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                  viewMode === 'video'
                    ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/70'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>OFFICIAL FILM</span>
              </button>

              <button
                onClick={() => {
                  setViewMode('gallery');
                  setActiveSlide(0);
                }}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                  viewMode === 'gallery'
                    ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/70'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>STILL PERSPECTIVES</span>
              </button>
            </div>

            {/* Audio Toggle */}
            {viewMode === 'video' && (
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full hover:bg-white/80 text-gray-700 hover:text-pristine-orange transition-colors flex items-center space-x-1 px-3"
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
                aria-label={isMuted ? "Unmute sound" : "Mute sound"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-gray-500" />
                ) : (
                  <Volume2 className="w-4 h-4 text-pristine-orange animate-pulse" />
                )}
                <span className="text-[10px] uppercase font-bold text-gray-600 hidden sm:inline">
                  {isMuted ? 'MUTED' : 'LIVE SOUND'}
                </span>
              </button>
            )}
          </div>

          {/* Perspective Sub-Tabs (when Still Perspectives is active) */}
          {viewMode === 'gallery' && (
            <div className="flex items-center justify-center gap-2 mt-3 animate-fadeIn">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-4 py-1 rounded-full text-[11px] font-bold tracking-wider transition-all ${
                    activeSlide === idx
                      ? 'bg-pristine-orange text-white shadow-sm'
                      : 'bg-white/80 text-gray-700 hover:bg-white border border-gray-200'
                  }`}
                >
                  {slide.tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Official Financing Seal Banner */}
        <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-full glass-card-luxe border border-white/90 text-gray-800 text-xs font-google shadow-glass-luxury">
          <span className="text-gray-500">THIS PROJECT IS FINANCED BY:</span>
          <strong className="text-gray-900 font-bold tracking-wide">{PROJECT_DETAILS.financedBy}</strong>
        </div>
      </div>
    </section>
  );
};
