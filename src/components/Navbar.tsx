import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight, MapPin } from 'lucide-react';
import { BUSINESS_INFO, NAV_ITEMS } from '../data/gymData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090C]/90 backdrop-blur-md border-b border-[#2A3038] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#07090C]/90 via-[#07090C]/60 to-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <a
          href="#home"
          id="nav-logo"
          className="group flex flex-col focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
        >
          <div className="flex items-center gap-2">
            <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-[#F5F7FA] group-hover:text-white transition-colors">
              FITNESS<span className="text-[#2563EB] group-hover:text-[#06B6D4] transition-colors">ERA</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse"></span>
          </div>
          <span className="text-[10px] tracking-[0.22em] text-[#9AA3AD] font-semibold uppercase -mt-0.5">
            Garden Town • Lahore
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" aria-label="Main Navigation" className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              id={`nav-link-${item.label.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-sm font-medium text-[#9AA3AD] hover:text-[#F5F7FA] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#2563EB] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            id="nav-phone-call-btn"
            className="flex items-center gap-2 text-xs font-semibold text-[#9AA3AD] hover:text-white transition-colors px-3 py-2 rounded-lg border border-[#2A3038] hover:border-[#2563EB]/50 hover:bg-[#171C22]"
            title="Direct Call to Fitness Era"
          >
            <Phone className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>0300 4445883</span>
          </a>

          <a
            href="#membership"
            id="nav-join-btn"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#membership');
            }}
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:-translate-y-0.5"
          >
            <span>Join Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            id="mobile-quick-call-nav"
            className="p-2 rounded-lg border border-[#2A3038] text-[#06B6D4] hover:bg-[#171C22]"
            aria-label="Call Fitness Era"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F5F7FA] hover:text-[#06B6D4] focus:outline-none focus:ring-1 focus:ring-[#2563EB] rounded-lg border border-[#2A3038] bg-[#11151A]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden bg-[#0B0D10]/98 backdrop-blur-xl border-b border-[#2A3038] px-5 pt-4 pb-6 mt-3 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                id={`mobile-link-${item.label.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block px-3 py-2.5 text-base font-medium text-[#9AA3AD] hover:text-white hover:bg-[#171C22] rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#2A3038] space-y-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="mobile-drawer-call-btn"
              className="w-full flex items-center justify-center gap-2.5 bg-[#2563EB] text-white text-sm font-bold uppercase tracking-wider py-3 rounded-lg shadow-lg hover:bg-[#1d4ed8]"
            >
              <Phone className="w-4 h-4" />
              <span>Call 0300 4445883</span>
            </a>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-drawer-maps-btn"
              className="w-full flex items-center justify-center gap-2.5 bg-[#171C22] text-[#F5F7FA] hover:text-white border border-[#2A3038] text-sm font-medium py-3 rounded-lg"
            >
              <MapPin className="w-4 h-4 text-[#06B6D4]" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
