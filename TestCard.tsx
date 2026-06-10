
import React from 'react';

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="p-4 bg-[#191a14] text-[#b0b0b0] min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-sm flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold">UI magician Agent</h1>
        <svg className="w-5 h-5 text-[#b0b0b0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37zm3.705 4.976a2.5 2.5 0 10-3.536 3.536 2.5 2.5 0 003.536-3.536z"></path>
        </svg>
      </div>

      {/* Collapsed Row */}
      <div className="w-full max-w-sm flex items-center mb-6 text-[#71726e]">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
        <p className="text-sm truncate">From entire frame to a single...</p>
      </div>

      {/* Add New Design Section */}
      <div className="w-full max-w-sm flex items-center mb-6">
        <svg className="w-4 h-4 mr-2 text-[#b0b0b0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
        <h2 className="text-md font-medium">Add New Design</h2>
      </div>

      {/* Form Area */}
      <div className="w-full max-w-sm mb-6">
        <label htmlFor="token" className="block text-sm mb-2 flex items-center">
          Personal Access Token
          <svg className="w-4 h-4 ml-1 text-[#71726e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </label>
        <input
          type="text"
          id="token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded bg-[#272822] border border-gray-600 text-[#b0b0b0] text-sm"
        />

        <label htmlFor="designUrl" className="block text-sm mt-4 mb-2 flex items-center">
          Design URL
          <svg className="w-4 h-4 ml-1 text-[#71726e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </label>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/"
          className="w-full p-2 rounded bg-[#272822] border border-gray-600 text-[#b0b0b0] text-sm"
        />
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-sm flex justify-between gap-4 mb-6">
        <button className="flex-1 py-2 px-4 rounded bg-[#843a17] text-[#b0b0b0] font-medium text-sm">Awesome</button>
        <button className="flex-1 py-2 px-4 rounded bg-[#843a17] text-[#b0b0b0] font-medium text-sm">Prepare</button>
      </div>

      {/* Footer */}
      <div className="w-full max-w-sm text-sm text-[#71726e]">
        <p>Recent Breakdowns</p>
      </div>
    </div>
  );
};

export default TestCard;
