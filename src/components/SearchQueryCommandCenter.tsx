import React, { useState } from 'react';
import { Search, ArrowUpRight, Sparkles, Filter, CheckCircle2, Globe, TrendingUp, ShieldCheck } from 'lucide-react';
import { SEARCH_QUERIES_BANK } from '../data/searchQueriesBank';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';
import { GlassTiltCard } from './GlassTiltCard';

export const SearchQueryCommandCenter: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [queryFilter, setQueryFilter] = useState('');

  const currentCategory = SEARCH_QUERIES_BANK[activeCategory];

  const filteredQueries = currentCategory.queries.filter(q =>
    q.queryText.toLowerCase().includes(queryFilter.toLowerCase())
  );

  return (
    <section id="search-command-center" className="py-20 bg-gradient-to-b from-white via-sky-50/20 to-[#f8f9fa] relative overflow-hidden uppercase font-sans">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full colorful-chip text-pristine-orange text-xs font-bold tracking-widest mb-3 font-google">
            <Search className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>PRISTINE THE LORDS BANER • SEARCH INTELLIGENCE ENGINE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            SEARCH INTENT & QUERY DIRECTORY
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mb-5 rounded-full" />
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light font-google">
            DISCOVER HIGH-INTENT GOOGLE SEARCH QUERIES COVERING 3 & 4.5 BHK PRICING, BLUEPRINTS, VAASTU ORIENTATIONS, MAHARERA DUE DILIGENCE, AND GLOBAL NRI REPATRIATION.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8 font-google">
          {SEARCH_QUERIES_BANK.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveCategory(idx);
                setQueryFilter('');
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                activeCategory === idx
                  ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                  : 'glass-card-luxe border border-white/80 text-gray-700 hover:text-gray-900 hover:bg-white'
              }`}
            >
              {cat.badge}
            </button>
          ))}
        </div>

        {/* Dynamic Queries Container */}
        <div className="glass-card-luxe rounded-3xl p-6 sm:p-10 border border-white/90 shadow-glass-luxury mb-12 font-google">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-gray-200 mb-6">
            <div>
              <span className="text-[10px] text-pristine-orange font-bold uppercase tracking-widest block">
                CLUSTER {activeCategory + 1} OF {SEARCH_QUERIES_BANK.length}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mt-0.5">
                {currentCategory.categoryTitle}
              </h3>
            </div>

            {/* Instant Query Filter */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="FILTER SEARCH QUERIES..."
                value={queryFilter}
                onChange={(e) => setQueryFilter(e.target.value)}
                className="w-full pl-8 pr-3 py-2 rounded-xl bg-white border border-gray-300 text-xs text-gray-900 focus:outline-none focus:border-pristine-orange uppercase"
              />
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Queries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredQueries.map((q, idx) => (
              <a
                key={idx}
                href={q.targetCleanUrl}
                className="p-4 rounded-2xl bg-white/90 hover:bg-orange-50/80 border border-gray-200 hover:border-pristine-orange transition-all duration-200 shadow-sm flex flex-col justify-between group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-gray-900 group-hover:text-pristine-orange transition-colors">
                    "{q.queryText}"
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-pristine-orange flex-shrink-0 transition-colors" />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[10px]">
                  <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 font-bold">
                    INTENT: {q.intent.toUpperCase()}
                  </span>
                  <span className="text-emerald-700 font-mono font-bold">
                    {q.estimatedVolume} DEMAND
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <WaterWaveDivider fillColor="#ffffff" className="mt-12" />
    </section>
  );
};
