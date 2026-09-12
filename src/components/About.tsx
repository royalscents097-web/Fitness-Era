import React from 'react';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';

const FOCUS_PILLARS = [
  { name: 'Strength', desc: 'Progressive resistance for raw physical capability' },
  { name: 'Conditioning', desc: 'Engineered stamina and cardiovascular endurance' },
  { name: 'Consistency', desc: 'Sustainable habits that compound over months' },
  { name: 'Confidence', desc: 'Self-assurance forged through disciplined effort' },
  { name: 'Progress', desc: 'Measurable improvement in performance and health' },
];

export const About: React.FC = () => {
  const scrollToPrograms = () => {
    const el = document.querySelector('#programs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#07090C] overflow-hidden border-b border-[#2A3038]/60">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with architectural framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#2A3038] bg-[#11151A] group shadow-2xl">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/assets/images/about_strength_gym_1789251406394.jpg"
                  alt="Modern strength training equipment at Fitness Era Barkat Market Garden Town"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090C] via-transparent to-transparent opacity-80" />

              {/* Floating badge over image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0B0D10]/90 backdrop-blur-md border border-[#2A3038] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/40 text-[#06B6D4]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-white">
                      Built for Serious Lifters
                    </p>
                    <p className="text-[11px] text-[#9AA3AD]">
                      Babar Block, Garden Town • Lahore
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#06B6D4]">EST. LAHORE</span>
              </div>
            </div>

            {/* Subtle background decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[#2563EB]/20 -z-10 pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 relative">
            {/* Oversized background decorative typography: 01 */}
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-6 select-none pointer-events-none text-8xl sm:text-9xl font-display font-black text-white/[0.03]"
            >
              01
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#171C22] border border-[#2A3038] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#06B6D4]">
                ABOUT FITNESS ERA
              </span>
            </div>

            {/* Headline */}
            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#F5F7FA] leading-tight mb-6"
            >
              MORE THAN A WORKOUT.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
                IT&apos;S YOUR NEXT ERA.
              </span>
            </h2>

            {/* Body Copy */}
            <p className="text-base sm:text-lg text-[#9AA3AD] leading-relaxed mb-8">
              Fitness Era Barkat Market Garden Town is built for people who want to train seriously,
              stay consistent, and make fitness part of their lifestyle. We provide the atmosphere,
              equipment, and focus you need to break through training plateaus and forge long-term physical strength.
            </p>

            {/* 5 Focus Pillars */}
            <div className="space-y-3 mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F5F7FA]">
                Core Pillars of Training:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FOCUS_PILLARS.map((pillar) => (
                  <div
                    key={pillar.name}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-[#11151A] border border-[#2A3038]/70 hover:border-[#2563EB]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-bold text-white block">{pillar.name}</span>
                      <span className="text-xs text-[#9AA3AD] leading-snug">{pillar.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={scrollToPrograms}
                id="about-discover-cta"
                className="group inline-flex items-center gap-3 bg-[#171C22] hover:bg-[#2563EB] text-[#F5F7FA] hover:text-white font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded-xl border border-[#2A3038] hover:border-[#2563EB] transition-all duration-200 shadow-md hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]"
              >
                <span>DISCOVER FITNESS ERA</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
