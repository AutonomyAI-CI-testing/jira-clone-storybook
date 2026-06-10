
import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { HiChevronUp, HiInformationCircle } from 'react-icons/hi';

/**
 * TestCard component for managing AI Agent design breakdowns.
 * Renders a dark-themed UI for configuring access tokens and design URLs.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] p-5 w-full max-w-sm text-white font-sans rounded-xl shadow-lg"
    >
      {/* Header Row: Agent name and settings button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Agent settings"
          className="text-xl hover:text-amber-500 transition-colors"
        >
          <AiFillSetting />
        </button>
      </div>

      {/* Status Row: Indicates current scope or range */}
      <div className="flex items-center gap-1 text-amber-500 mb-6">
        <HiChevronUp className="text-lg" aria-hidden="true" />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Decorative Spacer */}
      <div className="h-8" aria-hidden="true" />

      {/* Section Trigger/Header */}
      <div className="flex items-center gap-2 mb-4">
        <HiChevronUp className="text-xl" aria-hidden="true" />
        <h3 className="font-bold text-xl">Add New Design</h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-1">
          <label htmlFor="personalAccessToken" className="text-sm font-semibold">
            Personal Access Token
          </label>
          <HiInformationCircle
            className="text-gray-400 text-base cursor-help"
            title="Your Figma personal access token"
          />
        </div>
        <input
          id="personalAccessToken"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1e1e1e] border border-[#555] rounded px-3 py-2 text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-amber-700 transition-colors"
        />
      </div>

      {/* Design URL Field */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-1">
          <label htmlFor="designUrl" className="text-sm font-semibold">
            Design URL
          </label>
          <HiInformationCircle
            className="text-gray-400 text-base cursor-help"
            title="URL of the Figma design to break down"
          />
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="w-full bg-[#1e1e1e] border border-[#555] rounded px-3 py-2 text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-amber-700 transition-colors"
        />
      </div>

      {/* Action CTA Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          type="button"
          className="bg-amber-700 hover:bg-amber-600 active:bg-amber-800 text-white rounded-lg px-5 py-3 font-semibold flex-1 transition-colors"
        >
          Awesome
        </button>
        <button
          type="button"
          className="bg-amber-700 hover:bg-amber-600 active:bg-amber-800 text-white rounded-lg px-5 py-3 font-semibold flex-1 transition-colors"
        >
          Prepare
        </button>
      </div>

      {/* Recent Activity Footer */}
      <h4 className="font-bold text-lg">Recent Breakdowns</h4>
    </div>
  );
};
