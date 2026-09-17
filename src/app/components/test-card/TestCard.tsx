export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="font-sans flex w-[300px] flex-col gap-4 rounded-md bg-[#18120f] p-5"
    >
      {/* Header row: title + settings icon */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <img
          src="/images/testcard/settings-icon.svg"
          alt=""
          width={14}
          height={16}
        />
      </div>

      {/* Collapsible-looking row: chevron + description */}
      <div className="flex items-center gap-2">
        <img
          src="/images/testcard/chevron-up-1.svg"
          alt=""
          width={8}
          height={5}
        />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="mt-2 flex items-center gap-2">
        <img
          src="/images/testcard/chevron-up-2.svg"
          alt=""
          width={12}
          height={8}
        />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <img
            src="/images/testcard/info-icon-1.svg"
            alt=""
            width={15}
            height={15}
          />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="rounded border border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] text-[#737470] placeholder:text-[#737470] focus:outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <img
            src="/images/testcard/info-icon-2.svg"
            alt=""
            width={15}
            height={15}
          />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-[10.5px] text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
        />
      </div>

      {/* Buttons row */}
      <div className="mt-1 flex gap-3">
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <span className="mt-2 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
