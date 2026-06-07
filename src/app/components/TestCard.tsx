/**
 * TestCard - A self-contained React component mirroring a Figma design.
 * Root element has id="testElem".
 * Uses Tailwind utility classes with arbitrary values for specific Figma colors.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="w-[254px] bg-[#2a2a27] text-[#b5b5b5] font-sans p-4 flex flex-col gap-6 select-none">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold leading-[16.34px]">UI magician Agent</h1>
        <span className="text-[14px]">⚙</span>
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] transform rotate-180">∧</span>
        <p className="text-[#8b9291] text-[11.5px] font-semibold leading-[13.92px] truncate">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[10px] transform rotate-180">∧</span>
          <h2 className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16.34px]">Add New Design</h2>
        </div>

        {/* Personal Access Token Field */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-[13.92px]">Personal Access Token</span>
            <span className="text-[#a4a4a3] text-[10px]">ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#272822] border border-[#a5adad] rounded-[4px] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
            readOnly
          />
        </div>

        {/* Design URL Field */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-[13.92px]">Design URL</span>
            <span className="text-[#a3a3a2] text-[10px]">ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#272822] border-2 border-[#929291] rounded-[4px] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
            readOnly
          />
        </div>

        {/* Button Row */}
        <div className="flex gap-2.5 mt-2">
          <button className="flex-1 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold py-2.5 rounded-[4px] transition-opacity hover:opacity-90">
            Awesome
          </button>
          <button className="flex-1 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold py-2.5 rounded-[4px] transition-opacity hover:opacity-90">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-4">
        <h2 className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16.34px]">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
