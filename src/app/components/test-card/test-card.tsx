import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="mx-auto w-full max-w-sm rounded-md bg-[#1c1d17] p-5 font-[Inter,sans-serif]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <FiSettings className="h-5 w-5 text-[#b5b5b5]" />
      </div>

      {/* Collapsible info row */}
      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp className="h-3.5 w-3.5 text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-10">
        <div className="flex items-center gap-2">
          <FiChevronUp className="h-3.5 w-3.5 text-[#b2b2b1]" />
          <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </h2>
        </div>

        <div className="mt-6">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <input
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="mt-2 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] focus:outline-none"
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-2">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            <FiInfo className="h-3.5 w-3.5 text-[#a3a3a2]" />
          </div>
          <input
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="mt-2 w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2.5 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] focus:outline-none"
          />
        </div>

        <div className="mt-4 flex gap-3">
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
      <h3 className="mt-10 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
