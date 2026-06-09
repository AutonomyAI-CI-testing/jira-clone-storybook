
import React from 'react';

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="p-4 bg-gray-900 min-h-screen">
      <div className="w-80 bg-gray-800 rounded-lg p-4 shadow-lg text-gray-100 font-sans">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold">UI magician Agent</h1>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </div>

        {/* Collapsed Status */}
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
          From entire frame to a singl...
        </div>

        {/* Add New Design Section */}
        <div className="mb-4">
          <div className="flex items-center text-sm font-semibold text-gray-200 mb-3">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
            Add New Design
          </div>

          {/* Personal Access Token */}
          <div className="mb-3">
            <div className="flex items-center text-xs font-semibold text-gray-400 mb-1">
              Personal Access Token
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <input
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-sm text-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Design URL */}
          <div className="mb-4">
            <div className="flex items-center text-xs font-semibold text-gray-400 mb-1">
              Design URL
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-sm text-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between space-x-2">
            <button className="flex-1 py-2 rounded bg-orange-700 text-white text-sm font-semibold hover:bg-orange-600 transition-colors">
              Awesome
            </button>
            <button className="flex-1 py-2 rounded bg-orange-700 text-white text-sm font-semibold hover:bg-orange-600 transition-colors">
              Prepare
            </button>
          </div>
        </div>

        {/* Footer Heading */}
        <div>
          <h2 className="text-sm font-semibold text-gray-200">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
