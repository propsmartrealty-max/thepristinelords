import React, { useState } from 'react';
import { MessageSquare, X, Send, ShieldCheck, Sparkles, Phone, Download, Calendar } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

export const FloatingWhatsAppConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userQuery, setUserQuery] = useState('');

  const quickTemplates = [
    "Hi Pristine Team, please send the official 3 BHK & 4.5 BHK brochure and price sheet.",
    "Hi, I want to book a private VIP site visit for The Lord's in Pashan.",
    "Hi, please share the master layout and floor plans for The Lord's.",
    "Hi, I am an NRI investor looking for rental yield and payment milestones."
  ];

  const handleSendWhatsApp = (textToSend?: string) => {
    const finalMsg = textToSend || userQuery || "Hi Pristine Sales Team, I would like more information about The Lord's Pashan.";
    const url = `https://wa.me/${PROJECT_DETAILS.whatsapp}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Concierge Bubble on Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 font-google">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center space-x-2.5 p-3.5 sm:px-5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition-all duration-300 hover:scale-105"
            aria-label="Open WhatsApp VIP Concierge"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
              WHATSAPP CONCIERGE
            </span>
          </button>
        )}

        {/* WhatsApp Interactive Drawer / Modal */}
        {isOpen && (
          <div className="w-[320px] sm:w-[360px] bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/90 shadow-2xl overflow-hidden animate-fadeIn text-gray-800">
            {/* Header */}
            <div className="bg-emerald-600 text-white p-4.5 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm">PRISTINE VIP DESK</h4>
                  <span className="text-[10px] text-emerald-100 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping inline-block" />
                    <span>ONLINE • TYPICALLY REPLIES IN 2 MINS</span>
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-white"
                aria-label="Close Concierge"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body with Quick Prompt Chips */}
            <div className="p-4.5 space-y-3 bg-gradient-to-b from-emerald-50/40 to-white">
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                WELCOME TO <strong>THE LORD'S BY PRISTINE DEVELOPERS</strong>. SELECT A TOPIC OR SEND A CUSTOM MESSAGE:
              </p>

              <div className="space-y-2">
                {quickTemplates.map((template, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendWhatsApp(template)}
                    className="w-full text-left p-2.5 rounded-xl bg-white border border-gray-200 hover:border-emerald-500 text-xs text-gray-700 hover:text-emerald-800 transition-colors shadow-sm font-light leading-snug block"
                  >
                    💬 {template}
                  </button>
                ))}
              </div>

              {/* Custom Input */}
              <div className="pt-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="TYPE YOUR INQUIRY..."
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendWhatsApp()}
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 text-xs text-gray-900 focus:outline-none focus:border-emerald-500 uppercase"
                  />
                  <button
                    onClick={() => handleSendWhatsApp()}
                    className="p-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="text-[10px] text-gray-500 text-center font-bold pt-1 flex items-center justify-center space-x-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>OFFICIAL VERIFIED SALES DESK (MAHARERA: {PROJECT_DETAILS.reraNumber})</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
