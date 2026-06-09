import React from 'react';

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#1b1d16] text-[#b0b0b0] p-6 w-80 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">UI magician Agent</h2>
        <span className="text-[#b5b5b5]">⚙</span>
      </div>

      <div className="flex items-center mb-6">
        <span className="text-[#b5b5b5] mr-2">^</span>
        <p className="text-sm text-[#71726e]">From entire frame to a singl...</p>
      </div>

      <div className="flex items-center mb-4">
        <span className="text-[#b5b5b5] mr-2">^</span>
        <h3 className="text-md font-semibold">Add New Design</h3>
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label className="block text-sm font-semibold mr-2">Personal Access Token</label>
          <span className="text-[#71726e]">ⓘ</span>
        </div>
        <div className="bg-[#272822] border border-[#929291] p-2 rounded h-10 flex items-center">
          <span className="text-[#b0b0b0] text-sm">figd_xxxxxxxxxxxxxxxxxxxxxx</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <label className="block text-sm font-semibold mr-2">Design URL</label>
          <span className="text-[#71726e]">ⓘ</span>
        </div>
        <div className="bg-[#272822] border border-[#929291] p-2 rounded h-10 flex items-center">
          <span className="text-[#b0b0b0] text-sm">https://www.figma.com/file/:</span>
        </div>
      </div>

      <div className="flex justify-between gap-4 mb-6">
        <button className="bg-[#843a17] text-[#b0b0b0] px-4 py-2 rounded font-semibold flex-1">Awesome</button>
        <button className="bg-[#843a17] text-[#b0b0b0] px-4 py-2 rounded font-semibold flex-1">Prepare</button>
      </div>

      <div>
        <h3 className="text-md font-semibold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;
