export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#272826] p-5 font-sans"
    >
      {/* Header row: title + gear icon */}
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-[#b5b5b5] text-[13.5px] font-semibold leading-[16.34px]"
        >
          UI magician Agent
        </span>
        <span className="text-[#b5b5b5] text-base">⚙️</span>
      </div>

      {/* Subtitle row: chevron + truncated text */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-[#8b9291] text-[10px]">∧</span>
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-[13.92px] truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#b2b2b1] text-[10px]">∧</span>
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16.34px]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-2">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-[13.92px]">
            Personal Access Token
          </span>
          <span className="text-[#a4a4a3] text-[11px]">ℹ</span>
        </div>
        <div
          className="w-full h-[37px] bg-[#272822] border border-[#a5adad] flex items-center px-3"
        >
          <span className="text-[#737470] text-[11.5px] font-semibold leading-[13.92px]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-[13.92px]">
            Design URL
          </span>
          <span className="text-[#a3a3a2] text-[11px]">ℹ</span>
        </div>
        <div
          className="w-full h-[37px] bg-[#272822] border-2 border-[#929291] flex items-center px-3"
        >
          <span className="text-[#71726e] text-[10.5px] font-semibold leading-[12.71px]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mb-8">
        <button
          className="w-[87px] h-[37px] bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold leading-[13.92px] flex items-center justify-center"
        >
          Awesome
        </button>
        <button
          className="w-[87px] h-[37px] bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold leading-[13.92px] flex items-center justify-center"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <span className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16.34px]">
        Recent Breakdowns
      </span>
    </div>
  );
};

export default TestCard;
