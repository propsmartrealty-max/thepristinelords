import React, { useState, useEffect } from 'react';
import { X, Download, ShieldCheck, CheckCircle2, FileText, Smartphone, Mail, User, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROJECT_DETAILS } from '../data/projectData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bhk: '3 BHK'
  });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { name?: string; phone?: string; email?: string } = {};
    
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'PLEASE ENTER A VALID NAME';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      newErrors.phone = 'PLEASE ENTER A VALID 10-DIGIT MOBILE NUMBER';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'PLEASE ENTER A VALID EMAIL ADDRESS';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ED6336', '#38bdf8', '#c59b27']
      });
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn font-sans uppercase"
    >
      <div className="relative w-full max-w-lg bg-white/95 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/90 shadow-2xl">
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100/80 hover:bg-gray-200 text-gray-600 hover:text-gray-900 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 sm:p-10 text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-pristine-orange font-bold font-google">REQUEST CONFIRMED</span>
              <h3 id="brochure-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                OFFICIAL BROCHURE UNLOCKED
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                THANK YOU, <strong className="text-gray-900">{formData.name}</strong>. THE OFFICIAL MASTER BROCHURE AND FLOOR PLAN DOSSIER FOR <strong>{formData.bhk}</strong> HAVE BEEN SENT TO YOUR WHATSAPP AND EMAIL.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-left space-y-2 text-xs font-google">
              <div className="flex items-center justify-between text-gray-600">
                <span>WHATSAPP:</span>
                <span className="text-gray-900 font-mono font-bold">{formData.phone}</span>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <span>EMAIL:</span>
                <span className="text-gray-900 font-mono font-bold">{formData.email}</span>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <span>MAHA RERA:</span>
                <span className="text-pristine-orange font-mono font-bold">{PROJECT_DETAILS.reraNumber}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2 font-google">
              <a
                href={`https://wa.me/${PROJECT_DETAILS.whatsapp}?text=${encodeURIComponent(`Hi Pristine Sales Team, I just requested the brochure for ${formData.bhk} at The Lord's Pashan. My name is ${formData.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pristine-orange w-full py-3.5 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-pristine-orange font-bold"
              >
                <span>OPEN IN WHATSAPP</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full py-2 text-xs text-gray-500 hover:text-gray-900 font-bold"
              >
                CLOSE WINDOW
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-pristine-orange text-[11px] font-bold tracking-widest mb-2 font-google">
                <FileText className="w-3.5 h-3.5" />
                <span>THE LORD'S BY PRISTINE</span>
              </div>
              <h3 id="brochure-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                DOWNLOAD MASTER BROCHURE
              </h3>
              <p className="text-gray-600 text-xs mt-1 font-light">
                RECEIVE SANCTIONED ARCHITECTURAL PLANS, 20+ AMENITIES DOSSIER, AND SPECIFICATIONS.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 font-google" noValidate>
              <div>
                <label className="text-xs text-gray-700 font-bold block mb-1">FULL NAME *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="ENTER YOUR FULL NAME"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-pristine-orange'
                    } text-gray-900 placeholder-gray-400 text-xs sm:text-sm focus:outline-none uppercase shadow-sm`}
                  />
                </div>
                {errors.name && (
                  <p className="text-[10px] text-red-500 font-bold mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs text-gray-700 font-bold block mb-1">MOBILE NUMBER *</label>
                <div className="relative">
                  <Smartphone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
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
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border ${
                      errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-pristine-orange'
                    } text-gray-900 placeholder-gray-400 text-xs sm:text-sm focus:outline-none shadow-sm`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-[10px] text-red-500 font-bold mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs text-gray-700 font-bold block mb-1">EMAIL ADDRESS *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
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
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-pristine-orange'
                    } text-gray-900 placeholder-gray-400 text-xs sm:text-sm focus:outline-none uppercase shadow-sm`}
                  />
                </div>
                {errors.email && (
                  <p className="text-[10px] text-red-500 font-bold mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs text-gray-700 font-bold block mb-1">PREFERRED CONFIGURATION</label>
                <select
                  value={formData.bhk}
                  onChange={(e) => setFormData({ ...formData, bhk: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-300 text-gray-900 text-xs sm:text-sm focus:outline-none focus:border-pristine-orange uppercase shadow-sm"
                >
                  <option value="3 BHK">3 BHK LUXURY RESIDENCE (1,554 SQ.FT)</option>
                  <option value="4.5 BHK">4.5 BHK LUXURY ESTATE RESIDENCE (2,005 SQ.FT)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-pristine-orange w-full py-3.5 rounded-2xl text-xs uppercase tracking-wider shadow-pristine-orange font-bold flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>{loading ? "GENERATING SECURE PDF..." : "DOWNLOAD MASTER BROCHURE"}</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[10px] text-gray-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-pristine-orange" />
                <span>MAHA RERA APPROVED: {PROJECT_DETAILS.reraNumber}</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
