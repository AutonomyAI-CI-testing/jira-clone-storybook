import React from 'react';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-6 w-full font-sans">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#b5b5b5] font-semibold text-[13.5px]">UI magician Agent</h1>
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-gray-400 text-sm">^</span>
        <p className="text-[#8b9291] font-semibold text-[11.5px]">From entire frame to a singl...</p>
      </div>

      {/* Spacer Gap */}
      <div className="mt-8"></div>

      {/* Add New Design Section Header */}
      <div className="flex items-center gap-2">
        <span className="text-[#b2b2b1] text-sm">^</span>
        <h2 className="text-[#b2b2b1] font-semibold text-[13.5px]">Add New Design</h2>
      </div>

      {/* Personal Access Token Field */}
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-1">
          <label htmlFor="accessToken" className="text-[#a4a4a3] font-semibold text-[11.5px]">Personal Access Token</label>
          <svg
            className="w-3 h-3 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="accessToken"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#363636] border border-gray-600 rounded p-2 w-full text-white placeholder-[#737470] text-[11.5px]"
        />
      </div>

      {/* Design URL Field */}
      <div className="mt-3">
        <div className="flex items-center gap-2 mb-1">
          <label htmlFor="designUrl" className="text-[#a3a3a2] font-semibold text-[11.5px]">Design URL</label>
          <svg
            className="w-3 h-3 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#363636] border border-gray-600 rounded p-2 w-full text-white placeholder-[#71726e] text-[11.5px]"
        />
      </div>

      {/* Button Row */}
      <div className="flex gap-3 mt-5 justify-center">
        <button className="bg-[#b85c2a] text-[#8c8078] rounded-lg px-6 py-2 font-semibold text-sm">
          Awesome
        </button>
        <button className="bg-[#b85c2a] text-[#8c8078] rounded-lg px-6 py-2 font-semibold text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section Header */}
      <div className="mt-8 text-[#b0b0b0] font-semibold text-[13.5px]">
        Recent Breakdowns
      </div>
    </div>
  );
};
