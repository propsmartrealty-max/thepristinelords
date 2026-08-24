import React, { useState } from 'react';
import { PROJECT_DETAILS } from '../data/projectData';
import { CheckCircle2, Waves, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';

export const FinancingAndNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [agree, setAgree] = useState(true);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#ED6336', '#38bdf8', '#c59b27']
    });
  };

  return (
    <section id="financing" className="py-24 bg-gradient-to-b from-[#f8f9fa] via-sky-50/40 to-white relative overflow-hidden">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Financed By Header */}
        <div className="mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-card-luxe border border-white/90 text-pristine-orange text-xs font-bold uppercase tracking-widest mb-3 font-google">
            <Waves className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>BANKING & FINANCIAL SECURITY</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gray-900 tracking-wide mb-8">
            THIS PROJECT IS FINANCED BY
          </h2>

          <div className="inline-flex items-center justify-center p-8 sm:p-10 rounded-3xl glass-card-luxe border border-white/90 shadow-glass-luxury hover:scale-105 transition-transform duration-300">
            <img
              src={PROJECT_DETAILS.financeLogo}
              alt="Capri Global Capital Limited"
              className="max-h-20 max-w-full object-contain filter drop-shadow-sm"
            />
          </div>
        </div>

        {/* Newsletter Subscription Box - Ultra Glassmorphic Card */}
        <div className="glass-card-luxe rounded-3xl p-8 sm:p-14 border border-white/90 shadow-glass-luxury max-w-2xl mx-auto font-google relative overflow-hidden">
          <div className="inline-flex items-center space-x-1.5 text-pristine-orange text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>NEWSLETTER & MILESTONE UPDATES</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-wide">
            KEEP UPDATED ON OUR LATEST PROGRAMS
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-8 font-light leading-relaxed">
            STAY INFORMED WITH PROJECT MILESTONES, CONSTRUCTION UPDATES, AND PRIVATE PREVIEW ANNOUNCEMENTS.
          </p>

          {subscribed ? (
            <div className="p-5 rounded-2xl bg-emerald-50/90 border border-emerald-300 text-emerald-800 text-sm flex items-center justify-center space-x-2.5 shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <span>THANK YOU! YOU HAVE BEEN SUBSCRIBED TO OFFICIAL UPDATES.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="space-y-4 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="ENTER YOUR EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3.5 rounded-2xl bg-white/90 border border-gray-300 text-gray-900 placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-pristine-orange uppercase shadow-sm"
                />
                <button
                  type="submit"
                  className="btn-pristine-orange px-8 py-3.5 rounded-2xl text-xs uppercase tracking-wider shadow-pristine-orange whitespace-nowrap font-bold"
                >
                  SUBMIT
                </button>
              </div>

              <label className="flex items-center justify-center space-x-2 text-xs text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="w-4 h-4 rounded text-pristine-orange bg-white border-gray-300 accent-pristine-orange"
                />
                <span>YES, SUBSCRIBE ME TO YOUR NEWSLETTER.</span>
              </label>
            </form>
          )}

          {/* Environmental Clearance Statement */}
          <div className="mt-10 pt-6 border-t border-gray-200/70 text-[11px] uppercase tracking-wider text-gray-500 font-bold flex items-center justify-center space-x-2">
            <Waves className="w-3.5 h-3.5 text-sky-500" />
            <span>ENVIRONMENTAL CLEARANCE COMPLIANT</span>
          </div>
        </div>
      </div>

      <WaterWaveDivider fillColor="#ffffff" className="mt-16" />
    </section>
  );
};
