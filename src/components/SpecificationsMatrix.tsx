import React from 'react';
import { Download, Waves } from 'lucide-react';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';
import { GlassTiltCard } from './GlassTiltCard';

interface SpecificationsProps {
  onOpenBrochure?: () => void;
}

export const SpecificationsMatrix: React.FC<SpecificationsProps> = ({ onOpenBrochure }) => {
  const specs = [
    {
      title: "STRUCTURE & BLOCKWORK",
      items: [
        "EARTHQUAKE RESISTANT RCC STRUCTURE.",
        "ALUMINIUM FORM WORK CONSTRUCTION (MIVAN TECH)."
      ]
    },
    {
      title: "DOORS",
      items: [
        "INTERNAL LAMINATE DOORS & DOOR FRAMES.",
        "MAIN DOOR LOCK: DIGITAL LOCK (YALE OR EQUIVALENT).",
        "INTERNAL DOOR LOCK: MORTISED (YALE OR EQUIVALENT).",
        "BOTH SIDE LAMINATED FLUSH DOOR WITH MORTISE LOCK."
      ]
    },
    {
      title: "TOILETS",
      items: [
        "ANTI SKID FLOORING FOR ALL TOILETS.",
        "ALL TOILET WALL TILES UPTO 8 FT LEVEL.",
        "STANDARD CP & SANITARY FITTINGS IN TOILET.",
        "PROVISION FOR EXHAUST FAN.",
        "HOT WATER PROVISION IN MASTER BATHROOM."
      ]
    },
    {
      title: "PAINTING & FINISHING",
      items: [
        "INTERNAL WALLS AND CEILING WITH GYPSUM / NEERU FINISH WITH PLASTIC EMULSION PAINTS.",
        "EXTERNAL WALLS: EXTERIOR TEXTURE PAINT."
      ]
    },
    {
      title: "KITCHEN",
      items: [
        "COLOURED 15 MM TILE KITCHEN PLATFORM WITH STAINLESS STEEL SINK (DRAIN BOARD).",
        "TILES DADO UPTO 2 FEET ABOVE THE KITCHEN PLATFORM.",
        "DRAIN BOARD SINK IN DRY BALCONY."
      ]
    },
    {
      title: "ELECTRIFICATION CABLING",
      items: [
        "CONCEALED PVC CONDUITS WITH FRLS WIRES.",
        "ADEQUATE MODULAR SWITCHED AND LIGHT POINTS IN ALL ROOMS.",
        "TV POINTS IN LIVING ROOM AND IN ALL BEDROOMS.",
        "AC POINT IN ALL BEDROOMS & LIVING ROOM."
      ]
    },
    {
      title: "FLOORING",
      items: [
        "LIVING DINING, BEDROOM AND KITCHEN : MARBLE FLOORING.",
        "BATHROOM : PREMIUM TILES.",
        "BALCONIES AND TERRACES : PREMIUM VITRIFIED, WOODEN FINISHED FLOORING."
      ]
    },
    {
      title: "WINDOWS",
      items: [
        "THREE TRACK POWDER COATED ALUMINUM WINDOWS (HEAVY DUTY FOR HIGH RISE).",
        "SGU GLASS FAÇADE AS PER ELEVATION."
      ]
    },
    {
      title: "ENVIRONMENTAL FEATURES",
      items: [
        "RAINWATER HARVESTING.",
        "SEWAGE TREATMENT PLANT.",
        "ORGANIC WASTE MANAGEMENT."
      ]
    },
    {
      title: "SECURITY",
      items: [
        "CCTV MONITORING IN COMMON AREAS.",
        "FIRE ALARM & FIRE-FIGHTING SYSTEM AS PER THE LAW.",
        "VIDEO DOOR PHONE."
      ]
    }
  ];

  return (
    <section id="specifications" className="py-24 bg-gradient-to-b from-white via-sky-50/20 to-white relative overflow-hidden">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-card-luxe border border-white/90 text-pristine-orange text-xs font-bold uppercase tracking-widest mb-3 font-google">
            <Waves className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>THE LORD'S SPECIFICATIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            SPECIFICATION
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* 10 Specifications with 3D Tilt Glare Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, idx) => (
            <GlassTiltCard
              key={idx}
              className="p-7 glass-card-luxe border border-white/90 shadow-glass-luxury flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-gray-200/70">
                  <h3 className="font-serif font-bold text-lg text-gray-900 tracking-wide group-hover:text-pristine-orange transition-colors">
                    {spec.title}
                  </h3>
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-pristine-orange/20 to-sky-400/20 text-pristine-orange flex items-center justify-center font-mono font-bold text-xs">
                    0{idx + 1}
                  </span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-gray-700 font-light">
                  {spec.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2.5">
                      <span className="text-pristine-orange font-bold text-base leading-none mt-0.5">▪</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassTiltCard>
          ))}
        </div>

        {/* Download Specifications Bar */}
        <div className="mt-14 text-center">
          <a
            href="/pristine-the-lords-baner-brochure-download-pdf"
            onClick={(e) => {
              if (onOpenBrochure) {
                e.preventDefault();
                onOpenBrochure();
              }
            }}
            className="btn-pristine-outline inline-flex items-center space-x-2 px-8 py-3.5 rounded-2xl text-xs tracking-wider shadow-glass-luxury border border-white/90 font-google"
          >
            <Download className="w-4 h-4 text-pristine-orange" />
            <span>DOWNLOAD DETAILED SPECIFICATION SHEET</span>
          </a>
        </div>
      </div>

      <WaterWaveDivider fillColor="#f8f9fa" className="mt-16" />
    </section>
  );
};
