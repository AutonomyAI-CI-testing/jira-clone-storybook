
import React from "react";
import { LuSettings2, LuChevronUp } from "react-icons/lu";
import { BsInfoCircle } from "react-icons/bs";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-4 bg-[#282828] text-white rounded-lg shadow-lg max-w-sm mx-auto my-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">UI magician Agent</h2>
        <LuSettings2 className="text-gray-400 text-xl" />
      </div>

      {/* Collapsible Row 1 */}
      <div className="flex items-center gap-2 mb-4">
        <LuChevronUp className="text-gray-400" />
        <p className="text-[#b85c2e] text-sm truncate">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-4">
        <LuChevronUp className="text-white font-bold" />
        <h3 className="text-md font-bold">Add New Design</h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label htmlFor="pat" className="flex items-center gap-1 text-sm text-gray-300 mb-1">
          Personal Access Token <BsInfoCircle className="text-gray-500 text-xs" />
        </label>
        <input
          id="pat"
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md bg-[#3a3a3a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b85c2e]"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label htmlFor="designUrl" className="flex items-center gap-1 text-sm text-gray-300 mb-1">
          Design URL <BsInfoCircle className="text-gray-500 text-xs" />
        </label>
        <input
          id="designUrl"
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md bg-[#3a3a3a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b85c2e]"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="flex-1 py-2 px-4 bg-[#b85c2e] rounded-lg text-white font-medium hover:bg-[#a35129] transition-colors">
          Awesome
        </button>
        <button className="flex-1 py-2 px-4 bg-[#b85c2e] rounded-lg text-white font-medium hover:bg-[#a35129] transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Header */}
      <h3 className="text-md font-bold mb-2">Recent Breakdowns</h3>
    </div>
  );
};