
import React from 'react';

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#272825] w-[254px] h-[508px] p-4 text-[#b5b5b5] font-sans text-[13.5px] flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-[13.5px]">UI magician Agent</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-settings"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .3 1.4L21 18l-2 2-1.4-.3a1.65 1.65 0 0 0-1.4-.3H9.7a1.65 1.65 0 0 0-1.4.3L6 20l-2-2 1.4-.3a1.65 1.65 0 0 0 .3-1.4V9.7a1.65 1.65 0 0 0-.3-1.4L4 6l2-2 1.4.3a1.65 1.65 0 0 0 1.4.3h4.6a1.65 1.65 0 0 0 1.4-.3L18 4l2 2-1.4.3a1.65 1.65 0 0 0-.3 1.4v4.6z"></path>
        </svg>
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center mb-4 text-[#8b9291] text-[11.5px]">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8b9291"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-up mr-1"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Section Header: Add New Design */}
      <div className="flex items-center mt-4 mb-3 text-[#b2b2b1] font-semibold text-[13.5px]">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-up mr-1"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-3">
        <label htmlFor="pat" className="flex items-center mb-1 text-[#a4a4a3] text-[11.5px]">
          Personal Access Token
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a4a4a3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-info ml-1"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </label>
        <input
          type="text"
          id="pat"
          className="w-full p-2 rounded bg-[#272822] border border-[#929291] text-[#b5b5b5] placeholder-[#737470] text-[11.5px] focus:outline-none focus:ring-1 focus:ring-[#843a17]"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-5">
        <label htmlFor="design-url" className="flex items-center mb-1 text-[#a4a4a3] text-[11.5px]">
          Design URL
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a4a4a3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-info ml-1"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </label>
        <input
          type="text"
          id="design-url"
          className="w-full p-2 rounded bg-[#272822] border border-[#a5adad] text-[#b5b5b5] placeholder-[#737470] text-[11.5px] focus:outline-none focus:ring-1 focus:ring-[#843a17]"
          placeholder="https://www.figma.com/file/:id/" /* Updated placeholder */
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between space-x-2 mb-8">
        <button className="flex-1 py-2 rounded bg-[#843a17] text-[#8c8078] font-semibold text-[11.5px] hover:bg-[#a04a20] focus:outline-none focus:ring-2 focus:ring-[#843a17] focus:ring-opacity-50">
          Awesome
        </button>
        <button className="flex-1 py-2 rounded bg-[#843a17] text-[#8c8078] font-semibold text-[11.5px] hover:bg-[#a04a20] focus:outline-none focus:ring-2 focus:ring-[#843a17] focus:ring-opacity-50">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-auto text-[#b0b0b0] font-semibold text-[13.5px]">
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;

