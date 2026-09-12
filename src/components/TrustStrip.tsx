import React from 'react';
import { TRUST_STRIP_ITEMS } from '../data/gymData';

export const TrustStrip: React.FC = () => {
  return (
    <section id="trust-strip" className="relative z-20 bg-[#0B0D10] border-y border-[#2A3038] py-6 sm:py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-[#2A3038]">
          {TRUST_STRIP_ITEMS.map((item) => (
            <div
              key={item.number}
              id={`trust-item-${item.number}`}
              className="flex items-center gap-4 px-3 sm:px-6 py-2 group hover:bg-[#11151A]/60 rounded-lg transition-colors"
            >
              <span className="font-display text-base font-bold text-[#06B6D4] group-hover:text-white transition-colors tracking-wider">
                {item.number}
              </span>
              <div className="h-6 w-[2px] bg-[#2563EB]/40 group-hover:bg-[#06B6D4] transition-colors" />
              <div>
                <p className="font-display text-sm sm:text-base font-bold text-[#F5F7FA] tracking-wide">
                  {item.title}
                </p>
                <p className="text-xs text-[#9AA3AD] mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
