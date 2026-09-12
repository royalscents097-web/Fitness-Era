import React, { useState } from 'react';
import { Maximize2, X, Sparkles } from 'lucide-react';
import { FACILITIES } from '../data/gymData';
import { FacilityItem } from '../types';

export const Facilities: React.FC = () => {
  const [activeFacility, setActiveFacility] = useState<FacilityItem | null>(null);

  return (
    <section id="facilities" className="relative py-24 sm:py-32 bg-[#0B0D10] border-b border-[#2A3038]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#171C22] border border-[#2A3038] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#06B6D4]">
                GYM FACILITIES &amp; ZONES
              </span>
            </div>

            <h2
              id="facilities-heading"
              className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#F5F7FA] leading-tight"
            >
              BUILT FOR SERIOUS TRAINING.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#9AA3AD] max-w-md">
            Heavy-duty free weights, plate-loaded stations, and precision cable towers arranged in an
            architectural industrial space designed for optimal training flow.
          </p>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility, index) => (
            <div
              key={facility.id}
              id={`facility-card-${facility.id}`}
              onClick={() => setActiveFacility(facility)}
              className={`group relative rounded-2xl overflow-hidden border border-[#2A3038] bg-[#171C22] cursor-pointer shadow-xl hover:border-[#2563EB]/70 transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 md:h-[460px]' : index === 3 ? 'md:col-span-2 md:h-[340px]' : 'md:h-[340px]'
              } h-[320px]`}
            >
              {/* Image */}
              <img
                src={facility.image}
                alt={facility.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Multi-layered gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090C] via-[#07090C]/40 to-transparent group-hover:via-[#07090C]/30 transition-colors" />

              {/* Blue accent corner glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2563EB]/20 rounded-full blur-2xl group-hover:bg-[#06B6D4]/30 transition-colors pointer-events-none" />

              {/* Zoom icon in top right */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#07090C]/70 backdrop-blur-md border border-[#2A3038] flex items-center justify-center text-[#9AA3AD] group-hover:text-white group-hover:border-[#06B6D4] transition-all">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption details at bottom */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#06B6D4] block mb-1">
                  {facility.category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-2">
                  {facility.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9AA3AD] line-clamp-2 max-w-xl">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Full view modal */}
      {activeFacility && (
        <div
          id="facility-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveFacility(null)}
        >
          <div
            className="bg-[#0B0D10] border border-[#2A3038] rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="close-facility-lightbox"
              onClick={() => setActiveFacility(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-xl bg-[#07090C]/80 border border-[#2A3038] text-white hover:bg-[#2563EB] transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] w-full bg-black relative">
              <img
                src={activeFacility.image}
                alt={activeFacility.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-6 sm:p-8 bg-[#0B0D10]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4]">
                {activeFacility.category}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mt-1 mb-2">
                {activeFacility.title}
              </h3>
              <p className="text-sm sm:text-base text-[#9AA3AD] leading-relaxed">
                {activeFacility.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
