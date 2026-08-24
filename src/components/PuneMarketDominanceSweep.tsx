import React, { useState } from 'react';
import { Building2, TrendingUp, ShieldCheck, MapPin, Award, CheckCircle2, ChevronRight, BarChart3, Globe, Sparkles, Layers, DollarSign } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';
import { GlassTiltCard } from './GlassTiltCard';

export const PuneMarketDominanceSweep: React.FC = () => {
  const [activeMarketTab, setActiveMarketTab] = useState<'corridors' | 'micropricing' | 'benchmarks' | 'infrastructure'>('corridors');

  const microMarkets = [
    {
      corridor: "BANER-PASHAN LINK ROAD (MICRO-LOCATION)",
      avgPriceSqFt: "₹ 12,800 - ₹ 16,500 / SQ.FT",
      appreciationYoY: "+14.8% YoY GROWTH",
      rentalYield: "4.8% - 5.2% NET YIELD",
      highlights: "Direct 0 KM link to Someshwarwadi, Wakeshwar Temple serenity, lowest noise index & pure air (AQI < 45).",
      theLordsAdvantage: "Pristine The Lord's stands as the sole 34-storey monolithic luxury landmark on this prestigious arterial spine."
    },
    {
      corridor: "BANER MAIN & BALEWADI HIGH STREET",
      avgPriceSqFt: "₹ 11,500 - ₹ 15,200 / SQ.FT",
      appreciationYoY: "+12.4% YoY GROWTH",
      rentalYield: "4.2% - 4.6% NET YIELD",
      highlights: "Pune's foremost dining, entertainment, co-working, and commercial boutique hub.",
      theLordsAdvantage: "Just 5 minutes away, providing vibrant urban lifestyle without the traffic congestion and noise pollution."
    },
    {
      corridor: "HINJEWADI IT PARK & TECH EXPANSION CORRIDOR",
      avgPriceSqFt: "₹ 8,500 - ₹ 11,200 / SQ.FT",
      appreciationYoY: "+11.0% YoY GROWTH",
      rentalYield: "4.5% - 4.9% NET YIELD",
      highlights: "300,000+ tech workforce (Infosys, TCS, Wipro, Cognizant) driving sustained executive housing demand.",
      theLordsAdvantage: "Direct 15-minute signal-free highway drive makes The Lord's the prime address for C-suite and VP leadership."
    },
    {
      corridor: "AUNDH, PUNE UNIVERSITY & SENAPATI BAPAT ROAD",
      avgPriceSqFt: "₹ 14,000 - ₹ 19,000 / SQ.FT",
      appreciationYoY: "+9.8% YoY GROWTH",
      rentalYield: "3.8% - 4.2% NET YIELD",
      highlights: "Old-world Pune heritage, elite social clubs, Westend Mall, 411-acre University green lung.",
      theLordsAdvantage: "8 to 10 minutes seamless transit via Someshwarwadi route without navigating inner city gridlock."
    },
    {
      corridor: "KOREGAON PARK & BOAT CLUB ROAD (EAST PUNE BENCHMARK)",
      avgPriceSqFt: "₹ 18,000 - ₹ 26,000 / SQ.FT",
      appreciationYoY: "+8.5% YoY GROWTH",
      rentalYield: "3.5% - 3.9% NET YIELD",
      highlights: "Traditional high-density luxury enclaves with saturated land availability and limited fresh supply.",
      theLordsAdvantage: "The Lord's delivers comparable palatial Italian marble specifications at 40% higher capital appreciation potential."
    }
  ];

  const infrastructurePillars = [
    {
      pillar: "RCC MONOLITHIC MIVAN FORMWORK",
      specification: "EARTHQUAKE RESISTANT IS 1893 COMPLIANT",
      benefit: "Zero brick joints eliminates dampness risks and delivers razor-sharp monolithic structural longevity."
    },
    {
      pillar: "34-STOREY SKYLINE ELEVATION",
      specification: "LEVEL 34 ROOFTOP SKY LOUNGE & DECK",
      benefit: "Highest elevation in the Baner-Pashan corridor with 360° unhindered views of Pashan Lake and Baner hills."
    },
    {
      pillar: "100% INSTITUTIONAL FINANCING",
      specification: "CAPRI GLOBAL CAPITAL LIMITED (CGCL)",
      benefit: "Guaranteed continuous cash flow ensures on-time construction milestones and absolute delivery security."
    },
    {
      pillar: "ACOUSTIC SGU SOLAR CONTROL GLASS",
      specification: "3-TRACK POWDER COATED ALUMINIUM",
      benefit: "Superior heat rejection and acoustic barrier flooding interiors with natural light without thermal buildup."
    }
  ];

  return (
    <section id="pune-market-dominance" className="py-24 bg-gradient-to-b from-white via-sky-50/20 to-[#f8f9fa] relative overflow-hidden uppercase font-sans">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full colorful-chip text-pristine-orange text-xs font-bold tracking-widest mb-3 font-google">
            <BarChart3 className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>PUNE REAL ESTATE INTELLIGENCE & INFRASTRUCTURE SWEEP</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            PUNE LUXURY REAL ESTATE SWEEP
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light font-google">
            ANALYZE COMPREHENSIVE MICRO-MARKET VALUATIONS, GROWTH TRAJECTORIES, AND ENGINEERING BENCHMARKS ACROSS WEST PUNE'S LUXURY REAL ESTATE LANDSCAPE.
          </p>
        </div>

        {/* Intelligence Mode Tabs */}
        <div className="flex justify-center mb-12 font-google">
          <div className="p-1.5 rounded-full glass-card-luxe border border-white/90 shadow-glass-luxury flex items-center space-x-2 flex-wrap justify-center gap-1">
            <button
              onClick={() => setActiveMarketTab('corridors')}
              className={`px-5 sm:px-7 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                activeMarketTab === 'corridors'
                  ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white/60'
              }`}
            >
              CORRIDOR VALUATIONS
            </button>

            <button
              onClick={() => setActiveMarketTab('infrastructure')}
              className={`px-5 sm:px-7 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                activeMarketTab === 'infrastructure'
                  ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white/60'
              }`}
            >
              ENGINEERING INFRASTRUCTURE
            </button>
          </div>
        </div>

        {/* Mode 1: Corridors Comparison Matrix */}
        {activeMarketTab === 'corridors' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 animate-fadeIn font-google">
            {microMarkets.map((m, idx) => (
              <GlassTiltCard
                key={idx}
                className="p-6 sm:p-7 glass-card-luxe border border-white/90 shadow-glass-luxury flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200 text-[10px] font-bold">
                    <span className="text-pristine-orange bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200/50">
                      MICRO-MARKET {idx + 1}
                    </span>
                    <span className="text-emerald-700 font-mono">
                      {m.appreciationYoY}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-gray-900 mb-2 leading-snug">
                    {m.corridor}
                  </h3>

                  <div className="space-y-2 mb-4 text-xs">
                    <div className="flex justify-between p-2 rounded-xl bg-gray-50 border border-gray-100">
                      <span className="text-gray-500">AVG RATE:</span>
                      <strong className="text-gray-900 font-mono">{m.avgPriceSqFt}</strong>
                    </div>
                    <div className="flex justify-between p-2 rounded-xl bg-gray-50 border border-gray-100">
                      <span className="text-gray-500">RENTAL YIELD:</span>
                      <strong className="text-emerald-700 font-mono">{m.rentalYield}</strong>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-600 font-light leading-relaxed mb-4">
                    {m.highlights}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-orange-50/70 border border-orange-200/50 text-[11px] text-gray-800 space-y-1">
                  <strong className="text-pristine-orange block font-bold">THE LORD'S EDGE:</strong>
                  <span className="font-light leading-snug">{m.theLordsAdvantage}</span>
                </div>
              </GlassTiltCard>
            ))}
          </div>
        )}

        {/* Mode 2: Infrastructure Pillars */}
        {activeMarketTab === 'infrastructure' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 animate-fadeIn font-google">
            {infrastructurePillars.map((p, idx) => (
              <div
                key={idx}
                className="glass-card-luxe p-6 sm:p-8 rounded-3xl border border-white/90 shadow-glass-luxury space-y-3"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-pristine-orange/15 text-pristine-orange flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-gray-900">
                      {p.pillar}
                    </h3>
                    <span className="text-[10px] text-pristine-orange font-bold font-mono">
                      {p.specification}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 font-light leading-relaxed pt-2 border-t border-gray-100">
                  {p.benefit}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Complete Infrastructure Summary Bar */}
        <div className="glass-card-luxe p-6 sm:p-8 rounded-3xl border border-white/90 shadow-glass-luxury flex flex-col sm:flex-row items-center justify-between gap-4 font-google">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <strong className="text-gray-900 text-sm block">MAHARERA REGISTERED & INSTITUTIONALLY FINANCED</strong>
              <span className="text-xs text-gray-600 font-light">MAHARERA NO: {PROJECT_DETAILS.reraNumber} • FINANCED BY {PROJECT_DETAILS.financedBy}</span>
            </div>
          </div>

          <a
            href="#download-brochure"
            className="btn-pristine-orange px-8 py-3 rounded-full text-xs uppercase tracking-wider font-bold shadow-pristine-orange whitespace-nowrap"
          >
            <span>DOWNLOAD COMPLETE MARKET DOSSIER</span>
          </a>
        </div>
      </div>

      <WaterWaveDivider fillColor="#ffffff" className="mt-16" />
    </section>
  );
};
