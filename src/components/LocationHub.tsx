import React, { useState } from 'react';
import { LANDMARKS } from '../data/legacyData';
import { PROJECT_DETAILS } from '../data/projectData';
import { MapPin, Navigation, Compass, ExternalLink, Waves, Sparkles, Car, Layers } from 'lucide-react';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';
import { GlassTiltCard } from './GlassTiltCard';

interface LocationHubProps {
  onOpenVipTour: () => void;
}

export const LocationHub: React.FC<LocationHubProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [mapLayer, setMapLayer] = useState<'roadmap' | 'satellite'>('roadmap');

  const categories = ['All', 'High Street & Dining', 'Transit & Arteries', 'IT & Business Hubs', 'Super-specialty Hospitals', 'Elite Education'];

  const filteredLandmarks = LANDMARKS.filter(
    item => activeCategory === 'All' || item.category === activeCategory
  );

  const embedUrl = mapLayer === 'satellite'
    ? "https://maps.google.com/maps?q=18.5470937,73.7935628&t=k&hl=en&z=17&output=embed"
    : "https://maps.google.com/maps?q=18.5470937,73.7935628&hl=en&z=17&output=embed";

  return (
    <section id="location" className="py-24 bg-gradient-to-b from-[#f8f9fa] via-sky-50/40 to-white relative overflow-hidden uppercase font-sans">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full colorful-chip text-pristine-orange text-xs font-bold uppercase tracking-widest mb-3 font-google">
            <Waves className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>STRATEGIC CONNECTIVITY & GOOGLE MAPS PLACE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            PASHAN - BANER PRIME CORRIDOR
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light font-google">
            SITUATED BESIDE WAKESHWAR TEMPLE ON BANER-PASHAN LINK ROAD, SOMESHWARWADI, PASHAN, PUNE - 411008.
          </p>
        </div>

        {/* 🗺️ OFFICIAL INTERACTIVE GOOGLE MAPS EMBED */}
        <div className="mb-14 glass-card-luxe p-4 sm:p-6 rounded-3xl border border-white/95 shadow-glass-luxury">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-4 border-b border-gray-200/70 gap-3 font-google">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-pristine-orange/15 text-pristine-orange flex items-center justify-center shadow-sm flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-gray-900">
                  THE LORDS BY PRISTINE DEVELOPERS
                </h3>
                <span className="text-xs text-gray-500 font-mono">
                  18.5470937° N, 73.7935628° E (BESIDE WAKESHWAR TEMPLE)
                </span>
              </div>
            </div>

            {/* Satellite / Road Map Toggle and Direct Link */}
            <div className="flex items-center space-x-2 flex-wrap gap-1">
              <div className="p-1 rounded-full bg-gray-100 border border-gray-200 flex items-center space-x-1 text-xs font-bold">
                <button
                  onClick={() => setMapLayer('roadmap')}
                  className={`px-3 py-1.5 rounded-full transition-all ${
                    mapLayer === 'roadmap'
                      ? 'bg-white text-pristine-orange shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  ROADMAP
                </button>
                <button
                  onClick={() => setMapLayer('satellite')}
                  className={`px-3 py-1.5 rounded-full transition-all ${
                    mapLayer === 'satellite'
                      ? 'bg-white text-pristine-orange shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  SATELLITE 3D
                </button>
              </div>

              <a
                href={PROJECT_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pristine-orange px-5 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider shadow-pristine-orange flex items-center space-x-1.5 whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>OPEN IN GOOGLE MAPS GPS</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Interactive Responsive Iframe Container */}
          <div className="relative w-full h-[380px] sm:h-[480px] rounded-2xl overflow-hidden border border-gray-200/80 shadow-inner bg-gray-100">
            <iframe
              title="The Lords by Pristine Developers Google Map Place"
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10 font-google">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === category
                  ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                  : 'glass-card-luxe border border-white/80 text-gray-700 hover:text-gray-900 hover:bg-white'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Landmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-google">
          {filteredLandmarks.map((landmark) => (
            <GlassTiltCard
              key={landmark.name}
              className="p-6 glass-card-luxe border border-white/90 shadow-glass-luxury flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200/60 text-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-pristine-orange bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200/50">
                    {landmark.category}
                  </span>
                  <span className="font-mono text-gray-500 font-bold">
                    {landmark.distanceKm} KM
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-gray-900 mb-1">
                  {landmark.name}
                </h3>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
                <span className="text-gray-500 font-light">ESTIMATED DRIVE:</span>
                <span className="font-bold text-gray-900 font-mono bg-gray-50 px-2 py-0.5 rounded-md border border-gray-200">
                  {landmark.driveTimeMins} MINS
                </span>
              </div>
            </GlassTiltCard>
          ))}
        </div>
      </div>

      <WaterWaveDivider fillColor="#ffffff" className="mt-16" />
    </section>
  );
};
