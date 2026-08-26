import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  Download, 
  Calendar
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

interface NavbarProps {
  onOpenBrochure: () => void;
  onOpenVipTour: () => void;
  onShowToast?: (msg: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrochure, onOpenVipTour }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('ABOUT');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "/pristine-the-lords-baner-project-overview", targetId: "overview" },
    { name: "SPECIFICATION", href: "/pristine-the-lords-baner-specifications-mivan-italian-marble", targetId: "specifications" },
    { name: "AMENITIES", href: "/pristine-the-lords-baner-luxury-amenities-sky-lounge", targetId: "amenities" },
    { name: "MASTER LAYOUT", href: "/pristine-the-lords-baner-master-layout-floor-plans", targetId: "master-layout" },
    { name: "FLOOR PLANS", href: "/pristine-the-lords-baner-3-bhk-luxury-apartments", targetId: "residences" },
    { name: "FINANCED BY", href: "/pristine-the-lords-baner-banking-institutional-financing", targetId: "financing" },
    { name: "LOCATION", href: "/pristine-the-lords-baner-pashan-link-road-location", targetId: "location" },
    { name: "CONTACT", href: "/pristine-the-lords-baner-contact-sales-office", targetId: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setActiveLink(link.name);
    window.history.pushState(null, '', link.href);
    const element = document.getElementById(link.targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 🌟 PERFECTLY INSET & FITTED FLOATING GLASS FLUIDIC NAVBAR PILL */}
      <div className="sticky top-2 sm:top-4 z-40 w-full max-w-[98%] 2xl:max-w-[1600px] mx-auto px-3 sm:px-6 font-google">
        <header
          className={`relative transition-all duration-500 px-4 sm:px-6 py-2.5 flex items-center justify-between flex-nowrap whitespace-nowrap gap-3 lg:gap-5 glass-navbar-pill ${
            isScrolled ? 'shadow-2xl scale-[0.99]' : 'shadow-navbar-pill'
          }`}
        >
          {/* Left: Official Brand Logo */}
          <div className="flex items-center flex-shrink-0 relative z-10 pl-1">
            <a
              href="/"
              onClick={handleLogoClick}
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

          {/* Center: Evenly Distributed Navigation Links with Clean Semantic URLs */}
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-1 xl:space-x-2 2xl:space-x-3.5 text-[11px] xl:text-[11.5px] 2xl:text-xs uppercase font-bold tracking-[0.06em] 2xl:tracking-[0.1em] text-gray-700 whitespace-nowrap flex-nowrap relative z-10 px-2">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
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

          {/* Right Side: Action CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5 flex-shrink-0 relative z-10 pr-1">
            {/* Download Brochure Button */}
            <button
              onClick={onOpenBrochure}
              className="px-3.5 xl:px-4 py-2 rounded-full border border-gray-300 hover:border-pristine-orange text-gray-800 hover:text-pristine-orange text-[11px] font-bold uppercase tracking-wider transition-all duration-200 hover:bg-white flex items-center space-x-1.5 flex-shrink-0 shadow-sm"
              aria-label="Download Project Brochure"
            >
              <Download className="w-3.5 h-3.5 text-pristine-orange" />
              <span className="hidden xl:inline">BROCHURE</span>
            </button>

            {/* Enquire Now CTA Button */}
            <button
              onClick={onOpenVipTour}
              className="btn-pristine-orange px-4 xl:px-5 py-2 rounded-full text-white text-[11px] font-extrabold uppercase tracking-wider shadow-pristine-orange hover:shadow-orange-500/40 transition-all duration-200 flex items-center space-x-1.5 flex-shrink-0"
              aria-label="Enquire Now"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>ENQUIRE NOW</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
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
                onClick={(e) => handleNavClick(e, link)}
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
