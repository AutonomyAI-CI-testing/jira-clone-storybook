import React from 'react';

const GearIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="8" strokeWidth="2" />
    <line x1="12" y1="12" x2="12" y2="16" />
  </svg>
);

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#1e1e1e] text-white p-6 min-h-screen w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">UI magician Agent</h1>
        <span className="text-white/70">
          <GearIcon />
        </span>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mt-3">
        <span className="text-white/60">
          <ChevronUpIcon />
        </span>
        <span className="text-[#c17a4a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-12" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <span className="text-white/80">
          <ChevronUpIcon />
        </span>
        <h2 className="text-xl font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mt-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white text-sm font-medium">Personal Access Token</span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-zinc-800 border border-zinc-600 rounded text-zinc-400 placeholder-zinc-500 text-sm px-3 py-3 outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mt-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white text-sm font-medium">Design URL</span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-zinc-800 border border-zinc-600 rounded text-zinc-400 placeholder-zinc-500 text-sm px-3 py-3 outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8 justify-center">
        <button className="bg-[#b5522a] hover:bg-[#9e4722] text-white font-semibold px-8 py-3 rounded-lg">
          Awesome
        </button>
        <button className="bg-[#b5522a] hover:bg-[#9e4722] text-white font-semibold px-8 py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
