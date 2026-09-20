import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-72 rounded-lg bg-black p-5 font-sans text-neutral-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Collapsible info row */}
      <div className="mt-3 flex items-center gap-1.5">
        <FiChevronUp className="h-3.5 w-3.5 text-[#8b9291]" />
        <span className="text-xs font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8">
        <div className="flex items-center gap-1.5">
          <FiChevronUp className="h-3.5 w-3.5 text-[#b2b2b1]" />
          <span className="text-sm font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="mt-4 flex items-center gap-1.5">
          <span className="text-xs font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <FiInfo className="h-3 w-3 text-[#a4a4a3]" />
        </div>
        <input
          disabled
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-1.5 w-full rounded border border-neutral-500 bg-[#272822] px-3 py-2 text-xs text-[#737470] placeholder-[#737470]"
        />

        <div className="mt-4 flex items-center gap-1.5">
          <span className="text-xs font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <FiInfo className="h-3 w-3 text-[#a3a3a2]" />
        </div>
        <input
          disabled
          placeholder="https://www.figma.com/file/:"
          className="mt-1.5 w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[10.5px] text-[#71726e] placeholder-[#71726e]"
        />

        <div className="mt-4 flex gap-3">
          <button
            disabled
            className="rounded bg-[#843a17] px-4 py-2 text-xs font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            disabled
            className="rounded bg-[#843a17] px-4 py-2 text-xs font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8 text-sm font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
