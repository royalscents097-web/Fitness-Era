import React from 'react';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const Transformation: React.FC = () => {
  const scrollToMembership = () => {
    const el = document.querySelector('#membership');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="transformation" className="relative py-24 sm:py-32 bg-[#11151A] border-b border-[#2A3038] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Training Philosophy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#171C22] border border-[#2A3038] mb-3">
              <Zap className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#06B6D4]">
                DISCIPLINE &amp; REAL RESULTS
              </span>
            </div>

            <h2
              id="transformation-heading"
              className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#F5F7FA] leading-tight mb-6"
            >
              YOUR PROGRESS STARTS WITH{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
                SHOWING UP.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#9AA3AD] leading-relaxed mb-8">
              Every session is another step toward becoming stronger, fitter, and more confident.
              At Fitness Era, we strip away the gimmicks in favor of progressive resistance, consistent
              technique, and an atmosphere that commands respect for your time and goals.
            </p>

            {/* Mindset Pillars */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#171C22] border border-[#2A3038]">
                <CheckCircle className="w-5 h-5 text-[#06B6D4] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Consistency Over Intensity
                  </h4>
                  <p className="text-xs text-[#9AA3AD] mt-1">
                    Progress compounds through repetitive showing up, day in and day out.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#171C22] border border-[#2A3038]">
                <CheckCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Focus on Measurable Overload
                  </h4>
                  <p className="text-xs text-[#9AA3AD] mt-1">
                    Track your weights, refine your reps, and see verifiable strength gains.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#171C22] border border-[#2A3038]">
                <CheckCircle className="w-5 h-5 text-[#06B6D4] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Supportive Lifting Culture
                  </h4>
                  <p className="text-xs text-[#9AA3AD] mt-1">
                    Surround yourself with members who share a focused, serious training mindset.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToMembership}
              id="start-training-cta"
              className="group inline-flex items-center gap-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)]"
            >
              <span>START TRAINING</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: High Quality Realistic Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#2A3038] bg-[#07090C] shadow-2xl group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/assets/images/lifestyle_results_1789251440054.jpg"
                  alt="Adult athlete resting between sets at Fitness Era Barkat Market Garden Town Lahore"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090C] via-transparent to-transparent opacity-85" />

              {/* Bottom Quote Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#0B0D10]/90 backdrop-blur-md border border-[#2A3038]">
                <p className="font-display text-sm font-bold uppercase tracking-wide text-white mb-1">
                  &ldquo;Discipline is choosing between what you want now and what you want most.&rdquo;
                </p>
                <div className="flex items-center justify-between text-[11px] text-[#9AA3AD] font-semibold mt-2 pt-2 border-t border-[#2A3038]">
                  <span>FITNESS ERA ATHLETIC CULTURE</span>
                  <span className="text-[#06B6D4]">GARDEN TOWN</span>
                </div>
              </div>
            </div>

            {/* Subtle blue background glow */}
            <div className="absolute -top-6 -left-6 w-full h-full rounded-2xl border border-[#06B6D4]/15 -z-10 pointer-events-none hidden sm:block" />
          </div>

        </div>
      </div>
    </section>
  );
};
