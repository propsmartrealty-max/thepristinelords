import React, { useState } from 'react';
import { MapPin, Globe, TrendingUp, Building, ShieldCheck, Waves, Compass, ChevronRight } from 'lucide-react';
import { SEO_CORRIDOR_DATA } from '../data/seoKeywords';
import { PROJECT_DETAILS } from '../data/projectData';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';
import { GlassTiltCard } from './GlassTiltCard';

export const CorridorSeoMatrix: React.FC = () => {
  const [activeCorridorTab, setActiveCorridorTab] = useState(0);

  return (
    <section id="real-estate-corridor" className="py-24 bg-gradient-to-b from-[#f8f9fa] via-sky-50/30 to-white relative overflow-hidden uppercase font-sans">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-card-luxe border border-white/90 text-pristine-orange text-xs font-bold uppercase tracking-widest mb-3 font-google">
            <Compass className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>PUNE REAL ESTATE & GLOBAL NRI DESK</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            WEST PUNE REAL ESTATE & GLOBAL FOOTPRINT
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light font-google">
            STRATEGIC RESIDENTIAL CORRIDORS SPANNING BANER, BALEWADI, BANER-PASHAN LINK ROAD, SOMESHWARWADI, AUNDH, AND HINJEWADI IT PARK. BACKED BY PRISTINE DEVELOPERS' DECADES OF UNCOMPROMISED EXCELLENCE.
          </p>
        </div>

        {/* 🏙️ MICRO-MARKET CORRIDOR STRATEGY MATRIX */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Corridor Selector Tabs */}
            <div className="lg:col-span-4 space-y-3 font-google">
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold block mb-2">
                SELECT GROWTH CORRIDOR
              </span>
              {SEO_CORRIDOR_DATA.primaryLocations.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCorridorTab(idx)}
                  className={`w-full text-left p-4.5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    activeCorridorTab === idx
                      ? 'glass-card-luxe border-pristine-orange/50 bg-white/90 shadow-md scale-[1.02]'
                      : 'bg-white/60 hover:bg-white/90 border-white/80 text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${
                      activeCorridorTab === idx ? 'bg-pristine-orange text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      0{idx + 1}
                    </div>
                    <span className="text-xs font-bold tracking-wider leading-snug">{item.corridor}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeCorridorTab === idx ? 'text-pristine-orange translate-x-1' : 'text-gray-400'}`} />
                </button>
              ))}
            </div>

            {/* Right Active Corridor Details */}
            <div className="lg:col-span-8">
              <div className="glass-card-luxe p-8 sm:p-10 rounded-3xl border border-white/90 shadow-glass-luxury">
                <div className="flex items-center space-x-2 text-pristine-orange text-xs font-bold tracking-widest mb-2 font-google">
                  <MapPin className="w-4 h-4" />
                  <span>CORRIDOR FOCUS</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  {SEO_CORRIDOR_DATA.primaryLocations[activeCorridorTab].corridor}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light mb-8">
                  {SEO_CORRIDOR_DATA.primaryLocations[activeCorridorTab].desc}
                </p>

                <div className="pt-4 border-t border-gray-200/70">
                  <span className="text-[11px] uppercase tracking-wider text-gray-500 font-bold block mb-3 font-google">
                    HIGH-INTENT PROPERTY KEYWORDS & CONNECTIVITY:
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {SEO_CORRIDOR_DATA.primaryLocations[activeCorridorTab].keywords.map((kw, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-800 text-xs font-medium shadow-sm hover:border-pristine-orange transition-colors font-google"
                      >
                        {kw}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🌐 PRISTINE DEVELOPERS GLOBAL & NATIONAL PORTFOLIO */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-2">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-pristine-orange text-xs font-bold tracking-widest font-google">
                <Globe className="w-4 h-4" />
                <span>LANDMARK DEVELOPMENTS ACROSS PUNE & BEYOND</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                PRISTINE DEVELOPERS PORTFOLIO
              </h3>
            </div>
            <div className="text-xs text-gray-500 font-google">
              OVER 9 MILLION SQ.FT DELIVERED • 30+ ICONIC PROJECTS
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SEO_CORRIDOR_DATA.pristineGlobalPortfolio.map((proj, idx) => (
              <GlassTiltCard
                key={idx}
                className="p-6 glass-card-luxe border border-white/90 shadow-glass-luxury flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 font-google">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-pristine-orange bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200/50">
                      {proj.location}
                    </span>
                    <Building className="w-4 h-4 text-gray-400 group-hover:text-pristine-orange transition-colors" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-gray-900 group-hover:text-pristine-orange transition-colors mb-2">
                    {proj.name}
                  </h4>
                  <p className="text-[11px] text-gray-600 font-light leading-relaxed font-google">
                    {proj.type}
                  </p>
                </div>
              </GlassTiltCard>
            ))}
          </div>
        </div>

        {/* 📈 NRI & HIGH-ROI REAL ESTATE INVESTMENT CORNER */}
        <div className="glass-card-luxe p-8 sm:p-12 rounded-3xl border border-white/90 shadow-glass-luxury">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 mb-8 border-b border-gray-200/70 gap-4 font-google">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-pristine-orange text-xs font-bold tracking-widest mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>GLOBAL INVESTOR & NRI DESK</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                WHY INVEST IN BANER-PASHAN LINK ROAD
              </h3>
            </div>
            <div className="px-4 py-2 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>CAPRI GLOBAL CAPITAL LIMITED FINANCED</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-google">
            {SEO_CORRIDOR_DATA.investorHighlights.map((hl, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/80 border border-gray-200 shadow-sm space-y-2">
                <span className="text-pristine-orange font-bold text-xs block">{hl.title}</span>
                <p className="text-xs text-gray-600 font-light leading-relaxed">{hl.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WaterWaveDivider fillColor="#ffffff" className="mt-16" />
    </section>
  );
};
