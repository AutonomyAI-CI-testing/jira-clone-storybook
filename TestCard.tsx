
import React from 'react';

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#1e1e1e] text-gray-300 p-4 w-80 flex flex-col space-y-4 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">UI magician Agent</h2>
        <span className="text-gray-400">⚙️</span> {/* Placeholder for settings icon */}
      </div>
      <div className="flex items-center text-sm text-gray-400 mt-2">
        <span className="mr-1">⬆️</span> {/* Placeholder for chevron icon */}
        <span>From entire frame to a singl...</span>
      </div>
      <h3 className="text-md font-semibold mt-4">⬆️ Add New Design</h3>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-400">Personal Access Token 
            <span className="text-sm ml-1">ℹ️</span> {/* Placeholder for info icon */}
          </label>
          <div className="mt-1 p-2 bg-[#2c2c2c] border border-gray-600 rounded text-gray-300">
            figd_xxxxxxxxxxxxxxxxxxxxxx
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400">Design URL 
            <span className="text-sm ml-1">ℹ️</span> {/* Placeholder for info icon */}
          </label>
          <div className="mt-1 p-2 bg-[#2c2c2c] border border-gray-600 rounded text-gray-300">
            https://www.figma.com/file/:
          </div>
        </div>
      </div>

      <div className="flex justify-between space-x-2 mt-4">
        <button className="bg-[#b34c2c] text-white px-4 py-2 rounded-md flex-1">Awesome</button>
        <button className="bg-[#b34c2c] text-white px-4 py-2 rounded-md flex-1">Prepare</button>
      </div>

      <h3 className="text-md font-semibold mt-4">Recent Breakdowns</h3>
    </div>
  );
};

export default TestCard;
