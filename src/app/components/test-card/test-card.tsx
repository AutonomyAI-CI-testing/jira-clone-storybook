import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md bg-[#1d1e1a] p-5 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="text-[#8b9291]" size={18} />
      </div>

      {/* Collapsed helper row */}
      <div className="mt-6 flex items-center gap-2">
        <FiChevronUp className="text-[#8b9291]" size={14} />
        <span className="text-xs font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-10">
        <div className="flex items-center gap-2">
          <FiChevronUp className="text-[#b2b2b1]" size={14} />
          <span className="text-sm font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mt-5">
          <div className="flex items-center gap-1.5">
            <label className="text-xs font-semibold text-[#a4a4a3]">
              Personal Access Token
            </label>
            <FiInfo className="text-[#a4a4a3]" size={12} />
          </div>
          <input
            disabled
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="mt-2 w-full rounded-sm border border-[#a5adad] bg-[#272822] px-3 py-2 text-xs text-[#737470] placeholder:text-[#737470]"
          />
        </div>

        {/* Design URL */}
        <div className="mt-4">
          <div className="flex items-center gap-1.5">
            <label className="text-xs font-semibold text-[#a3a3a2]">
              Design URL
            </label>
            <FiInfo className="text-[#a3a3a2]" size={12} />
          </div>
          <input
            disabled
            placeholder="https://www.figma.com/file/:"
            className="mt-2 w-full rounded-sm border border-[#929291] bg-[#272822] px-3 py-2 text-xs text-[#71726e] placeholder:text-[#71726e]"
          />
        </div>

        {/* Buttons */}
        <div className="mt-5 flex gap-3">
          <button className="rounded-sm bg-[#843a17] px-6 py-2 text-xs font-semibold text-[#8c8078]">
            Awesome
          </button>
          <button className="rounded-sm bg-[#843a17] px-6 py-2 text-xs font-semibold text-[#8c8078]">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-sm font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
