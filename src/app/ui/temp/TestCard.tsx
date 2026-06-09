
import React from 'react';

const TestCard = () => {
  return (
    <div id="testElem" className="p-4 bg-[#1a1d16] text-[#b0b0b0] min-h-screen">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">UI magician Agent</h1>
        <svg
           xmlns="http://www.w3.org/2000/svg"
           role="img" focusable="false"
          className="h-5 w-5 text-[#a4a4a3]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-label="Settings icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </header>

      {/* Collapsed/Summary Row */}
      <section className="flex items-center mb-4 text-[#a4a4a3]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img" focusable="false"
          className="h-4 w-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-label="Collapse icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
        <span className="text-sm">From entire frame to a singl...</span>
      </section>

      {/* Add New Design Section */}
      <section className="mb-4">
        <h2 className="flex items-center mb-2 text-base font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img" focusable="false"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
          <span>Add New Design</span>
        </h2>

        {/* Personal Access Token Input */}
        <div className="mb-3 ml-6">
          <label htmlFor="token" className="block text-sm mb-1 flex items-center">
            Personal Access Token
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img" focusable="false"
              className="h-4 w-4 ml-1 text-[#71726e]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-label="Info icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </label>
          <input
            type="text"
            id="token"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded bg-[#272822] border border-[#71726e] text-[#a4a4a3] placeholder-[#71726e] focus:outline-none"
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-4 ml-6">
          <label htmlFor="url" className="block text-sm mb-1 flex items-center">
            Design URL
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img" focusable="false"
              className="h-4 w-4 ml-1 text-[#71726e]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-label="Info icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </label>
          <input
            type="text"
            id="url"
            readOnly
            placeholder="https://www.figma.com/file/:id/:title"
            className="w-full p-2 rounded bg-[#272822] border border-[#71726e] text-[#a4a4a3] placeholder-[#71726e] focus:outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button type="button" aria-label="Awesome button" className="px-4 py-2 rounded bg-[#843a17] text-white text-sm font-medium focus:outline-none">
            Awesome
          </button>
          <button type="button" aria-label="Prepare button" className="px-4 py-2 rounded bg-[#843a17] text-white text-sm font-medium focus:outline-none">
            Prepare
          </button>
        </div>
      </section>

      {/* Recent Breakdowns Footer */}
      <footer className="border-t border-[#272822] pt-4 mt-6">
        <h2 className="text-base font-semibold">Recent Breakdowns</h2>
      </footer>
    </div>
  );
};

export default TestCard;
