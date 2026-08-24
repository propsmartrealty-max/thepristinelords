import React, { useState } from 'react';
import { Layers, Sparkles, CheckCircle2, Calendar, Download, Calculator, ShieldCheck } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';

interface UnitConfiguratorProps {
  onOpenVipTour: () => void;
  onOpenBrochure?: () => void;
}

export const UnitConfigurator: React.FC<UnitConfiguratorProps> = ({ onOpenVipTour }) => {
  const [bhk, setBhk] = useState<'3bhk' | '4.5bhk'>('3bhk');
  const [floorTier, setFloorTier] = useState<'podium' | 'mid' | 'sky'>('mid');
  const [marbleTheme, setMarbleTheme] = useState<'statuario' | 'crema' | 'armani'>('statuario');

  // Base carpet areas
  const baseSqFt = bhk === '3bhk' ? 1554 : 2005;
  const baseRatePerSqFt = 16500;
  
  // Floor rise multiplier
  const floorRise = floorTier === 'podium' ? 0 : floorTier === 'mid' ? 450 : 950;
  const unitRate = baseRatePerSqFt + floorRise;

  const agreementValue = Math.round((baseSqFt * unitRate) / 100000); // In Lakhs
  const stampDuty = Math.round(agreementValue * 0.07 * 10) / 10;
  const gst = Math.round(agreementValue * 0.05 * 10) / 10;
  const totalCost = Math.round((agreementValue + stampDuty + gst) * 10) / 10;

  return (
    <section id="customizer" className="py-24 bg-gradient-to-b from-[#f8f9fa] via-sky-50/30 to-white relative overflow-hidden uppercase font-sans">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-card-luxe border border-white/90 text-pristine-orange text-xs font-bold uppercase tracking-widest mb-3 font-google">
            <Calculator className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>INTERACTIVE RESIDENCE CALCULATOR</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            CUSTOMIZE YOUR RESIDENCE
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light font-google">
            SELECT CONFIGURATION, FLOOR ELEVATION TIER, AND MARBLE FINISHES TO ESTIMATE COST AND RESERVE YOUR PREFERRED UNIT.
          </p>
        </div>

        {/* Configurator Box */}
        <div className="glass-card-luxe rounded-3xl p-6 sm:p-12 border border-white/90 shadow-glass-luxury max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6 font-google">
              {/* Step 1: BHK Selection */}
              <div>
                <span className="text-xs text-gray-500 font-bold block mb-2">
                  01. SELECT CONFIGURATION
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setBhk('3bhk')}
                    className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                      bhk === '3bhk'
                        ? 'bg-white border-pristine-orange shadow-md scale-[1.02]'
                        : 'bg-white/60 border-gray-200 text-gray-700 hover:bg-white'
                    }`}
                  >
                    <strong className="block text-sm text-gray-900">3 BHK SUITE</strong>
                    <span className="text-[11px] text-pristine-orange font-bold">1,554 SQ.FT CARPET</span>
                  </button>

                  <button
                    onClick={() => setBhk('4.5bhk')}
                    className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                      bhk === '4.5bhk'
                        ? 'bg-white border-pristine-orange shadow-md scale-[1.02]'
                        : 'bg-white/60 border-gray-200 text-gray-700 hover:bg-white'
                    }`}
                  >
                    <strong className="block text-sm text-gray-900">4.5 BHK ESTATE</strong>
                    <span className="text-[11px] text-pristine-orange font-bold">2,005 SQ.FT CARPET</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Floor Tier Elevation */}
              <div>
                <span className="text-xs text-gray-500 font-bold block mb-2">
                  02. SELECT ELEVATION TIER
                </span>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    onClick={() => setFloorTier('podium')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      floorTier === 'podium'
                        ? 'bg-white border-pristine-orange shadow-md'
                        : 'bg-white/60 border-gray-200 text-gray-700'
                    }`}
                  >
                    <strong className="block text-xs text-gray-900">PODIUM</strong>
                    <span className="text-[10px] text-gray-500">LEVELS 4 - 10</span>
                  </button>

                  <button
                    onClick={() => setFloorTier('mid')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      floorTier === 'mid'
                        ? 'bg-white border-pristine-orange shadow-md'
                        : 'bg-white/60 border-gray-200 text-gray-700'
                    }`}
                  >
                    <strong className="block text-xs text-gray-900">HORIZON</strong>
                    <span className="text-[10px] text-gray-500">LEVELS 11 - 24</span>
                  </button>

                  <button
                    onClick={() => setFloorTier('sky')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      floorTier === 'sky'
                        ? 'bg-white border-pristine-orange shadow-md'
                        : 'bg-white/60 border-gray-200 text-gray-700'
                    }`}
                  >
                    <strong className="block text-xs text-gray-900">SKY CROWN</strong>
                    <span className="text-[10px] text-gray-500">LEVELS 25 - 34</span>
                  </button>
                </div>
              </div>

              {/* Step 3: Italian Marble Selection */}
              <div>
                <span className="text-xs text-gray-500 font-bold block mb-2">
                  03. ITALIAN MARBLE FINISH
                </span>
                <div className="grid grid-cols-3 gap-2.5 text-xs">
                  <button
                    onClick={() => setMarbleTheme('statuario')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      marbleTheme === 'statuario'
                        ? 'bg-white border-pristine-orange shadow-md font-bold'
                        : 'bg-white/60 border-gray-200 text-gray-700'
                    }`}
                  >
                    <span>STATUARIO WHITE</span>
                  </button>

                  <button
                    onClick={() => setMarbleTheme('crema')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      marbleTheme === 'crema'
                        ? 'bg-white border-pristine-orange shadow-md font-bold'
                        : 'bg-white/60 border-gray-200 text-gray-700'
                    }`}
                  >
                    <span>CREMA MARFIL</span>
                  </button>

                  <button
                    onClick={() => setMarbleTheme('armani')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      marbleTheme === 'armani'
                        ? 'bg-white border-pristine-orange shadow-md font-bold'
                        : 'bg-white/60 border-gray-200 text-gray-700'
                    }`}
                  >
                    <span>GRIGIO ARMANI</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/95 shadow-md space-y-4 font-google">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                <span className="text-xs text-gray-500 font-bold">ESTIMATED CONFIGURATION</span>
                <span className="text-xs font-bold text-pristine-orange">
                  {bhk === '3bhk' ? '3 BHK LUXURY' : '4.5 BHK ESTATE'}
                </span>
              </div>

              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>RERA CARPET AREA:</span>
                  <strong className="text-gray-900 font-mono">{baseSqFt} SQ.FT</strong>
                </div>
                <div className="flex justify-between">
                  <span>AGREEMENT VALUE:</span>
                  <strong className="text-gray-900 font-mono">₹ {(agreementValue / 100).toFixed(2)} CR*</strong>
                </div>
                <div className="flex justify-between">
                  <span>EST. STAMP DUTY (7%):</span>
                  <span className="text-gray-700 font-mono">₹ {(stampDuty / 100).toFixed(2)} CR</span>
                </div>
                <div className="flex justify-between">
                  <span>EST. GST (5%):</span>
                  <span className="text-gray-700 font-mono">₹ {(gst / 100).toFixed(2)} CR</span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-bold block">TOTAL ESTIMATED COST</span>
                  <strong className="font-serif text-2xl font-bold text-gray-900">
                    ₹ {(totalCost / 100).toFixed(2)} CR*
                  </strong>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-300">
                  ALL-INCLUSIVE EST.
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenVipTour}
                  className="btn-pristine-orange w-full py-3.5 rounded-2xl text-xs uppercase font-bold tracking-wider shadow-pristine-orange flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>RESERVE VIP PREVIEW FOR THIS UNIT</span>
                </button>
              </div>

              <div className="text-[10px] text-gray-500 text-center font-light leading-tight pt-1">
                *PRICES SUBJECT TO GOVERNMENT TAXES & FLOOR RISE. FINANCED BY CAPRI GLOBAL CAPITAL LIMITED.
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaterWaveDivider fillColor="#ffffff" className="mt-16" />
    </section>
  );
};
