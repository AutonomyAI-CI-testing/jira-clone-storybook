import React from 'react';

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-5 flex flex-col gap-5 w-[320px]">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">UI magician Agent</h1>
        <span className="text-white text-lg">⚙</span>
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-1">
        <span className="text-white">▲</span>
        <p className="text-[#c87941] text-sm">From entire frame to a singl...</p>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Add New Design Section */}
      <div className="flex items-center gap-1">
        <span className="text-white">▲</span>
        <h2 className="text-white text-lg font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="flex flex-col gap-2">
        <label className="text-white text-sm flex items-center gap-1">
          <span>Personal Access Token</span>
          <span className="text-white text-xs">ⓘ</span>
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#1e1e1e] border border-[#555] rounded px-3 py-2 text-white text-sm"
        />
      </div>

      {/* Design URL Input */}
      <div className="flex flex-col gap-2">
        <label className="text-white text-sm flex items-center gap-1">
          <span>Design URL</span>
          <span className="text-white text-xs">ⓘ</span>
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#1e1e1e] border border-[#555] rounded px-3 py-2 text-white text-sm"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-2">
        <button className="bg-[#b5522a] text-white rounded-lg px-6 py-3 text-sm flex-grow">
          Awesome
        </button>
        <button className="bg-[#b5522a] text-white rounded-lg px-6 py-3 text-sm flex-grow">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h2 className="text-white text-lg font-bold mt-4">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;
