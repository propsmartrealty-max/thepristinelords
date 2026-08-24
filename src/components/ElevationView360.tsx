import React, { useState } from 'react';
import { Building2, Eye, Compass, Sun, Moon, Mountain, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

interface ElevationViewProps {
  onOpenBrochure: () => void;
  onOpenVipTour: () => void;
}

export const ElevationView360: React.FC<ElevationViewProps> = ({ onOpenBrochure, onOpenVipTour }) => {
  const [selectedBand, setSelectedBand] = useState<number>(0);
  const [viewAngle, setViewAngle] = useState<'pashan' | 'baner' | 'sunset'>('pashan');

  const elevationBands = [
    {
      title: "Crown Sky Promenade (Level 34)",
      floors: "34th Rooftop Deck",
      altitude: "115+ Metres Above Ground",
      category: "Sky Deck Horizon",
      description: "Pune West's highest vantage point. Perched at 115+ metres, offering 360-degree unhindered sightlines of the Pashan bio-diversity hills, Baner High Street skyline, and fiery golden sunsets.",
      viewImagePashan: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      viewImageBaner: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
      viewImageSunset: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Temperature-Controlled Infinity Pool",
        "Astronomical Sky Observatory & Telescopes",
        "Starlight Cabanas with Fire-bowls",
        "100% Zero Obstruction Guarantee"
      ]
    },
    {
      title: "Imperial Sky Penthouses (Levels 31 - 33)",
      floors: "31st to 33rd Floors",
      altitude: "98 - 108 Metres",
      category: "Imperial Duplexes & Penthouses",
      description: "Exclusive sky-villas with double-height 22ft living halls, private plunge pools, and expansive sunrise and sunset viewing balconies.",
      viewImagePashan: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80",
      viewImageBaner: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      viewImageSunset: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Private High-Speed Direct Access Lift",
        "Double-Height 22ft Grand Glass Facade",
        "Private Heated Plunge Pool & Deck",
        "Unrivalled Serenity & Privacy"
      ]
    },
    {
      title: "Sovereign High-Rise Suites (Levels 15 - 30)",
      floors: "15th to 30th Floors",
      altitude: "50 - 95 Metres",
      category: "4 & 4.5 BHK Signature Suites",
      description: "Positioned well above the tree canopy, these palatial 4 & 4.5 BHK residences capture perpetual mountain breezes and mesmerizing evening city illuminations.",
      viewImagePashan: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      viewImageBaner: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80",
      viewImageSunset: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      features: [
        "34ft Living Room with Panoramic Balcony",
        "3-Side Open Ventilation Geometry",
        "3.2m Clear Ceiling Volume",
        "Attached Staff Quarters"
      ]
    },
    {
      title: "Regal Canopy Residences (Levels 5 - 14)",
      floors: "5th to 14th Floors",
      altitude: "18 - 48 Metres",
      category: "3 & 3.5 BHK Luxury Residences",
      description: "Direct visual connection with the lush green foliage of Pashan hills and the multi-layered Japanese zen gardens in the central podium.",
      viewImagePashan: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
      viewImageBaner: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      viewImageSunset: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Lush Tree-Level Green Sanctuary Views",
        "Acoustic Double-Glazed Noise Isolation",
        "Direct Podium Amenity Access",
        "Generous 1,554 - 1,739 Sq.Ft Carpet"
      ]
    },
    {
      title: "Club Royale & Grand Entry Portals (Levels 1 - 4)",
      floors: "Ground & Podiums 1-3",
      altitude: "0 - 15 Metres",
      category: "Lifestyle Clubhouse & Portals",
      description: "Double-height air-conditioned arrival lobbies with 5-star concierge desks, PGA Golf Simulator, 24-seater Dolby Atmos theatre, and Turkish Hammam spa.",
      viewImagePashan: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      viewImageBaner: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      viewImageSunset: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Double-Height Chandeliered Grand Lobbies",
        "Full-Swing PGA Golf Simulation Arena",
        "24-Seater Dolby Atmos Cinema",
        "Covered Multi-Level Podium Parking"
      ]
    }
  ];

  const currentBand = elevationBands[selectedBand];

  const getActiveViewImage = () => {
    if (viewAngle === 'baner') return currentBand.viewImageBaner;
    if (viewAngle === 'sunset') return currentBand.viewImageSunset;
    return currentBand.viewImagePashan;
  };

  return (
    <section id="elevation" className="py-24 bg-obsidian-950 relative overflow-hidden border-t border-gold-subtle/20">
      {/* Background Accent Lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-obsidian-900 border border-gold-subtle text-gold-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Building2 className="w-3.5 h-3.5 text-gold-400" />
            <span>34-Storey Monolithic Elevation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Interactive Vertical Elevation & View Simulator
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Select an altitude tier to explore the exact panoramic vistas, architectural volume, and signature features engineered for each floor level.
          </p>
        </div>

        {/* View Perspective Selector */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <button
            onClick={() => setViewAngle('pashan')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
              viewAngle === 'pashan'
                ? 'bg-gold-500 text-obsidian-950 shadow-gold-glow'
                : 'bg-obsidian-900 text-zinc-300 border border-gold-subtle/30 hover:text-white'
            }`}
          >
            <Mountain className="w-4 h-4" />
            <span>Pashan Biodiversity Hills View</span>
          </button>

          <button
            onClick={() => setViewAngle('baner')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
              viewAngle === 'baner'
                ? 'bg-gold-500 text-obsidian-950 shadow-gold-glow'
                : 'bg-obsidian-900 text-zinc-300 border border-gold-subtle/30 hover:text-white'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Baner Skyline & Horizon</span>
          </button>

          <button
            onClick={() => setViewAngle('sunset')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
              viewAngle === 'sunset'
                ? 'bg-gold-500 text-obsidian-950 shadow-gold-glow'
                : 'bg-obsidian-900 text-zinc-300 border border-gold-subtle/30 hover:text-white'
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>Golden Sunset Horizon</span>
          </button>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Vertical Floor Selector */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold px-1">
              Select Vertical Altitude Band
            </span>
            {elevationBands.map((band, idx) => {
              const isSelected = selectedBand === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedBand(idx)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-glass-card border-gold-400 shadow-gold-glow translate-x-2'
                      : 'bg-obsidian-900/70 border-gold-subtle/20 hover:border-gold-subtle/60 hover:bg-obsidian-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                        isSelected ? 'bg-gold-500 text-obsidian-950' : 'bg-obsidian-800 text-gold-300'
                      }`}>
                        {band.floors}
                      </span>
                      <h4 className="font-serif font-bold text-white text-base mt-1.5">
                        {band.title}
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-gold-300 block">{band.altitude}</span>
                      <span className="text-[10px] text-zinc-400">Elevation</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Visual Simulation Display */}
          <div className="lg:col-span-7 bg-glass-card rounded-3xl overflow-hidden border border-gold-subtle/40 shadow-luxury flex flex-col justify-between p-6 sm:p-8">
            <div>
              {/* Visual Banner */}
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-gold-subtle/30 bg-obsidian-950 mb-6 group">
                <img
                  src={getActiveViewImage()}
                  alt={currentBand.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />
                
                {/* Floating Altitude Pill */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="px-3 py-1.5 rounded-lg bg-obsidian-950/85 backdrop-blur-md border border-gold-subtle text-xs font-bold text-gold-300 font-mono">
                    🏔️ Altitude: {currentBand.altitude}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-gold-500/90 text-obsidian-950 text-xs font-bold">
                    {currentBand.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-xs text-zinc-200 bg-obsidian-950/75 backdrop-blur-md p-2.5 rounded-xl border border-gold-subtle/30">
                  <span className="font-semibold text-gold-300">Live Simulation:</span> {viewAngle === 'pashan' ? 'Pashan Hill Green Valley' : viewAngle === 'baner' ? 'Baner Skyline Vista' : 'Western Ghats Golden Sunset'}
                </div>
              </div>

              {/* Band Description */}
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {currentBand.title}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                {currentBand.description}
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {currentBand.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-zinc-200">
                    <CheckCircle className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 border-t border-gold-subtle/20 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-zinc-400">
                Want to experience this exact view in person?
              </span>
              <button
                onClick={onOpenVipTour}
                className="gold-shimmer-btn w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-obsidian-950 flex items-center justify-center space-x-2"
              >
                <span>Book Top-Floor Site Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
