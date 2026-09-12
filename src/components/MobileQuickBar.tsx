import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const MobileQuickBar: React.FC = () => {
  return (
    <aside
      id="mobile-sticky-quickbar"
      aria-label="Quick contact actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#07090C]/95 backdrop-blur-lg border-t border-[#2A3038] p-3 shadow-2xl"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          id="quickbar-call-btn"
          className="flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-wider py-3 px-3 rounded-xl shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Now</span>
        </a>

        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="quickbar-directions-btn"
          className="flex items-center justify-center gap-2 bg-[#171C22] hover:bg-[#1F252E] text-white border border-[#2A3038] font-semibold text-xs uppercase tracking-wider py-3 px-3 rounded-xl shadow-md active:scale-95 transition-transform"
        >
          <MapPin className="w-3.5 h-3.5 text-[#06B6D4]" />
          <span>Directions</span>
        </a>
      </div>
    </aside>
  );
};
