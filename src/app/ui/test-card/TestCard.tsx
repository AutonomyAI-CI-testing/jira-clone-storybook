import React from 'react';

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] text-white p-6 min-h-screen w-full max-w-sm mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">UI magician Agent</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2">
        <span className="text-[#b5672a] text-sm">^</span>
        <span className="text-[#b5672a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-white text-sm">^</span>
          <span className="text-white text-lg font-bold">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-white text-sm font-medium">Personal Access Token</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-[#333333] border border-[#555555] text-[#888888] placeholder-[#888888] rounded px-3 py-2 text-sm w-full outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-white text-sm font-medium">Design URL</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="bg-[#333333] border border-[#555555] text-[#888888] placeholder-[#888888] rounded px-3 py-2 text-sm w-full outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="bg-[#c1622a] text-white rounded-xl px-6 py-3 text-sm font-medium flex-1">Awesome</button>
          <button className="bg-[#c1622a] text-white rounded-xl px-6 py-3 text-sm font-medium flex-1">Prepare</button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-white text-lg font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}
