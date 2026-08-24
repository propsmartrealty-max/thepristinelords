import React, { useState } from 'react';
import { OFFICIAL_FLOOR_PLANS } from '../data/projectData';
import { FloorPlan } from '../types';
import { Download, Calendar, Waves, Layout, Maximize2, Compass, Layers } from 'lucide-react';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';
import { GlassTiltCard } from './GlassTiltCard';

interface ResidenceExplorerProps {
  onOpenBrochure?: () => void;
  onOpenVipTour: () => void;
}

export const ResidenceExplorer: React.FC<ResidenceExplorerProps> = ({ onOpenVipTour }) => {
  const [activeTab, setActiveTab] = useState<'master' | '3bhk' | '4.5bhk'>('master');
  const [isZoomed, setIsZoomed] = useState(false);

  const plan3Bhk = OFFICIAL_FLOOR_PLANS.find(p => p.category === '3 BHK') || OFFICIAL_FLOOR_PLANS[0];
  const plan45Bhk = OFFICIAL_FLOOR_PLANS.find(p => p.category === '4.5 BHK') || OFFICIAL_FLOOR_PLANS[1];

  const currentPlan: FloorPlan = activeTab === '4.5bhk' ? plan45Bhk : plan3Bhk;

  // Master Layout image (high-res authentic aerial site master plan blueprint)
  const masterLayoutImage = "https://static.wixstatic.com/media/53bf92_ba5d3cb5bf81471faf021d322affb1e5~mv2.jpg/v1/fit/w_1400,h_900,q_90,enc_avif,quality_auto/53bf92_ba5d3cb5bf81471faf021d322affb1e5~mv2.jpg";

  return (
    <section id="master-layout" className="py-24 bg-gradient-to-b from-white via-sky-50/30 to-white relative overflow-hidden scroll-mt-20">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-card-luxe border border-white/90 text-pristine-orange text-xs font-bold uppercase tracking-widest mb-3 font-google">
            <Waves className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>ARCHITECTURAL BLUEPRINTS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            MASTER LAYOUT & RESIDENCES
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
            EXPLORE THE MASTER SITE PLAN AND PALATIAL 3 & 4.5 BHK FLOOR PLANS AT THE LORD'S BY PRISTINE DEVELOPERS. DESIGNED FOR EXPANSIVE LIVING WITH UNHINDERED NATURAL LIGHT AND VENTILATION.
          </p>
        </div>

        {/* Master Layout & Floor Plan Selector Pills */}
        <div id="floor-plans" className="flex flex-col items-center justify-center mb-12 font-google scroll-mt-24">
          <span className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-3">
            SELECT ARCHITECTURAL VIEW
          </span>
          <div className="p-1.5 rounded-full glass-card-luxe border border-white/90 shadow-glass-luxury flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => setActiveTab('master')}
              className={`px-5 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'master'
                  ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white/60'
              }`}
            >
              <Layout className="w-4 h-4" />
              <span>MASTER LAYOUT</span>
            </button>

            <button
              onClick={() => setActiveTab('3bhk')}
              className={`px-5 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                activeTab === '3bhk'
                  ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white/60'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>3 BHK (1,554 SQ.FT)</span>
            </button>

            <button
              onClick={() => setActiveTab('4.5bhk')}
              className={`px-5 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                activeTab === '4.5bhk'
                  ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white/60'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>4.5 BHK (2,005 SQ.FT)</span>
            </button>
          </div>
        </div>

        {/* Dynamic Blueprint Card Showcase */}
        {activeTab === 'master' ? (
          /* Master Layout Site Plan Card */
          <div className="max-w-5xl mx-auto glass-card-luxe rounded-3xl p-6 sm:p-10 border border-white/90 shadow-glass-luxury">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 mb-6 border-b border-gray-200/70 gap-2">
              <div>
                <div className="inline-flex items-center space-x-1.5 text-pristine-orange text-xs font-bold uppercase tracking-wider mb-1 font-google">
                  <Compass className="w-3.5 h-3.5" />
                  <span>OVERALL SITE MASTER PLAN</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                  THE LORD'S MASTER LAYOUT
                </h3>
                <p className="text-xs text-gray-500 font-bold mt-1 font-google">
                  34-STOREY TOWERS • CLUB ROYALE • PODIUM GREENS • VEHICULAR DROP-OFF
                </p>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-white/80 border border-gray-200 text-xs text-gray-600 font-mono font-bold">
                MAHARERA: P52100078557
              </div>
            </div>

            {/* Master Plan Graphic */}
            <div className="relative rounded-2xl overflow-hidden bg-white p-4 sm:p-8 flex items-center justify-center min-h-[380px] sm:min-h-[480px] border border-gray-200/70 shadow-inner group">
              <img
                src={masterLayoutImage}
                alt="The Lord's Master Layout Site Plan"
                className="max-h-[460px] w-full object-cover rounded-xl filter contrast-105 group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-6 right-6 px-4 py-2 rounded-full glass-card-luxe border border-white/90 text-xs font-bold text-gray-900 font-google flex items-center space-x-1.5 shadow-sm">
                <Compass className="w-4 h-4 text-pristine-orange" />
                <span>NORTH-FACING VAASTU COMPLIANT</span>
              </div>
            </div>

            {/* Master Layout Key Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-google">
              <div className="p-4 rounded-2xl bg-white/80 border border-gray-200">
                <span className="text-pristine-orange font-bold block mb-1">01. GRAND PODIUM</span>
                <p className="text-gray-600 font-light">LANDSCAPED PEDESTRIAN BOULEVARD AND VEHICLE-FREE KIDS ZONE.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 border border-gray-200">
                <span className="text-pristine-orange font-bold block mb-1">02. CLUB ROYALE</span>
                <p className="text-gray-600 font-light">CENTRAL MULTI-TIER CLUBHOUSE, SPA, THEATRE, AND BADMINTON ARENA.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 border border-gray-200">
                <span className="text-pristine-orange font-bold block mb-1">03. LEVEL 34 SKY DECK</span>
                <p className="text-gray-600 font-light">ROOFTOP STARLIGHT SKY LOUNGE WITH 360° PASHAN VALLEY VIEWS.</p>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-google">
              <a
                href="#download-brochure"
                className="w-full sm:w-auto btn-pristine-outline px-6 py-3.5 rounded-2xl text-xs tracking-wider flex items-center justify-center space-x-2 shadow-sm border border-white/90"
              >
                <Download className="w-4 h-4 text-pristine-orange" />
                <span>DOWNLOAD MASTER LAYOUT DOSSIER</span>
              </a>

              <button
                onClick={onOpenVipTour}
                className="w-full sm:w-auto btn-pristine-orange px-6 py-3.5 rounded-2xl text-xs tracking-wider flex items-center justify-center space-x-2 shadow-pristine-orange font-bold"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK MASTER LAYOUT WALKTHROUGH</span>
              </button>
            </div>
          </div>
        ) : (
          /* Specific 3BHK / 4.5BHK Blueprint Card */
          <div className="max-w-4xl mx-auto glass-card-luxe rounded-3xl p-6 sm:p-10 border border-white/90 shadow-glass-luxury">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 mb-6 border-b border-gray-200/70 gap-2">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                  {currentPlan.name}
                </h3>
                <p className="text-xs text-pristine-orange font-bold mt-1 font-google">
                  RERA CARPET: {currentPlan.carpetAreaSqFt} SQ.FT ({currentPlan.carpetAreaSqM} SQ.M)
                </p>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-white/80 border border-gray-200 text-xs text-gray-600 font-mono font-bold">
                MAHARERA: P52100078557
              </div>
            </div>

            {/* Blueprint Graphic */}
            <div className="relative rounded-2xl overflow-hidden bg-white p-6 sm:p-10 flex items-center justify-center min-h-[380px] sm:min-h-[460px] border border-gray-200/70 shadow-inner">
              <img
                src={currentPlan.layout2D}
                alt={`${currentPlan.name} Layout`}
                className="max-h-[420px] max-w-full object-contain filter contrast-125 hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-google">
              <a
                href="#download-brochure"
                className="w-full sm:w-auto btn-pristine-outline px-6 py-3.5 rounded-2xl text-xs tracking-wider flex items-center justify-center space-x-2 shadow-sm border border-white/90"
              >
                <Download className="w-4 h-4 text-pristine-orange" />
                <span>DOWNLOAD {currentPlan.category} LAYOUT PDF</span>
              </a>

              <button
                onClick={onOpenVipTour}
                className="w-full sm:w-auto btn-pristine-orange px-6 py-3.5 rounded-2xl text-xs tracking-wider flex items-center justify-center space-x-2 shadow-pristine-orange font-bold"
              >
                <Calendar className="w-4 h-4" />
                <span>ENQUIRE ABOUT {currentPlan.category}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <WaterWaveDivider fillColor="#f8f9fa" className="mt-16" />
    </section>
  );
};
