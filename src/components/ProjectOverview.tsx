import React from 'react';
import { Building2, Sparkles, Compass, Waves } from 'lucide-react';
import { HIGHLIGHT_METRICS } from '../data/projectData';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';
import { GlassTiltCard } from './GlassTiltCard';
import { AnimatedCounter } from './AnimatedCounter';

interface ProjectOverviewProps {
  onOpenBrochure?: () => void;
  onOpenVipTour: () => void;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ onOpenVipTour }) => {
  return (
    <section id="overview" className="py-24 bg-gradient-to-b from-white via-sky-50/40 to-white relative overflow-hidden">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-card-luxe border border-white/90 text-pristine-orange text-xs font-bold uppercase tracking-widest mb-3 font-google">
            <Waves className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>ARCHITECTURAL EXCELLENCE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            THE PINNACLE OF LUXURY LIVING
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Main Pillars - 3D Tilt Interactive Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <GlassTiltCard className="glass-card-luxe p-8 sm:p-10 border border-white/90 shadow-glass-luxury group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-500/15 via-pristine-orange/20 to-sky-400/20 text-pristine-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Building2 className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-bold text-xl text-gray-900 mb-3 tracking-wide group-hover:text-pristine-orange transition-colors">
              ALUMINIUM MIVAN MONOLITH
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              PRECISION-ENGINEERED 34-STOREY RCC TOWERS BUILT WITH ADVANCED ALUMINIUM FORMWORK TECHNOLOGY ENSURING MAXIMUM SEISMIC RESILIENCE AND SMOOTH MONOLITHIC FINISH.
            </p>
          </GlassTiltCard>

          <GlassTiltCard className="glass-card-luxe p-8 sm:p-10 border border-white/90 shadow-glass-luxury group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500/15 via-sky-400/20 to-pristine-orange/20 text-sky-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-bold text-xl text-gray-900 mb-3 tracking-wide group-hover:text-pristine-orange transition-colors">
              IMPORTED MARBLE SUITES
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              TIMELESS IMPORTED MARBLE FLOORING ACROSS LIVING, DINING, AND MASTER SUITES WITH 15MM COLOURED TILE KITCHEN PLATFORMS AND SGU GLASS FAÇADES.
            </p>
          </GlassTiltCard>

          <GlassTiltCard className="glass-card-luxe p-8 sm:p-10 border border-white/90 shadow-glass-luxury group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500/15 via-emerald-400/20 to-sky-400/20 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-bold text-xl text-gray-900 mb-3 tracking-wide group-hover:text-pristine-orange transition-colors">
              PRIME PASHAN LOCATION
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              STRATEGICALLY LOCATED ON BANER-PASHAN LINK ROAD (BESIDE WAKESHWAR TEMPLE), JUST 5 MINUTES FROM BANER HIGH STREET AND 8 MINUTES FROM AUNDH.
            </p>
          </GlassTiltCard>
        </div>

        {/* Metrics Bar with Animated Counters & Translucent Glass */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6 sm:p-8 rounded-3xl glass-card-luxe border border-white/90 shadow-glass-luxury">
          {HIGHLIGHT_METRICS.map((metric, i) => (
            <div key={i} className="text-center p-3 border-r last:border-none border-gray-200/60">
              <div className="font-serif font-bold text-2xl sm:text-3xl text-gray-900">
                <AnimatedCounter value={metric.value} />
              </div>
              <div className="text-[10px] uppercase font-bold text-pristine-orange mt-1 tracking-wider font-google">{metric.label}</div>
              <div className="text-[10px] text-gray-500 mt-0.5 font-light">{metric.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <WaterWaveDivider fillColor="#ffffff" className="mt-16" />
    </section>
  );
};
