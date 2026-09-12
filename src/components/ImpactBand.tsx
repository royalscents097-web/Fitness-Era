import React from 'react';

const STATEMENTS = ['STRENGTH', 'CONSISTENCY', 'ENERGY', 'PROGRESS'];

export const ImpactBand: React.FC = () => {
  return (
    <section id="impact-band" className="relative py-16 sm:py-20 bg-[#07090C] border-b border-[#2A3038] overflow-hidden">
      {/* Background kinetic architectural glow lines */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2563EB]/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#06B6D4]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center text-center">
          {STATEMENTS.map((word, idx) => (
            <div key={word} id={`impact-word-${idx}`} className="group py-4">
              <span className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-[#F5F7FA]/90 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2563EB] group-hover:to-[#06B6D4] transition-all duration-300 block">
                {word}
              </span>
              <div className="mt-2.5 mx-auto w-8 h-0.5 bg-[#2A3038] group-hover:w-16 group-hover:bg-[#06B6D4] transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
