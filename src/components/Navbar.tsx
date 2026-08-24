import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ShieldCheck, MapPin, Copy, Check } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

interface NavbarProps {
  onOpenBrochure?: () => void;
  onOpenVipTour: () => void;
  onShowToast?: (message: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVipTour, onShowToast }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedRera, setCopiedRera] = useState(false);
  const [activeLink, setActiveLink] = useState('ABOUT');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyRera = () => {
    navigator.clipboard.writeText(PROJECT_DETAILS.reraNumber);
    setCopiedRera(true);
    if (onShowToast) onShowToast(`COPIED MAHARERA NO: ${PROJECT_DETAILS.reraNumber}`);
    setTimeout(() => setCopiedRera(false), 2500);
  };

  const navLinks = [
    { name: "ABOUT", href: "#overview" },
    { name: "SPECIFICATION", href: "#specifications" },
    { name: "AMENITIES", href: "#amenities" },
    { name: "MASTER LAYOUT", href: "#master-layout" },
    { name: "FLOOR PLANS", href: "#floor-plans" },
    { name: "FINANCED BY", href: "#financing" },
    { name: "LOCATION", href: "#location" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      {/* Top Mini MahaRERA Strip */}
      <div className="pt-2 pb-1 px-4 sm:px-8 font-google text-xs text-gray-700 hidden sm:block">
        <div className="w-full max-w-[98%] 2xl:max-w-[1600px] mx-auto flex justify-between items-center px-6 py-1.5 rounded-full colorful-chip shadow-sm whitespace-nowrap">
          <div className="flex items-center space-x-5">
            <button
              onClick={handleCopyRera}
              title="Click to copy MahaRERA number"
              className="flex items-center space-x-1.5 text-gray-800 hover:text-pristine-orange transition-colors font-medium cursor-pointer group"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-pristine-orange" />
              <span className="tracking-wider">MAHA RERA NO.</span>
              <strong className="text-gray-900 font-mono tracking-widest group-hover:underline">
                {PROJECT_DETAILS.reraNumber}
              </strong>
              {copiedRera ? (
                <Check className="w-3 h-3 text-emerald-600 ml-1" />
              ) : (
                <Copy className="w-3 h-3 text-gray-400 group-hover:text-pristine-orange ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
            <span className="hidden md:inline-flex items-center space-x-1 text-gray-500">
              <MapPin className="w-3 h-3 text-pristine-orange" />
              <span className="tracking-wider">{PROJECT_DETAILS.location}</span>
            </span>
          </div>

          <div className="flex items-center space-x-5 text-xs font-google">
            <span className="text-gray-500 hidden lg:inline tracking-wider">
              FINANCED BY <strong className="text-gray-900 font-semibold">{PROJECT_DETAILS.financedBy}</strong>
            </span>
            <a 
              href={`tel:${PROJECT_DETAILS.phone}`}
              className="flex items-center space-x-1.5 text-pristine-orange hover:text-pristine-orangeHover transition-colors font-bold tracking-widest"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 - 9209090022</span>
            </a>
          </div>
        </div>
      </div>

      {/* 🌟 PERFECTLY INSET & FITTED FLOATING GLASS FLUIDIC NAVBAR PILL */}
      <div className="sticky top-2 sm:top-3.5 z-40 w-full max-w-[98%] 2xl:max-w-[1600px] mx-auto px-3 sm:px-6 font-google">
        <header
          className={`relative transition-all duration-500 px-4 sm:px-6 py-2 flex items-center justify-between flex-nowrap whitespace-nowrap gap-3 lg:gap-5 glass-navbar-pill ${
            isScrolled ? 'shadow-2xl scale-[0.99]' : 'shadow-navbar-pill'
          }`}
        >
          {/* Left: Official Brand Logo */}
          <div className="flex items-center flex-shrink-0 relative z-10 pl-1">
            <a
              href="#"
              className="flex items-center group py-0.5 px-2 rounded-xl transition-all duration-300 hover:bg-orange-50/60"
              aria-label="The Lords by Pristine Developer Home"
            >
              <img
                src="/logo.png"
                alt="The Lords by Pristine Developers"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_6px_rgba(237,99,54,0.25)]"
              />
            </a>
          </div>

          {/* Center: Evenly Distributed Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-1 xl:space-x-2 2xl:space-x-3.5 text-[11px] xl:text-[11.5px] 2xl:text-xs uppercase font-bold tracking-[0.06em] 2xl:tracking-[0.1em] text-gray-700 whitespace-nowrap flex-nowrap relative z-10 px-2">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`relative px-2.5 xl:px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                    isActive
                      ? 'text-pristine-orange bg-orange-50/90 font-extrabold shadow-sm'
                      : 'hover:text-pristine-orange hover:bg-white/80'
                  }`}
                >
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Side: Neatly Inset Inside the Pill with Perfect Margin */}
          <div className="hidden sm:flex items-center space-x-2.5 flex-shrink-0 relative z-10 pr-1">
            <a
              href={`tel:${PROJECT_DETAILS.phone}`}
              className="hidden 2xl:flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-gray-50/90 border border-gray-200 text-gray-800 hover:text-pristine-orange text-xs font-bold tracking-wider transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-pristine-orange" />
              <span>+91 9209090022</span>
            </a>

            <button
              onClick={onOpenVipTour}
              className="btn-pristine-orange px-5 xl:px-6 py-2 xl:py-2.5 rounded-full text-xs uppercase font-bold tracking-[0.12em] shadow-pristine-orange flex items-center space-x-1.5 whitespace-nowrap flex-shrink-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>ENQUIRE NOW</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-gray-700 hover:text-pristine-orange hover:bg-white/80 transition-colors focus:outline-none flex-shrink-0 pr-1 relative z-10"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-white/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-6 pt-20 animate-fadeIn font-google"
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 text-gray-600 hover:text-gray-900"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col space-y-2.5">
            <div className="pb-4 mb-2 border-b border-gray-100">
              <img
                src="/logo.png"
                alt="The Lords by Pristine Developers"
                className="h-9 w-auto object-contain filter drop-shadow-[0_2px_6px_rgba(237,99,54,0.25)]"
              />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-google font-bold tracking-wider text-gray-800 hover:text-pristine-orange transition-colors py-2 px-4 rounded-2xl hover:bg-gray-50 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenVipTour();
              }}
              className="w-full btn-pristine-orange py-3.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2 shadow-pristine-orange whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>ENQUIRE NOW</span>
            </button>
            <a
              href={`tel:${PROJECT_DETAILS.phone}`}
              className="flex items-center justify-center space-x-2 py-2 text-xs text-gray-700 font-bold tracking-wider font-google whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-pristine-orange" />
              <span>+91 - 9209090022</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
