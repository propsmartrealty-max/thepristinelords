import React, { useState } from 'react';
import { ShieldCheck, MapPin, Phone, Mail, ArrowUp, Building, Leaf, Download, FileText, CheckCircle2, User, Smartphone, Waves, Copy, Check, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROJECT_DETAILS } from '../data/projectData';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { submitLeadNotification } from '../services/leadService';

interface FooterProps {
  onOpenBrochure?: () => void;
  onOpenVipTour: () => void;
  onShowToast?: (message: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrochure, onOpenVipTour, onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bhk: '3 BHK'
  });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedRera, setCopiedRera] = useState(false);

  const scrollToTop = () => {
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyRera = () => {
    navigator.clipboard.writeText(PROJECT_DETAILS.reraNumber);
    setCopiedRera(true);
    if (onShowToast) onShowToast(`COPIED MAHARERA: ${PROJECT_DETAILS.reraNumber}`);
    setTimeout(() => setCopiedRera(false), 2500);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, targetId: string) => {
    e.preventDefault();
    window.history.pushState(null, '', href);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validate = () => {
    const newErrors: { name?: string; phone?: string; email?: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'PLEASE ENTER A VALID NAME';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      newErrors.phone = 'PLEASE ENTER A 10-DIGIT MOBILE NUMBER';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'PLEASE ENTER A VALID EMAIL';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBrochureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // Send lead notification to propsmartrealty@gmail.com
    await submitLeadNotification({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      bhk: formData.bhk,
      sourceForm: 'Footer Inquiry'
    });

    setLoading(false);
    setIsSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.85 },
      colors: ['#ED6336', '#38bdf8', '#c59b27']
    });
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-white via-[#f8f9fa] to-[#edf2f7] border-t border-gray-200 text-gray-600 relative overflow-hidden uppercase font-sans">
      <AmbientWaterBlobs />

      {/* 📥 DEDICATED FOOTER DOWNLOAD BROCHURE SECTION */}
      <div id="download-brochure" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="glass-card-luxe rounded-3xl p-8 sm:p-12 shadow-glass-luxury relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full colorful-chip text-pristine-orange text-xs font-bold tracking-widest font-google">
                <FileText className="w-3.5 h-3.5" />
                <span>OFFICIAL DIGITAL DOSSIER</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                DOWNLOAD MASTER BROCHURE
              </h2>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto lg:mx-0 font-light font-google">
                GET INSTANT ACCESS TO SANCTIONED ARCHITECTURAL BLUEPRINTS, COMPREHENSIVE 10-TIER SPECIFICATIONS, 20+ LIFESTYLE AMENITIES CATALOG, AND FLOOR PLANS FOR <strong>THE LORD'S BY PRISTINE DEVELOPER</strong>.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-gray-500 font-medium font-google">
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>3 & 4.5 BHK FLOOR PLANS</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>MAHARERA: {PROJECT_DETAILS.reraNumber}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>INSTANT PDF ACCESS</span>
                </span>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-6">
              {isSubmitted ? (
                <div className="p-8 rounded-3xl bg-emerald-50/90 border border-emerald-300 text-center space-y-4 shadow-sm animate-scaleIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-emerald-950">
                    DOSSIER UNLOCKED
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 font-light leading-relaxed font-google">
                    THANK YOU, <strong>{formData.name.toUpperCase()}</strong>. THE COMPLETE ARCHITECTURAL BROCHURE HAS BEEN SENT TO YOUR DETAILS AND SALES ADVISORS ARE AT YOUR SERVICE.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow-sm"
                    >
                      REQUEST ANOTHER COPY
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBrochureSubmit} className="space-y-3.5 bg-white/90 p-6 sm:p-8 rounded-3xl border border-white/80 shadow-sm font-google">
                  <div className="text-left">
                    <label className="block text-[11px] font-bold text-gray-700 mb-1 tracking-wider">YOUR FULL NAME</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        placeholder="ENTER YOUR NAME"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-gray-50 border text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white transition-all uppercase ${
                          errors.name ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-pristine-orange'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-[10px] text-red-500 mt-1 font-bold">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1 tracking-wider">PHONE NUMBER</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <Smartphone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          placeholder="10-DIGIT MOBILE"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-gray-50 border text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white transition-all ${
                            errors.phone ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-pristine-orange'
                          }`}
                        />
                      </div>
                      {errors.phone && <p className="text-[10px] text-red-500 mt-1 font-bold">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1 tracking-wider">EMAIL ADDRESS</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          placeholder="EMAIL FOR PDF"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-gray-50 border text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white transition-all uppercase ${
                            errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-pristine-orange'
                          }`}
                        />
                      </div>
                      {errors.email && <p className="text-[10px] text-red-500 mt-1 font-bold">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="text-left">
                    <label className="block text-[11px] font-bold text-gray-700 mb-1 tracking-wider">PREFERRED CONFIGURATION</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['3 BHK (1554 SQ.FT)', '4.5 BHK (2005 SQ.FT)'].map((config) => (
                        <button
                          key={config}
                          type="button"
                          onClick={() => setFormData({ ...formData, bhk: config })}
                          className={`py-2 px-3 rounded-xl border text-[11px] font-bold transition-all ${
                            formData.bhk === config
                              ? 'bg-pristine-orange text-white border-pristine-orange shadow-sm'
                              : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-white'
                          }`}
                        >
                          {config}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-pristine-orange py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider shadow-pristine-orange hover:shadow-orange-500/40 transition-all duration-300 flex items-center justify-center space-x-2 mt-2"
                  >
                    {loading ? (
                      <span className="flex items-center space-x-2">
                        <Waves className="w-4 h-4 animate-spin" />
                        <span>PROCESSING...</span>
                      </span>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>DOWNLOAD OFFICIAL BROCHURE</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center space-x-4 pt-1 text-[10px] text-gray-400">
                    <span className="flex items-center space-x-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-500" />
                      <span>NO SPAM GUARANTEE</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <CheckCircle2 className="w-3 h-3 text-sky-500" />
                      <span>OFFICIAL PRISTINE DESK</span>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Corporate & Information Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200/80">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-gray-200">
          {/* Brand & MahaRERA Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-2 bg-white rounded-2xl inline-block shadow-sm border border-gray-100">
              <img
                src="/logo.png"
                alt="The Lords by Pristine Developers"
                className="h-11 w-auto object-contain filter drop-shadow-[0_2px_6px_rgba(237,99,54,0.25)]"
              />
            </div>

            <p className="text-xs text-gray-600 leading-relaxed font-light font-google">
              {PROJECT_DETAILS.slogan}. 3 & 4.5 BHK LUXURY RESIDENCES IN PASHAN, PUNE. TIMELESS ARCHITECTURE WITH MODERN COMFORTS.
            </p>

            {/* MahaRERA Official Box with Copy Support */}
            <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-2">
              <button
                onClick={handleCopyRera}
                className="flex items-center space-x-2 text-gray-800 hover:text-pristine-orange text-xs font-bold tracking-wider font-google group cursor-pointer w-full text-left"
              >
                <ShieldCheck className="w-4 h-4 text-pristine-orange flex-shrink-0" />
                <span>MAHA RERA NO: <strong className="group-hover:underline">{PROJECT_DETAILS.reraNumber}</strong></span>
                {copiedRera ? <Check className="w-3.5 h-3.5 text-emerald-600 ml-auto" /> : <Copy className="w-3.5 h-3.5 text-gray-400 ml-auto opacity-50 group-hover:opacity-100" />}
              </button>
              <p className="text-[11px] text-gray-500 font-google">
                VERIFIED ON <a href={PROJECT_DETAILS.reraLink} target="_blank" rel="noopener noreferrer" className="text-pristine-orange hover:underline font-bold">MAHARERA.MAHARASHTRA.GOV.IN</a>
              </p>
              <div className="pt-1 text-[11px] text-gray-600 border-t border-gray-100 font-google">
                FINANCED BY: <strong className="text-gray-900">{PROJECT_DETAILS.financedBy}</strong>
              </div>
            </div>
          </div>

          {/* Quick Menu with Clean Keyword URLs */}
          <div className="lg:col-span-2 space-y-3 font-google">
            <h4 className="font-serif font-bold text-gray-900 text-sm tracking-wider">
              MENU
            </h4>
            <ul className="space-y-2 text-xs font-bold text-gray-600">
              <li><a href="/pristine-the-lords-baner-project-overview" onClick={(e) => handleLinkClick(e, '/pristine-the-lords-baner-project-overview', 'overview')} className="hover:text-pristine-orange transition-colors">HOME & OVERVIEW</a></li>
              <li><a href="/pristine-the-lords-baner-specifications-mivan-italian-marble" onClick={(e) => handleLinkClick(e, '/pristine-the-lords-baner-specifications-mivan-italian-marble', 'specifications')} className="hover:text-pristine-orange transition-colors">SPECIFICATION</a></li>
              <li><a href="/pristine-the-lords-baner-luxury-amenities-sky-lounge" onClick={(e) => handleLinkClick(e, '/pristine-the-lords-baner-luxury-amenities-sky-lounge', 'amenities')} className="hover:text-pristine-orange transition-colors">AMENITIES</a></li>
              <li><a href="/pristine-the-lords-baner-master-layout-floor-plans" onClick={(e) => handleLinkClick(e, '/pristine-the-lords-baner-master-layout-floor-plans', 'master-layout')} className="hover:text-pristine-orange transition-colors font-bold text-pristine-orange">MASTER LAYOUT</a></li>
              <li><a href="/pristine-the-lords-baner-3-bhk-luxury-apartments" onClick={(e) => handleLinkClick(e, '/pristine-the-lords-baner-3-bhk-luxury-apartments', 'residences')} className="hover:text-pristine-orange transition-colors">FLOOR PLANS</a></li>
              <li><a href="/pristine-the-lords-baner-banking-institutional-financing" onClick={(e) => handleLinkClick(e, '/pristine-the-lords-baner-banking-institutional-financing', 'financing')} className="hover:text-pristine-orange transition-colors">FINANCED BY</a></li>
              <li><a href="/pristine-the-lords-baner-brochure-download-pdf" onClick={(e) => handleLinkClick(e, '/pristine-the-lords-baner-brochure-download-pdf', 'download-brochure')} className="hover:text-pristine-orange transition-colors font-bold text-pristine-orange">DOWNLOAD BROCHURE</a></li>
              <li><a href="/pristine-the-lords-baner-contact-sales-office" onClick={(e) => handleLinkClick(e, '/pristine-the-lords-baner-contact-sales-office', 'contact')} className="hover:text-pristine-orange transition-colors">CONTACT US</a></li>
            </ul>
          </div>

          {/* Brand Sections */}
          <div className="lg:col-span-2 space-y-3 font-google">
            <h4 className="font-serif font-bold text-gray-900 text-sm tracking-wider">
              ABOUT PRISTINE
            </h4>
            <ul className="space-y-2 text-xs font-bold text-gray-600">
              <li><span className="hover:text-pristine-orange cursor-pointer">BRAND LEGACY</span></li>
              <li><span className="hover:text-pristine-orange cursor-pointer">BRAND TEAM</span></li>
              <li><span className="hover:text-pristine-orange cursor-pointer">LIFE AT PRISTINE</span></li>
              <li><span className="hover:text-pristine-orange cursor-pointer">ONGOING & UPCOMING</span></li>
              <li><a href="/pristine-the-lords-baner-nri-real-estate-investment" onClick={(e) => handleLinkClick(e, '/pristine-the-lords-baner-nri-real-estate-investment', 'nri-corner')} className="hover:text-pristine-orange transition-colors">NRI CORNER</a></li>
              <li><span className="hover:text-pristine-orange cursor-pointer">CLIENTS TESTIMONIALS</span></li>
              <li><span className="hover:text-pristine-orange cursor-pointer">PRISTINE CARE</span></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-gray-900 text-sm tracking-wider">
              CONTACT US
            </h4>
            
            <div className="space-y-3 text-xs text-gray-600">
              <a
                href={PROJECT_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2 group hover:text-pristine-orange transition-colors"
                title="Open location in Google Maps"
              >
                <MapPin className="w-4 h-4 text-pristine-orange flex-shrink-0 mt-0.5" />
                <span className="font-google group-hover:underline">{PROJECT_DETAILS.siteAddress}</span>
              </a>

              <div className="pt-2 border-t border-gray-200/60 space-y-2 font-mono text-xs">
                <div className="flex items-center space-x-2 font-bold text-gray-900">
                  <Phone className="w-3.5 h-3.5 text-pristine-orange" />
                  <a href={`tel:${PROJECT_DETAILS.phone}`} className="hover:text-pristine-orange">{PROJECT_DETAILS.phone}</a>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="w-3.5 h-3.5 text-gray-400" />
                  <a href={`tel:${PROJECT_DETAILS.phoneAlt}`} className="hover:text-pristine-orange">{PROJECT_DETAILS.phoneAlt}</a>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-pristine-orange" />
                  <a href={`mailto:${PROJECT_DETAILS.email}`} className="hover:text-gray-900">{PROJECT_DETAILS.email}</a>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-pristine-orange" />
                  <a href={`mailto:${PROJECT_DETAILS.legalEmail}`} className="hover:text-gray-900">{PROJECT_DETAILS.legalEmail}</a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex gap-2 font-google">
              <a
                href="/pristine-the-lords-baner-brochure-download-pdf"
                onClick={(e) => {
                  if (onOpenBrochure) {
                    e.preventDefault();
                    onOpenBrochure();
                  } else {
                    handleLinkClick(e, '/pristine-the-lords-baner-brochure-download-pdf', 'download-brochure');
                  }
                }}
                className="flex-1 py-2.5 rounded-2xl bg-white border border-gray-300 text-gray-700 text-xs font-bold uppercase tracking-wider hover:border-pristine-orange text-center transition-colors shadow-sm"
              >
                BROCHURE
              </a>
              <button
                onClick={onOpenVipTour}
                className="flex-1 btn-pristine-orange py-2.5 rounded-2xl text-xs uppercase tracking-wider font-bold"
              >
                ENQUIRE NOW
              </button>
            </div>
          </div>
        </div>

        {/* Policies & Environmental Clearance */}
        <div className="pt-8 text-xs text-gray-500 space-y-4 font-google">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-emerald-600 font-bold">
              <Leaf className="w-4 h-4" />
              <span>ENVIRONMENTAL CLEARANCE COMPLIANT</span>
            </div>

            <div className="flex items-center space-x-4 text-xs font-medium">
              <span className="hover:text-gray-900 cursor-pointer">TERMS & CONDITIONS</span>
              <span>•</span>
              <span className="hover:text-gray-900 cursor-pointer">PRIVACY POLICY</span>
              <span>•</span>
              <span className="hover:text-gray-900 cursor-pointer">ACCESSIBILITY STATEMENT</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-gray-200 text-[11px] text-gray-500 gap-2">
            <div>
              © 2024 SHARIWAA SOLUTIONS / PRISTINE DEVELOPERS | ALL RIGHTS RESERVED. (THE LORD'S, PASHAN, PUNE).
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-pristine-orange hover:text-gray-900 transition-colors font-bold"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
