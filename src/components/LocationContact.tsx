import React, { useState } from 'react';
import { MapPin, Phone, Compass, ExternalLink, Copy, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const LocationContact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0B0D10] border-b border-[#2A3038]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#171C22] border border-[#2A3038] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#06B6D4]">
              LOCATION &amp; CONTACT
            </span>
          </div>

          <h2
            id="contact-heading"
            className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#F5F7FA] leading-tight"
          >
            FIND FITNESS ERA.
          </h2>
          <p className="text-base text-[#9AA3AD] mt-4">
            Located conveniently in Babar Block, Garden Town, Lahore, right next to the vibrant Barkat Market commercial district.
          </p>
        </div>

        {/* 2-Column Contact & Map-Visual Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Dark Premium Contact Card */}
          <div className="lg:col-span-5 bg-[#11151A] border border-[#2A3038] rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Ambient blue corner light */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Brand Title */}
              <div className="mb-8">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#06B6D4] block mb-1">
                  OFFICIAL GYM LOCATION
                </span>
                <h3 className="font-display text-2xl font-black uppercase text-white">
                  Fitness Era Barkat Market Garden Town
                </h3>
                <div className="w-12 h-0.5 bg-[#2563EB] mt-3" />
              </div>

              {/* Information Rows */}
              <div className="space-y-6 mb-8">
                
                {/* Location item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#171C22] border border-[#2A3038] text-[#06B6D4] shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9AA3AD] block">
                      Address
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-[#F5F7FA] mt-0.5 leading-snug">
                      {BUSINESS_INFO.address}
                    </p>
                    <button
                      onClick={copyAddress}
                      className="inline-flex items-center gap-1.5 text-xs text-[#06B6D4] hover:text-white mt-1.5 font-medium transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Address copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy full address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#171C22] border border-[#2A3038] text-[#2563EB] shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9AA3AD] block">
                      Phone / Inquiries
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-lg sm:text-xl font-bold font-display tracking-wide text-[#F5F7FA] hover:text-[#06B6D4] transition-colors mt-0.5 block"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <span className="text-xs text-[#9AA3AD]">Available for direct calls</span>
                  </div>
                </div>

                {/* Directions / Landmark item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#171C22] border border-[#2A3038] text-[#06B6D4] shrink-0 shadow-sm">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9AA3AD] block">
                      Area Landmark
                    </span>
                    <p className="text-sm font-semibold text-[#F5F7FA] mt-0.5">
                      Babar Block, Garden Town (Adjacent to Barkat Market)
                    </p>
                    <span className="text-xs text-[#9AA3AD]">Lahore 54000, Punjab, Pakistan</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-[#2A3038]">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                id="contact-call-btn"
                className="w-full flex items-center justify-center gap-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW (0300 4445883)</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-maps-btn"
                className="w-full flex items-center justify-center gap-3 bg-[#171C22] hover:bg-[#1F252E] text-white border border-[#2A3038] font-semibold text-xs uppercase tracking-wider py-4 px-6 rounded-xl transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4 text-[#06B6D4]" />
                <span>OPEN GOOGLE MAPS</span>
              </a>
            </div>

          </div>

          {/* Right: Map-Style Visual Treatment Panel */}
          <div className="lg:col-span-7 bg-[#11151A] border border-[#2A3038] rounded-2xl overflow-hidden flex flex-col relative group">
            {/* Visual Map Header */}
            <div className="p-4 sm:p-5 bg-[#0B0D10] border-b border-[#2A3038] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5F7FA]">
                  Google Business Profile &amp; Route
                </span>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#06B6D4] hover:text-white flex items-center gap-1"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Map Graphic Canvas with Dark Theme Styling */}
            <div className="relative flex-1 min-h-[360px] sm:min-h-[420px] bg-[#07090C] overflow-hidden flex items-center justify-center">
              {/* Background architectural floor & street grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
              
              {/* Simulated stylized street lines */}
              <div className="absolute top-1/2 left-0 right-0 h-12 bg-[#171C22]/80 border-y border-[#2A3038]/60 rotate-6 transform scale-125 pointer-events-none">
                <span className="absolute top-2 left-10 text-[10px] font-mono tracking-widest text-[#9AA3AD]/40 uppercase">
                  Barkat Market Boulevard
                </span>
              </div>

              <div className="absolute top-0 bottom-0 left-1/3 w-12 bg-[#171C22]/80 border-x border-[#2A3038]/60 -rotate-12 transform scale-125 pointer-events-none">
                <span className="absolute bottom-16 left-2 text-[10px] font-mono tracking-widest text-[#9AA3AD]/40 uppercase -rotate-90">
                  Babar Block Access Rd
                </span>
              </div>

              {/* Pin Marker Card in the Center */}
              <div className="relative z-10 p-6 sm:p-7 rounded-2xl bg-[#0B0D10]/95 backdrop-blur-md border border-[#2563EB]/50 max-w-sm w-full mx-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center">
                <div className="w-12 h-12 rounded-full bg-[#2563EB] mx-auto flex items-center justify-center text-white mb-4 shadow-[0_0_25px_rgba(37,99,235,0.6)] animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>

                <span className="text-[11px] font-bold uppercase tracking-widest text-[#06B6D4] block mb-1">
                  Verified Destination
                </span>
                <h4 className="font-display text-lg font-bold text-white uppercase tracking-wide mb-1">
                  Fitness Era
                </h4>
                <p className="text-xs text-[#9AA3AD] mb-5">
                  47 New, Babar Block, Garden Town, Lahore, 54000
                </p>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="map-visual-launch-btn"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl transition-colors shadow-md"
                >
                  <Compass className="w-4 h-4" />
                  <span>Get Navigation Directions</span>
                </a>
              </div>

              {/* Subtle blue mood rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-[#2563EB]/20 pointer-events-none animate-ping duration-1000" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-[#06B6D4]/10 pointer-events-none" />
            </div>

            {/* Bottom details strip */}
            <div className="p-4 bg-[#07090C] border-t border-[#2A3038] flex flex-wrap items-center justify-between gap-3 text-xs text-[#9AA3AD]">
              <span>Quick Access: Barkat Market Commercial Area</span>
              <span className="font-mono text-[#06B6D4]">Lahore, Punjab</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
