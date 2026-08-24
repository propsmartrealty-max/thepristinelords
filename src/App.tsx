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
import { Footer } from './components/Footer';
import { BrochureModal } from './components/BrochureModal';
import { VipVisitModal } from './components/VipVisitModal';
import { FloatingQuickBar } from './components/FloatingQuickBar';
import { FloatingWhatsAppConcierge } from './components/FloatingWhatsAppConcierge';
import { InteractiveWaterCursor } from './components/InteractiveWaterCursor';
import { FloatingWaterPillIndicator } from './components/FloatingWaterPillIndicator';
import { Toast } from './components/Toast';
import { ErrorBoundary } from './components/ErrorBoundary';

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

          {/* 🔍 Google Advanced Programmatic SEO Directory Hub */}
          <ProgrammaticSeoHub />

          {/* Strategic SEO Corridor Matrix */}
          <CorridorSeoMatrix />
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
