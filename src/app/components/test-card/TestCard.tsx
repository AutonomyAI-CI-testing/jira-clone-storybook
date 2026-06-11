import React from "react";
import { RiSettings3Line, RiArrowUpSLine, RiInformationLine } from "react-icons/ri";

// Named export for consistency with project patterns
export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="bg-[#252525] p-5 rounded-xl w-[300px] mx-auto"
    >
      {/* Header Row */}
      <header className="flex justify-between items-center mb-3">
        <h1 className="text-white text-lg font-bold">UI magician Agent</h1>
        <RiSettings3Line className="text-gray-400 text-xl" />
      </header>

      {/* Subtitle Row - provides context for the current scope */}
      <div className="flex items-center gap-1 mb-8">
        <RiArrowUpSLine className="text-gray-400 text-base shrink-0" />
        <p className="text-gray-400 text-sm">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <section className="flex items-center gap-2 mb-5">
        <RiArrowUpSLine className="text-white text-lg shrink-0" />
        <h2 className="text-white text-base font-bold">Add New Design</h2>
      </section>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-2">
          <label htmlFor="pat-input" className="text-white text-sm font-medium">
            Personal Access Token
          </label>
          <RiInformationLine className="text-gray-400 text-sm" />
        </div>
        <input
          id="pat-input"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full px-3 py-2 rounded-md bg-transparent border border-[#555] text-white placeholder-gray-600 text-sm outline-none transition-colors border-[#555] focus:border-[#777]"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-2">
          <label htmlFor="url-input" className="text-white text-sm font-medium">
            Design URL
          </label>
          <RiInformationLine className="text-gray-400 text-sm" />
        </div>
        <input
          id="url-input"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full px-3 py-2 rounded-md bg-transparent border border-[#555] text-white placeholder-gray-600 text-sm outline-none transition-colors border-[#555] focus:border-[#777]"
        />
      </div>

      {/* Action Buttons - Orange-brown variant for primary actions */}
      <div className="flex gap-3 mb-8">
        <button className="flex-1 bg-[#b5451b] hover:bg-[#c6562c] text-white rounded-lg px-4 py-2 text-sm font-semibold transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5451b] hover:bg-[#c6562c] text-white rounded-lg px-4 py-2 text-sm font-semibold transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <footer className="pt-2 border-t border-[#333]">
        <h2 className="text-white text-base font-bold">Recent Breakdowns</h2>
      </footer>
    </div>
  );
};

export default TestCard;
