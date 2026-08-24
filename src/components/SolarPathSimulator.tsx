import React, { useState } from 'react';
import { Sun, Moon, Sunrise, Sunset, Waves, Sparkles, Compass, Eye } from 'lucide-react';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';
import { GlassTiltCard } from './GlassTiltCard';

export const SolarPathSimulator: React.FC = () => {
  const [timeIndex, setTimeIndex] = useState(2); // Default to Golden Hour

  const times = [
    {
      time: "07:00 AM",
      label: "MORNING SUNRISE",
      icon: Sunrise,
      image: "https://static.wixstatic.com/media/53bf92_cdbaa9ee5fbd4fed9806a57c489a8aec~mv2.jpg/v1/fit/w_1200,h_800,q_90,enc_avif,quality_auto/53bf92_cdbaa9ee5fbd4fed9806a57c489a8aec~mv2.jpg",
      highlight: "EASTERN SUNLIGHT ILLUMINATES LIVING SUITES & BREAKFAST DECKS OVERLOOKING SOMESHWARWADI GREENERY.",
      filter: "sepia(0.2) saturate(1.1) brightness(1.05)",
      skyGradient: "from-amber-100/40 via-sky-100/30 to-white"
    },
    {
      time: "12:00 PM",
      label: "MIDDAY AMBIENCE",
      icon: Sun,
      image: "https://static.wixstatic.com/media/53bf92_022879ec03124281a554ebb14133da5e~mv2.jpg/v1/fit/w_1200,h_800,q_90,enc_avif,quality_auto/53bf92_022879ec03124281a554ebb14133da5e~mv2.jpg",
      highlight: "SGU SOLAR CONTROL GLASS BLOCKS HARSH INFRARED HEAT WHILE FLOODING ITALIAN MARBLE FLOORS WITH NATURAL DAYLIGHT.",
      filter: "brightness(1.08) contrast(1.05)",
      skyGradient: "from-sky-100/40 via-blue-50/20 to-white"
    },
    {
      time: "05:30 PM",
      label: "GOLDEN HOUR SUNSET",
      icon: Sunset,
      image: "https://static.wixstatic.com/media/53bf92_ba5d3cb5bf81471faf021d322affb1e5~mv2.jpg/v1/fit/w_1200,h_800,q_90,enc_avif,quality_auto/53bf92_ba5d3cb5bf81471faf021d322affb1e5~mv2.jpg",
      highlight: "WARM AMBER HORIZONS CAST OVER PASHAN LAKE AND THE BANER HILL RIDGE AS SEEN FROM EXPANSIVE TERRACES.",
      filter: "sepia(0.35) saturate(1.3) hue-rotate(-10deg)",
      skyGradient: "from-orange-100/50 via-amber-50/30 to-white"
    },
    {
      time: "09:00 PM",
      label: "STARLIGHT NIGHT",
      icon: Moon,
      image: "https://static.wixstatic.com/media/53bf92_a732dc7d5fc64454b3fa7e982e4834ac~mv2.jpg/v1/fit/w_1200,h_800,q_90,enc_avif,quality_auto/53bf92_a732dc7d5fc64454b3fa7e982e4834ac~mv2.jpg",
      highlight: "BREATHTAKING CITY LIGHTS FROM LEVEL 34 SKY LOUNGE WITH STARGAZING TELESCOPES AND PRIVATE CABANA SEATING.",
      filter: "brightness(0.9) contrast(1.15) saturate(1.1)",
      skyGradient: "from-slate-200/50 via-sky-100/20 to-white"
    }
  ];

  const current = times[timeIndex];

  return (
    <section id="sunlight-simulation" className="py-24 bg-gradient-to-b from-white via-sky-50/20 to-white relative overflow-hidden uppercase font-sans">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-card-luxe border border-white/90 text-pristine-orange text-xs font-bold uppercase tracking-widest mb-3 font-google">
            <Compass className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>HELIODON & SOLAR TRAJECTORY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            SOLAR PATH & DAY-TO-NIGHT VIEWS
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light font-google">
            INTERACTIVELY SIMULATE HOW NATURAL SUNLIGHT, LAKE BREEZES, AND STARLIGHT ILLUMINATE THE LORD'S 34-STOREY TOWERS ACROSS 24 HOURS.
          </p>
        </div>

        {/* Time Selector Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10 font-google">
          {times.map((t, idx) => {
            const Icon = t.icon;
            const isActive = timeIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setTimeIndex(idx)}
                className={`px-5 sm:px-7 py-3 rounded-full text-xs font-bold transition-all duration-300 flex items-center space-x-2 ${
                  isActive
                    ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                    : 'glass-card-luxe border border-white/80 text-gray-700 hover:text-gray-900 hover:bg-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{t.label} ({t.time})</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Simulation Showcase Card */}
        <div className="max-w-5xl mx-auto glass-card-luxe rounded-3xl p-6 sm:p-10 border border-white/90 shadow-glass-luxury">
          <div className="relative rounded-2xl overflow-hidden bg-black min-h-[380px] sm:min-h-[480px] shadow-inner flex items-center justify-center">
            <img
              src={current.image}
              alt={current.label}
              className="w-full h-full object-cover max-h-[500px] transition-all duration-1000 ease-out"
              style={{ filter: current.filter }}
            />

            {/* Floating Info Pill on Image */}
            <div className="absolute top-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none">
              <div className="px-4 py-2 rounded-full glass-card-luxe border border-white/90 text-xs font-bold text-gray-900 font-google flex items-center space-x-2 shadow-sm">
                <Sun className="w-4 h-4 text-pristine-orange animate-spin-slow" />
                <span>SIMULATION TIME: {current.time}</span>
              </div>
              <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 text-xs font-bold text-gray-800 font-google">
                {current.label}
              </div>
            </div>

            {/* Bottom Highlight Caption */}
            <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-google font-light leading-relaxed">
              <span className="text-pristine-orange font-bold mr-1.5 block sm:inline">ARCHITECTURAL HIGHLIGHT:</span>
              <span>{current.highlight}</span>
            </div>
          </div>
        </div>
      </div>

      <WaterWaveDivider fillColor="#f8f9fa" className="mt-16" />
    </section>
  );
};
