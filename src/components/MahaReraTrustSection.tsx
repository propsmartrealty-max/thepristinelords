import React, { useState } from 'react';
import { PROJECT_DETAILS } from '../data/projectData';
import { ShieldCheck, ExternalLink, Copy, Check, QrCode, FileText, CheckCircle2, Building, MapPin } from 'lucide-react';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';

interface MahaReraTrustSectionProps {
  onShowToast?: (msg: string) => void;
}

export const MahaReraTrustSection: React.FC<MahaReraTrustSectionProps> = ({ onShowToast }) => {
  const [copiedRera, setCopiedRera] = useState(false);

  const handleCopyRera = () => {
    navigator.clipboard.writeText(PROJECT_DETAILS.reraNumber);
    setCopiedRera(true);
    if (onShowToast) {
      onShowToast(`MahaRERA No. ${PROJECT_DETAILS.reraNumber} copied to clipboard!`);
    }
    setTimeout(() => setCopiedRera(false), 3000);
  };

  return (
    <section id="maharera-compliance" className="relative py-10 sm:py-12 bg-gradient-to-b from-white via-orange-50/20 to-[#f8f9fa] border-y border-gray-200/80 uppercase font-sans overflow-hidden">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card-luxe rounded-3xl p-6 sm:p-8 border border-white/95 shadow-glass-luxury">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            {/* Left: Official MahaRERA Badge & ID */}
            <div className="flex items-center gap-4 sm:gap-5 w-full lg:w-auto">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-pristine-orange to-orange-600 text-white flex items-center justify-center flex-shrink-0 shadow-pristine-orange">
                <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 animate-pulse" />
              </div>

              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-0.5 rounded-full bg-orange-100/80 text-pristine-orange text-[10px] sm:text-xs font-bold tracking-widest mb-1 font-google">
                  <span>MAHARASHTRA REAL ESTATE REGULATORY AUTHORITY</span>
                </div>
                <h3 className="font-serif text-lg sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                  MAHARERA REGISTRATION NO.
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono text-base sm:text-xl font-bold text-pristine-orange tracking-widest bg-white/90 px-3 py-0.5 rounded-lg border border-orange-200 shadow-sm">
                    {PROJECT_DETAILS.reraNumber}
                  </span>
                  <button
                    onClick={handleCopyRera}
                    title="Copy MahaRERA Number"
                    className="p-1.5 rounded-lg bg-gray-100 hover:bg-orange-50 text-gray-700 hover:text-pristine-orange transition-colors border border-gray-200"
                    aria-label="Copy RERA Number"
                  >
                    {copiedRera ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Middle: Location & Institutional Escrow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:max-w-xl text-xs font-google">
              <div className="p-3 rounded-2xl bg-white/80 border border-gray-200/80 flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pristine-orange flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block font-bold">SANCTIONED PROJECT SITE</strong>
                  <span className="text-gray-600 text-[11px] leading-tight block mt-0.5">
                    Beside Wakeshwar Temple, Baner-Pashan Link Road, Someshwarwadi, Pune - 411008
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/80 border border-gray-200/80 flex items-start gap-2.5">
                <Building className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block font-bold">FINANCED BY</strong>
                  <span className="text-gray-600 text-[11px] leading-tight block mt-0.5">
                    {PROJECT_DETAILS.financedBy}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Direct Clickable Link to Official MahaRERA Maharashtra Gov Portal */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-2.5 w-full lg:w-auto flex-shrink-0">
              <a
                href={PROJECT_DETAILS.reraLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-pristine-orange px-6 py-3 rounded-full text-xs font-bold tracking-wider flex items-center justify-center space-x-2 shadow-pristine-orange group"
                aria-label="Verify on Official MahaRERA Portal"
              >
                <span>VERIFY ON MAHARERA PORTAL</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="text-[10px] text-gray-500 font-mono tracking-tight text-center">
                maharera.maharashtra.gov.in
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
