import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiChevronUp } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="p-5 text-white min-h-screen"
      style={{ backgroundColor: '#2a2a2a' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold">UI magician Agent</h2>
        <IoSettingsOutline className="w-6 h-6 text-gray-300" />
      </div>

      {/* Collapsible Row */}
      <div className="flex items-center mb-8" style={{ color: '#c8754a' }}>
        <HiChevronUp className="w-4 h-4 mr-2" />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div>
        <div className="flex items-center mb-5">
          <HiChevronUp className="w-5 h-5 mr-2 text-white" />
          <h3 className="text-lg font-bold">Add New Design</h3>
        </div>

        {/* Personal Access Token Input */}
        <div className="mb-4">
          <label
            htmlFor="personalAccessToken"
            className="flex items-center text-sm mb-2 text-gray-200"
          >
            Personal Access Token
            <AiOutlineInfoCircle className="w-4 h-4 ml-2" />
          </label>
          <input
            type="text"
            id="personalAccessToken"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full py-3 px-3 rounded text-gray-400 focus:outline-none"
            style={{
              backgroundColor: '#1e1e1e',
              border: '1px solid #555',
              color: '#aaa',
            }}
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-6">
          <label
            htmlFor="designURL"
            className="flex items-center text-sm mb-2 text-gray-200"
          >
            Design URL
            <AiOutlineInfoCircle className="w-4 h-4 ml-2" />
          </label>
          <input
            type="text"
            id="designURL"
            placeholder="https://www.figma.com/file/:"
            className="w-full py-3 px-3 rounded text-gray-400 focus:outline-none"
            style={{
              backgroundColor: '#1e1e1e',
              border: '1px solid #555',
              color: '#aaa',
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-8">
          <button
            className="flex-1 py-3 px-4 rounded-lg font-semibold text-white"
            style={{ backgroundColor: '#8B4726' }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-3 px-4 rounded-lg font-semibold text-white"
            style={{ backgroundColor: '#8B4726' }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="text-lg font-bold">Recent Breakdowns</h3>
    </div>
  );
};
