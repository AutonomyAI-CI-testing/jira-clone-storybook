
import React from 'react';

const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="p-6 flex flex-col gap-4 min-h-screen w-full"
      style={{ backgroundColor: '#2a2a2a' }}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl" style={{ color: '#ffffff' }}>
          UI magician Agent
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 24, height: 24, color: '#ffffff' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Subheader */}
      <div className="flex items-center" style={{ color: '#b45309' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 20, height: 20, marginRight: 4 }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Add New Design Section */}
      <div>
        <div className="flex items-center font-bold text-lg mb-2" style={{ color: '#ffffff' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 20, height: 20, marginRight: 4 }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
          <span>Add New Design</span>
        </div>

        {/* Personal Access Token Input */}
        <label
          className="flex items-center text-sm font-bold mb-1"
          style={{ color: '#ffffff', display: 'flex' }}
        >
          Personal Access Token
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 16, height: 16, marginLeft: 4 }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 mb-4 rounded"
          style={{
            backgroundColor: '#3a3a3a',
            border: '1px solid #555',
            color: '#ffffff',
          }}
        />

        {/* Design URL Input */}
        <label
          className="flex items-center text-sm font-bold mb-1"
          style={{ color: '#ffffff', display: 'flex' }}
        >
          Design URL
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 16, height: 16, marginLeft: 4 }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 mb-6 rounded"
          style={{
            backgroundColor: '#3a3a3a',
            border: '1px solid #555',
            color: '#ffffff',
          }}
        />

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            className="flex-1 p-2 rounded-lg font-bold"
            style={{ backgroundColor: '#92400e', color: '#ffffff' }}
          >
            Awesome
          </button>
          <button
            className="flex-1 p-2 rounded-lg font-bold"
            style={{ backgroundColor: '#92400e', color: '#ffffff' }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Section */}
      <h2 className="font-bold text-lg mt-6" style={{ color: '#ffffff' }}>
        Recent Breakdowns
      </h2>
    </div>
  );
};

export default TestCard;
