
import React from 'react';

/**
 * Common Icon components for the TestCard.
 * Extracted to improve readability and deduplicate SVG code.
 */
const GearIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0007 2.01639C10.4282 2.01639 10.7766 2.36476 10.7766 2.79227V3.8817C11.6669 4.0924 12.5029 4.49842 13.2562 5.07447L14.07 4.26002C14.3683 3.96173 14.8415 3.96173 15.1398 4.26002L16.2995 5.41967C16.5978 5.71796 16.5978 6.19119 16.2995 6.48948L15.4851 7.3039C16.0611 8.05726 16.4671 8.89324 16.6778 9.78361H17.7672C18.1948 9.78361 18.5431 10.132 18.5431 10.5595C18.5431 10.987 18.1948 11.3354 17.7672 11.3354H16.6778C16.4671 12.2258 16.0611 13.0618 15.4851 13.8151L16.2995 14.6296C16.5978 14.9279 16.5978 15.4011 16.2995 15.6994L15.1398 16.859C14.8415 17.1573 14.3683 17.1573 14.07 16.859L13.2562 16.0446C12.5029 16.6206 11.6669 17.0266 10.7766 17.2373V18.3267C10.7766 18.7542 10.4282 19.1026 10.0007 19.1026C9.57314 19.1026 9.22477 18.7542 9.22477 18.3267V17.2373C8.33441 17.0266 7.49843 16.6206 6.74507 16.0446L5.93066 16.859C5.63237 17.1573 5.15915 17.1573 4.86086 16.859L3.70121 15.6994C3.40292 15.4011 3.40292 14.9279 3.70121 14.6296L4.51563 13.8151C3.93958 13.0618 3.53356 12.2258 3.32286 11.3354H2.2334C1.80589 11.3354 1.45752 10.987 1.45752 10.5595C1.45752 10.132 1.80589 9.78361 2.2334 9.78361H3.32286C3.53356 8.89324 3.93958 8.05726 4.51563 7.3039L3.70121 6.48948C3.40292 6.19119 3.40292 5.71796 3.70121 5.41967L4.86086 4.26002C5.15915 3.96173 5.63237 3.96173 5.93066 4.26002L6.74507 5.07447C7.49843 4.49842 8.33441 4.0924 9.22477 3.8817V2.79227C9.22477 2.36476 9.57314 2.01639 10.0007 2.01639ZM10.0007 5.51639C7.94199 5.51639 6.27663 7.18175 6.27663 9.24045C6.27663 11.2991 7.94199 12.9645 10.0007 12.9645C12.0594 12.9645 13.7248 11.2991 13.7248 9.24045C13.7248 7.18175 12.0594 5.51639 10.0007 5.51639ZM10.0007 7.01639C11.2333 7.01639 12.2248 8.00788 12.2248 9.24045C12.2248 10.473 11.2333 11.4645 10.0007 11.4645C8.76804 11.4645 7.77663 10.473 7.77663 9.24045C7.77663 8.00788 8.76804 7.01639 10.0007 7.01639Z"
      fill="currentColor"
    />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 8L6 14H18L12 8Z" fill="currentColor" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 8C12.5523 8 13 8.44772 13 9V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V9C11 8.44772 11.4477 8 12 8ZM12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15Z"
      fill="currentColor"
    />
  </svg>
);

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#1a1a18] w-[254px] p-4 font-sans text-white">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#b5b5b5] text-lg font-semibold">UI magician Agent</h2>
        <GearIcon className="text-[#b5b5b5]" />
      </div>

      {/* Collapsed Row */}
      <div className="flex items-center gap-2 mb-6">
        <ChevronUpIcon className="text-[#8b9291]" />
        <p className="text-[#8b9291] text-sm">From entire frame to a singl...</p>
      </div>

      <div className="mb-6" />

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-4">
        <ChevronUpIcon className="text-[#b2b2b1]" />
        <h3 className="text-[#b2b2b1] text-base font-semibold">Add New Design</h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="pat" className="text-[#a4a4a3] text-sm">
            Personal Access Token
          </label>
          <InfoIcon className="text-[#a4a4a3]" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded bg-[#272822] border border-[#a5adad] text-[#b2b2b1] placeholder-[#737470] focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="design-url" className="text-[#a3a3a2] text-sm">
            Design URL
          </label>
          <InfoIcon className="text-[#a3a3a2]" />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded bg-[#272822] border border-[#929291] text-[#b2b2b1] placeholder-[#737470] focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-4 mb-6">
        <button className="w-1/2 bg-[#843a17] text-[#c9b8b0] py-2 px-6 rounded-lg font-medium">
          Awesome
        </button>
        <button className="w-1/2 bg-[#843a17] text-[#c9b8b0] py-2 px-6 rounded-lg font-medium">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h3 className="text-[#b0b0b0] text-base font-semibold">Recent Breakdowns</h3>
    </div>
  );
};

export default TestCard;

