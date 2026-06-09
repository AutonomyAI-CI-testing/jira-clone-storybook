
import React from 'react';

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="flex flex-col p-4 bg-zinc-900 text-zinc-400 rounded-lg shadow-lg w-[254px]">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">UI magician Agent</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37z" />
        </svg>
      </div>

      {/* Collapsed Section Label Row */}
      <div className="flex items-center mb-4">
        <span className="text-sm text-zinc-500 mr-1">^</span>
        <p className="text-sm text-zinc-500">From entire frame to a single...</p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <span className="text-sm text-zinc-400 mr-1">^</span>
          <h3 className="text-md font-semibold text-white">Add New Design</h3>
        </div>
        
        <label htmlFor="token" className="block text-sm font-medium text-zinc-300 mb-1 flex items-center">
          Personal Access Token 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </label>
        <input 
          type="text" 
          id="token" 
          placeholder="figd_xxxxxxxxxxxxxxxxxxx" 
          className="w-full p-2 mb-3 bg-zinc-800 border border-zinc-700 rounded text-zinc-300 text-sm placeholder-zinc-500"
        />

        <label htmlFor="url" className="block text-sm font-medium text-zinc-300 mb-1 flex items-center">
          Design URL 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </label>
        <input 
          type="text" 
          id="url" 
          placeholder="https://www.figma.com/file:/" 
          className="w-full p-2 mb-4 bg-zinc-800 border border-zinc-700 rounded text-zinc-300 text-sm placeholder-zinc-500"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between space-x-2 mb-6">
        <button className="flex-1 px-4 py-2 bg-orange-900 text-white rounded text-sm font-medium hover:bg-orange-800 transition-colors">Awesome</button>
        <button className="flex-1 px-4 py-2 bg-orange-900 text-white rounded text-sm font-medium hover:bg-orange-800 transition-colors">Prepare</button>
      </div>

      {/* Footer Heading */}
      <div>
        <h3 className="text-md font-semibold text-white">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;
