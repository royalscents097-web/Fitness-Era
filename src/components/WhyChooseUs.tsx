import React from 'react';
import { Dumbbell, Layers, Flame, MapPin } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/gymData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-[#06B6D4]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#2563EB]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#06B6D4]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#2563EB]" />;
      default:
        return <Dumbbell className="w-6 h-6 text-[#06B6D4]" />;
    }
  };

  return (
    <section id="why-choose" className="relative py-24 sm:py-32 bg-[#11151A] border-b border-[#2A3038]">
      {/* Background visual grid accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#171C22] border border-[#2A3038] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#06B6D4]">
              PURPOSE-BUILT ENVIRONMENT
            </span>
          </div>

          <h2
            id="why-choose-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F5F7FA] leading-tight"
          >
            A BETTER PLACE TO TRAIN.
          </h2>
          <p className="text-sm sm:text-base text-[#9AA3AD] mt-4">
            Engineered with disciplined industrial design, dedicated training zones, and equipment selected for results.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.number}
              id={`why-card-${item.number}`}
              className="group relative bg-[#171C22] border border-[#2A3038] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2563EB]/60 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.3)] flex flex-col justify-between"
            >
              {/* Top Row: Icon + Number */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#0B0D10] border border-[#2A3038] group-hover:border-[#06B6D4]/40 transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="font-display text-3xl font-black text-[#2A3038] group-hover:text-[#2563EB]/50 transition-colors">
                    {item.number}
                  </span>
                </div>

                {/* Small blue accent indicator line */}
                <div className="w-10 h-0.5 bg-[#2563EB] mb-4 group-hover:w-16 group-hover:bg-[#06B6D4] transition-all duration-300" />

                {/* Heading */}
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-[#F5F7FA] mb-3 group-hover:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#9AA3AD] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom detail */}
              <div className="pt-6 mt-6 border-t border-[#2A3038]/40 flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase text-[#9AA3AD]/70">
                <span>FITNESS ERA</span>
                <span className="text-[#06B6D4]">GARDEN TOWN</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
