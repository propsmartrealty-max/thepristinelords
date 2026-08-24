import React, { useState } from 'react';
import { DollarSign, Globe, TrendingUp, ShieldCheck, Calculator, ArrowRight, Sparkles, Building2 } from 'lucide-react';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';
import { GlassTiltCard } from './GlassTiltCard';
import { PROJECT_DETAILS } from '../data/projectData';

export const NriInvestmentCalculator: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<'INR' | 'USD' | 'AED' | 'GBP' | 'SGD'>('INR');
  const [bhkTier, setBhkTier] = useState<'3bhk' | '4.5bhk'>('3bhk');
  const [holdingYears, setHoldingYears] = useState(5);

  // Exchange rates against INR (approx live baseline)
  const rates = {
    INR: { rate: 1, symbol: '₹', code: 'INR', label: 'INDIAN RUPEES' },
    USD: { rate: 84.2, symbol: '$', code: 'USD', label: 'US DOLLARS' },
    AED: { rate: 22.9, symbol: 'AED', code: 'AED', label: 'UAE DIRHAMS' },
    GBP: { rate: 106.5, symbol: '£', code: 'GBP', label: 'BRITISH POUNDS' },
    SGD: { rate: 62.4, symbol: 'S$', code: 'SGD', label: 'SINGAPORE DOLLARS' }
  };

  const activeRate = rates[selectedCurrency];

  // Base starting values in INR (in Crores)
  const baseInrCr = bhkTier === '3bhk' ? 2.57 : 3.55;
  const baseInrTotal = baseInrCr * 10000000;

  // Converted purchase price
  const convertedPrice = Math.round(baseInrTotal / activeRate.rate);

  // Projected Annual Rental Yield (est. 4.8% net)
  const annualRentalInr = Math.round(baseInrTotal * 0.048);
  const convertedRental = Math.round(annualRentalInr / activeRate.rate);

  // Projected Capital Growth at 12.5% CAGR over holding period
  const futureValueInr = Math.round(baseInrTotal * Math.pow(1 + 0.125, holdingYears));
  const convertedFutureValue = Math.round(futureValueInr / activeRate.rate);
  const totalAppreciation = Math.round((futureValueInr - baseInrTotal) / activeRate.rate);

  return (
    <section id="nri-corner" className="py-24 bg-gradient-to-b from-[#f8f9fa] via-sky-50/30 to-white relative overflow-hidden uppercase font-sans">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-card-luxe border border-white/90 text-pristine-orange text-xs font-bold uppercase tracking-widest mb-3 font-google">
            <Globe className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>GLOBAL NRI DESK & ROI SIMULATOR</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            NRI REAL ESTATE ROI & CURRENCY CONVERTER
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light font-google">
            CALCULATE REAL-TIME MULTI-CURRENCY CONVERSIONS, PROJECTED CAPITAL GROWTH, AND EXECUTIVE RENTAL YIELDS POWERED BY HINJEWADI'S TECH CORRIDOR EXPANSION.
          </p>
        </div>

        {/* Currency Switcher Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 font-google">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            SELECT CURRENCY:
          </span>
          <div className="p-1.5 rounded-full glass-card-luxe border border-white/90 shadow-glass-luxury flex items-center space-x-1 sm:space-x-2">
            {(Object.keys(rates) as Array<keyof typeof rates>).map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCurrency(c)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCurrency === c
                    ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-white/60'
                }`}
              >
                {rates[c].symbol} {c}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Main Panel */}
        <div className="glass-card-luxe rounded-3xl p-6 sm:p-12 border border-white/90 shadow-glass-luxury max-w-5xl mx-auto font-google">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <label className="text-xs text-gray-500 font-bold block mb-2">
                  01. CONFIGURATION
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setBhkTier('3bhk')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      bhkTier === '3bhk'
                        ? 'bg-white border-pristine-orange shadow-md'
                        : 'bg-white/60 border-gray-200 text-gray-700'
                    }`}
                  >
                    <strong className="block text-sm text-gray-900">3 BHK (1,554 SQ.FT)</strong>
                    <span className="text-xs text-pristine-orange font-bold">FROM ₹ 2.57 CR*</span>
                  </button>

                  <button
                    onClick={() => setBhkTier('4.5bhk')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      bhkTier === '4.5bhk'
                        ? 'bg-white border-pristine-orange shadow-md'
                        : 'bg-white/60 border-gray-200 text-gray-700'
                    }`}
                  >
                    <strong className="block text-sm text-gray-900">4.5 BHK (2,005 SQ.FT)</strong>
                    <span className="text-xs text-pristine-orange font-bold">FROM ₹ 3.55 CR*</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 font-bold block mb-2">
                  02. INVESTMENT HORIZON: <strong className="text-gray-900 font-mono">{holdingYears} YEARS</strong>
                </label>
                <input
                  type="range"
                  min="3"
                  max="10"
                  step="1"
                  value={holdingYears}
                  onChange={(e) => setHoldingYears(parseInt(e.target.value))}
                  className="w-full accent-pristine-orange cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                  <span>3 YEARS</span>
                  <span>5 YEARS</span>
                  <span>7 YEARS</span>
                  <span>10 YEARS</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-gray-200 space-y-2 text-xs">
                <span className="text-pristine-orange font-bold block">NRI LEGAL & TAX COMPLIANCE</span>
                <p className="text-gray-600 font-light leading-relaxed">
                  100% REPATRIABLE PROCEEDS VIA NRE/NRO ACCOUNTS. FEMA COMPLIANT DOCUMENTATION AND DEDICATED CONCIERGE ASSISTANCE FROM PRISTINE DEVELOPERS.
                </p>
              </div>
            </div>

            {/* Right Projected Yield Box */}
            <div className="lg:col-span-6 bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/95 shadow-md space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                <span className="text-xs text-gray-500 font-bold">PURCHASE VALUE IN {activeRate.code}</span>
                <span className="text-xs font-bold text-pristine-orange">
                  {selectedCurrency === 'INR' ? `₹ ${baseInrCr} CR*` : `${activeRate.symbol} ${convertedPrice.toLocaleString()}`}
                </span>
              </div>

              <div className="space-y-3 text-xs text-gray-600">
                <div className="flex justify-between items-center p-3 rounded-xl bg-orange-50/60 border border-orange-200/50">
                  <span>EST. ANNUAL RENTAL INCOME (4.8% YIELD):</span>
                  <strong className="text-gray-900 font-mono">
                    {activeRate.symbol} {convertedRental.toLocaleString()} / YR
                  </strong>
                </div>

                <div className="flex justify-between items-center p-3 rounded-xl bg-sky-50/60 border border-sky-200/50">
                  <span>EST. PROPERTY VALUE IN {holdingYears} YRS (12.5% CAGR):</span>
                  <strong className="text-gray-900 font-mono">
                    {activeRate.symbol} {convertedFutureValue.toLocaleString()}
                  </strong>
                </div>

                <div className="flex justify-between items-center p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/50">
                  <span>PROJECTED NET CAPITAL APPRECIATION:</span>
                  <strong className="text-emerald-700 font-mono font-bold">
                    + {activeRate.symbol} {totalAppreciation.toLocaleString()}
                  </strong>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={`https://wa.me/${PROJECT_DETAILS.whatsapp}?text=${encodeURIComponent(`Hi Pristine Sales Team, I am an NRI interested in ${bhkTier.toUpperCase()} at The Lord's Pashan. Please connect me with the NRI desk.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pristine-orange w-full py-3.5 rounded-2xl text-xs uppercase font-bold tracking-wider shadow-pristine-orange flex items-center justify-center space-x-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>CONNECT WITH NRI DESK ON WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaterWaveDivider fillColor="#ffffff" className="mt-16" />
    </section>
  );
};
