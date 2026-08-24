import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectOverview } from './components/ProjectOverview';
import { SpecificationsMatrix } from './components/SpecificationsMatrix';
import { AmenitiesShowcase } from './components/AmenitiesShowcase';
import { ResidenceExplorer } from './components/ResidenceExplorer';
import { UnitConfigurator } from './components/UnitConfigurator';
import { VirtualTourExperience } from './components/VirtualTourExperience';
import { SolarPathSimulator } from './components/SolarPathSimulator';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { FinancingAndNewsletter } from './components/FinancingAndNewsletter';
import { ElevationView360 } from './components/ElevationView360';
import { ConstructionMilestones } from './components/ConstructionMilestones';
import { GalleryExperience } from './components/GalleryExperience';
import { LocationHub } from './components/LocationHub';
import { CommuteMatrix } from './components/CommuteMatrix';
import { NriInvestmentCalculator } from './components/NriInvestmentCalculator';
import { EmiCalculator } from './components/EmiCalculator';
import { FAQSection } from './components/FAQSection';
import { ProgrammaticSeoHub } from './components/ProgrammaticSeoHub';
import { CorridorSeoMatrix } from './components/CorridorSeoMatrix';
import { PuneMarketDominanceSweep } from './components/PuneMarketDominanceSweep';
import { Footer } from './components/Footer';
import { BrochureModal } from './components/BrochureModal';
import { VipVisitModal } from './components/VipVisitModal';
import { FloatingQuickBar } from './components/FloatingQuickBar';
import { FloatingWhatsAppConcierge } from './components/FloatingWhatsAppConcierge';
import { InteractiveWaterCursor } from './components/InteractiveWaterCursor';
import { FloatingWaterPillIndicator } from './components/FloatingWaterPillIndicator';
import { Toast } from './components/Toast';
import { ErrorBoundary } from './components/ErrorBoundary';

const CLEAN_PATH_TO_SECTION: Record<string, string> = {
  '/pristine-the-lords-3-bhk-luxury-apartments-baner': 'residences',
  '/pristine-the-lords-4-5-bhk-sky-villa-penthouses-pune': 'residences',
  '/pristine-the-lords-master-layout-floor-plans': 'master-layout',
  '/pristine-the-lords-luxury-amenities-sky-lounge': 'amenities',
  '/pristine-the-lords-specifications-mivan-italian-marble': 'specifications',
  '/pristine-the-lords-baner-pashan-link-road-location': 'location',
  '/pristine-the-lords-transit-commute-hinjewadi-balewadi': 'commute-matrix',
  '/pristine-the-lords-nri-real-estate-investment-pune': 'nri-corner',
  '/nri-investment-dubai-uae': 'nri-corner',
  '/nri-investment-usa': 'nri-corner',
  '/nri-investment-uk': 'nri-corner',
  '/nri-investment-singapore': 'nri-corner',
  '/pune-luxury-real-estate-market-sweep-above-2-crore': 'pune-market-dominance',
  '/pristine-the-lords-baner-keyword-search-directory': 'corridor-seo',
  '/pristine-the-lords-maharera-p52100078557-construction-status': 'construction-status',
  '/pristine-the-lords-faqs-price-carpet-area-possession': 'faq',
  '/pristine-the-lords-brochure-download-pdf': 'download-brochure'
};

