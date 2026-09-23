import { FiChevronUp, FiSettings } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md bg-[#161a1d] p-4 font-sans text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-[#8b9291]" />
      </div>

      {/* From entire frame row */}
      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp className="h-3 w-3 text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <FiChevronUp className="h-3 w-3 text-[#b2b2b1]" />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="mt-4">
          <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <input
            readOnly
            value=""
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="mt-1 block w-full rounded border border-[#a5adad] bg-[#272822] px-2 py-2 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
          />
        </div>

        <div className="mt-4">
          <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <input
            readOnly
            value=""
            placeholder="https://www.figma.com/file/:"
            className="mt-1 block w-full rounded border-2 border-[#929291] bg-[#272822] px-2 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
          />
        </div>

        <div className="mt-4 flex gap-3">
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-3 py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-3 py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
