
import React from 'react';

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#1a1a1a] p-4 text-[#b5b5b5] font-sans rounded-lg shadow-lg max-w-sm mx-auto my-8">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-[#b5b5b5]">UI magician Agent</h1>
        <span className="text-[#b5b5b5]">⚙️</span> {/* Gear icon */}
      </div>

      {/* Collapsed Row */}
      <div className="flex items-center text-[#8b9291] mb-6">
        <span className="mr-2">⬆️</span> {/* Chevron up icon */}
        <p className="truncate">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <div className="flex items-center text-[#b2b2b1] mb-3">
          <span className="mr-2">⬆️</span> {/* Chevron up icon */}
          <h2 className="text-lg font-medium">Add New Design</h2>
        </div>

        {/* Personal Access Token Input */}
        <div className="mb-4">
          <label htmlFor="pat" className="block text-sm font-medium text-[#a4a4a3] mb-1">
            Personal Access Token <span className="text-[#a4a4a3]">ⓘ</span>
          </label>
          <input
            type="text"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded bg-[#1a1a1a] border border-[#444] text-[#b5b5b5] placeholder-[#737470] focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-6">
          <label htmlFor="design-url" className="block text-sm font-medium text-[#a4a4a3] mb-1">
            Design URL <span className="text-[#a4a4a3]">ⓘ</span>
          </label>
          <input
            type="text"
            id="design-url"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded bg-[#1a1a1a] border border-[#444] text-[#b5b5b5] placeholder-[#737470] focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between space-x-4">
          <button className="flex-1 bg-[#7c4b35] text-[#c9a98c] py-2 px-4 rounded font-medium hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#7c4b35] focus:ring-opacity-50">
            Awesome
          </button>
          <button className="flex-1 bg-[#7c4b35] text-[#c9a98c] py-2 px-4 rounded font-medium hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#7c4b35] focus:ring-opacity-50">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Heading */}
      <div>
        <h2 className="text-lg font-medium text-[#b0b0b0]">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