export function App() {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isVipTourModalOpen, setIsVipTourModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenBrochure = () => setIsBrochureModalOpen(true);
  const handleCloseBrochure = () => setIsBrochureModalOpen(false);

  const handleOpenVipTour = () => setIsVipTourModalOpen(true);
  const handleCloseVipTour = () => setIsVipTourModalOpen(false);

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  // Automatic clean URL section smooth scrolling on initial load
  useEffect(() => {
    const currentPath = window.location.pathname.toLowerCase().replace(/\/$/, '');
    const targetSectionId = CLEAN_PATH_TO_SECTION[currentPath];
    if (targetSectionId) {
      setTimeout(() => {
        const el = document.getElementById(targetSectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, []);

  // Lock background scroll when modal is active
  useEffect(() => {
    if (isBrochureModalOpen || isVipTourModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isBrochureModalOpen, isVipTourModalOpen]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white text-[#1a1c23] flex flex-col font-sans selection:bg-[#ED6336] selection:text-white uppercase tracking-wider relative">
        {/* Toast Notification */}
        {toastMessage && (
          <Toast
            message={toastMessage}
            onClose={() => setToastMessage(null)}
          />
        )}

        {/* Interactive Water Cursor & Liquid Spotlight */}
        <InteractiveWaterCursor />

        {/* Floating Live Section & Water Gauge Indicator */}
        <FloatingWaterPillIndicator />

        {/* Official Sticky Spread Navbar with Inset Pill */}
        <Navbar
          onOpenBrochure={handleOpenBrochure}
          onOpenVipTour={handleOpenVipTour}
          onShowToast={handleShowToast}
        />

        {/* Main Ultra-Animated Glassmorphic Sections */}
        <main className="flex-grow">
          <Hero
            onOpenBrochure={handleOpenBrochure}
            onOpenVipTour={handleOpenVipTour}
          />

          <ProjectOverview
            onOpenBrochure={handleOpenBrochure}
            onOpenVipTour={handleOpenVipTour}
          />

          <SpecificationsMatrix
            onOpenBrochure={handleOpenBrochure}
          />

          <AmenitiesShowcase
            onOpenBrochure={handleOpenBrochure}
            onOpenVipTour={handleOpenVipTour}
          />

          <ResidenceExplorer
            onOpenBrochure={handleOpenBrochure}
            onOpenVipTour={handleOpenVipTour}
          />

          {/* Interactive Unit Configurator */}
          <UnitConfigurator
            onOpenVipTour={handleOpenVipTour}
            onOpenBrochure={handleOpenBrochure}
          />

          {/* 360° Virtual Panoramic Walkthrough */}
          <VirtualTourExperience />

          {/* Solar Path & 24H Day/Night Simulator */}
          <SolarPathSimulator />

          {/* Luxury Benchmark Comparison Matrix */}
          <ComparisonMatrix />

          <FinancingAndNewsletter />

          <ElevationView360
            onOpenBrochure={handleOpenBrochure}
            onOpenVipTour={handleOpenVipTour}
          />

          {/* Construction & RERA Milestones */}
          <ConstructionMilestones />

          <GalleryExperience />

          <LocationHub
            onOpenVipTour={handleOpenVipTour}
          />

          {/* Interactive Commute & Transit Matrix */}
          <CommuteMatrix />

          {/* Global NRI Investment & Currency Calculator */}
          <NriInvestmentCalculator />

          <EmiCalculator
            onOpenBrochure={handleOpenBrochure}
            onOpenVipTour={handleOpenVipTour}
          />

          <FAQSection />

          {/* Google Advanced Programmatic SEO Directory Hub */}
          <ProgrammaticSeoHub />

          {/* Strategic SEO Corridor Matrix */}
          <CorridorSeoMatrix />

          {/* 📊 Pune Luxury Real Estate Market Sweep & Infrastructure Intelligence */}
          <PuneMarketDominanceSweep />
        </main>

        {/* Official Footer with Contacts & Policies */}
        <Footer
          onOpenBrochure={handleOpenBrochure}
          onOpenVipTour={handleOpenVipTour}
          onShowToast={handleShowToast}
        />

        {/* Floating Quick Bar for Mobile */}
        <FloatingQuickBar
          onOpenBrochure={handleOpenBrochure}
          onOpenVipTour={handleOpenVipTour}
        />

        {/* Floating WhatsApp VIP Concierge Pill */}
        <FloatingWhatsAppConcierge />

        {/* Interactive Booking & Brochure Modals with Form Hardening */}
        <BrochureModal
          isOpen={isBrochureModalOpen}
          onClose={handleCloseBrochure}
        />

        <VipVisitModal
          isOpen={isVipTourModalOpen}
          onClose={handleCloseVipTour}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
