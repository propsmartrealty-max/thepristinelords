import React from 'react';
import { PROJECT_DETAILS } from '../data/projectData';
import { Waves, ShieldCheck } from 'lucide-react';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';

export const FinancingAndNewsletter: React.FC = () => {
  return (
    <section id="financing" className="py-20 bg-gradient-to-b from-[#f8f9fa] via-sky-50/40 to-white relative overflow-hidden">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Financed By Header */}
        <div>
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-card-luxe border border-white/90 text-pristine-orange text-xs font-bold uppercase tracking-widest mb-3 font-google">
            <ShieldCheck className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>BANKING & FINANCIAL SECURITY</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gray-900 tracking-wide mb-8 uppercase">
            THIS PROJECT IS FINANCED BY
          </h2>

          <div className="inline-flex items-center justify-center p-8 sm:p-12 rounded-3xl glass-card-luxe border border-white/90 shadow-glass-luxury hover:scale-105 transition-transform duration-300">
            <img
              src={PROJECT_DETAILS.financeLogo}
              alt="Capri Global Capital Limited"
              className="max-h-24 max-w-full object-contain filter drop-shadow-sm"
            />
          </div>

          <p className="mt-8 text-xs sm:text-sm text-gray-600 font-google max-w-2xl mx-auto uppercase tracking-wider leading-relaxed">
            BACKED BY INSTITUTIONAL LENDERS ENSURING AUDITED ESCROW STABILITY, SEAMLESS PROJECT LIQUIDITY, AND MILESTONE-BASED CONSTRUCTION INTEGRITY UNDER MAHARERA P52100078557.
          </p>
        </div>
      </div>

      <WaterWaveDivider fillColor="#ffffff" className="mt-16" />
    </section>
  );
};
