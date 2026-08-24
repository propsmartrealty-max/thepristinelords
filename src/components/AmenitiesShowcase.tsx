import React, { useState } from 'react';
import { OFFICIAL_AMENITIES } from '../data/projectData';
import { Calendar, X, Waves, Sparkles } from 'lucide-react';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';
import { GlassTiltCard } from './GlassTiltCard';

interface AmenitiesShowcaseProps {
  onOpenBrochure?: () => void;
  onOpenVipTour: () => void;
}

export const AmenitiesShowcase: React.FC<AmenitiesShowcaseProps> = ({ onOpenVipTour }) => {
  const [activeModalImage, setActiveModalImage] = useState<{ title: string; image: string; desc?: string } | null>(null);

  return (
    <section id="amenities" className="py-24 bg-gradient-to-b from-[#f8f9fa] via-sky-50/40 to-white relative overflow-hidden">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-card-luxe border border-white/90 text-pristine-orange text-xs font-bold uppercase tracking-widest mb-3 font-google">
            <Waves className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>THE LORD'S AMENITIES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            AMENITIES
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Gallery Grid with all official amenities - 3D Tilt Glare Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFICIAL_AMENITIES.map((amenity) => (
            <GlassTiltCard
              key={amenity.id}
              onClick={() => setActiveModalImage({ title: amenity.title, image: amenity.image, desc: amenity.description })}
              className="glass-card-luxe overflow-hidden border border-white/90 group cursor-pointer shadow-glass-luxury"
            >
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-pristine-orange bg-white/95 backdrop-blur-md px-3 py-1 rounded-full inline-block mb-1.5 shadow-sm font-google">
                    {amenity.highlightTag}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-white group-hover:text-pristine-orange transition-colors">
                    {amenity.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 bg-white/60 backdrop-blur-md rounded-b-3xl">
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 font-light">
                  {amenity.description}
                </p>
              </div>
            </GlassTiltCard>
          ))}
        </div>

        {/* Glassmorphic Callout Action Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl glass-card-luxe border border-white/90 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-glass-luxury">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-pristine-orange text-xs font-bold uppercase tracking-wider mb-1 font-google">
              <Sparkles className="w-4 h-4" />
              <span>ELITE CLUB ROYALE & SKY DECK</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
              DISCOVER OVER 20+ CURATED LIFESTYLE AMENITIES
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mt-1 font-light">
              SKY LOUNGE, FITNESS FORGE, PRIVATE CINEMA, SPA, SMASH COURT & BADMINTON ARENA.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenVipTour}
              className="btn-pristine-orange px-8 py-3.5 rounded-2xl text-xs uppercase tracking-wider shadow-pristine-orange whitespace-nowrap font-google"
            >
              ENQUIRE NOW
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeModalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xl animate-fadeIn font-sans">
          <div className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/80 shadow-2xl">
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-black flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeModalImage.image}
              alt={activeModalImage.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-6 bg-white">
              <h3 className="font-serif text-2xl font-bold text-gray-900">{activeModalImage.title}</h3>
              {activeModalImage.desc && (
                <p className="text-gray-700 text-xs sm:text-sm mt-2 font-light">{activeModalImage.desc}</p>
              )}
            </div>
          </div>
        </div>
      )}

      <WaterWaveDivider fillColor="#ffffff" className="mt-16" />
    </section>
  );
};
