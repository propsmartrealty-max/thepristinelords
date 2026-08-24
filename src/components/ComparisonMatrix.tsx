import React from 'react';
import { Check, X, ShieldCheck, Award, Sparkles, Building, Waves } from 'lucide-react';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';

export const ComparisonMatrix: React.FC = () => {
  const comparisonData = [
    {
      feature: "STRUCTURAL ENGINEERING",
      theLords: "MIVAN ALUMINIUM FORMWORK MONOLITH (EARTHQUAKE RESISTANT)",
      traditional: "CONVENTIONAL RED BRICK / AAC BLOCK MASONRY",
      advantage: "Zero joints, superior seismic damping, perfectly smooth monolithic finishes."
    },
    {
      feature: "FLOORING SPECIFICATION",
      theLords: "GENUINE IMPORTED ITALIAN MARBLE IN LIVING, DINING & BEDROOMS",
      traditional: "STANDARD VITRIFIED TILES OR PARTIAL LAMINATE",
      advantage: "Timeless luxury cooling, authentic veining, and generational durability."
    },
    {
      feature: "FAÇADE & WINDOWS",
      theLords: "HIGH-RISE SGU SOLAR CONTROL GLASS + 3-TRACK POWDER COATED ALUMINIUM",
      traditional: "STANDARD 2-TRACK UNTREATED CLEAR GLASS",
      advantage: "Thermal insulation, reduced UV heat ingress, and superior acoustic barrier."
    },
    {
      feature: "FINANCIAL SECURITY",
      theLords: "100% INSTITUTIONALLY FINANCED BY CAPRI GLOBAL CAPITAL LIMITED (CGCL)",
      traditional: "SELF-FINANCED / UNCERTAIN PROGRESSIVE FUNDING",
      advantage: "Guaranteed uninterrupted construction speed and possession certainty."
    },
    {
      feature: "ACCESS SECURITY",
      theLords: "YALE DIGITAL BIOMETRIC LOCKS + VIDEO DOOR PHONE + AI CCTV",
      traditional: "BASIC CYLINDRICAL MANUAL LOCKS",
      advantage: "Multi-factor authentication (fingerprint, RFID, PIN, physical override)."
    },
    {
      feature: "SKY DECK & AMENITIES",
      theLords: "LEVEL 34 ROOFTOP SKY LOUNGE + 20+ CURATED LIFESTYLE AMENITIES",
      traditional: "GROUND LEVEL PODIUM GYM ONLY",
      advantage: "Elevated starlit social spaces, private cinema, spa, and squash smash court."
    }
  ];

  return (
    <section id="why-the-lords" className="py-24 bg-gradient-to-b from-[#f8f9fa] via-sky-50/30 to-white relative overflow-hidden uppercase font-sans">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-card-luxe border border-white/90 text-pristine-orange text-xs font-bold uppercase tracking-widest mb-3 font-google">
            <Award className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>UNCOMPROMISING LUXURY BENCHMARK</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            THE LORD'S VS TRADITIONAL LUXURY
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light font-google">
            DISCOVER WHY THE LORD'S BY PRISTINE DEVELOPERS OUTPERFORMS STANDARD RESIDENCES IN ENGINEERING INTEGRITY, INTERIOR FINISHES, AND LIFESTYLE VALUE.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="glass-card-luxe rounded-3xl p-6 sm:p-10 border border-white/90 shadow-glass-luxury overflow-x-auto">
          <table className="w-full text-left border-collapse font-google">
            <thead>
              <tr className="border-b border-gray-200 text-xs">
                <th className="py-4 px-4 text-gray-500 font-bold uppercase tracking-wider w-1/4">FEATURE</th>
                <th className="py-4 px-4 text-pristine-orange font-bold uppercase tracking-wider w-3/8 bg-orange-50/50 rounded-t-2xl">
                  THE LORD'S BY PRISTINE
                </th>
                <th className="py-4 px-4 text-gray-500 font-bold uppercase tracking-wider w-3/8">
                  CONVENTIONAL PROJECTS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/70 text-xs">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/40 transition-colors">
                  <td className="py-4 px-4 font-bold text-gray-900 align-top">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 bg-orange-50/30 text-gray-900 align-top">
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-gray-900">{row.theLords}</strong>
                        <span className="text-[11px] text-gray-600 font-light mt-1 block">{row.advantage}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-500 align-top">
                    <div className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <WaterWaveDivider fillColor="#ffffff" className="mt-16" />
    </section>
  );
};
