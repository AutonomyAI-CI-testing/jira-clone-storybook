import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { HiChevronUp, HiInformationCircle } from 'react-icons/hi';

export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-5 text-white">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <AiOutlineSetting className="text-white text-2xl" />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center space-x-2 mb-6">
        <HiChevronUp className="text-white text-xl" />
        <span className="text-[#c1834f]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center space-x-2 mb-4">
        <HiChevronUp className="text-white text-2xl" />
        <h2 className="text-2xl font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label htmlFor="personalAccessToken" className="flex items-center space-x-2 text-white mb-2">
          <span>Personal Access Token</span>
          <HiInformationCircle className="text-white" />
        </label>
        <input
          type="text"
          id="personalAccessToken"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#1e1e1e] border border-[#444] text-gray-400 rounded p-3 w-full"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label htmlFor="designURL" className="flex items-center space-x-2 text-white mb-2">
          <span>Design URL</span>
          <HiInformationCircle className="text-white" />
        </label>
        <input
          type="text"
          id="designURL"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#1e1e1e] border border-[#444] text-gray-400 rounded p-3 w-full"
        />
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mb-8">
        <button className="bg-[#a0522d] text-white rounded-xl font-semibold py-3 px-6 flex-1">
          Awesome
        </button>
        <button className="bg-[#a0522d] text-white rounded-xl font-semibold py-3 px-6 flex-1">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <div>
        <h2 className="text-xl font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
