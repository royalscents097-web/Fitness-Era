import React, { useState } from 'react';
import { Server, X, Check, Copy, ExternalLink, HelpCircle } from 'lucide-react';

export const HostingerDeploymentGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copySteps = () => {
    const text = `How to Deploy Fitness Era to Hostinger:
1. Run "npm run build" in the project root.
2. Locate the generated "dist" folder.
3. Log into your Hostinger hPanel -> File Manager (or FTP).
4. Navigate to your domain's "public_html" directory.
5. Upload all files from inside the "dist" folder directly into "public_html" (index.html should be in the root of public_html).
6. Your Fitness Era website is now live with high performance!`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        id="hostinger-guide-trigger-btn"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-16 sm:bottom-6 right-4 sm:right-6 z-30 inline-flex items-center gap-2 bg-[#11151A]/90 hover:bg-[#171C22] text-[#9AA3AD] hover:text-white text-xs font-semibold px-3 py-2 rounded-full border border-[#2A3038] shadow-xl backdrop-blur-md transition-all hover:border-[#06B6D4]/60"
        title="Hostinger Deployment Instructions"
      >
        <Server className="w-3.5 h-3.5 text-[#06B6D4]" />
        <span className="hidden sm:inline">Hostinger Ready</span>
        <HelpCircle className="w-3.5 h-3.5 text-[#9AA3AD]" />
      </button>

      {isOpen && (
        <div
          id="hostinger-guide-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[#0B0D10] border border-[#2A3038] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="close-hostinger-guide-modal"
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#171C22] border border-[#2A3038] text-[#9AA3AD] hover:text-white"
              aria-label="Close guide"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/40 text-[#06B6D4]">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#06B6D4]">
                  Deployment Instructions
                </span>
                <h3 className="font-display text-xl font-bold text-white uppercase">
                  Deploying to Hostinger
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#9AA3AD] leading-relaxed mb-6">
              This website is built with zero runtime server requirements—100% static HTML, CSS, and optimized JavaScript ready for Hostinger Shared, Cloud, or VPS hosting.
            </p>

            <div className="space-y-3.5 mb-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#11151A] border border-[#2A3038]">
                <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <strong className="text-white block">Build Production Assets</strong>
                  <span>Run <code className="text-[#06B6D4] bg-[#171C22] px-1 py-0.5 rounded">npm run build</code> to generate the self-contained <code className="text-white">dist/</code> directory.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#11151A] border border-[#2A3038]">
                <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <strong className="text-white block">Upload to Hostinger public_html</strong>
                  <span>In Hostinger hPanel &gt; File Manager, open your domain&apos;s <code className="text-white">public_html/</code> and upload the contents of <code className="text-white">dist/</code>.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#11151A] border border-[#2A3038]">
                <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <strong className="text-white block">Go Live</strong>
                  <span>All routes, assets, phone dialers (<code className="text-[#06B6D4]">tel:</code>), and Google Maps connections work immediately without any database or backend configuration.</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={copySteps}
                className="flex-1 flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl transition-colors"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied Steps!' : 'Copy Deployment Checklist'}</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-3 rounded-xl border border-[#2A3038] text-xs font-semibold text-[#9AA3AD] hover:text-white bg-[#171C22]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
