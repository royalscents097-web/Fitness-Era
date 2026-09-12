import React, { useState } from 'react';
import { ArrowUpRight, Check, X, Phone } from 'lucide-react';
import { PROGRAMS, BUSINESS_INFO } from '../data/gymData';
import { ProgramItem } from '../types';

export const Programs: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  return (
    <section id="programs" className="relative py-24 sm:py-32 bg-[#07090C] border-b border-[#2A3038]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#171C22] border border-[#2A3038] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#06B6D4]">
              TRAINING DISCIPLINES
            </span>
          </div>

          <h2
            id="programs-heading"
            className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#F5F7FA] leading-tight"
          >
            TRAIN FOR WHAT&apos;S NEXT.
          </h2>
          <p className="text-base text-[#9AA3AD] mt-4 max-w-xl">
            Choose your focus. Build consistency. Keep progressing. Structured training designed for real results in Garden Town.
          </p>
        </div>

        {/* 4 Large Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              id={`program-card-${program.id}`}
              onClick={() => setSelectedProgram(program)}
              className="group relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#2A3038] bg-[#11151A] cursor-pointer transition-all duration-300 hover:border-[#2563EB] hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.4)]"
            >
              {/* Card Background Image with Smooth Hover Zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={program.image}
                  alt={`${program.title} at Fitness Era Barkat Market Garden Town`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090C] via-[#07090C]/75 to-[#07090C]/20 group-hover:via-[#07090C]/65 transition-colors duration-300" />

              {/* Top Category Badge & Action Arrow */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#0B0D10]/80 backdrop-blur-md border border-[#2A3038] text-[#06B6D4]">
                  {program.category}
                </span>
                <div className="w-10 h-10 rounded-full bg-[#0B0D10]/80 backdrop-blur-md border border-[#2A3038] group-hover:border-[#2563EB] group-hover:bg-[#2563EB] flex items-center justify-center text-white transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-wide text-[#F5F7FA] mb-2 group-hover:text-white">
                  {program.title}
                </h3>
                <p className="text-sm text-[#9AA3AD] line-clamp-2 leading-relaxed mb-4 group-hover:text-slate-200 transition-colors">
                  {program.description}
                </p>

                {/* Highlights preview */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2A3038]/60">
                  {program.highlights.slice(0, 2).map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-[#9AA3AD] bg-[#171C22]/80 px-2.5 py-1 rounded border border-[#2A3038]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div
          id="program-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="bg-[#0B0D10] border border-[#2A3038] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="close-program-modal"
              onClick={() => setSelectedProgram(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#171C22] border border-[#2A3038] text-[#9AA3AD] hover:text-white"
              aria-label="Close program details"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4]">
              {selectedProgram.category}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1 mb-4">
              {selectedProgram.title}
            </h3>
            <p className="text-sm sm:text-base text-[#9AA3AD] leading-relaxed mb-6">
              {selectedProgram.description}
            </p>

            <div className="space-y-2 mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-white">What You Focus On:</p>
              {selectedProgram.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-[#F5F7FA]">
                  <Check className="w-4 h-4 text-[#06B6D4]" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                id="modal-call-gym-btn"
                className="flex-1 flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <button
                onClick={() => setSelectedProgram(null)}
                className="px-5 py-3.5 rounded-xl border border-[#2A3038] text-sm font-semibold text-[#9AA3AD] hover:text-white bg-[#171C22]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
