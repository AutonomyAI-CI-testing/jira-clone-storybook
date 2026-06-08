
import React from 'react';

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="flex flex-col p-4 space-y-4 bg-zinc-900 text-zinc-100 rounded-lg shadow-lg max-w-sm mx-auto my-8">
      {/* Header */}
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">UI magician Agent</h2>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </header>

      {/* Expandable Section: Frame Selection */}
      <section className="flex items-center justify-between text-sm text-gray-300">
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
          <span>From entire frame to a singl...</span>
        </div>
      </section>

      {/* Add New Design Section */}
      <section className="space-y-3">
        <div className="flex items-center space-x-2 text-sm font-medium text-gray-200">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
          <h3>Add New Design</h3>
        </div>

        {/* Personal Access Token Input */}
        <div className="space-y-1">
          <label htmlFor="token" className="flex items-center space-x-2 text-sm text-gray-300">
            <span>Personal Access Token</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </label>
          <div className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-400 text-sm">
            figd_xxxxxxxxxxxxxxxxxx
          </div>
        </div>

        {/* Design URL Input */}
        <div className="space-y-1">
          <label htmlFor="url" className="flex items-center space-x-2 text-sm text-gray-300">
            <span>Design URL</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </label>
          <div className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-400 text-sm">
            https://www.figma.com/file/:
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-around pt-2 space-x-4">
          <button className="px-4 py-2 bg-orange-700 hover:bg-orange-600 text-white font-medium rounded-md flex-1">
            Awesome
          </button>
          <button className="px-4 py-2 bg-orange-700 hover:bg-orange-600 text-white font-medium rounded-md flex-1">
            Prepare
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-4 text-sm text-gray-400">
        Recent Breakdowns
      </footer>
    </div>
  );
};

export default TestCard;
