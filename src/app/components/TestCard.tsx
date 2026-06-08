
import React from 'react';

export const TestCard = () => {
  return (
    <div id="testElem" className="p-4 bg-neutral-900 text-gray-300 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">UI magician Agent</h1>
        <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      </div>

      {/* Collapsible/Status line */}
      <div className="flex items-center mb-6">
        <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
        <span className="text-sm text-gray-400">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
          </svg>
          <h2 className="text-md font-medium">Add New Design</h2>
        </div>

        {/* Personal Access Token Input */}
        <div className="mb-4">
          <label htmlFor="pat" className="block text-sm font-medium text-gray-400 mb-2">
            Personal Access Token
            <svg className="w-4 h-4 inline-block ml-1 align-text-bottom" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </label>
          <input
            type="text"
            id="pat"
            className="w-full p-2 rounded bg-neutral-800 border border-neutral-700 text-gray-300 placeholder-neutral-600 focus:outline-none focus:border-blue-500"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-6">
          <label htmlFor="designUrl" className="block text-sm font-medium text-gray-400 mb-2">
            Design URL
            <svg className="w-4 h-4 inline-block ml-1 align-text-bottom" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </label>
          <input
            type="text"
            id="designUrl"
            className="w-full p-2 rounded bg-neutral-800 border border-neutral-700 text-gray-300 placeholder-neutral-600 focus:outline-none focus:border-blue-500"
            placeholder="https://www.figma.com/file/"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="flex-1 py-2 px-4 rounded bg-orange-700 hover:bg-orange-800 text-white font-medium">
            Awesome
          </button>
          <button className="flex-1 py-2 px-4 rounded bg-orange-700 hover:bg-orange-800 text-white font-medium">
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <h2 className="text-md font-medium">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
