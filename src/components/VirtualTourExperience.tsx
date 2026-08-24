import React, { useState } from 'react';
import { Eye, Compass, Maximize2, Sparkles, Waves, Move, RotateCcw } from 'lucide-react';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';
import { GlassTiltCard } from './GlassTiltCard';

export const VirtualTourExperience: React.FC = () => {
  const [activeRoom, setActiveRoom] = useState<'living' | 'master' | 'sky'>('living');
  const [panOffset, setPanOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const rooms = {
    living: {
      title: "PALATIAL ITALIAN MARBLE LIVING SUITE",
      type: "INTERIOR 360° PANORAMA",
      image: "https://static.wixstatic.com/media/53bf92_022879ec03124281a554ebb14133da5e~mv2.jpg/v1/fit/w_1800,h_1000,q_90,enc_avif,quality_auto/53bf92_022879ec03124281a554ebb14133da5e~mv2.jpg",
      description: "EXPANSIVE 36-FOOT LIVING & DINING PROMENADE WITH SEAMLESS SGU GLASS BALCONY ACCESS.",
      hotspots: ["Imported Statuario Italian Marble", "SGU Acoustic Glass Façade", "Double Balcony Deck"]
    },
    master: {
      title: "PRIMARY MASTER BEDROOM SUITE",
      type: "SUITE 360° PANORAMA",
      image: "https://static.wixstatic.com/media/53bf92_e276491ad1f9499697e3ad4a31ca21de~mv2.jpg/v1/fit/w_1800,h_1000,q_90,enc_avif,quality_auto/53bf92_e276491ad1f9499697e3ad4a31ca21de~mv2.jpg",
      description: "PRIVATE MASTER RETREAT WITH ATTACHED DESIGNER BATHROOM, WALK-IN WARDROBE & PRIVATE DECK.",
      hotspots: ["Yale Mortise Security Lock", "Wooden-Finished Balcony", "Hot Water Ducting System"]
    },
    sky: {
      title: "LEVEL 34 SKY LOUNGE & STARGAZING DECK",
      type: "ROOFTOP 360° PANORAMA",
      image: "https://static.wixstatic.com/media/53bf92_a732dc7d5fc64454b3fa7e982e4834ac~mv2.jpg/v1/fit/w_1800,h_1000,q_90,enc_avif,quality_auto/53bf92_a732dc7d5fc64454b3fa7e982e4834ac~mv2.jpg",
      description: "STARLIT ENTERTAINMENT LOUNGE WITH 360-DEGREE UNHINDERED VIEWS ACROSS PASHAN LAKE & BANER.",
      hotspots: ["Observation Telescope Pod", "Private Resident Cabanas", "Open-Air Starlight Bar"]
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX - panOffset);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const newOffset = e.clientX - startX;
    // Bound pan between -200 and +200
    if (newOffset > -250 && newOffset < 250) {
      setPanOffset(newOffset);
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const current = rooms[activeRoom];

  return (
    <section id="virtual-tour" className="py-24 bg-gradient-to-b from-white via-sky-50/20 to-white relative overflow-hidden uppercase font-sans">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-card-luxe border border-white/90 text-pristine-orange text-xs font-bold uppercase tracking-widest mb-3 font-google">
            <Eye className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>INTERACTIVE VR PERSPECTIVES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            360° VIRTUAL WALKTHROUGH
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light font-google">
            CLICK AND DRAG TO PAN AROUND BESPOKE INTERIORS AND LEVEL 34 SKY DECK AT THE LORD'S BY PRISTINE DEVELOPERS.
          </p>
        </div>

        {/* Room Switcher Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10 font-google">
          <button
            onClick={() => {
              setActiveRoom('living');
              setPanOffset(0);
            }}
            className={`px-6 py-3 rounded-full text-xs font-bold transition-all ${
              activeRoom === 'living'
                ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                : 'glass-card-luxe border border-white/80 text-gray-700 hover:text-gray-900'
            }`}
          >
            GRAND LIVING HALL
          </button>

          <button
            onClick={() => {
              setActiveRoom('master');
              setPanOffset(0);
            }}
            className={`px-6 py-3 rounded-full text-xs font-bold transition-all ${
              activeRoom === 'master'
                ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                : 'glass-card-luxe border border-white/80 text-gray-700 hover:text-gray-900'
            }`}
          >
            MASTER BEDROOM SUITE
          </button>

          <button
            onClick={() => {
              setActiveRoom('sky');
              setPanOffset(0);
            }}
            className={`px-6 py-3 rounded-full text-xs font-bold transition-all ${
              activeRoom === 'sky'
                ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                : 'glass-card-luxe border border-white/80 text-gray-700 hover:text-gray-900'
            }`}
          >
            LEVEL 34 SKY LOUNGE
          </button>
        </div>

        {/* 360 Interactive Panorama Container */}
        <div className="max-w-5xl mx-auto glass-card-luxe rounded-3xl p-6 sm:p-10 border border-white/90 shadow-glass-luxury">
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={`relative rounded-2xl overflow-hidden bg-black min-h-[400px] sm:min-h-[500px] shadow-inner select-none cursor-grab ${
              isDragging ? 'cursor-grabbing' : ''
            }`}
          >
            <img
              src={current.image}
              alt={current.title}
              className="w-[125%] h-full object-cover max-h-[520px] transition-transform duration-100 ease-out will-change-transform"
              style={{
                transform: `translateX(${panOffset}px) scale(1.08)`,
              }}
              draggable={false}
            />

            {/* Top Interactive Indicator */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
              <div className="px-4 py-2 rounded-full glass-card-luxe border border-white/90 text-xs font-bold text-gray-900 font-google flex items-center space-x-2 shadow-sm">
                <Move className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
                <span>CLICK & DRAG TO EXPLORE 360°</span>
              </div>

              <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 text-xs font-bold text-gray-800 font-google hidden sm:block">
                {current.type}
              </div>
            </div>

            {/* Hotspot Pills */}
            <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/20 text-white font-google">
              <h3 className="font-serif font-bold text-lg text-white mb-1">
                {current.title}
              </h3>
              <p className="text-xs text-gray-300 font-light mb-3">
                {current.description}
              </p>

              <div className="flex flex-wrap gap-2 text-[11px]">
                {current.hotspots.map((hs, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                    ✦ {hs}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaterWaveDivider fillColor="#f8f9fa" className="mt-16" />
    </section>
  );
};
