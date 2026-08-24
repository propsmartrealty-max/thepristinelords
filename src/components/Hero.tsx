import React, { useState, useRef } from 'react';
import { Download, Calendar, ArrowRight, Waves, ShieldCheck, Volume2, VolumeX, Video, Film, Image as ImageIcon, Sparkles } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';

interface HeroProps {
  onOpenBrochure?: () => void;
  onOpenVipTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVipTour }) => {
  const [videoSource, setVideoSource] = useState<'mp4' | 'youtube' | 'gallery'>('mp4');
  const [isMuted, setIsMuted] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Scraped Direct MP4 Video URL from pristinethe-lords.com
  const mp4VideoUrl = "https://pristinethe-lords.com/images/Websitevideo.mp4";

  // Official YouTube Video ID: MAA4n_Z8nWE
  const youtubeVideoId = "MAA4n_Z8nWE";
  const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1`;

  const toggleAudio = () => {
    if (videoSource === 'mp4' && videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    } else {
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-[96vh] flex items-center justify-center pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden bg-black text-white">
      {/* Ambient Water Blobs with high-clarity translucency */}
      <AmbientWaterBlobs />

      {/* 🎬 DYNAMIC CRYSTAL-CLEAR HIGH-DEFINITION VIDEO / GALLERY */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {videoSource === 'mp4' ? (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-center filter brightness-[1.08] contrast-[1.08] saturate-[1.15]"
            >
              <source src={mp4VideoUrl} type="video/mp4" />
            </video>
          </div>
        ) : videoSource === 'youtube' ? (
          <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center overflow-hidden">
            {/* 16:9 Full-bleed cover container */}
            <div className="relative w-[180vw] h-[180vh] min-w-full min-h-full">
              <iframe
                title="The Lord's by Pristine Developers Official Film"
                src={embedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-full absolute inset-0 object-cover pointer-events-none filter brightness-[1.08] contrast-[1.08] saturate-[1.12]"
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
                className="w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.06] scale-100 transition-transform duration-700"
              />
            </div>
          ))
        )}

        {/* 🌟 Ultra-Clean Crystal-Clear Vignette for Maximum Contrast and Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/55 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Project Subtitle Pill */}
        <div className="inline-flex items-center space-x-2 px-5 py-1.5 rounded-full glass-card-luxe mb-5 shadow-2xl bg-black/40 backdrop-blur-md border border-white/30">
          <Waves className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-white font-google">
            THE LORD'S BY PRISTINE DEVELOPER
          </span>
        </div>

        {/* Location & Key Meta Pill Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 text-xs sm:text-sm font-google">
          <div className="px-5 py-2 rounded-full glass-card-luxe bg-black/50 backdrop-blur-md border border-white/30 text-white shadow-2xl flex items-center space-x-1.5">
            <span className="text-gray-300">LOCATION:</span>
            <strong className="text-white font-bold">{PROJECT_DETAILS.location}</strong>
          </div>
          <div className="px-5 py-2 rounded-full bg-pristine-orange/90 text-white font-bold shadow-lg border border-white/20">
            {PROJECT_DETAILS.units}
          </div>
          <div className="px-5 py-2 rounded-full glass-card-luxe bg-black/50 backdrop-blur-md border border-white/30 text-white shadow-2xl flex items-center space-x-1.5 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-pristine-orange" />
            <span className="text-gray-300">MAHA RERA:</span>
            <strong className="text-white">{PROJECT_DETAILS.reraNumber}</strong>
          </div>
        </div>

        {/* Official Headline with Enhanced Visibility */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          WHERE ELEGANCE MEETS LEGACY
        </h1>

        {/* Official Verbatim Narrative with Crisp Readability */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-100 font-normal leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          THE LORDS BY PRISTINE DEVELOPERS SETS NEW STANDARDS IN LUXURY AND GRANDEUR. DESIGNED FOR THOSE WHO SEEK THE FINEST, THE LORDS SEAMLESSLY BLENDS TIMELESS ARCHITECTURE WITH MODERN COMFORTS. A MASTERPIECE OF EXCLUSIVITY AND REFINEMENT, THE LORDS REDEFINES SOPHISTICATED LIVING WITH EVERY DETAIL CRAFTED TO PERFECTION.
        </p>

        {/* Action Buttons with Liquid Glass Shimmer */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none mb-10 font-google">
          <a
            href="#download-brochure"
            className="btn-pristine-outline w-full sm:w-auto px-8 py-3.5 rounded-full text-xs tracking-wider flex items-center justify-center space-x-2 shadow-2xl bg-white/95 text-gray-900 border border-white"
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

        {/* 🌟 HERO CINEMATIC VIDEO & PERSPECTIVE CONTROL PILL */}
        <div className="w-full max-w-2xl mx-auto mb-6">
          <div className="p-1.5 rounded-full glass-card-luxe bg-black/60 backdrop-blur-xl border border-white/40 shadow-2xl flex items-center justify-between font-google flex-wrap gap-1">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setVideoSource('mp4')}
                className={`px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-1.5 ${
                  videoSource === 'mp4'
                    ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/20'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>OFFICIAL MP4 FILM</span>
              </button>

              <button
                onClick={() => setVideoSource('youtube')}
                className={`px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-1.5 ${
                  videoSource === 'youtube'
                    ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/20'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>4K WALKTHROUGH</span>
              </button>

              <button
                onClick={() => {
                  setVideoSource('gallery');
                  setActiveSlide(0);
                }}
                className={`px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-1.5 ${
                  videoSource === 'gallery'
                    ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/20'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>PERSPECTIVES</span>
              </button>
            </div>

            {/* Audio Toggle Button */}
            {(videoSource === 'mp4' || videoSource === 'youtube') && (
              <button
                onClick={toggleAudio}
                className="p-2 rounded-full hover:bg-white/20 text-white transition-colors flex items-center space-x-1 px-3"
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
                aria-label={isMuted ? "Unmute sound" : "Mute sound"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-gray-300" />
                ) : (
                  <Volume2 className="w-4 h-4 text-pristine-orange animate-pulse" />
                )}
                <span className="text-[10px] uppercase font-bold text-gray-200 hidden sm:inline">
                  {isMuted ? 'MUTED' : 'LIVE SOUND'}
                </span>
              </button>
            )}
          </div>

          {/* Perspective Sub-Tabs */}
          {videoSource === 'gallery' && (
            <div className="flex items-center justify-center gap-2 mt-3 animate-fadeIn">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-4 py-1 rounded-full text-[11px] font-bold tracking-wider transition-all ${
                    activeSlide === idx
                      ? 'bg-pristine-orange text-white shadow-md'
                      : 'bg-black/60 text-gray-300 hover:text-white hover:bg-black/80 border border-white/20'
                  }`}
                >
                  {slide.tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Official Financing Seal Banner with Contrast */}
        <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-full glass-card-luxe bg-black/60 backdrop-blur-md border border-white/30 text-white text-xs font-google shadow-2xl">
          <span className="text-gray-300">THIS PROJECT IS FINANCED BY:</span>
          <strong className="text-white font-bold tracking-wide">{PROJECT_DETAILS.financedBy}</strong>
        </div>
      </div>
    </section>
  );
};
