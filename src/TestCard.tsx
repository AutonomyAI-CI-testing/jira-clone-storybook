import React from "react";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#1a1a1a] p-5 w-full max-w-sm min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] font-bold text-lg">UI magician Agent</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#8b9291]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-[#8b9291]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-[#8b9291] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Section Title */}
      <div className="flex items-center gap-2 mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-[#b2b2b1]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-[#b2b2b1] font-bold text-base">Add New Design</span>
      </div>

      {/* Form */}
      <div className="mt-5 space-y-4">
        {/* Personal Access Token */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[#a4a4a3] text-sm">Personal Access Token</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#a4a4a3]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#2a2a2a] border border-[#3a3a3a] text-[#737470] placeholder-[#737470] rounded px-3 py-2 text-sm outline-none"
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[#a4a4a3] text-sm">Design URL</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#a4a4a3]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#2a2a2a] border border-[#3a3a3a] text-[#737470] placeholder-[#737470] rounded px-3 py-2 text-sm outline-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        <button className="flex-1 bg-[#8c4a2f] text-white font-semibold rounded-lg px-5 py-2 text-sm">
          Awesome
        </button>
        <button className="flex-1 bg-[#8c4a2f] text-white font-semibold rounded-lg px-5 py-2 text-sm">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <span className="text-[#b0b0b0] font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
