import React from 'react';

/**
 * TestCard Component
 * A self-contained card component for smoke testing the Figma-to-code pipeline.
 * Replicates the "UI magician Agent" panel from design.
 */
export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#272822] w-64 p-4 font-sans text-[#b5b5b5] space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center px-1">
        <span className="text-sm font-semibold tracking-wide">UI magician Agent</span>
        <span className="text-lg cursor-default">⚙</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 text-[#8b9291] text-[10px] font-semibold px-1">
        <span className="rotate-180 inline-block text-[10px]">^</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8">
        <div className="flex items-center gap-2 text-[#b2b2b1] text-sm font-semibold mb-5 px-1 cursor-default">
          <span className="rotate-180 inline-block text-[10px]">^</span>
          <span>Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-[#a4a4a3] text-[10px] font-semibold mb-1.5 px-1">
            <span>Personal Access Token</span>
            <span className="text-[10px] border border-[#a4a4a3] rounded-full w-3 h-3 flex items-center justify-center text-[8px]">i</span>
          </div>
          <input
            className="w-full bg-[#272822] border border-[#a5adad] text-[#737470] text-[11px] p-2 focus:outline-none"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-[#a3a3a2] text-[10px] font-semibold mb-1.5 px-1">
            <span>Design URL</span>
            <span className="text-[10px] border border-[#a3a3a2] rounded-full w-3 h-3 flex items-center justify-center text-[8px]">i</span>
          </div>
          <input
            className="w-full bg-[#272822] border border-[#929291] border-2 text-[#71726e] text-[11px] p-2 focus:outline-none"
            placeholder="https://www.figma.com/file/:"
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <button className="bg-[#843a17] rounded text-[#8c8078] text-[11px] font-semibold px-5 py-2.5 flex-1 transition-opacity hover:opacity-90">
            Awesome
          </button>
          <button className="bg-[#843a17] rounded text-[#8c8078] text-[11px] font-semibold px-5 py-2.5 flex-1 transition-opacity hover:opacity-90">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="pt-6 text-[#b0b0b0] text-[13px] font-semibold px-1">
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
