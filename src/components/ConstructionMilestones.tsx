import React from 'react';
import { ShieldCheck, CheckCircle2, Clock, Calendar, Layers, Building, Waves, FileCheck, ArrowRight } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';
import { GlassTiltCard } from './GlassTiltCard';

export const ConstructionMilestones: React.FC = () => {
  const milestones = [
    {
      phase: "PHASE 01",
      title: "EXCAVATION & RAFT FOUNDATION",
      status: "COMPLETED",
      date: "Q1 2024",
      desc: "DEEP ROCK EXCAVATION AND HEAVY-DUTY SEISMIC RAFT RCC FOUNDATION COMPLETED AS PER STRUCTURAL SAFETY CODES.",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300"
    },
    {
      phase: "PHASE 02",
      title: "PODIUM & LOWER BASEMENTS",
      status: "COMPLETED",
      date: "Q3 2024",
      desc: "MULTI-LEVEL BASEMENT PARKING & REINFORCED PODIUM RCC SLAB CAST WITH MIVAN ALUMINIUM FORMWORK.",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300"
    },
    {
      phase: "PHASE 03",
      title: "34-STOREY RCC SUPERSTRUCTURE",
      status: "IN ACTIVE PROGRESS",
      date: "ON TRACK",
      desc: "MONOLITHIC HIGH-SPEED ALUMINIUM MIVAN CASTING PROCEEDING AT 7 DAYS PER SLAB WITH RIGID QUALITY AUDITS.",
      badgeColor: "bg-orange-100 text-pristine-orange border-orange-300 animate-pulse"
    },
    {
      phase: "PHASE 04",
      title: "FACADE & INTERNAL FINISHES",
      status: "SCHEDULED",
      date: "Q4 2025",
      desc: "SGU SOLAR GLASS INSTALLATION, IMPORTED ITALIAN MARBLE LAYING, AND BESPOKE AMENITIES COMMISSIONING.",
      badgeColor: "bg-gray-100 text-gray-700 border-gray-300"
    }
  ];

  return (
    <section id="construction-progress" className="py-24 bg-gradient-to-b from-white via-sky-50/20 to-white relative overflow-hidden uppercase font-sans">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-card-luxe border border-white/90 text-pristine-orange text-xs font-bold uppercase tracking-widest mb-3 font-google">
            <ShieldCheck className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>TRANSPARENCY & TIMELINES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            CONSTRUCTION & RERA MILESTONES
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light font-google">
            MAHARERA COMPLIANT TIMELINE GUARANTEE (REG NO: {PROJECT_DETAILS.reraNumber}) BACKED BY CAPRI GLOBAL CAPITAL LIMITED FINANCING AND HIGH-PRECISION MIVAN ENGINEERING.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {milestones.map((m, idx) => (
            <GlassTiltCard
              key={idx}
              className="p-6 sm:p-7 glass-card-luxe border border-white/90 shadow-glass-luxury flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-200/70 font-google">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-pristine-orange">
                    {m.phase}
                  </span>
                  <span className={`text-[9px] uppercase font-bold px-2.5 py-1 rounded-full border ${m.badgeColor}`}>
                    {m.status}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-gray-900 mb-2 group-hover:text-pristine-orange transition-colors">
                  {m.title}
                </h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed font-google mb-4">
                  {m.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-google font-bold">
                <span>TARGET:</span>
                <span className="text-gray-900 font-mono">{m.date}</span>
              </div>
            </GlassTiltCard>
          ))}
        </div>

        {/* MahaRERA Compliance Guarantee Capsule */}
        <div className="glass-card-luxe p-6 sm:p-8 rounded-3xl border border-white/90 shadow-glass-luxury flex flex-col sm:flex-row items-center justify-between gap-4 font-google">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <strong className="text-gray-900 text-sm block">MAHARERA QUARTERLY COMPLIANCE AUDITED</strong>
              <span className="text-xs text-gray-600 font-light">REGISTRATION NUMBER: {PROJECT_DETAILS.reraNumber} • 100% ESCROW BANK ACCOUNT COMPLIANT</span>
            </div>
          </div>

          <a
            href={PROJECT_DETAILS.reraLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pristine-orange px-7 py-3 rounded-full text-xs uppercase tracking-wider font-bold shadow-pristine-orange whitespace-nowrap flex items-center space-x-2"
          >
            <span>VERIFY ON MAHARERA PORTAL</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <WaterWaveDivider fillColor="#f8f9fa" className="mt-16" />
    </section>
  );
};
