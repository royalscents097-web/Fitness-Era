import React from 'react';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const MembershipCta: React.FC = () => {
  return (
    <section id="membership" className="relative py-28 sm:py-36 bg-[#07090C] overflow-hidden border-b border-[#2A3038]">
      {/* Background Image with Cinematic Dark Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero_gym_interior_1789251392871.jpg"
          alt="Fitness Era Gym Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090C] via-[#07090C]/90 to-[#07090C]" />
        
        {/* Blue and Cyan Atmospheric Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#2563EB]/15 rounded-full blur-[130px] pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11151A]/90 border border-[#2A3038] mb-6 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#06B6D4]">
            MEMBERSHIP &amp; VISIT
          </span>
        </div>

        {/* Headline */}
        <h2
          id="membership-heading"
          className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F5F7FA] leading-[1.1] mb-6 max-w-4xl mx-auto"
        >
          READY TO ENTER YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-white">
            STRONGER ERA?
          </span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-[#9AA3AD] max-w-2xl mx-auto mb-10 leading-relaxed">
          Make your next workout the start of something bigger. Visit Fitness Era in Garden Town and take the first step.
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Phone CTA */}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            id="membership-call-cta"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            <span>CALL {BUSINESS_INFO.phone}</span>
          </a>

          {/* Directions CTA */}
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="membership-directions-cta"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 bg-[#171C22]/90 hover:bg-[#171C22] text-[#F5F7FA] hover:text-white border border-[#2A3038] hover:border-[#06B6D4]/50 font-semibold text-sm uppercase tracking-wider py-4 px-8 rounded-xl transition-all duration-200"
          >
            <MapPin className="w-4 h-4 text-[#06B6D4]" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>

        {/* Small reassurance */}
        <p className="text-xs text-[#9AA3AD]/70 mt-8 uppercase tracking-widest">
          {BUSINESS_INFO.street} • Near Barkat Market
        </p>
      </div>
    </section>
  );
};
