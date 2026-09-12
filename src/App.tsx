import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Programs } from './components/Programs';
import { Facilities } from './components/Facilities';
import { ImpactBand } from './components/ImpactBand';
import { Transformation } from './components/Transformation';
import { MembershipCta } from './components/MembershipCta';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { HostingerDeploymentGuide } from './components/HostingerDeploymentGuide';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090C] text-[#F5F7FA] font-['Manrope',sans-serif] selection:bg-[#2563EB] selection:text-white pb-16 lg:pb-0">
      {/* Sticky Header / Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust / Value Strip */}
        <TrustStrip />

        {/* 3. About Fitness Era */}
        <About />

        {/* 4. Why Choose Fitness Era */}
        <WhyChooseUs />

        {/* 5. Training / Programs */}
        <Programs />

        {/* 6. Facilities & Equipment */}
        <Facilities />

        {/* 7. Impact Band */}
        <ImpactBand />

        {/* 8. Results & Lifestyle Mindset */}
        <Transformation />

        {/* 9. Membership CTA */}
        <MembershipCta />

        {/* 10. Location & Contact */}
        <LocationContact />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar for quick call & directions */}
      <MobileQuickBar />

      {/* Hostinger Deployment Checklist & Helper */}
      <HostingerDeploymentGuide />
    </div>
  );
}
