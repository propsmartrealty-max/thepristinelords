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

export const Footer: React.FC<FooterProps> = ({ onOpenVipTour, onShowToast }) => {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyRera = () => {
    navigator.clipboard.writeText(PROJECT_DETAILS.reraNumber);
    setCopiedRera(true);
    if (onShowToast) onShowToast(`COPIED MAHARERA: ${PROJECT_DETAILS.reraNumber}`);
    setTimeout(() => setCopiedRera(false), 2500);
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

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-gray-700 font-google">
                <button
                  onClick={handleCopyRera}
                  className="flex items-center space-x-1.5 hover:text-pristine-orange transition-colors cursor-pointer group"
                >
                  <ShieldCheck className="w-4 h-4 text-pristine-orange" />
                  <span>MAHA RERA: <strong className="text-gray-900 group-hover:underline">{PROJECT_DETAILS.reraNumber}</strong></span>
                  {copiedRera ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-gray-400 opacity-60 group-hover:opacity-100" />}
                </button>
                <div className="flex items-center space-x-1.5">
                  <Waves className="w-4 h-4 text-sky-500" />
                  <span>INSTANT PDF & WHATSAPP COPY</span>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6">
              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-white/90 border border-emerald-300 text-center space-y-4 shadow-sm backdrop-blur-md">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900">
                    BROCHURE SENT SUCCESSFULLY!
                  </h3>
                  <p className="text-xs text-gray-600 font-light font-google">
                    THANK YOU, <strong className="text-gray-900">{formData.name}</strong>. THE OFFICIAL BROCHURE FOR <strong>{formData.bhk}</strong> HAS BEEN DISPATCHED TO YOUR WHATSAPP AND EMAIL.
                  </p>
                  <a
                    href={`https://wa.me/${PROJECT_DETAILS.whatsapp}?text=${encodeURIComponent(`Hi Pristine Sales Team, I just downloaded the brochure for ${formData.bhk} at The Lord's Pashan. My name is ${formData.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pristine-orange inline-flex items-center space-x-2 px-8 py-3 rounded-2xl text-xs uppercase tracking-wider shadow-pristine-orange font-bold font-google"
                  >
                    <span>OPEN IN WHATSAPP</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleBrochureSubmit} className="bg-white/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/90 shadow-sm space-y-3.5 font-google" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] text-gray-700 font-bold block mb-1">FULL NAME *</label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="YOUR NAME"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          } text-gray-900 placeholder-gray-400 text-xs focus:outline-none focus:border-pristine-orange uppercase shadow-sm`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-[9px] text-red-500 font-bold mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-[11px] text-gray-700 font-bold block mb-1">MOBILE NUMBER *</label>
                      <div className="relative">
                        <Smartphone className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          } text-gray-900 placeholder-gray-400 text-xs focus:outline-none focus:border-pristine-orange shadow-sm`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[9px] text-red-500 font-bold mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] text-gray-700 font-bold block mb-1">EMAIL ADDRESS *</label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          inputMode="email"
                          autoComplete="email"
                          placeholder="NAME@EMAIL.COM"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          } text-gray-900 placeholder-gray-400 text-xs focus:outline-none focus:border-pristine-orange uppercase shadow-sm`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[9px] text-red-500 font-bold mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-[11px] text-gray-700 font-bold block mb-1">CONFIGURATION</label>
                      <select
                        value={formData.bhk}
                        onChange={(e) => setFormData({ ...formData, bhk: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-white border border-gray-300 text-gray-900 text-xs focus:outline-none focus:border-pristine-orange uppercase font-google shadow-sm"
                      >
                        <option value="3 BHK">3 BHK LUXURY RESIDENCE (1,554 SQ.FT)</option>
                        <option value="4.5 BHK">4.5 BHK LUXURY ESTATE RESIDENCE (2,005 SQ.FT)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-pristine-orange w-full py-3.5 rounded-2xl text-xs tracking-wider flex items-center justify-center space-x-2 shadow-pristine-orange font-bold font-google"
                    >
                      <Download className="w-4 h-4" />
                      <span>{loading ? "GENERATING BROCHURE..." : "DOWNLOAD OFFICIAL BROCHURE NOW"}</span>
                    </button>
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
                VERIFIED ON <a href={PROJECT_DETAILS.reraLink} target="_blank" rel="noopener noreferrer" className="text-pristine-orange hover:underline font-bold">MAHARERA.MAHAONLINE.GOV.IN</a>
              </p>
              <div className="pt-1 text-[11px] text-gray-600 border-t border-gray-100 font-google">
                FINANCED BY: <strong className="text-gray-900">{PROJECT_DETAILS.financedBy}</strong>
              </div>
            </div>
          </div>

          {/* Quick Menu */}
          <div className="lg:col-span-2 space-y-3 font-google">
            <h4 className="font-serif font-bold text-gray-900 text-sm tracking-wider">
              MENU
            </h4>
            <ul className="space-y-2 text-xs font-bold text-gray-600">
              <li><a href="#overview" className="hover:text-pristine-orange transition-colors">HOME & OVERVIEW</a></li>
              <li><a href="#specifications" className="hover:text-pristine-orange transition-colors">SPECIFICATION</a></li>
              <li><a href="#amenities" className="hover:text-pristine-orange transition-colors">AMENITIES</a></li>
              <li><a href="#master-layout" className="hover:text-pristine-orange transition-colors font-bold text-pristine-orange">MASTER LAYOUT</a></li>
              <li><a href="#floor-plans" className="hover:text-pristine-orange transition-colors">FLOOR PLANS</a></li>
              <li><a href="#financing" className="hover:text-pristine-orange transition-colors">FINANCED BY</a></li>
              <li><a href="#download-brochure" className="hover:text-pristine-orange transition-colors font-bold text-pristine-orange">DOWNLOAD BROCHURE</a></li>
              <li><a href="#contact" className="hover:text-pristine-orange transition-colors">CONTACT US</a></li>
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
              <li><span className="hover:text-pristine-orange cursor-pointer">NRI CORNER</span></li>
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
                <div>
                  <strong className="text-gray-900 block group-hover:text-pristine-orange transition-colors flex items-center space-x-1">
                    <span>THE LORD'S SITE LOCATION:</span>
                    <ExternalLink className="w-3 h-3 text-pristine-orange" />
                  </strong>
                  <span className="underline underline-offset-2">{PROJECT_DETAILS.siteAddress}</span>
                </div>
              </a>

              <div className="flex items-start space-x-2">
                <Building className="w-4 h-4 text-pristine-orange flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block">PRISTINE DEVELOPERS:</strong>
                  <span>{PROJECT_DETAILS.o2Address}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-1 font-google">
                <Phone className="w-4 h-4 text-pristine-orange flex-shrink-0" />
                <a href={`tel:${PROJECT_DETAILS.phone}`} className="text-pristine-orange font-bold hover:underline">
                  +91 - 9209090022
                </a>
              </div>

              <div className="flex flex-col space-y-1 pt-1 text-[11px] text-gray-500 font-google">
                <div className="flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-pristine-orange" />
                  <a href={`mailto:propsmartrealty@gmail.com`} className="hover:text-gray-900">propsmartrealty@gmail.com</a>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-pristine-orange" />
                  <a href={`mailto:${PROJECT_DETAILS.legalEmail}`} className="hover:text-gray-900">{PROJECT_DETAILS.legalEmail}</a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex gap-2 font-google">
              <a
                href="#download-brochure"
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
