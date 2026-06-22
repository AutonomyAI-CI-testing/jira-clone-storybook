import React from "react";
import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

/**
 * TestCard component for the UI magician Agent.
 * Used to manage design breakdowns and add new Figma designs.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="my-10 mx-auto max-w-sm rounded-lg bg-[#1f1f1f] p-6 text-white"
    >
      {/* Header Row */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">UI magician Agent</h2>
        <AiOutlineSetting
          className="text-gray-400"
          size={20}
          aria-label="Settings"
        />
      </div>

      {/* Chevron Row - Project context or breadcrumb */}
      <div className="mb-6 flex items-center space-x-2">
        <FiChevronUp
          className="rotate-180 transform text-gray-400"
          aria-hidden="true"
        />{" "}
        {/* Rotated for 'down' appearance to show origin */}
        <p className="text-sm text-gray-500">From entire frame to a singl...</p>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Add New Design Section */}
      <div className="mb-4 flex items-center space-x-2">
        <FiChevronUp className="text-gray-400" aria-hidden="true" />
        <h3 className="text-base font-bold">Add New Design</h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label
          htmlFor="personalAccessToken"
          className="mb-2 block text-sm font-medium text-gray-400"
        >
          Personal Access Token
          <AiOutlineInfoCircle
            className="ml-1 inline-block text-gray-500"
            size={14}
            aria-label="More information about Access Token"
          />
        </label>
        <input
          type="text"
          id="personalAccessToken"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded-md border border-gray-700 bg-[#2a2a2a] p-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-800"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label
          htmlFor="designURL"
          className="mb-2 block text-sm font-medium text-gray-400"
        >
          Design URL
          <AiOutlineInfoCircle
            className="ml-1 inline-block text-gray-500"
            size={14}
            aria-label="More information about Design URL"
          />
        </label>
        <input
          type="text"
          id="designURL"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded-md border border-gray-700 bg-[#2a2a2a] p-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-800"
        />
      </div>

      {/* Buttons Row - Actions for adding or preparing designs */}
      <div className="mb-8 flex justify-end space-x-4">
        <button className="w-1/2 rounded-lg bg-[#b05a2f] px-4 py-2 font-bold text-white hover:bg-amber-700">
          Awesome
        </button>
        <button className="w-1/2 rounded-lg bg-[#b05a2f] px-4 py-2 font-bold text-white hover:bg-amber-700">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <div>
        <h3 className="text-base font-bold text-gray-300">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
