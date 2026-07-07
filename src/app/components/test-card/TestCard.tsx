export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#272822] w-[254px] min-h-[508px] flex flex-col p-4 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold">
          UI magician Agent
        </span>
        <span className="text-[#b5b5b5] text-lg leading-none">⚙</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mt-1">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            d="M1 5L5 1L9 5"
            stroke="#8b9291"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[#8b9291] text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Section heading row */}
      <div className="flex items-center gap-1">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            d="M1 5L5 1L9 5"
            stroke="#b2b2b1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold">
          Add New Design
        </span>
      </div>

      {/* Form area */}
      <div className="mt-4 flex flex-col gap-3">
        {/* Personal Access Token field */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <label className="text-[#a4a4a3] text-[11.5px] font-semibold">
              Personal Access Token
            </label>
            <span className="text-[#a4a4a3] text-[11.5px] leading-none">ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#272822] border-2 border-[#929291] rounded px-3 py-2 text-[11.5px] text-[#737470] placeholder-[#737470] font-semibold outline-none"
            readOnly
          />
        </div>

        {/* Design URL field */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <label className="text-[#a3a3a2] text-[11.5px] font-semibold">
              Design URL
            </label>
            <span className="text-[#a3a3a2] text-[11.5px] leading-none">ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#272822] border border-[#a5adad] rounded px-3 py-2 text-[11.5px] text-[#71726e] placeholder-[#71726e] font-semibold outline-none"
            readOnly
          />
        </div>

        {/* Button row */}
        <div className="flex gap-2 mt-1">
          <button className="flex-1 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold py-2 rounded-xl">
            Awesome
          </button>
          <button className="flex-1 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold py-2 rounded-xl">
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-6">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
