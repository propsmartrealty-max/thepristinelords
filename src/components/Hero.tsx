import React, { useState } from 'react';
import { Download, Calendar, ArrowRight, Waves, ShieldCheck, Volume2, VolumeX, Video, Image as ImageIcon, Play, Sparkles, Maximize2 } from 'lucide-react';
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
      tag: 'TOWER ELEVATION',
      desc: 'Monolithic 34-Storey High-Rise Architecture'
    },
    {
      id: 'living-hall',
      title: 'GRAND MARBLE LIVING SUITES',
      url: 'https://static.wixstatic.com/media/53bf92_022879ec03124281a554ebb14133da5e~mv2.jpg/v1/fit/w_1800,h_1100,q_95,enc_avif,quality_auto/53bf92_022879ec03124281a554ebb14133da5e~mv2.jpg',
      tag: 'MARBLE INTERIORS',
      desc: 'Imported Statuario Italian Marble Living & Dining Promenade'
    },
    {
      id: 'sky-lounge',
      title: 'LEVEL 34 SKY LOUNGE & DECK',
      url: 'https://static.wixstatic.com/media/53bf92_a732dc7d5fc64454b3fa7e982e4834ac~mv2.jpg/v1/fit/w_1800,h_1100,q_95,enc_avif,quality_auto/53bf92_a732dc7d5fc64454b3fa7e982e4834ac~mv2.jpg',
      tag: 'SKY DECK',
      desc: 'Open-Air Starlight Lounge Overlooking Pashan Lake'
    }
  ];

  // Official YouTube Full Walkthrough Video
  const youtubeVideoId = "MAA4n_Z8nWE";
  const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${youtubeVideoId}&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1`;

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-sky-50/20 to-white text-gray-900 font-sans uppercase">
      {/* Morphing Water Ambient Blobs */}
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Project Subtitle Pill */}
        <div className="inline-flex items-center space-x-2 px-5 py-1.5 rounded-full colorful-chip mb-4 shadow-sm font-google">
          <Waves className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-pristine-orange">
            THE LORD'S BY PRISTINE DEVELOPER
          </span>
        </div>

        {/* Location & Key Meta Pill Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 text-xs sm:text-sm font-google">
          <div className="px-4 py-1.5 rounded-full glass-card-luxe border border-white/90 text-gray-800 shadow-sm flex items-center space-x-1.5">
            <span className="text-gray-500">LOCATION:</span>
            <strong className="text-gray-900 font-bold">{PROJECT_DETAILS.location}</strong>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-pristine-orange font-bold shadow-sm">
            {PROJECT_DETAILS.units}
          </div>
          <div className="px-4 py-1.5 rounded-full glass-card-luxe border border-white/90 text-gray-800 shadow-sm flex items-center space-x-1.5 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-pristine-orange" />
            <span className="text-gray-500">MAHARERA:</span>
            <strong className="text-gray-900">{PROJECT_DETAILS.reraNumber}</strong>
          </div>
        </div>

        {/* Official Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-5">
          WHERE ELEGANCE MEETS LEGACY
        </h1>

        {/* Official Verbatim Narrative */}
        <p className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-gray-600 font-light leading-relaxed mb-8 font-google">
          THE LORDS BY PRISTINE DEVELOPERS SETS NEW STANDARDS IN LUXURY AND GRANDEUR. DESIGNED FOR THOSE WHO SEEK THE FINEST, THE LORDS SEAMLESSLY BLENDS TIMELESS ARCHITECTURE WITH MODERN COMFORTS. A MASTERPIECE OF EXCLUSIVITY AND REFINEMENT, THE LORDS REDEFINES SOPHISTICATED LIVING WITH EVERY DETAIL CRAFTED TO PERFECTION.
        </p>

        {/* 🌟 PROMINENT HIGH-DEFINITION CINEMA & PERSPECTIVE STAGE */}
        <div className="w-full max-w-5xl mx-auto mb-10">
          <div className="glass-card-luxe rounded-3xl p-3 sm:p-5 shadow-2xl border border-white/95">
            {/* Stage Mode Switcher & Audio Bar */}
            <div className="flex items-center justify-between gap-2 mb-3 px-2 flex-wrap font-google">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('video')}
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center space-x-2 ${
                    viewMode === 'video'
                      ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                      : 'bg-white/80 text-gray-700 hover:text-gray-900 border border-gray-200'
                  }`}
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>OFFICIAL 4K CINEMATIC FILM</span>
                </button>

                <button
                  onClick={() => {
                    setViewMode('gallery');
                    setActiveSlide(0);
                  }}
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center space-x-2 ${
                    viewMode === 'gallery'
                      ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                      : 'bg-white/80 text-gray-700 hover:text-gray-900 border border-gray-200'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>ARCHITECTURAL PERSPECTIVES</span>
                </button>
              </div>

              {/* Live Audio Control */}
              {viewMode === 'video' && (
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:text-pristine-orange hover:border-pristine-orange text-xs font-bold flex items-center space-x-1.5 shadow-sm transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-gray-400" /> : <Volume2 className="w-4 h-4 text-pristine-orange animate-pulse" />}
                  <span>{isMuted ? 'AUDIO: MUTED' : 'AUDIO: LIVE SOUND'}</span>
                </button>
              )}
            </div>

            {/* Video & Image Frame with Crisp 16:9 Aspect Ratio */}
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video w-full shadow-inner flex items-center justify-center border border-gray-800">
              {viewMode === 'video' ? (
                <iframe
                  title="The Lord's by Pristine Developers Walkthrough Film"
                  src={embedUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                  className="w-full h-full object-cover border-0"
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={heroSlides[activeSlide].url}
                    alt={heroSlides[activeSlide].title}
                    className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.05] transition-all duration-700"
                  />
                  {/* Perspective Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/20 text-left text-white font-google flex items-center justify-between">
                    <div>
                      <strong className="text-sm block font-serif text-white">{heroSlides[activeSlide].title}</strong>
                      <span className="text-xs text-gray-300 font-light">{heroSlides[activeSlide].desc}</span>
                    </div>
                    <span className="text-[10px] text-pristine-orange font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/20">
                      {heroSlides[activeSlide].tag}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Architectural Still Perspective Thumbnails (when gallery is active) */}
            {viewMode === 'gallery' && (
              <div className="grid grid-cols-3 gap-3 mt-3 font-google">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`p-2 rounded-2xl border text-left transition-all ${
                      activeSlide === idx
                        ? 'border-pristine-orange bg-orange-50 shadow-md'
                        : 'border-gray-200 bg-white/80 hover:bg-white text-gray-600'
                    }`}
                  >
                    <span className="text-[10px] font-bold text-gray-900 block truncate">{slide.title}</span>
                    <span className="text-[9px] text-pristine-orange font-bold">{slide.tag}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none mb-8 font-google">
          <a
            href="#download-brochure"
            className="btn-pristine-outline w-full sm:w-auto px-8 py-3.5 rounded-full text-xs tracking-wider flex items-center justify-center space-x-2 shadow-sm border border-gray-300 bg-white"
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

        {/* Official Financing Seal Banner */}
        <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-full glass-card-luxe border border-white/90 text-gray-800 text-xs font-google shadow-sm">
          <span className="text-gray-500">THIS PROJECT IS FINANCED BY:</span>
          <strong className="text-gray-900 font-bold tracking-wide">{PROJECT_DETAILS.financedBy}</strong>
        </div>
      </div>
    </section>
  );
};
