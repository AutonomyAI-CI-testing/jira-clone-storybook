import React from 'react';

export const TestCard = () => {
  return (
    <div id="testElem" style={{ backgroundColor: '#2a2a2a', color: 'white' }} className="bg-[#2a2a2a] p-5 w-[254px] font-sans text-white text-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-[#b5b5b5] font-bold text-lg">UI magician Agent</h1>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.82.33 1.65 1.65 0 0 0 1-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center text-[#8b9291] text-xs mb-5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8b9291" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up mr-1">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-5"></div>

      {/* Add New Design Section */}
      <div className="flex items-center text-[#b2b2b1] font-bold text-base mb-3">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b2b2b1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up mr-1">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-3">
        <label className="flex items-center text-[#a4a4a3] text-xs mb-1">
          Personal Access Token
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-info ml-1">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </label>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded bg-[#333333] border border-[#4a4a4a] text-[#737470] text-xs outline-none"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-5">
        <label className="flex items-center text-[#a3a3a2] text-xs mb-1">
          Design URL
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-info ml-1">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </label>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded bg-[#333333] border border-[#4a4a4a] text-[#71726e] text-xs outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mb-5">
        <button className="flex-1 bg-[#b45309] text-[#8c8078] py-2 rounded-lg text-sm font-medium">Awesome</button>
        <button className="flex-1 bg-[#b45309] text-[#8c8078] py-2 rounded-lg text-sm font-medium">Prepare</button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-[#b0b0b0] font-bold text-base">Recent Breakdowns</h2>
    </div>
  );
};
