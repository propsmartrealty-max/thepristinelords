import React, { useState } from 'react';
import { Search, MapPin, Building, ShieldCheck, Sparkles, ExternalLink, Globe, Layers, ArrowUpRight } from 'lucide-react';
import { SEO_KEYWORD_CLUSTERS, PRISTINE_PORTFOLIO_PROJECTS } from '../data/seoKeywords';
import { PROJECT_DETAILS } from '../data/projectData';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';

export const CorridorSeoMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [searchFilter, setSearchFilter] = useState('');

  const currentCluster = SEO_KEYWORD_CLUSTERS[activeTab];

  const filteredKeywords = currentCluster.keywords.filter(kw =>
    kw.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <section id="corridor-seo" className="py-20 bg-gradient-to-b from-[#f8f9fa] via-white to-[#f8f9fa] relative overflow-hidden uppercase font-sans text-gray-700">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full colorful-chip text-pristine-orange text-xs font-bold tracking-widest mb-3 font-google">
            <Search className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>PUNE REAL ESTATE & WEST CORRIDORS SEARCH DIRECTORY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            WEST PUNE REAL ESTATE MATRIX
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light font-google">
            COMPREHENSIVE SEARCH INDEX COVERING THE LORD'S, BANER-PASHAN LINK ROAD, SOMESHWARWADI, BALEWADI, HINJEWADI IT PARK, AND PRISTINE DEVELOPERS' GLOBAL PORTFOLIO.
          </p>
        </div>

        {/* Cluster Tabs Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8 font-google">
          {SEO_KEYWORD_CLUSTERS.map((cluster, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveTab(idx);
                setSearchFilter('');
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                activeTab === idx
                  ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                  : 'glass-card-luxe border border-white/80 text-gray-700 hover:text-gray-900 hover:bg-white'
              }`}
            >
              {cluster.category}
            </button>
          ))}
        </div>

        {/* Dynamic Cluster Box */}
        <div className="glass-card-luxe rounded-3xl p-6 sm:p-10 border border-white/90 shadow-glass-luxury mb-14 font-google">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-gray-200 mb-6">
            <div>
              <span className="text-[10px] text-pristine-orange font-bold uppercase tracking-widest block">
                CLUSTER {activeTab + 1} OF {SEO_KEYWORD_CLUSTERS.length}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mt-0.5">
                {currentCluster.clusterName}
              </h3>
            </div>

            {/* Keyword Search Filter */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="SEARCH KEYWORDS..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full pl-8 pr-3 py-2 rounded-xl bg-white border border-gray-300 text-xs text-gray-900 focus:outline-none focus:border-pristine-orange uppercase"
              />
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Keyword Grid Pills */}
          <div className="flex flex-wrap gap-2.5">
            {filteredKeywords.map((kw, i) => (
              <a
                key={i}
                href="/pristine-the-lords-baner-brochure-download-pdf"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState(null, '', '/pristine-the-lords-baner-brochure-download-pdf');
                  document.getElementById('download-brochure')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3.5 py-2 rounded-xl bg-white/85 hover:bg-orange-50 border border-gray-200 hover:border-pristine-orange text-xs text-gray-800 hover:text-pristine-orange transition-all duration-200 shadow-sm flex items-center space-x-1.5 group"
              >
                <span>{kw}</span>
                <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-pristine-orange transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Pristine Developers Global Project Footprint */}
        <div className="glass-card-luxe rounded-3xl p-6 sm:p-10 border border-white/90 shadow-glass-luxury font-google">
          <div className="flex items-center space-x-2.5 mb-6 pb-4 border-b border-gray-200">
            <Building className="w-5 h-5 text-pristine-orange" />
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900">
                PRISTINE DEVELOPERS — REAL ESTATE PORTFOLIO
              </h3>
              <p className="text-xs text-gray-500 font-light">
                ICONIC RESIDENTIAL LANDMARKS DELIVERED AND DEVELOPED ACROSS STRATEGIC PUNE CORRIDORS.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {PRISTINE_PORTFOLIO_PROJECTS.map((proj, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/90 border border-gray-200 shadow-sm space-y-1.5 hover:border-pristine-orange transition-colors">
                <span className="text-xs font-bold text-gray-900 block">{proj.name}</span>
                <span className="text-[11px] text-gray-600 block flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-pristine-orange flex-shrink-0" />
                  <span>{proj.location}</span>
                </span>
                <span className="text-[10px] text-pristine-orange font-bold block">{proj.segment}</span>
                <div className="pt-1 text-[9px] text-gray-400 border-t border-gray-100 font-mono">
                  {proj.rera}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WaterWaveDivider fillColor="#ffffff" className="mt-16" />
    </section>
  );
};
