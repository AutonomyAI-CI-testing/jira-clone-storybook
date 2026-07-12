import React from 'react';

export default function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: '#1e1e1e' }}
      className="min-h-screen p-5 text-white"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        {/* Gear icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      {/* Subtext */}
      <div className="flex items-center gap-2 mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-sm" style={{ color: '#c1622a' }}>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Add New Design */}
      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        <h2 className="text-lg font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="flex items-center gap-1 mt-4">
        <label className="text-sm text-gray-300 font-semibold">Personal Access Token</label>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full mt-1 px-3 py-2 rounded border border-neutral-600 text-gray-300 text-sm"
        style={{ backgroundColor: '#2a2a2a' }}
      />

      {/* Design URL */}
      <div className="flex items-center gap-1 mt-4">
        <label className="text-sm text-gray-300 font-semibold">Design URL</label>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full mt-1 px-3 py-2 rounded border border-neutral-600 text-gray-300 text-sm"
        style={{ backgroundColor: '#2a2a2a' }}
      />

      {/* Buttons */}
      <div className="flex gap-3 mt-6 justify-center">
        <button
          className="px-8 py-3 rounded-lg text-white font-semibold text-sm"
          style={{ backgroundColor: '#c1622a' }}
        >
          Awesome
        </button>
        <button
          className="px-8 py-3 rounded-lg text-white font-semibold text-sm"
          style={{ backgroundColor: '#c1622a' }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-xl font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
