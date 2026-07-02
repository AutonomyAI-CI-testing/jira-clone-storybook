
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

export const TestCard = () => {
  return (
    <div id="testElem" className="p-4 w-full" style={{ backgroundColor: '#2a2a2a' }}>
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold" style={{ color: '#b5b5b5' }}>UI magician Agent</span>
        <FiSettings className="text-base" style={{ color: '#b5b5b5' }} />
      </div>

      {/* Collapsed Row */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-sm" style={{ color: '#c47b5a' }} />
        <span className="text-xs" style={{ color: '#8b9291' }}>From entire frame to a singl...</span>
      </div>

      {/* Spacer Gap - Using a div for now for explicit spacing */}
      <div className="h-4"></div>

      {/* Add New Design Section Heading */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-sm" style={{ color: '#b2b2b1' }} />
        <span className="text-base font-semibold" style={{ color: '#b2b2b1' }}>Add New Design</span>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-semibold" style={{ color: '#a4a4a3' }}>Personal Access Token</label>
          <FiInfo className="text-xs" style={{ color: '#a4a4a3' }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="text-sm rounded px-3 py-2 w-full"
          style={{
            backgroundColor: '#272822',
            border: '1px solid #a5adad',
            color: '#737470',
          }}
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-semibold" style={{ color: '#a3a3a2' }}>Design URL</label>
          <FiInfo className="text-xs" style={{ color: '#a3a3a2' }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="text-sm rounded px-3 py-2 w-full"
          style={{
            backgroundColor: '#272822',
            border: '2px solid #929291',
            color: '#71726e',
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4 justify-center">
        <button
          className="rounded-md px-6 py-2.5 font-semibold text-xs"
          style={{ backgroundColor: '#843a17', color: '#8c8078' }}
        >
          Awesome
        </button>
        <button
          className="rounded-md px-6 py-2.5 font-semibold text-xs"
          style={{ backgroundColor: '#843a17', color: '#8c8078' }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <div className="mt-6">
        <span className="text-base font-semibold" style={{ color: '#b0b0b0' }}>Recent Breakdowns</span>
      </div>
    </div>
  );
};
