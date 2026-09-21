import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="font-sans w-[254px] rounded-md bg-[#1c1c18] p-3"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Section 1: collapsed header */}
      <div className="mt-6 flex items-center gap-2">
        <FiChevronUp className="h-3 w-3 text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section 2: Add New Design */}
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <FiChevronUp className="h-3 w-3 text-[#b2b2b1]" />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="mt-4 flex items-center gap-1">
          <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <FiInfo className="h-3 w-3 text-[#a4a4a3]" />
        </div>
        <input
          readOnly
          defaultValue=""
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-2 w-full rounded-none border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
        />

        <div className="mt-4 flex items-center gap-1">
          <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <FiInfo className="h-3 w-3 text-[#a3a3a2]" />
        </div>
        <input
          readOnly
          defaultValue=""
          placeholder="https://www.figma.com/file/:"
          className="mt-2 w-full rounded-none border border-[#a5adad] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
        />

        <div className="mt-4 flex gap-3">
          <button
            type="button"
            className="rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer label */}
      <div className="mt-8 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
