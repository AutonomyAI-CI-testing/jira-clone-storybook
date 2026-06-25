
import React from 'react';
import { HiCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-4 rounded-lg shadow-lg" style={{ backgroundColor: '#1e1e1e' }}>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-md font-semibold" style={{ color: '#b5b5b5', fontSize: '13.5px' }}>UI magician Agent</h2>
        <HiCog className="text-white w-5 h-5" />
      </div>

      {/* Subtitle Section */}
      <div className="flex items-center mb-6">
        <HiChevronUp className="text-gray-400 w-4 h-4 mr-1" />
        <p className="text-gray-400 text-sm font-semibold" style={{ color: '#8b9291', fontSize: '11.5px' }}>From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-4">
        <HiChevronUp className="text-gray-300 w-4 h-4 mr-1" />
        <h3 className="text-white text-md font-semibold" style={{ color: '#b2b2b1', fontSize: '13.5px' }}>Add New Design</h3>
      </div>

      {/* Form Fields */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="pat" className="text-gray-300 text-sm font-semibold mr-1" style={{ color: '#a4a4a3', fontSize: '11.5px' }}>Personal Access Token</label>
          <HiInformationCircle className="text-gray-400 w-3 h-3" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md border text-sm text-gray-200"
          style={{ backgroundColor: '#1e1e1e', borderColor: '#4a4a4a', color: '#737470', fontSize: '11.5px' }}
        />
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <label htmlFor="design-url" className="text-gray-300 text-sm font-semibold mr-1" style={{ color: '#a3a3a2', fontSize: '11.5px' }}>Design URL</label>
          <HiInformationCircle className="text-gray-400 w-3 h-3" />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md border text-sm text-gray-200"
          style={{ backgroundColor: '#1e1e1e', borderColor: '#4a4a4a', color: '#71726e', fontSize: '11.5px' }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between space-x-2 mb-6">
        <button
          className="flex-1 py-2 px-4 rounded-md text-white text-sm font-semibold"
          style={{ backgroundColor: '#b35a2a', color: '#8c8078', fontSize: '11.5px' }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 px-4 rounded-md text-white text-sm font-semibold"
          style={{ backgroundColor: '#b35a2a', color: '#8c8078', fontSize: '11.5px' }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Header */}
      <div>
        <h3 className="text-white text-md font-semibold" style={{ color: '#b0b0b0', fontSize: '13.5px' }}>Recent Breakdowns</h3>
      </div>
    </div>
  );
};
