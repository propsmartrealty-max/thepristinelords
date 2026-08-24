import React, { useEffect, useState } from 'react';
import { Waves, Sparkles, Compass, ShieldCheck } from 'lucide-react';

export const FloatingWaterPillIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('HERO');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      const sections = [
        { id: 'overview', name: 'OVERVIEW' },
        { id: 'specifications', name: 'SPECS' },
        { id: 'amenities', name: 'AMENITIES' },
        { id: 'floor-plans', name: 'PLANS' },
        { id: 'financing', name: 'FINANCE' },
        { id: 'contact', name: 'CONTACT' }
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden lg:flex items-center space-x-3 font-google">
      <div className="glass-card-luxe p-2 px-4 rounded-full border border-white/90 shadow-glass-luxury flex items-center space-x-3">
        {/* Animated Water Droplet Gauge */}
        <div className="relative w-7 h-7 rounded-full bg-sky-100 border border-sky-300 overflow-hidden flex items-center justify-center shadow-inner">
          <div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pristine-orange to-sky-400 transition-all duration-300 opacity-85"
            style={{ height: `${scrollProgress}%` }}
          />
          <Waves className="w-3.5 h-3.5 text-gray-900 relative z-10 animate-pulse" />
        </div>

        <div className="flex flex-col text-left leading-tight">
          <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">SECTION RADAR</span>
          <span className="text-xs font-bold text-gray-900 tracking-wider text-pristine-orange">
            {activeSection} ({Math.round(scrollProgress)}%)
          </span>
        </div>
      </div>
    </div>
  );
};
