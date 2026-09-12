import React from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Dumbbell, Users } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const Hero: React.FC = () => {
  const scrollToFacilities = () => {
    const el = document.querySelector('#facilities');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMembership = () => {
    const el = document.querySelector('#membership');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#07090C]"
    >
      {/* Background Hero Image with Architectural Depth */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/images/hero_gym_interior_1789251392871.jpg"
          alt="Fitness Era modern dark industrial gym interior with heavy strength equipment"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-[10000ms]"
        />

        {/* Multi-layered dark cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090C] via-[#07090C]/85 to-[#07090C]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090C] via-transparent to-[#07090C]/70" />
        
        {/* Subtle electric blue & violet atmospheric ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Grid line overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 lg:pt-16">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11151A]/80 border border-[#2A3038] mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-ping" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#06B6D4]">
              FITNESS ERA • GARDEN TOWN
            </span>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-main-heading"
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#F5F7FA] leading-[1.05] mb-6"
          >
            BUILD YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#9AA3AD]">
              STRONGER
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
              ERA.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p
            id="hero-supporting-text"
            className="text-base sm:text-lg lg:text-xl text-[#9AA3AD] max-w-2xl leading-relaxed mb-8 font-normal"
          >
            Train with purpose. Build strength, improve your fitness, and become the strongest version
            of yourself at Fitness Era Barkat Market Garden Town.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={scrollToMembership}
              id="hero-primary-cta"
              className="group flex items-center justify-center gap-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>JOIN FITNESS ERA</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToFacilities}
              id="hero-secondary-cta"
              className="flex items-center justify-center gap-2 bg-[#171C22]/80 hover:bg-[#171C22] text-[#F5F7FA] hover:text-white border border-[#2A3038] hover:border-[#9AA3AD]/40 font-semibold text-sm uppercase tracking-wider px-7 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              <span>EXPLORE THE GYM</span>
            </button>
          </div>

          {/* Supporting Trust Details */}
          <div
            id="hero-trust-details"
            className="pt-6 border-t border-[#2A3038]/80 flex flex-wrap items-center gap-y-3 gap-x-6 sm:gap-x-8 text-xs font-semibold uppercase tracking-wider text-[#9AA3AD]"
          >
            <div className="flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-[#06B6D4]" />
              <span>Strength Training</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#2A3038]" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
              <span>Modern Equipment</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#2A3038]" />
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#06B6D4]" />
              <span>Fitness Community</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1.5 text-[#9AA3AD]/60 hover:text-[#06B6D4] transition-colors cursor-pointer"
        onClick={scrollToFacilities}
      >
        <span className="text-[10px] tracking-widest uppercase font-medium">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
