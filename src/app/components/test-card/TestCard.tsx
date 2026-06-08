import React from "react";

export const TestCard = () => {
  return (
    <div id="testElem" className="flex flex-col gap-y-6 p-5 bg-[#2a2a2a] text-[#b5b5b5] min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <span className="text-xl">⚙</span>
      </div>

      <div className="flex items-center gap-x-2">
        <span className="text-[#8b9291]">▲</span>
        <p className="text-[#8b9291] text-sm">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-x-2 mt-4">
        <span className="text-xl">▲</span>
        <h2 className="text-lg font-semibold">Add New Design</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="flex items-center gap-x-2 text-[#a4a4a3] text-sm mb-1">
            Personal Access Token
            <span>ℹ</span>
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded-md bg-[#2a2a2a] border border-[#a3a3a2] text-[#b5b5b5]"
          />
        </div>

        <div>
          <label className="flex items-center gap-x-2 text-[#a4a4a3] text-sm mb-1">
            Design URL
            <span>ℹ</span>
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded-md bg-[#2a2a2a] border border-[#a3a3a2] text-[#b5b5b5]"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-x-4 mt-6">
        <button className="bg-[#8c4b27] rounded-md px-6 py-2 text-white font-bold">Awesome</button>
        <button className="bg-[#8c4b27] rounded-md px-6 py-2 text-white font-bold">Prepare</button>
      </div>

      {/* Footer Section */}
      <h2 className="text-lg text-[#b0b0b0] mt-8">Recent Breakdowns</h2>
    </div>
  );
};
