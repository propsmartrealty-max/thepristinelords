import React, { useState } from 'react';
import { LANDMARKS } from '../data/legacyData';
import { PROJECT_DETAILS } from '../data/projectData';
import { MapPin, Navigation, Compass, ExternalLink, Waves, Sparkles, Car } from 'lucide-react';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';
import { GlassTiltCard } from './GlassTiltCard';

interface LocationHubProps {
  onOpenVipTour: () => void;
}

export const LocationHub: React.FC<LocationHubProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [mapType, setMapType] = useState<'map' | 'satellite'>('map');

  const categories = ['All', 'High Street & Dining', 'Transit & Arteries', 'IT & Business Hubs', 'Super-specialty Hospitals', 'Elite Education'];

  const filteredLandmarks = LANDMARKS.filter(
    item => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <section id="location" className="py-24 bg-gradient-to-b from-[#f8f9fa] via-sky-50/40 to-white relative overflow-hidden">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-card-luxe border border-white/90 text-pristine-orange text-xs font-bold uppercase tracking-widest mb-3 font-google">
            <Waves className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>STRATEGIC CONNECTIVITY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            PASHAN - BANER PRIME CORRIDOR
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
            SITUATED BESIDE WAKESHWAR TEMPLE ON BANER-PASHAN LINK ROAD, CONNECTING EFFORTLESSLY TO BANER, AUNDH, AND HINJEWADI.
          </p>
        </div>

        {/* 🗺️ OFFICIAL INTERACTIVE GOOGLE MAPS EMBED */}
        <div className="mb-14 glass-card-luxe p-4 sm:p-6 rounded-3xl border border-white/95 shadow-glass-luxury">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-4 border-b border-gray-200/70 gap-3 font-google">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-pristine-orange/15 text-pristine-orange flex items-center justify-center shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-gray-900">
                  THE LORDS BY PRISTINE DEVELOPERS
                </h3>
                <span className="text-xs text-gray-500 font-mono">
                  18.5470937° N, 73.7935628° E (PASHAN, PUNE)
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href={PROJECT_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pristine-orange px-5 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider shadow-pristine-orange flex items-center space-x-1.5 whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>GET DIRECTIONS</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Interactive Responsive Iframe Container */}
          <div className="relative w-full h-[360px] sm:h-[440px] rounded-2xl overflow-hidden border border-gray-200/80 shadow-inner bg-gray-100">
            <iframe
              title="The Lords by Pristine Developers Google Map"
              src={PROJECT_DETAILS.googleMapsEmbedUrl}
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
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10 font-google">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                  : 'bg-white/80 text-gray-700 hover:text-gray-900 border border-gray-200/90'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Landmarks 3D Tilt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredLandmarks.map((item) => (
            <GlassTiltCard
              key={item.id}
              className="p-6 glass-card-luxe border border-white/90 shadow-glass-luxury flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between mb-3 font-google">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-pristine-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60">
                    {item.category}
                  </span>
                  <div className="text-right">
                    <span className="font-bold text-sm text-gray-900 flex items-center justify-end space-x-1">
                      <Car className="w-3.5 h-3.5 text-pristine-orange" />
                      <span>{item.driveTimeMins} MINS</span>
                    </span>
                    <span className="text-[10px] text-gray-500 block font-light">({item.distanceKm} KM)</span>
                  </div>
                </div>

                <h3 className="font-serif font-bold text-base text-gray-900 mb-2 group-hover:text-pristine-orange transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </GlassTiltCard>
          ))}
        </div>

        {/* Google Maps External Action Capsule */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card-luxe border border-white/90 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-glass-luxury font-google">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-pristine-orange/15 text-pristine-orange flex items-center justify-center flex-shrink-0 shadow-sm">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <strong className="text-gray-900 text-sm block">THE LORD'S OFFICIAL LOCATION:</strong>
              <span className="text-xs text-gray-600 font-light">{PROJECT_DETAILS.siteAddress}</span>
            </div>
          </div>

          <a
            href={PROJECT_DETAILS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pristine-outline px-7 py-3 rounded-full text-xs flex items-center space-x-2 font-bold whitespace-nowrap shadow-sm border border-white/90"
          >
            <span>OPEN IN GOOGLE MAPS APP</span>
            <ExternalLink className="w-3.5 h-3.5 text-pristine-orange" />
          </a>
        </div>
      </div>

      <WaterWaveDivider fillColor="#ffffff" className="mt-16" />
    </section>
  );
};
