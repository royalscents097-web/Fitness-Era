import React from 'react';
import { Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, NAV_ITEMS } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#07090C] border-t border-[#2A3038] pt-16 pb-12 text-[#9AA3AD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#2A3038]/60">
          
          {/* Brand Column (Left) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-display text-2xl font-black tracking-tight text-[#F5F7FA]">
                FITNESS<span className="text-[#2563EB]">ERA</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]"></span>
            </div>
            
            <p className="text-xs uppercase tracking-widest text-[#06B6D4] font-semibold mb-4">
              Barkat Market • Garden Town
            </p>

            <p className="text-sm text-[#9AA3AD] max-w-sm leading-relaxed mb-6">
              A modern fitness destination in Garden Town, Lahore, built around strength, consistency, and progress.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#11151A] border border-[#2A3038] text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Garden Town, Lahore 54000</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5F7FA] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    id={`footer-link-${item.label.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5F7FA] mb-5">
              Contact &amp; Location
            </h4>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-[#9AA3AD]/70 block">Direct Line</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="font-bold text-white hover:text-[#06B6D4] transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-[#9AA3AD]/70 block">Gym Address</span>
                  <p className="text-slate-200 text-xs sm:text-sm leading-snug">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-directions-link"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#06B6D4] hover:text-white transition-colors"
                >
                  <span>Get Directions on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9AA3AD]/70">
          <p id="copyright-text">
            &copy; 2026 Fitness Era Barkat Market Garden Town. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#9AA3AD]/50">
              Babar Block, Garden Town, Lahore, Pakistan
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
