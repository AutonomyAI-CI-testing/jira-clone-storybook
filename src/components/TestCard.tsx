
import React from "react";

/**
 * TestCard Component
 *
 * A self-contained visual reproduction of the "UI Magician Agent" design.
 * This component is used as a baseline visual smoke test to verify the
 * design-to-code pipeline. All styles are implemented using Tailwind CSS
 * with arbitrary values for brand-accurate colors.
 */
const TestCard = () => {

  /**
   * SVG Icons extracted for readability.
   * Path data and viewbox remain exactly as generated to preserve visual fidelity.
   */
  const Icons = {
    Settings: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[#b5b5b5]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.527.288 1.144.455 1.78.497.636.042 1.272-.119 1.799-.418z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12h.01" />
      </svg>
    ),
    Chevron: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 ${className}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    ),
    Info: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-3 w-3 ${className}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1c-1.105 0-2-.895-2-2v-1a2 2 0 012-2h1m-1 4h.01M12 21a9 9 0 110-18 9 9 0 010 18z"
        />
      </svg>
    ),
  };

  return (
    <div id="testElem" className="p-4 rounded-lg bg-[#2a2a2a] w-80 font-sans">
      {/* Header Row: Title and Settings */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <Icons.Settings />
      </div>

      {/* Description Row: Collapsed state subtext */}
      <div className="flex items-center mb-4">
        <Icons.Chevron className="text-[#8b9291] mr-2 transform rotate-180" />
        <p className="text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="border-t border-[#333] mb-4"></div>

      {/* Form Section Heading */}
      <div className="flex items-center mb-4">
        <Icons.Chevron className="text-[#b2b2b1] mr-2 transform rotate-180" />
        <h3 className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <label className="flex items-center text-[11.5px] text-[#a4a4a3] mb-1">
          Personal Access Token
          <Icons.Info className="ml-1 text-[#a4a4a3]" />
        </label>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 text-[11.5px] bg-[#1e1e1e] text-[#737470] rounded outline-none border border-transparent focus:border-[#444]"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <label className="flex items-center text-[11.5px] text-[#a3a3a2] mb-1">
          Design URL
          <Icons.Info className="ml-1 text-[#a3a3a2]" />
        </label>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 text-[11.5px] bg-[#1e1e1e] text-[#71726e] rounded outline-none border border-transparent focus:border-[#444]"
        />
      </div>

      {/* Action Buttons: Primary controls */}
      <div className="flex justify-between space-x-2 mb-6">
        <button className="flex-1 px-4 py-2 text-[11.5px] font-semibold text-[#8c8078] bg-[#a0522d] rounded-md hover:opacity-90 transition-opacity">
          Awesome
        </button>
        <button className="flex-1 px-4 py-2 text-[11.5px] font-semibold text-[#8c8078] bg-[#a0522d] rounded-md hover:opacity-90 transition-opacity">
          Prepare
        </button>
      </div>

      {/* Footer Section: Navigation/History */}
      <div>
        <h3 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

export default TestCard;
