import { FaCog, FaChevronUp, FaInfoCircle } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-64 rounded bg-[#141210] p-4 font-sans text-sm"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FaCog className="text-[#b5b5b5]" size={16} />
      </div>

      {/* Collapsible hint row */}
      <div className="mt-3 flex items-center gap-2">
        <FaChevronUp className="text-[#8b9291]" size={10} />
        <span className="text-xs font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <FaChevronUp className="text-[#b2b2b1]" size={10} />
          <span className="text-sm font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mt-4">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            <FaInfoCircle className="text-[#a4a4a3]" size={11} />
          </div>
          <div className="mt-2 rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5">
            <span className="text-xs font-semibold text-[#737470]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mt-4">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            <FaInfoCircle className="text-[#a3a3a2]" size={11} />
          </div>
          <div className="mt-2 rounded border-2 border-[#929291] bg-[#272822] px-3 py-2.5">
            <span className="text-xs font-semibold text-[#71726e]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-4 flex gap-4">
          <button
            type="button"
            className="rounded bg-[#843a17] px-6 py-2.5 text-xs font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded bg-[#843a17] px-6 py-2.5 text-xs font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <span className="text-sm font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
