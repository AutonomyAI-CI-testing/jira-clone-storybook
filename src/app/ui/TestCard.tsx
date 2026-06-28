import React from 'react';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-6 bg-[#2a2a2a] text-white font-sans rounded-lg shadow-lg max-w-md mx-auto my-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</h2>
        {/* Gear icon */}
        <svg className="w-4 h-4 text-[#b5b5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 mb-8">
        {/* Chevron-up icon */}
        <svg className="w-3 h-3 text-[#f0f0f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
        <p className="text-[#8b9291] text-xs">From entire frame to a singl...</p>
      </div>

      {/* Spacer - mt-6 for example */}
      <div className="mt-6" />

      {/* Add New Design Section */}
      <div className="flex items-center gap-1 mb-4">
        {/* Chevron-up icon */}
        <svg className="w-3 h-3 text-[#f0f0f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
        <h3 className="text-[#b2b2b1] font-semibold text-sm">Add New Design</h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label htmlFor="pat" className="flex items-center gap-1 text-[#a4a4a3] text-xs font-semibold mb-2">
          Personal Access Token
          {/* Info-circle icon */}
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </label>
        <input
          type="text"
          id="pat"
          className="w-full bg-[#1e1e1e] border border-[#3a3a3a] rounded px-3 py-2 text-[#737470] text-xs placeholder:text-[#737470]"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label htmlFor="designUrl" className="flex items-center gap-1 text-[#a3a3a2] text-xs font-semibold mb-2">
          Design URL
          {/* Info-circle icon */}
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </label>
        <input
          type="text"
          id="designUrl"
          className="w-full bg-[#1e1e1e] border border-[#3a3a3a] rounded px-3 py-2 text-[#737470] text-xs placeholder:text-[#737470]"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-4">
        <button className="bg-[#b5451b] rounded-lg px-4 py-2 text-[#8c8078] text-xs font-semibold flex-1">Awesome</button>
        <button className="bg-[#b5451b] rounded-lg px-4 py-2 text-[#8c8078] text-xs font-semibold flex-1">Prepare</button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h3 className="text-[#b0b0b0] font-semibold text-sm mt-6">Recent Breakdowns</h3>
    </div>
  );
};
