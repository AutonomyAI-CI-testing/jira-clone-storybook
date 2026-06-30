import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

const TestCard: React.FC = () => {
  return (
    <div id="testElem" style={{ backgroundColor: '#272625' }} className="p-6 rounded-lg text-white font-sans w-96">
      {/* 1. Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold" style={{ color: '#d4cfc9' }}>UI magician Agent</h2>
        <FiSettings size={20} style={{ color: '#d4cfc9' }} />
      </div>

      {/* 2. Subtitle */}
      <div className="flex items-center mb-6">
        <FiChevronUp size={16} style={{ color: '#8b7355' }} className="mr-1" />
        <p className="text-sm" style={{ color: '#8b7355' }}>From entire frame to a singl...</p>
      </div>

      {/* 3. "Add New Design" collapsible section header */}
      <div className="flex items-center mb-4">
        <FiChevronUp size={18} style={{ color: '#e0dbd5' }} className="mr-2" />
        <h3 className="text-md font-semibold" style={{ color: '#e0dbd5' }}>Add New Design</h3>
      </div>

      {/* 4. "Personal Access Token" input field */}
      <div className="mb-4">
        <label className="flex items-center text-sm font-medium mb-2" style={{ color: '#a09b95' }}>
          Personal Access Token
          <FiInfo size={14} style={{ color: '#a09b95' }} className="ml-1" />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md border text-sm"
          style={{ backgroundColor: '#1e1d1c', borderColor: '#3d3b38', color: '#7a7570' }}
        />
      </div>

      {/* 5. "Design URL" input field */}
      <div className="mb-6">
        <label className="flex items-center text-sm font-medium mb-2" style={{ color: '#a09b95' }}>
          Design URL
          <FiInfo size={14} style={{ color: '#a09b95' }} className="ml-1" />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md border text-sm"
          style={{ backgroundColor: '#1e1d1c', borderColor: '#3d3b38', color: '#7a7570' }}
        />
      </div>

      {/* 6. Buttons */}
      <div className="flex justify-between space-x-4 mb-6">
        <button
          className="flex-1 py-2 rounded-lg font-semibold"
          style={{ backgroundColor: '#b5541c', color: 'white' }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 rounded-lg font-semibold"
          style={{ backgroundColor: '#b5541c', color: 'white' }}
        >
          Prepare
        </button>
      </div>

      {/* 7. "Recent Breakdowns" heading */}
      <div>
        <h3 className="text-md font-semibold" style={{ color: '#d4cfc9' }}>Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;
