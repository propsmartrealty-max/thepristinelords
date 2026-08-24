import React, { useState } from 'react';
import { Search, Sparkles, Building, MapPin, ChevronRight, CheckCircle2, DollarSign, HelpCircle, ArrowRight, ShieldCheck, Waves } from 'lucide-react';
import { PROGRAMMATIC_SEO_PAGES, ProgrammaticPageData } from '../data/programmaticSeoData';
import { PROJECT_DETAILS } from '../data/projectData';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';
import { GlassTiltCard } from './GlassTiltCard';

export const ProgrammaticSeoHub: React.FC = () => {
  const [selectedSlug, setSelectedSlug] = useState<string>(PROGRAMMATIC_SEO_PAGES[0].slug);

  const currentPage: ProgrammaticPageData = 
    PROGRAMMATIC_SEO_PAGES.find(p => p.slug === selectedSlug) || PROGRAMMATIC_SEO_PAGES[0];

  return (
    <section id="search-hub" className="py-24 bg-gradient-to-b from-[#f8f9fa] via-sky-50/20 to-white relative overflow-hidden uppercase font-sans">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full colorful-chip text-pristine-orange text-xs font-bold uppercase tracking-widest mb-3 font-google">
            <Search className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>GOOGLE SEARCH & BUYER INTENT DIRECTORY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            MICRO-MARKET & CONFIGURATION DIRECTORY
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light font-google">
            EXPLORE HIGH-INTENT RESIDENTIAL SEARCH CLUSTERS, LIVE PRICING BENCHMARKS, AND RERA-VERIFIED SPECIFICATIONS FOR WEST PUNE'S FINEST ADDRESS.
          </p>
        </div>

        {/* Dynamic Programmatic Landing Hub Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left Column: Programmatic Query Pills */}
          <div className="lg:col-span-4 space-y-3 font-google">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold block mb-2">
              SELECT SEARCH INTENT / MICRO-CORRIDOR
            </span>
            {PROGRAMMATIC_SEO_PAGES.map((page) => {
              const isActive = page.slug === selectedSlug;
              return (
                <button
                  key={page.slug}
                  onClick={() => setSelectedSlug(page.slug)}
                  className={`w-full text-left p-4.5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? 'glass-card-luxe bg-white/95 border-pristine-orange shadow-md scale-[1.02]'
                      : 'bg-white/60 hover:bg-white/90 border-gray-200 text-gray-700'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-gray-900 block leading-snug">
                      {page.targetKeyword}
                    </span>
                    <span className="text-[10px] text-pristine-orange font-bold mt-1 block">
                      {page.configuration} • {page.startingPrice}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform flex-shrink-0 ${isActive ? 'text-pristine-orange translate-x-1' : 'text-gray-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Tailored Programmatic Landing Content Card */}
          <div className="lg:col-span-8">
            <article className="glass-card-luxe p-8 sm:p-10 rounded-3xl shadow-glass-luxury space-y-6 font-google">
              {/* Keyword & Heading Header */}
              <div className="pb-5 border-b border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-pristine-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60">
                    TARGET: {currentPage.targetKeyword}
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    RERA: {PROJECT_DETAILS.reraNumber}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                  {currentPage.h1Title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light mt-2 leading-relaxed">
                  {currentPage.metaDescription}
                </p>
              </div>

              {/* Metric Highlights Pill Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-white border border-gray-200">
                  <span className="text-gray-400 text-[10px] block">CARPET AREA</span>
                  <strong className="text-gray-900 font-mono text-xs">{currentPage.carpetArea}</strong>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-gray-200">
                  <span className="text-gray-400 text-[10px] block">STARTING PRICE</span>
                  <strong className="text-pristine-orange font-mono text-xs">{currentPage.startingPrice}</strong>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-gray-200">
                  <span className="text-gray-400 text-[10px] block">PROXIMITY</span>
                  <strong className="text-gray-900 text-[11px] leading-tight block">{currentPage.proximityKey}</strong>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-gray-200">
                  <span className="text-gray-400 text-[10px] block">RENTAL YIELD</span>
                  <strong className="text-emerald-700 font-mono text-xs">{currentPage.rentalYield}</strong>
                </div>
              </div>

              {/* Sanctioned Engineering Highlights */}
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block mb-3">
                  KEY VALUE DIFFERENTIATORS:
                </span>
                <ul className="space-y-2.5 text-xs text-gray-700">
                  {currentPage.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="font-light leading-relaxed">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* High-Intent Schema FAQs for AI Overviews */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">
                  FREQUENTLY ASKED BUYER QUERIES (GOOGLE AI OVERVIEWS TARGETED):
                </span>
                {currentPage.faqs.map((faq, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-gray-50/80 border border-gray-200/80 space-y-1.5">
                    <div className="flex items-start space-x-2 text-xs font-bold text-gray-900">
                      <HelpCircle className="w-4 h-4 text-pristine-orange flex-shrink-0 mt-0.5" />
                      <span>{faq.q}</span>
                    </div>
                    <p className="text-xs text-gray-600 font-light pl-6 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Trigger */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href="#download-brochure"
                  className="btn-pristine-outline w-full sm:w-auto px-6 py-3 rounded-2xl text-xs flex items-center justify-center space-x-2 shadow-sm font-bold"
                >
                  <span>DOWNLOAD SANCTIONED DOSSIER</span>
                  <ArrowRight className="w-3.5 h-3.5 text-pristine-orange" />
                </a>

                <a
                  href={`https://wa.me/${PROJECT_DETAILS.whatsapp}?text=${encodeURIComponent(`Hi Pristine Sales Team, I am inquiring regarding ${currentPage.targetKeyword} at The Lord's Pashan.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pristine-orange w-full sm:w-auto px-7 py-3 rounded-2xl text-xs uppercase font-bold tracking-wider shadow-pristine-orange flex items-center justify-center space-x-2 whitespace-nowrap"
                >
                  <span>INQUIRE ON WHATSAPP</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>

      <WaterWaveDivider fillColor="#ffffff" className="mt-16" />
    </section>
  );
};
