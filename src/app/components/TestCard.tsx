export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="font-sans w-[254px] bg-black p-5 text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <img src="/images/testcard/gear.svg" alt="" className="h-4 w-3.5" />
      </div>

      {/* Collapsed section */}
      <div className="mt-6 flex items-center gap-2">
        <img
          src="/images/testcard/chevron-collapsed.svg"
          alt=""
          className="h-[5px] w-2"
        />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-16">
        <div className="flex items-center gap-2">
          <img
            src="/images/testcard/chevron-expanded.svg"
            alt=""
            className="h-2 w-3"
          />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mt-6 flex items-center gap-2">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <img
            src="/images/testcard/info-1.svg"
            alt=""
            className="h-[15px] w-[15px]"
          />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-2 w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2.5 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
        />

        {/* Design URL */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <img
            src="/images/testcard/info-2.svg"
            alt=""
            className="h-[15px] w-[15px]"
          />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-2 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
        />

        {/* Buttons */}
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
