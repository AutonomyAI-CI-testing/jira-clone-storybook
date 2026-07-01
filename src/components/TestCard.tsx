export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#282828] p-5 w-[254px] min-h-[508px] text-white font-sans text-[13.5px] font-semibold">
      {/* Header row */}
      <div className="flex items-center justify-between text-[#b5b5b5] text-[13.5px]">
        <span>UI magician Agent</span>
        <span>⚙️</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mt-2 text-[#8b9291] text-[10.5px]">
        <span>∧</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2 text-[#b2b2b1] text-[12px]">
        <span>∧</span>
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-4">
        <div className="flex items-center gap-1 mb-1 text-[#a3a3a2] text-[11px]">
          <label>Personal Access Token</label>
          <span>ⓘ</span>
        </div>
        <input
          type="text"
          className="w-full p-2 rounded bg-[#272822] border border-[#a5adad] placeholder-[#737470] text-[11px]"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-3">
        <div className="flex items-center gap-1 mb-1 text-[#a3a3a2] text-[11px]">
          <label>Design URL</label>
          <span>ⓘ</span>
        </div>
        <input
          type="text"
          className="w-full p-2 rounded bg-[#272822] border-2 border-[#929291] placeholder-[#737470] text-[11px]"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-5 justify-center">
        <button className="bg-[#843a17] text-[#8c8078] rounded w-[85px] h-[37px] text-[12px]">
          Awesome
        </button>
        <button className="bg-[#843a17] text-[#8c8078] rounded w-[85px] h-[37px] text-[12px]">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-10 text-[#b0b0b0] text-[12px]">
        <span>Recent Breakdowns</span>
      </div>
    </div>
  );
};
