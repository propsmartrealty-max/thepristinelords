import React, { useState, useEffect } from 'react';
import { X, Calendar, ShieldCheck, CheckCircle2, User, Smartphone, AlertCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROJECT_DETAILS } from '../data/projectData';
import { submitLeadNotification } from '../services/leadService';

interface VipVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VipVisitModal: React.FC<VipVisitModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bhk: '3 BHK'
  });
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    const newErrors: { name?: string; phone?: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'PLEASE ENTER A VALID NAME';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      newErrors.phone = 'PLEASE ENTER A VALID 10-DIGIT MOBILE NUMBER';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // Send lead notification to propsmartrealty@gmail.com
    await submitLeadNotification({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      bhk: formData.bhk,
      sourceForm: 'VIP Site Tour Booking'
    });

    setLoading(false);
    setIsSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#ED6336', '#38bdf8', '#c59b27']
    });
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
      aria-labelledby="vip-modal-title"
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
              <span className="text-xs uppercase tracking-widest text-pristine-orange font-bold font-google">ENQUIRY DELIVERED</span>
              <h3 id="vip-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                THANK YOU, {formData.name}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed font-light font-google">
                YOUR INQUIRY FOR <strong>{formData.bhk}</strong> HAS BEEN DELIVERED TO THE OFFICIAL SALES DESK. A SENIOR RELATIONSHIP MANAGER WILL CONTACT YOU SHORTLY.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200/60 text-xs text-gray-800 space-y-1 font-google">
              <div className="flex items-center justify-center space-x-1.5 font-bold text-pristine-orange">
                <ShieldCheck className="w-4 h-4" />
                <span>OFFICIAL MAHARERA: {PROJECT_DETAILS.reraNumber}</span>
              </div>
              <p className="text-[11px] text-gray-600 font-light">
                FINANCED BY CAPRI GLOBAL CAPITAL LIMITED (CGCL)
              </p>
            </div>

            <div className="pt-2 flex gap-3 font-google">
              <a
                href={`https://wa.me/${PROJECT_DETAILS.whatsapp}?text=${encodeURIComponent(`Hi Pristine Sales Team, I just submitted an inquiry for ${formData.bhk} at The Lord's Pashan. My name is ${formData.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-pristine-orange py-3.5 rounded-2xl text-xs tracking-wider font-bold shadow-pristine-orange flex items-center justify-center space-x-2"
              >
                <span>OPEN ON WHATSAPP</span>
              </a>

              <button
                onClick={handleReset}
                className="px-6 py-3.5 rounded-2xl border border-gray-300 text-gray-700 hover:text-gray-900 text-xs font-bold"
              >
                CLOSE
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-1 pt-2">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full colorful-chip text-pristine-orange text-[10px] font-bold tracking-widest font-google">
                <Calendar className="w-3.5 h-3.5" />
                <span>OFFICIAL VIP ENQUIRY</span>
              </div>
              <h3 id="vip-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                SCHEDULE VIP SITE TOUR
              </h3>
              <p className="text-xs text-gray-500 font-light font-google">
                {PROJECT_DETAILS.slogan} • BANER-PASHAN LINK ROAD
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-google" noValidate>
              <div>
                <label className="text-xs text-gray-700 font-bold block mb-1">
                  FULL NAME *
                </label>
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
                    className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-white border ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-pristine-orange'
                    } text-gray-900 placeholder-gray-400 text-xs focus:outline-none uppercase shadow-sm`}
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
                <label className="text-xs text-gray-700 font-bold block mb-1">
                  MOBILE NUMBER *
                </label>
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
                    className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-white border ${
                      errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-pristine-orange'
                    } text-gray-900 placeholder-gray-400 text-xs focus:outline-none shadow-sm`}
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
                <label className="text-xs text-gray-700 font-bold block mb-1">
                  INTERESTED CONFIGURATION
                </label>
                <select
                  value={formData.bhk}
                  onChange={(e) => setFormData({ ...formData, bhk: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-300 text-gray-900 text-xs focus:outline-none focus:border-pristine-orange uppercase font-google shadow-sm"
                >
                  <option value="3 BHK">3 BHK LUXURY RESIDENCE (1,554 SQ.FT CARPET)</option>
                  <option value="4.5 BHK">4.5 BHK PALATIAL ESTATE RESIDENCE (2,005 SQ.FT CARPET)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-pristine-orange w-full py-4 rounded-2xl text-xs uppercase font-bold tracking-widest flex items-center justify-center space-x-2 shadow-pristine-orange"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{loading ? "SUBMITTING ENQUIRY..." : "CONFIRM VIP SITE TOUR ENQUIRY"}</span>
                </button>
              </div>

              <div className="text-[10px] text-gray-500 text-center font-google pt-1">
                🔒 100% PRIVATE • ZERO SPAM ASSURANCE • MAHARERA: {PROJECT_DETAILS.reraNumber}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
